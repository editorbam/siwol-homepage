/* ══════════════════════════════════════════════════════════════
   SIWOL 10月 — 시안 E 공통 스크립트

   모션은 레퍼런스(carlesfaus.com/js/d.js)에서 추출한 값을 그대로 씀:
   · 텍스트  = 글자 수만큼 폭이 계단식으로 열리고, 열리는 앞머리에 블록 글리프 띠
              per-char = lerp(40ms, 14ms)  ·  duration = clamp(c×per, 300, c×100)
              easing   = cubic-bezier(.215,.61,.355,1)
   · 이미지  = 화면 중앙 쪽으로 당겨진 축소 상태 → 제자리. 1200ms, ease inOutSextic,
              스태거 25ms, 기본 지연 300ms. 투명도는 outQuart.
   · 페이지  = 전환 500ms cubic-bezier(.4,0,.2,1) / 투명도 600ms outQuad
   · 스크롤  = 프레임률 무관 감쇠 lerp  N(a,b,i)=lerp(a,b,1-exp(ln(1-i)×dt/16.667))
   ════════════════════════════════════════════════════════════════ */

const $  = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
const pad = n => String(n).padStart(2, '0');
const clamp = (v, a, b) => v < a ? a : v > b ? b : v;
const lerp = (a, b, t) => (1 - t) * a + t * b;
const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
const TOUCH   = matchMedia('(hover: none)').matches;

/* ── 언어 ───────────────────────────────────────────────────── */
let LANG = new URLSearchParams(location.search).get('lang')
        || localStorage.getItem('siwol-lang') || 'en';
if (LANG !== 'ko' && LANG !== 'en') LANG = 'en';
const t = () => T[LANG];
const isKo = () => LANG === 'ko';

/* ── 이징 ───────────────────────────────────────────────────── */
function bez(x1, y1, x2, y2) {
  const cx = 3 * x1, bx = 3 * (x2 - x1) - cx, ax = 1 - cx - bx;
  const cy = 3 * y1, by = 3 * (y2 - y1) - cy, ay = 1 - cy - by;
  const fx = t => ((ax * t + bx) * t + cx) * t;
  const dx = t => (3 * ax * t + 2 * bx) * t + cx;
  return x => {
    let t = x;
    for (let i = 0; i < 5; i++) {
      const e = fx(t) - x, d = dx(t);
      if (Math.abs(e) < 1e-4 || d === 0) break;
      t -= e / d;
    }
    return ((ay * t + by) * t + cy) * t;
  };
}
const EASE = {
  tx:  bez(.215, .61, .355, 1),          // 레퍼런스 t.e.tx
  tr:  bez(.4, 0, .2, 1),                // 레퍼런스 t.e.tr
  o2:  x => 1 - (1 - x) * (1 - x),
  o4:  x => 1 - Math.pow(1 - x, 4),
  io6: x => x < .5 ? 32 * Math.pow(x, 6) : 1 - Math.pow(-2 * x + 2, 6) / 2
};

/* ── 트윈 엔진 ──────────────────────────────────────────────── */
const TW = [];
let rafOn = false;
function tween(o) {
  o.t0 = performance.now() + (o.de || 0);
  o.e = o.e || (x => x);
  TW.push(o);
  startRaf();
  return o;
}
function startRaf() { if (!rafOn) { rafOn = true; requestAnimationFrame(tick); } }
function tick(now) {
  for (let i = TW.length - 1; i >= 0; i--) {
    const o = TW[i];
    if (now < o.t0) continue;
    const pr = o.d <= 0 ? 1 : clamp((now - o.t0) / o.d, 0, 1);
    o.u(o.e(pr), pr);
    if (pr >= 1) { TW.splice(i, 1); o.cb && o.cb(); }
  }
  scrollTick(now);
  if (TW.length || (sOn && Math.abs(sTarget - sCur) >= .4)) requestAnimationFrame(tick);
  else rafOn = false;
}

/* ══════════════════════════════════════════════════════════════
   텍스트 리빌
   ══════════════════════════════════════════════════════════════ */
const BLOCKS = '▌▐░▒▓█▖▗▘▙▚▛▜▞▟';

/* 레퍼런스 pt() — 앞은 진짜 글자, 그 뒤 좁은 띠는 블록 글리프, 나머지는 없음 */
function scramble(ch, s, band) {
  let out = '', r = s - band;
  for (let o = 0; o < ch.length; o++) {
    const h = ch[o];
    if (o < r || h === ' ') out += h;
    else if (o < s) out += BLOCKS[(s + o) % BLOCKS.length];
    else break;
  }
  return out;
}

/* .tx 요소를 .x_ > .x 두 겹으로 감싼다 (레퍼런스 구조) */
function prepTx(el) {
  if (el.__tx) return el.__tx;
  const raw = (el.textContent || '').trim();
  el.textContent = '';
  const wrap = document.createElement('span'); wrap.className = 'x_';
  const x = document.createElement('span');    x.className = 'x';
  x.textContent = raw;
  wrap.appendChild(x); el.appendChild(wrap);
  const o = { el, wrap, x, raw, ch: Array.from(raw), w: 0, done: false };
  el.__tx = o;
  return o;
}
/* 재기 → 감추기를 두 패스로 나눈다.
   섞어서 하면 같은 flex/inline 줄의 앞 요소가 접힐 때 뒤 요소 폭이 0으로 잡힌다. */
function measureAll(list) { list.forEach(o => { o.w = o.x.getBoundingClientRect().width; }); }
function hideAll(list) {
  if (REDUCED) return;
  list.forEach(o => {
    if (o.w <= 0) { o.skip = true; return; }        // 못 잰 것은 애니메이션 없이 그대로 둔다
    o.wrap.style.width = o.w + 'px';
    o.x.style.width = '0px';
    o.x.textContent = '';
  });
}
function playTx(o, delay) {
  if (o.done) return; o.done = true;
  if (REDUCED || o.skip) { o.x.textContent = o.raw; return; }
  const c = o.ch.length;
  if (!c) return;
  const per = lerp(40, 14, clamp((c - 4) / 56, 0, 1));   // 레퍼런스 Q()
  const dur = clamp(c * per, 300, c * 100);              // 레퍼런스 F(300, c*100, ·)
  let last = -1;
  tween({
    d: dur, de: delay, e: EASE.tx,
    u: pr => {
      const v = Math.floor(pr * c);
      if (v === last) return;
      last = v;
      o.x.style.width = (v / c * o.w) + 'px';
      o.x.textContent = scramble(o.ch, v, Math.min(c - v, Math.round(c * .15)));
    },
    cb: () => { o.x.textContent = o.raw; o.x.style.width = ''; o.wrap.style.width = ''; }
  });
}

/* ══════════════════════════════════════════════════════════════
   블록 / 이미지 리빌 — 중앙 쪽으로 당겨진 축소 상태에서 제자리로
   ══════════════════════════════════════════════════════════════ */
function prepFade(el) {
  if (el.__fd) return el.__fd;
  const o = { el, done: false, img: el.hasAttribute('data-img') };
  el.__fd = o;
  el.style.opacity = REDUCED ? '' : '0';
  return o;
}
function playFade(o, delay) {
  if (o.done) return; o.done = true;
  const el = o.el;
  if (REDUCED) { el.style.opacity = ''; return; }
  tween({ d: 1200, de: delay, e: EASE.o4, u: pr => { el.style.opacity = pr; },
          cb: () => { el.style.opacity = ''; } });
  if (!o.img) return;
  const r = el.getBoundingClientRect();
  const dx = (innerWidth / 2 - (r.left + r.width / 2)) * .3;
  const dy = (innerHeight / 2 - (r.top + r.height / 2)) * .3;
  tween({
    d: 1200, de: delay, e: EASE.io6,
    u: pr => {
      const k = 1 - pr;
      el.style.transform = `translate3d(${dx * k}px,${dy * k}px,0) scale(${1 - .25 * k})`;
    },
    cb: () => { el.style.transform = ''; }
  });
}

/* ══════════════════════════════════════════════════════════════
   리빌 스케줄 — 화면에 들어오는 순서대로, 25ms씩 밀며
   ══════════════════════════════════════════════════════════════ */
const REVEAL = [];
function collect(root) {
  REVEAL.length = 0;
  $$('.tx', root).forEach(el => REVEAL.push({ type: 'tx', o: prepTx(el), el }));
  const txs = REVEAL.filter(r => r.type === 'tx').map(r => r.o);
  measureAll(txs);
  $$('[data-fade]', root).forEach(el => REVEAL.push({ type: 'fd', o: prepFade(el), el }));
  hideAll(txs);
}
function play(items, base) {
  items.forEach((r, i) => {
    const de = base + 25 * i;                      // 레퍼런스 스태거 25ms
    r.type === 'tx' ? playTx(r.o, de) : playFade(r.o, de);
  });
}
function initReveal() {
  const vh = innerHeight;
  const first = REVEAL.filter(r => r.el.getBoundingClientRect().top < vh * .95);
  const rest  = REVEAL.filter(r => !first.includes(r));
  play(first, 300);                                // 레퍼런스 기본 지연 300ms

  if (!('IntersectionObserver' in window)) { play(rest, 0); return; }
  const io = new IntersectionObserver(es => {
    const hit = es.filter(e => e.isIntersecting).map(e => e.target.__rv).filter(Boolean);
    if (hit.length) play(hit, 0);
    es.forEach(e => { if (e.isIntersecting) io.unobserve(e.target); });
  }, { rootMargin: '0px 0px -12% 0px' });
  rest.forEach(r => { r.el.__rv = r; io.observe(r.el); });
}

/* ══════════════════════════════════════════════════════════════
   부드러운 스크롤 — 레퍼런스의 감쇠 lerp (프레임률 무관)
   ══════════════════════════════════════════════════════════════ */
let sTarget = 0, sCur = 0, sOn = false, sLast = 0;
function damp(a, b, i, dt) { return lerp(a, b, 1 - Math.exp(Math.log(1 - i) * dt)); }
function initScroll() {
  if (REDUCED || TOUCH) return;
  sTarget = sCur = scrollY; sOn = true; sLast = performance.now();
  addEventListener('wheel', e => {
    if (e.ctrlKey) return;
    e.preventDefault();
    const max = document.body.scrollHeight - innerHeight;
    sTarget = clamp(sTarget + e.deltaY, 0, max);
    startRaf();
  }, { passive: false });
  addEventListener('resize', () => { sTarget = sCur = scrollY; });
  addEventListener('scroll', () => {                 // 스크롤바·키보드로 직접 움직였을 때
    if (Math.abs(scrollY - sCur) > 2 && Math.abs(sTarget - sCur) < .5) sTarget = sCur = scrollY;
  }, { passive: true });
}
function scrollTick(now) {
  if (!sOn) return;
  const dt = clamp((now - sLast) / 16.6667, 0, 4); sLast = now;
  if (Math.abs(sTarget - sCur) < .4) { sCur = sTarget; return; }
  sCur = damp(sCur, sTarget, .12, dt);
  scrollTo(0, sCur);
}
function scrollToY(y) {
  const max = document.body.scrollHeight - innerHeight;
  y = clamp(y, 0, max);
  if (sOn) { sTarget = y; startRaf(); } else { scrollTo({ top: y, behavior: 'smooth' }); }
}

/* ══════════════════════════════════════════════════════════════
   페이지 전환 — 500ms 페이드
   ══════════════════════════════════════════════════════════════ */
function initTransition() {
  const tr = $('#tr');
  addEventListener('pageshow', () => { tr.style.opacity = 0; tr.style.pointerEvents = 'none'; });
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href]');
    if (!a || a.target === '_blank' || e.metaKey || e.ctrlKey) return;
    const href = a.getAttribute('href');
    if (!href || href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:')) return;
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = $(href);
      if (el) scrollToY(el.getBoundingClientRect().top + (sOn ? sCur : scrollY));
      return;
    }
    e.preventDefault();
    tr.style.pointerEvents = 'all';
    tween({ d: 500, e: EASE.tr, u: pr => { tr.style.opacity = pr; },
            cb: () => { location.href = href; } });
  });
}

/* ══════════════════════════════════════════════════════════════
   커서 · 로더
   ══════════════════════════════════════════════════════════════ */
function initCursor() {
  if (TOUCH) return;
  const c = $('#c'); if (!c) return;
  let x = 0, y = 0, cx = 0, cy = 0, on = false, run = false;
  function loop() {
    cx += (x - cx) * .22; cy += (y - cy) * .22;
    c.style.transform = `translate3d(${cx + 14}px,${cy + 14}px,0)`;
    if (Math.abs(x - cx) > .2 || Math.abs(y - cy) > .2) requestAnimationFrame(loop);
    else run = false;
  }
  addEventListener('mousemove', e => {
    x = e.clientX; y = e.clientY;
    if (!on) { cx = x; cy = y; on = true; c.classList.add('on'); }
    const el = e.target.closest('[data-c]');
    c.firstElementChild.textContent = el ? el.dataset.c : '';
    c.firstElementChild.style.display = el ? 'inline-block' : 'none';
    if (!run) { run = true; requestAnimationFrame(loop); }
  });
  addEventListener('mouseleave', () => c.classList.remove('on'));
}

/* 인트로 — D안 hero-c.html에서 이식. 카운터가 100%에 닿으면 스스로 걷힌다.
   · 세션당 1회 — 상세를 보고 홈으로 돌아올 때마다 다시 돌면 관문이 된다
   · 클릭 = 즉시 스킵
   · 카운터는 smoothstep — 서두르다 잦아든다 (D안 값 1700ms 그대로) */
function initIntro(after) {
  const el = $('#intro');
  if (!el) { after(); return; }
  let seen = false;
  try { seen = sessionStorage.getItem('siwol-intro') === '1'; } catch (e) {}
  if (new URLSearchParams(location.search).has('intro')) seen = false;   // ?intro — 검수용 강제 재생
  if (REDUCED || seen) { el.remove(); after(); return; }
  try { sessionStorage.setItem('siwol-intro', '1'); } catch (e) {}

  const ring = $('.ring', el), lo = $('.ring span', el);
  const track = $('.bar', el), bar = $('.bar i', el);
  const pct = $('.pct span', el), credit = $('.credit', el);
  let done = false;

  /* 본문과 같은 계단 리빌 — 다만 폭을 재지 않는다(가운데 정렬이라 폭이 열릴 필요가 없다) */
  function step(el, delay, back) {
    const raw = el.__raw || (el.__raw = el.textContent);
    const ch = Array.from(raw), c = ch.length;
    const per = lerp(40, 14, clamp((c - 4) / 56, 0, 1));
    const d = back ? 260 : clamp(c * per, 300, c * 100);
    let last = -1;
    tween({ d, de: delay, e: EASE.tx, u: pr => {
      const v = Math.floor((back ? 1 - pr : pr) * c);
      if (v === last) return; last = v;
      el.textContent = scramble(ch, v, Math.min(c - v, Math.round(c * .15)));
    }, cb: () => { if (!back) el.textContent = raw; } });
  }
  const fade = (n, a, b, d, de) =>
    tween({ d, de, e: EASE.o4, u: pr => { n.style.opacity = lerp(a, b, pr); } });

  /* ── 들어오기 ───────────────────────────────────────────────
     원 = 이미지 리빌과 같은 손짓(축소 상태 → 제자리, 1200ms inOutSextic)
     글자 = 계단 리빌 · 라인 = 트랙이 왼→오로 열린 뒤 채워진다 */
  [ring, track, pct.parentNode, credit].forEach(n => n.style.opacity = 0);
  fade(ring, 0, 1, 1000, 100);
  tween({ d: 1200, de: 100, e: EASE.io6,
          u: pr => { ring.style.transform = `translate(-50%,-50%) scale(${lerp(.82, 1, pr)})`; },
          cb: () => { ring.style.transform = 'translate(-50%,-50%)'; } });
  step(lo, 400);
  fade(track, 0, 1, 400, 250);
  tween({ d: 700, de: 250, e: EASE.tx, u: pr => { track.style.transform = `scaleX(${pr})`; },
          cb: () => { track.style.transform = 'scaleX(1)'; } });   // ''로 두면 CSS의 scaleX(0)로 되접힌다
  fade(pct.parentNode, 0, 1, 600, 300);
  step(pct, 300);
  fade(credit, 0, 1, 600, 600);
  step(credit, 600);

  /* ── 카운터 ─────────────────────────────────────────────────
     smoothstep — 서두르다 끝에서 잦아든다 (D안 값 1700ms 그대로) */
  const t0 = performance.now(), DUR = 1700;
  (function count() {
    if (done) return;
    const p = Math.min((performance.now() - t0) / DUR, 1);
    const v = Math.floor(p * p * (3 - 2 * p) * 100);
    pct.textContent = v + '%'; bar.style.width = v + '%';
    p >= 1 ? finish() : requestAnimationFrame(count);
  })();

  /* ── 걷히기 ─────────────────────────────────────────────────
     글자는 블록 글리프로 되돌아가 흩어지고, 그다음 막이 걷힌다 */
  function finish() {
    if (done) return; done = true;
    pct.textContent = '100%'; bar.style.width = '100%';
    step(lo, 0, 1); step(credit, 0, 1);
    fade(ring, 1, 0, 320, 120);
    tween({ d: 320, de: 120, e: EASE.o2,
            u: pr => { ring.style.transform = `translate(-50%,-50%) scale(${lerp(1, 1.05, pr)})`; } });
    fade(track, 1, 0, 320, 200);
    fade(credit, 1, 0, 320, 200);
    fade(pct.parentNode, 1, 0, 400, 220);
    tween({ d: 500, de: 260, e: EASE.tr, u: pr => { el.style.opacity = 1 - pr; },
            cb: () => el.remove() });
    setTimeout(after, 300);                    // 막이 걷히는 동안 본문 리빌이 시작된다
  }
  el.addEventListener('click', finish);
}

/* ══════════════════════════════════════════════════════════════
   마크업 헬퍼
   ══════════════════════════════════════════════════════════════ */
const tx  = (s, cls) => `<span class="tx${cls ? ' ' + cls : ''}">${s}</span>`;

/* 병기 — 고른 언어가 위, 나머지가 해석본으로 아래에 흐리게 */
function bi(en, ko, br) {
  const [a, b] = isKo() ? [ko, en] : [en, ko];
  const k = br ? ' br' : '';
  let out = `<span class="bi"><span class="bi-a${k}">${tx(a)}</span>`;
  if (b && b !== a) out += `<span class="bi-b${k}">${tx(b)}</span>`;
  return out + '</span>';
}
/* 문단 병기 — 리빌은 페이드로 */
function biP(en, ko, cls) {
  const [a, b] = isKo() ? [ko, en] : [en, ko];
  return `<p class="${cls}" data-fade>${a}</p>` +
         (b && b !== a ? `<p class="${cls} bi-b" data-fade>${b}</p>` : '');
}
const P   = s => PROJECTS.find(p => p.slug === s);
const nm  = p => isKo() ? p.ko    : p.name;
const ct  = p => isKo() ? p.catKo : p.cat;
const lc  = p => isKo() ? p.locKo : p.loc;
const bd  = p => isKo() ? p.txtKo : p.txt;
function shots(p) {
  const out = [];
  for (let i = 1; i <= p.dims.length; i++) if (!p.skip.includes(i)) out.push(i);
  return out;
}
const src = (p, n) => 'img/work/' + p.slug + '/' + pad(n) + '.jpg';
const dim = (p, n) => p.dims[n - 1] || [1600, 1200];
/* 같은 사진을 800 / 1200 / 원본(1600) 세 벌로 두고, 고르는 건 브라우저에 맡긴다.
   800만 두면 3배 해상도 아이폰이 원본을 집어가서 사본이 무용지물이 된다 —
   350px 자리에 1050px을 요구하기 때문. 1200이 그 사이를 받는다.
   sizes = "이 사진이 화면에서 차지하는 폭". 폰은 좌우 여백 20px씩 뺀 전폭, 큰 화면은 대략 절반. */
const srcW = (p, n, w) => 'img/work/' + p.slug + '/' + pad(n) + '-' + w + '.jpg';
/* 홈 콜라주는 자리마다 크기가 다르다(10vw짜리와 41vw짜리가 섞여 있다).
   sizes를 하나로 뭉뚱그리면 작은 자리에도 큰 파일이 내려간다 — 그래서 자리별 폭을 그대로 넘긴다.
   아래 숫자는 site.css의 .ho-li:nth-child(13n+N) a 의 width와 같은 값이어야 한다. */
const HO_VW = [18.7499, 12.4999, 10.4166, 41.6664, 16.6666, 10.4166, 16.6666,
               24.9998, 33.3331, 12.4999, 12.4999, 12.4999, 27.0832];
function rs(p, n, vw) {
  const w0 = dim(p, n)[0];
  /* 세로 사진은 원본 폭이 1200 언저리라 중간 판형을 또 만들 필요가 없다.
     후보를 겹쳐 두면 브라우저가 더 무거운 원본을 집어가기도 한다. */
  const set = [`${srcW(p, n, 800)} 800w`];
  if (w0 > 1300) set.push(`${srcW(p, n, 1200)} 1200w`);
  set.push(`${src(p, n)} ${w0}w`);
  return `srcset="${set.join(', ')}" sizes="(max-width: 900px) calc(100vw - 40px), ${vw}vw"`;
}

/* ── 검색·공유 메타 갱신 ────────────────────────────────────
   프로젝트 페이지는 ?p=슬러그로 내용이 바뀌는데, head의 메타는 고정돼 있다.
   그대로 두면 어느 프로젝트를 공유해도 같은 제목·같은 사진이 뜬다.
   주소는 하드코딩하지 않고 지금 열려 있는 주소에서 뽑는다 — 배포지가 바뀌어도 따라온다.
   (카카오톡 미리보기는 자바스크립트를 안 돌리므로 head의 기본값이 뜬다. 그건 감수한다.) */
function setMeta(sel, val) {
  const el = document.head.querySelector(sel);
  if (el) el.setAttribute(sel.startsWith('link') ? 'href' : 'content', val);
}
function setProjectMeta(p) {
  const title = nm(p) + ' — 10月';
  const desc  = (p.txtKo && p.txtKo[0]) || (p.txt && p.txt[0]) || '';
  const img   = new URL(src(p, p.cover), location.href).href;
  const url   = location.href;
  setMeta('meta[name="description"]', desc);
  setMeta('link[rel="canonical"]', url);
  setMeta('meta[property="og:title"]', title);
  setMeta('meta[property="og:description"]', desc);
  setMeta('meta[property="og:url"]', url);
  setMeta('meta[property="og:image"]', img);
  const d = dim(p, p.cover);
  setMeta('meta[property="og:image:width"]',  String(d[0]));
  setMeta('meta[property="og:image:height"]', String(d[1]));
}

/* ── 공통 네비 · 푸터 ───────────────────────────────────────── */
function renderChrome() {
  const L = t(), home = $('#p1') ? 'index.html' : '';
  $('#n-me').innerHTML = T.en.nav.map((s, i) =>
    `<li><a href="${home}#${['idx','ab','co'][i]}" data-c="[GO]">${bi(s, T.ko.nav[i], 1)}</a></li>`).join('');
  $('#n-la').innerHTML =
    `<li><button class="br" id="lang-en" data-c="[EN]">${tx('EN')}</button></li>` +
    `<li><button class="br" id="lang-ko" data-c="[KO]">${tx('KO')}</button></li>`;
  $('#n-la').classList.toggle('ko', isKo());

  $('#f-l').innerHTML = `<span class="br">${tx(STUDIO.coor[0])}</span><span class="sq"></span><span class="br">${tx(STUDIO.coor[1])}</span>`;
  $('#f-c').innerHTML =
    `<a href="tel:01080829592" class="br" data-c="[CALL]">${tx('T. ' + STUDIO.tel)}</a>` +
    `<a href="mailto:${STUDIO.mail}" class="br" data-c="[MAIL]">${tx(STUDIO.mail.toUpperCase())}</a>`;
  $('#f-r').innerHTML = T.en.place.map((s, i) => bi(s, T.ko.place[i], 1)).join('');

  $('#lang-en').addEventListener('click', () => setLang('en'));
  $('#lang-ko').addEventListener('click', () => setLang('ko'));
}
function setLang(l) {
  if (l === LANG) return;
  LANG = l; localStorage.setItem('siwol-lang', l);
  document.documentElement.dataset.lang = l;
  document.documentElement.lang = l;   /* 화면 낭독기·검색엔진이 읽는 건 dataset이 아니라 이쪽 */
  const tr = $('#tr');
  tr.style.pointerEvents = 'all';
  tween({ d: 300, e: EASE.o2, u: pr => tr.style.opacity = pr, cb: () => {
    renderAll();
    document.body.offsetHeight;
    collect(document);
    tween({ d: 300, e: EASE.o2, u: pr => tr.style.opacity = 1 - pr,
            cb: () => { tr.style.pointerEvents = 'none'; } });
    initReveal();
  }});
}

/* ── 홈 ─────────────────────────────────────────────────────── */
function renderHome() {
  if (!$('#ho')) return;
  const L = t();

  $('#ho-ti').innerHTML =
    `<span class="ars"><i class="ar"></i><i class="ar"></i><i class="ar"></i></span>` +
    `<b>${bi(T.en.heroA, T.ko.heroA)}</b>` + bi(T.en.heroB, T.ko.heroB) + bi(T.en.heroC, T.ko.heroC);

  $('#ho > ul').innerHTML = PROJECTS.map((p, i) => {
    const n = p.cover, d = dim(p, n);
    return `<li class="ho-li"><figure>
      <a href="project.html?p=${p.slug}" data-c="[VIEW]" data-fade data-img>
        <img src="${src(p, n)}" ${rs(p, n, HO_VW[i % 13])} alt="${nm(p)}" loading="lazy" width="${d[0]}" height="${d[1]}"></a>
      <figcaption>[${pad(i + 1)}] ${isKo() ? p.ko : p.name} — ${isKo() ? p.catKo : p.cat}
        <em>${isKo() ? p.name : p.ko} — ${isKo() ? p.cat : p.catKo}</em></figcaption></figure></li>`;
  }).join('');

  $('#idx-hd').innerHTML =
    `<div>${bi(T.en.idxHd[0], T.ko.idxHd[0], 1)} &nbsp; ${bi(T.en.idxHd[1], T.ko.idxHd[1])}</div>` +
    `<div><span class="br">${tx(String(PROJECTS.length))}</span></div>`;

  $('#idx > ul').innerHTML = PROJECTS.map((p, i) =>
    `<li><a href="project.html?p=${p.slug}" data-c="[VIEW]" data-s="${p.slug}">
      <span class="n">${tx(pad(i + 1))}</span>
      <span class="ti">${bi(p.name, p.ko)}</span>
      <span class="ca">${bi(p.cat, p.catKo, 1)}</span>
      <span class="lo">${bi(p.loc, p.locKo)}</span>
      <span class="go"><i class="ar"></i></span></a></li>`).join('');

  const th = $('#idx-th'), im = $('#idx-th img');
  $$('#idx a').forEach(a => {
    a.addEventListener('mouseenter', () => {
      const p = P(a.dataset.s); im.src = src(p, p.cover); th.classList.add('on');
    });
    a.addEventListener('mouseleave', () => th.classList.remove('on'));
  });

  $('#ab').innerHTML =
    `<div id="ab-in">
      <div id="ab-l"><span class="sq"></span>${bi(T.en.abL, T.ko.abL)}</div>
      <div id="ab-tx">` +
        T.en.ab.map((s, i) => (i ? '<span class="dot">·<br>·</span>' : '') +
          biP(s, T.ko.ab[i], 'tx-p-' + Math.min(i + 1, 6))).join('') +
      `</div>
      <dl id="ab-r">` + T.en.abDl.map(([k, v], i) =>
        `<dt>${bi(k, T.ko.abDl[i][0])}</dt>
         <dd data-fade>${isKo() ? T.ko.abDl[i][1] : v}<em>${isKo() ? v : T.ko.abDl[i][1]}</em></dd>`).join('') + `</dl>
    </div>
    <div id="ab-big"><span class="a-b">${tx(isKo() ? T.ko.abBig : T.en.abBig)}</span>
      <span class="bi-b">${tx(isKo() ? T.en.abBig : T.ko.abBig)}</span></div>`;

  const V = [STUDIO.tel, STUDIO.mail.toUpperCase(), STUDIO.insta];
  const H = ['tel:01080829592', 'mailto:' + STUDIO.mail, STUDIO.instaUrl];
  $('#co').innerHTML =
    `<div id="co-l"><span class="sq"></span>${bi(T.en.coL, T.ko.coL)}</div>
     <ul id="co-li">` + T.en.coK.map((k, i) =>
      `<li><a href="${H[i]}"${i === 2 ? ' target="_blank" rel="noopener"' : ''} data-c="[OPEN]">
        <span class="k">${bi(k, T.ko.coK[i], 1)}</span><span class="v">${tx(V[i])}</span></a></li>`).join('') +
    `</ul>
     <div id="co-r"><span data-fade>${isKo() ? T.ko.coR : T.en.coR}</span>
      <span class="bi-b" data-fade>${isKo() ? T.en.coR : T.ko.coR}</span>
      <br><span class="br">${tx(T.en.copy)}</span></div>`;
}

/* ── 프로젝트 ───────────────────────────────────────────────── */
function renderProject() {
  const wrap = $('#p1'); if (!wrap) return;
  const L = t();
  const q = new URLSearchParams(location.search).get('p');
  let i = PROJECTS.findIndex(p => p.slug === q); if (i < 0) i = 0;
  const p = PROJECTS[i];
  const prev = PROJECTS[(i - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(i + 1) % PROJECTS.length];
  const list = shots(p), c = p.cover;

  document.title = nm(p) + ' — SIWOL 10月';
  setProjectMeta(p);

  $('#p1-he').innerHTML =
    `<div class="p1-ti_">
       ${bi(T.en.p1[0], T.ko.p1[0])}<i class="ar" style="margin-left:.69444vw"></i>
       <span class="ars" style="margin-left:1.24999vw"><i class="ar"></i><i class="ar"></i><i class="ar"></i></span>
       <span class="p1-ti"><span class="x-b br">${tx('SW')}</span></span>
       <span class="p1-ti"><span class="x-b">10月</span></span>
     </div>
     <div>
       <div class="p1-fi">${bi(T.en.p1[1], T.ko.p1[1])}<i class="ar"></i><span style="margin-left:.69444vw">${bi(p.cat, p.catKo)}</span></div>
       <div class="p1-ar2">${bi(T.en.p1[2], T.ko.p1[2])}<i class="ar"></i><span style="margin-left:.69444vw">${bi(p.loc, p.locKo)}</span></div>
     </div>`;

  $('#p1-tx').innerHTML = p.txt.map((s, k) =>
    (k ? '<span class="dot">·<br>·</span>' : '') +
    biP(s, p.txtKo[k], 'tx-p-' + Math.min(k + 1, 6))).join('');

  $('#p1-hero').innerHTML =
    `<span data-fade data-img><img src="${src(p, c)}" ${rs(p, c, 35.4164)} alt="${nm(p)}" width="${dim(p, c)[0]}" height="${dim(p, c)[1]}"></span>` +
    `<figcaption>[${pad(c)}] ${bi(p.name, p.ko)}</figcaption>`;

  const xs = ['left', 'right', 'center'];
  const ws = [41.6664, 24.9998, 33.3331, 18.7499, 47.9164];
  $('#p1-ga').innerHTML = list.filter(n => n !== c).map((n, k) => {
    const d = dim(p, n), vert = d[1] > d[0];
    let w = ws[k % ws.length]; if (vert) w = Math.min(w, 24.9998);
    return `<li class="p1-ga-li" data-x="${xs[k % 3]}">
      <figure style="width:${w}vw"><span data-fade data-img>
      <img src="${src(p, n)}" ${rs(p, n, w)} alt="${nm(p)} — ${pad(n)}" loading="lazy" width="${d[0]}" height="${d[1]}"></span>
      <figcaption>[${pad(n)}]</figcaption></figure></li>`;
  }).join('');

  $('#p1-n0').href = 'project.html?p=' + prev.slug;
  $('#p1-n1').href = 'project.html?p=' + next.slug;
  $('#p1-n0').innerHTML = bi(T.en.p1[3], T.ko.p1[3], 1);
  $('#p1-n1').innerHTML = bi(T.en.p1[4], T.ko.p1[4], 1);

  $('#p1-nx').innerHTML =
    `<a href="project.html?p=${next.slug}" data-c="[NEXT]">
       <div class="k">${bi(T.en.p1[5], T.ko.p1[5], 1)}</div>
       <div class="v">${bi(next.name, next.ko)}</div></a>
     <div style="text-align:right">
       <div class="k">${tx(pad(i + 1) + ' / ' + pad(PROJECTS.length))}</div>
       <div class="k">${bi(p.name, p.ko)}</div>
       <div class="k">${bi(T.en.frames(list.length), T.ko.frames(list.length))}</div>
       ${p.note ? `<div class="k">${bi('(' + p.note + ')', '(' + p.noteKo + ')')}</div>` : ''}
     </div>`;
}

/* ── 부팅 ───────────────────────────────────────────────────── */
function renderAll() { renderChrome(); renderHome(); renderProject(); }

addEventListener('DOMContentLoaded', () => {
  document.documentElement.dataset.lang = LANG;
  document.documentElement.lang = LANG;
  renderAll();
  initCursor();
  initScroll();
  initTransition();
  startRaf();
  const go = () => { collect(document); initIntro(initReveal); };
  document.fonts && document.fonts.ready
    ? document.fonts.ready.then(go).catch(go)      // 웹폰트 폭으로 재야 계단이 맞는다
    : go();
});

/* 색인 썸네일은 커서를 따라간다 */
addEventListener('mousemove', e => {
  const th = $('#idx-th');
  if (!th || !th.classList.contains('on')) return;
  th.style.transform = `translate3d(${e.clientX - th.offsetWidth - 24}px,${e.clientY - th.offsetHeight / 2}px,0)`;
});
