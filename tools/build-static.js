/* ══════════════════════════════════════════════════════════════
   정적 본문 찍기 — node tools/build-static.js

   왜: 이 사이트는 본문을 전부 js/site.js 가 그린다. 사람 브라우저는 JS를 돌리니
   문제가 없지만, 네이버 크롤러는 대체로 JS를 돌리지 않는다. 그래서 크롤러가 읽을
   몫을 index.html 안에 미리 적어 둔다.

   덮어쓰기 걱정은 없다: site.js 가 그 자리들을 전부 `innerHTML =` 로 갈아끼우므로,
   JS가 오는 순간 아래 글은 사라지고 진짜 화면이 그려진다. 사람이 보는 결과는 동일하다.

   원칙: 여기서 찍는 글은 **JS가 그리는 것과 같은 내용**이어야 한다.
   검색엔진에만 다른 말을 보여주면 클로킹으로 취급된다.

   카피를 고칠 때: js/data.js 만 고치고 이 스크립트를 다시 돌린다.
   ══════════════════════════════════════════════════════════════ */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DATA = path.join(ROOT, 'js', 'data.js');
const PAGE = path.join(ROOT, 'index.html');
const WORK = path.join(ROOT, 'work.html');   // 8/25 작업 목록 분리 — idx-list 는 이쪽에 찍는다

/* data.js 는 모듈이 아니라 전역 선언 파일이라, 함수 안에서 실행하고 값만 돌려받는다.
   정규식으로 긁으면 카피에 대괄호·따옴표가 섞일 때 깨진다. */
const src = fs.readFileSync(DATA, 'utf8');
const { PROJECTS, T, STUDIO, REGIONS } = new Function(src + '\n; return { PROJECTS, T, STUDIO, REGIONS };')();

const esc = s => String(s).replace(/&(?!amp;|lt;|gt;|#)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
/* data.js 일부 문자열엔 의도된 <br> 가 들어 있다. 그건 살린다. */
const keepBr = s => esc(s).replace(/&lt;br&gt;/g, '<br>');
const pad = n => String(n).padStart(2, '0');

/* 병기 — 화면과 같은 순서(영문 위, 한글 아래) */
const bi = (en, ko) => en === ko ? `<span>${esc(en)}</span>`
  : `<span>${esc(en)}</span> <span lang="ko">${esc(ko)}</span>`;

const B = {};

B['ho-ti'] =
  `<p>${bi(T.en.heroA, T.ko.heroA)}</p>` +
  `<p>${bi(T.en.heroB, T.ko.heroB)}</p>` +
  `<p>${bi(T.en.heroC, T.ko.heroC)}</p>`;

B['ho-list'] = PROJECTS.map((p, i) =>
  `<li><a href="project.html?p=${p.slug}">` +
  `[${pad(i + 1)}] ${bi(p.name, p.ko)} — ${bi(p.cat, p.catKo)}</a></li>`).join('');

B['idx-list'] = PROJECTS.map((p, i) =>
  `<li><a href="project.html?p=${p.slug}">` +
  `<span>${pad(i + 1)}</span> ${bi(p.name, p.ko)} ` +
  `${bi(p.cat, p.catKo)} ${bi(p.loc, p.locKo)}</a></li>`).join('');

B['ab'] =
  `<h2>${bi(T.en.abL, T.ko.abL)}</h2>` +
  T.en.ab.map((s, i) => `<p>${esc(s)}</p><p lang="ko">${esc(T.ko.ab[i])}</p>`).join('') +
  `<dl>` + T.en.abDl.map((d, i) =>
    `<dt>${bi(d[0], T.ko.abDl[i][0])}</dt><dd>${keepBr(d[1])} <span lang="ko">${keepBr(T.ko.abDl[i][1])}</span></dd>`
  ).join('') + `</dl>` +
  `<p>${bi(T.en.abBig, T.ko.abBig)}</p>` +
  `<ol>` + T.en.abFlow.map((s, i) => `<li>${bi(s, T.ko.abFlow[i])}</li>`).join('') + `</ol>`;

B['rg'] =
  `<h2>${bi(T.en.rgL, T.ko.rgL)}</h2><ul>` +
  REGIONS.map(r => `<li>${bi(r.en, r.ko)} [${esc(r.co[0])}] [${esc(r.co[1])}]</li>`).join('') +
  `</ul><p>${keepBr(T.en.rgR)}</p><p lang="ko">${keepBr(T.ko.rgR)}</p>`;

B['co'] =
  `<h2>${bi(T.en.coL, T.ko.coL)}</h2>` +
  `<ul>` +
  `<li>${bi(T.en.coK[0], T.ko.coK[0])} <a href="tel:${STUDIO.tel.replace(/-/g, '')}">${esc(STUDIO.tel)}</a></li>` +
  `<li>${bi(T.en.coK[1], T.ko.coK[1])} <a href="mailto:${STUDIO.mail}">${esc(STUDIO.mail)}</a></li>` +
  `<li>${bi(T.en.coK[2], T.ko.coK[2])} <a href="${STUDIO.instaUrl}" rel="noopener">${esc(STUDIO.insta)}</a></li>` +
  `</ul>` +
  `<p>${keepBr(T.en.coR)}</p><p lang="ko">${keepBr(T.ko.coR)}</p>` +
  `<p>${esc(T.en.copy)}</p>`;

/* ── 주입 ─────────────────────────────────────────────────── */
const PAGE_OF = key => key === 'idx-list' ? WORK : PAGE;
const pages = { [PAGE]: fs.readFileSync(PAGE, 'utf8'), [WORK]: fs.readFileSync(WORK, 'utf8') };
let n = 0;
for (const [key, body] of Object.entries(B)) {
  const file = PAGE_OF(key);
  const re = new RegExp(`(<!--s:${key}-->)[\\s\\S]*?(<!--/s:${key}-->)`);
  if (!re.test(pages[file])) { console.error(`✗ ${path.basename(file)} 에 <!--s:${key}--> 자리가 없습니다`); process.exit(1); }
  /* 함수 형태로 넣는다 — 문자열로 넘기면 카피 안의 $& $1 $` 같은 게 치환 기호로 해석돼
     본문이 조용히 망가진다(금액 표기에 $ 하나만 들어가도). */
  pages[file] = pages[file].replace(re, (m, open, close) => open + body + close);
  n++;
}
for (const [file, html] of Object.entries(pages)) fs.writeFileSync(file, html);

const chars = Object.values(B).join('').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim().length;
console.log(`정적 본문 ${n}자리 갱신 · 글자 ${chars}자 (크롤러가 읽게 될 분량)`);
