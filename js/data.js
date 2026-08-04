/* ══════════════════════════════════════════════════════════════
   SIWOL 10月 — 프로젝트 데이터 (EN / KO)
   출처: siwol-d/work.html의 PROJECTS 배열 (슬러그·이름·분류·지역·dims 그대로 승계)
   ⚠️ 지역 표기: 갈마동=대전 · 체리주=경주만 확정. 대화 시리즈·도안동은 폴더명 기준 가안.
   ⚠️ sgood: 기존 데이터는 (상업) BAR로 분류돼 있으나 사진은 바버숍("SPREAD GOOD VIBES")
      — 임의 수정하지 않고 note로만 표시. 확정되면 cat 교체.
   본문은 사진에서 확인 가능한 것만 서술 — 면적·시공기간·연도 등 미확인 수치는 넣지 않음.
   문체: 프로젝트 설명=서술체(도록 캡션) / 스튜디오·컨택=습니다체(기존 시월 목소리 승계)
   ════════════════════════════════════════════════════════════════ */

const PROJECTS = [
  {
    slug: 'daehwa-garden', name: 'DAEHWA CHARCOAL GARDEN', ko: '대화 숯불가든',
    cat: 'F&B', catKo: '(상업) F&B', loc: 'DAEJEON', locKo: '대전', cover: 2, skip: [6],
    dims: [[1600,1545],[1600,1200],[1600,1200],[1600,1200],[1600,1200],[944,1600],[1600,1371],[1600,1199]],
    txt: [
      'A CHARCOAL GRILL HOUSE. THE ROOM IS KEPT DARK ON PURPOSE — THE FIRE IS THE ONLY THING ASKED TO BE BRIGHT.',
      'THE COUNTER IS A SINGLE RUN OF DARK TIMBER. DOWN ITS SPINE RUNS A CHANNEL OF RIVER STONE AND POLISHED STEEL EXTRACTION HOODS, SO THE SMOKE IS PULLED BEFORE IT REACHES THE GUEST.',
      'WALLS ARE HAND-TROWELLED EARTH PLASTER. DRIED CHILLI AND GARLIC HANG FROM THE BEAM, PAPER LANTERNS IN RED AND BLUE, AN INK-WASH LANDSCAPE ON THE BACK WALL.',
      'NOTHING HERE IS NEW-LOOKING. IT WAS BUILT TO LOOK LIKE IT HAD ALREADY BEEN USED.'
    ],
    txtKo: [
      '숯불구이집. 방은 일부러 어둡게 뒀다. 밝아야 할 것은 불 하나다.',
      '카운터는 짙은 목재 한 줄. 그 등뼈를 따라 자갈과 스테인리스 배기 후드가 흐른다. 연기는 손님에게 닿기 전에 빨려 나간다.',
      '벽은 손으로 바른 흙 미장. 보에는 마른 고추와 마늘이 걸리고, 붉고 푸른 종이 등, 뒷벽에는 수묵 산수.',
      '새것처럼 보이는 것이 하나도 없다. 이미 쓰인 것처럼 보이도록 지었다.'
    ]
  },
  {
    slug: 'daehwa-sanjang', name: 'DAEHWA SANJANG', ko: '대화 산장',
    cat: 'F&B', catKo: '(상업) F&B', loc: 'DAEJEON', locKo: '대전', cover: 4, skip: [],
    dims: [[1600,1200],[1600,1200],[1329,1600],[1600,1199],[1600,1200],[1600,1101],[1600,1200],[1600,1200],[1600,1244]],
    txt: [
      'A MOUNTAIN LODGE PUT ON A CITY STREET. THE FACADE IS BUILT OUT OF SPLIT FIREWOOD, STACKED CUT-END OUT, RUNNING THE FULL WIDTH OF THE SHOPFRONT.',
      'THE SIGN IS CARVED IN HANJA AND LIT FROM UNDER THE EAVE. AT NIGHT THE TIMBER READS AS A TEXTURE, NOT A DECORATION.',
      'INSIDE, THE TABLETOPS ARE STONE LEFT WITH A BROKEN EDGE. LIGHT IS DROPPED IN NARROW POOLS — ONE VESSEL ON A SHELF IS LIT LIKE AN OBJECT IN A CASE, AND EVERYTHING AROUND IT IS ALLOWED TO GO DARK.'
    ],
    txtKo: [
      '도심 길가에 올려놓은 산장. 파사드는 쪼갠 장작을 단면이 보이게 쌓아 매장 폭 전체를 채웠다.',
      '간판은 한자를 새기고 처마 밑에서 비춘다. 밤이 되면 장작은 장식이 아니라 질감으로 읽힌다.',
      '안쪽 상판은 깨진 단면을 그대로 둔 석재. 빛은 좁은 웅덩이로만 떨어진다. 선반 위 그릇 하나가 진열장 속 물건처럼 조명을 받고, 그 주변은 어두워지도록 놔뒀다.'
    ]
  },
  {
    slug: 'daehwaro', name: 'DAEHWARO', ko: '대화로',
    cat: 'F&B', catKo: '(상업) F&B', loc: 'DAEJEON', locKo: '대전', cover: 5, skip: [],
    dims: [[1600,1200],[1600,1200],[1600,888],[1600,1200],[1600,1200],[1600,1090],[1600,1200],[1600,1200]],
    txt: [
      'THE THIRD ROOM IN THE DAEHWA SERIES, AND THE COLDEST OF THE THREE.',
      'WALLS ARE BOARD-MARKED CONCRETE AND CLEFT SLATE — SURFACES THAT HOLD A SHADOW INSTEAD OF BOUNCING IT BACK.',
      'THE FIREWOOD RETURNS, THIS TIME AS AN INTERIOR WALL. BOTTLES SIT IN LIT NICHES CUT INTO THE STACK, SO THE STORAGE AND THE DISPLAY ARE THE SAME WALL.',
      'FROM THE STREET AT NIGHT THE STACK IS WHAT YOU SEE FIRST. THE SIGN IS SECOND.'
    ],
    txtKo: [
      '대화 시리즈의 세 번째 방. 셋 중 가장 차갑다.',
      '벽은 거푸집 자국이 남은 콘크리트와 쪼갠 슬레이트. 빛을 되쏘지 않고 그림자를 붙잡는 표면이다.',
      '장작이 다시 나온다. 이번에는 실내 벽으로. 쌓은 틈을 파낸 자리에 조명과 병이 들어간다. 보관과 진열이 같은 벽이다.',
      '밤에 길에서 먼저 보이는 것은 장작이다. 간판은 그다음이다.'
    ]
  },
  {
    slug: 'rolex', name: 'GALMA-DONG ROLEX BAR', ko: '갈마동 로렉스 바',
    cat: 'BAR', catKo: '(상업) 바', loc: 'DAEJEON', locKo: '대전', cover: 2, skip: [],
    dims: [[1600,1600],[1600,1600],[1600,1600],[1600,1600],[1600,1199],[1600,1199],[1600,1199],[1600,1199],[1600,866],[1600,866],[1600,1600],[1600,1600],[1600,1600]],
    txt: [
      'STARTED AS A BARE BASEMENT SHELL — EXPOSED SLAB, EXPOSED SERVICES, NO LEVEL FLOOR.',
      'THE BACK BAR IS A DEEP GREEN LACQUERED WALL CUT WITH BACKLIT FACETED NICHES. THE FACETS ARE NOT ORNAMENT: EACH ONE IS SIZED TO A BOTTLE.',
      'THE COUNTER IS MIRROR-POLISHED STONE. IT DOUBLES EVERY LIGHT IN THE ROOM, WHICH IS HOW A LOW CEILING IS MADE TO STOP FEELING LOW.',
      'BRASS CAGE PENDANTS, WARM AND SINGLE-SOURCE. NO DOWNLIGHT ON A FACE.'
    ],
    txtKo: [
      '시작은 지하 골조뿐이었다. 슬래브 노출, 설비 노출, 수평이 맞는 바닥도 없었다.',
      '백바는 짙은 녹색 도장 벽을 파내 각진 진열구를 만들고 뒤에서 빛을 넣었다. 각면은 장식이 아니다. 하나하나 병 치수에 맞췄다.',
      '카운터는 거울처럼 연마한 석재. 방 안의 모든 빛을 한 번씩 더 만든다. 낮은 천장이 낮게 느껴지지 않는 이유다.',
      '황동 케이지 펜던트, 따뜻하고 광원은 하나. 얼굴 위로 떨어지는 다운라이트는 두지 않았다.'
    ]
  },
  {
    slug: 'masta', name: 'MASTA HIGHBALL', ko: '마스타 하이볼',
    cat: 'BAR', catKo: '(상업) 바', loc: '—', locKo: '—', cover: 4, skip: [],
    dims: [[1600,1200],[1600,1200],[1600,1225],[1600,1200],[1600,1200],[1600,1200],[1600,1216]],
    txt: [
      'AN IZAKAYA REBUILT AS A SET. THE RED SIGNBOARD RUNS THE WHOLE LENGTH OF THE ROOM ABOVE THE COUNTER — READ IT AND YOU HAVE READ THE MENU.',
      'PLYWOOD CUBBY SHELVING IS FILLED WITH PROPS RATHER THAN STOCK: CUPS, TINS, PRINTED PAPER, SMALL FIGURES. THE GRID KEEPS THE CLUTTER FROM BECOMING MESS.',
      'PAPER LANTERNS, PLAIN TIMBER TABLES, NO SOFT SEATING. THE ROOM IS BUILT TO BE LOUD AND TO TURN OVER FAST.'
    ],
    txtKo: [
      '세트장으로 지은 이자카야. 붉은 간판이 카운터 위를 방 길이만큼 지나간다. 그것을 읽으면 메뉴를 다 읽은 것이다.',
      '합판 격자 선반에는 재고가 아니라 소품이 들어간다. 컵, 깡통, 인쇄물, 작은 인형. 격자가 있어서 잡동사니가 난장이 되지 않는다.',
      '종이 등, 민 목재 테이블, 푹신한 좌석은 없다. 시끄럽고 회전이 빠른 방으로 지었다.'
    ]
  },
  {
    slug: 'sgood', name: 'SGOOD', ko: '스굿바',
    cat: 'BAR', catKo: '(상업) 바', loc: '—', locKo: '—', cover: 2, skip: [],
    note: 'CLASSIFICATION UNCONFIRMED', noteKo: '분류 확인 필요',
    dims: [[1600,883],[1600,954],[1199,1600],[1199,1600],[1600,900],[1281,1600],[1280,1600],[1280,1600],[1448,1600],[1600,883],[1600,1200],[1600,1200],[1600,1200],[1600,1200]],
    txt: [
      'A CORNER SHOPFRONT IN BLACK STEEL AND GLASS, WITH "SPREAD GOOD VIBES" SET STRAIGHT ACROSS THE HEAD OF THE WINDOW.',
      'THE INTERIOR IS ALMOST EMPTY BY DESIGN — WHITE WALLS, ONE CHAIR, ONE PENDANT. WHEN A ROOM ONLY HAS TO HOLD ONE PERSON AT A TIME, EVERYTHING ELSE IS SUBTRACTED.',
      'THE BUILD PHOTOS SHOW THE OPPOSITE CONDITION: A RAW SLAB, CABLE ON THE FLOOR, DUCTWORK OPEN.'
    ],
    txtKo: [
      '검은 철과 유리로 짠 모서리 매장. 창 상단을 가로질러 "SPREAD GOOD VIBES"를 한 줄로 앉혔다.',
      '실내는 의도적으로 거의 비어 있다. 흰 벽, 의자 하나, 펜던트 하나. 한 번에 한 사람만 받는 방이면 나머지는 뺀다.',
      '시공 컷은 정반대다. 바닥 슬래브가 그대로 드러나고, 전선이 널려 있고, 덕트가 열려 있다.'
    ]
  },
  {
    slug: 'kingsman', name: 'KINGSMAN BAR', ko: '킹스맨 바',
    cat: 'BAR', catKo: '(상업) 바', loc: '—', locKo: '—', cover: 2, skip: [],
    dims: [[1600,1066],[1600,1199],[1600,1066],[1600,1199],[1600,1066],[1600,1066],[1600,1199],[1600,1199],[1600,848],[1600,1199],[1600,1199],[1600,1199],[1600,1199],[1600,1066],[1600,1199],[1600,1199],[1600,1199],[1199,1600]],
    txt: [
      'A TAILOR-SHOP BAR. THE BACK WALL IS A ROW OF ARCHED, BACKLIT ALCOVES IN DARK TIMBER — THE SHAPE OF A FITTING ROOM, USED AS A BOTTLE DISPLAY.',
      'FLOOR IN SMALL CHECKERBOARD TILE. BANQUETTE IN GREEN BUTTON-TUFTED LEATHER. DAMASK PAPER ON THE SIDE WALL, DELIBERATELY ONE STEP TOO MUCH.',
      'THE COUNTER TOP IS BRUSHED STEEL, WHICH IS THE ONLY COLD MATERIAL IN THE ROOM AND THE ONLY ONE YOU TOUCH.',
      'BEFORE: A FLOOR PLATE WITH SPRINKLER MAIN AND DECK CEILING FULLY EXPOSED.'
    ],
    txtKo: [
      '양복점을 빌려온 바. 뒷벽은 짙은 목재로 짠 아치형 진열구가 줄지어 서고 뒤에서 빛이 나온다. 피팅룸의 형태를 병 진열로 썼다.',
      '바닥은 작은 체커보드 타일. 벤치는 초록 버튼 튀프팅 가죽. 측벽에는 다마스크 벽지, 일부러 한 단계 과하게 넣었다.',
      '카운터 상판은 헤어라인 스테인리스. 방에서 유일하게 차가운 재료이고, 유일하게 손이 닿는 재료다.',
      '이전 상태 — 스프링클러 배관과 데크 플레이트 천장이 전부 드러난 바닥판.'
    ]
  },
  {
    slug: 'cherry', name: 'CHERRYJU', ko: '경주 체리주',
    cat: 'F&B', catKo: '(상업) F&B', loc: 'GYEONGJU', locKo: '경주', cover: 5, skip: [],
    dims: [[1600,980],[1600,1541],[1189,1600],[1086,1600],[1552,1600],[1600,1200]],
    txt: [
      'THE INVERSE OF THE BARS — WHITE, PINK, AND LIT FLAT.',
      'ARCHED NICHES IN PALE PINK CARRY THE BOTTLES; THE REST OF THE SHELVING IS WHITE AND DISAPPEARS. TERRAZZO UNDERFOOT.',
      'THE WINDOW IS PLANTED, NOT DRESSED: A BED OF MOSS AND GRASS WITH PRODUCT STANDING IN IT, SO THE STREET SEES A GARDEN BEFORE IT SEES A SHELF.',
      'MERCHANDISE — TEES, TOTES, A PINK TROLLEY — IS TREATED AS PART OF THE FIT-OUT RATHER THAN STOCK ON TOP OF IT.'
    ],
    txtKo: [
      '앞의 바들과 정반대. 희고, 분홍이고, 빛이 고르게 깔린다.',
      '연분홍 아치 진열구가 병을 받고, 나머지 선반은 희게 만들어 사라진다. 바닥은 테라조.',
      '창은 꾸민 것이 아니라 심었다. 이끼와 풀을 깔고 그 위에 제품을 세웠다. 길에서는 선반보다 정원이 먼저 보인다.',
      '티셔츠, 에코백, 분홍 카트 — 굿즈를 진열물이 아니라 인테리어의 일부로 다뤘다.'
    ]
  },
  {
    slug: 'bubas', name: 'BUBAS', ko: '부바스',
    cat: 'SHOP', catKo: '(상업) 리테일', loc: '—', locKo: '—', cover: 2, skip: [],
    dims: [[1600,1066],[1066,1600],[1066,1600],[1066,1600],[1600,1200],[1600,1200],[1600,1200],[1600,1200],[1600,1200],[1066,1600],[1066,1600],[1066,1600],[1600,1200],[1379,1600],[1200,1600],[1200,1600]],
    txt: [
      'THE HOARDING WAS THE FIRST PIECE OF DESIGN — A GABLE WRAPPED IN PALE BLUE WITH A LINE-DRAWN BRIDGE, SO THE SITE ADVERTISED ITSELF WHILE IT WAS STILL A HOLE.',
      'BEHIND IT: STRUCTURE OPENED UP, OLD OPENINGS CUT WIDER, THE SHELL TAKEN BACK TO WHAT COULD BE TRUSTED.',
      'THE FINISHED ENVELOPE IS DARK BOARD SIDING AGAINST A TIMBER DECK — DARK OUTSIDE, LIGHT INSIDE, THE WINDOW DOING ALL THE WORK.'
    ],
    txtKo: [
      '가림막이 첫 번째 디자인이었다. 박공을 연한 파랑으로 감싸고 선으로 그린 다리를 얹었다. 아직 구덩이일 때부터 현장이 스스로를 광고했다.',
      '그 뒤에서는 구조를 열었다. 기존 개구부를 넓히고, 믿을 수 있는 데까지 껍질을 벗겼다.',
      '완성된 외피는 짙은 판재 사이딩과 목재 데크. 바깥은 어둡고 안은 밝다. 일은 창이 다 한다.'
    ]
  },
  {
    slug: 'kuriju', name: 'KURIJU', ko: '꾸리쥬',
    cat: 'SALON', catKo: '(상업) 살롱', loc: '—', locKo: '—', cover: 2, skip: [],
    dims: [[1600,1066],[1600,1066],[1600,1066],[1065,1600],[1065,1600],[1600,1066],[1600,1200],[1600,1200],[1600,1200]],
    txt: [
      'A SALON HELD AT ONE TEMPERATURE. WALLS AND CEILING IN THE SAME WARM GREY PLASTER, CORNERS ROUNDED SO NO EDGE CATCHES A HARD LINE.',
      'AN ARCHED OPENING SEPARATES THE CUTTING FLOOR FROM THE WASH AND COLOUR AREA WITHOUT A DOOR.',
      'THE EXISTING ROUND COLUMN WAS LEFT WHERE IT WAS AND PLASTERED TO MATCH — CHEAPER THAN HIDING IT, AND IT GIVES THE ROOM ITS CENTRE.',
      'TRACK LIGHTING ONLY. IN A ROOM WHERE COLOUR IS THE PRODUCT, THE LIGHT HAS TO BE MOVEABLE.'
    ],
    txtKo: [
      '온도를 하나로 맞춘 살롱. 벽과 천장을 같은 웜 그레이 미장으로 덮고, 모서리를 굴려 날선 선이 걸리지 않게 했다.',
      '아치 개구부가 커트 공간과 샴푸·염색 구역을 문 없이 나눈다.',
      '기존 원형 기둥은 옮기지 않고 그 자리에 두고 같은 미장으로 감쌌다. 감추는 것보다 싸고, 방에 중심이 생긴다.',
      '조명은 레일뿐. 색이 상품인 방에서는 빛이 움직일 수 있어야 한다.'
    ]
  },
  {
    slug: 'doan', name: 'DOAN-DONG DUPLEX OFFICE', ko: '도안동 복층 사무실',
    cat: 'OFFICE', catKo: '(오피스)', loc: 'DAEJEON', locKo: '대전', cover: 2, skip: [],
    dims: [[1600,1200],[1600,901]],
    txt: [
      'A TWO-LEVEL TENANCY. THE STAIR IS PLACED AGAINST THE GLASS LINE SO BOTH FLOORS BORROW THE SAME DAYLIGHT.',
      'PARTITIONS ARE GLASS WITH SLIM FRAMES; THE ONLY SOLID WALLS ARE THE ONES THAT HAD TO BE.',
      'THE ENTRANCE IS A RECESSED LIGHTBOX — THE SIGN IS THE DOOR SURROUND, NOT SOMETHING APPLIED TO IT.'
    ],
    txtKo: [
      '두 개 층을 쓰는 임차 공간. 계단을 유리 면에 붙여서 두 층이 같은 자연광을 나눠 쓴다.',
      '칸막이는 얇은 프레임의 유리. 막힌 벽은 막혀야만 하는 곳에만 뒀다.',
      '입구는 파낸 라이트박스다. 간판을 문 옆에 붙인 것이 아니라, 문틀 자체가 간판이다.'
    ]
  }
];

/* ── 스튜디오 / UI 문구 ─────────────────────────────────────── */
const T = {
  en: {
    nav:   ['WORK', 'STUDIO', 'CONTACT'],
    idxHd: ['INDEX', 'ALL PROJECTS'],
    heroA: 'SIWOL 10月 — INTERIOR DESIGN',
    heroB: 'OCTOBER IS THE BEST MONTH OF THE YEAR.',
    heroC: 'WE BUILD ROOMS THAT HOLD THAT TEMPERATURE.',
    abL:   'STUDIO',
    /* 골든서클 — WHY(왜 이렇게 짓는가) → 조건 → HOW(어떻게) → WHAT(무엇을) */
    ab: [
      'A SHOP IS NOT JUDGED BY HOW IT LOOKS ON THE DAY IT OPENS. IT IS JUDGED BY WHETHER PEOPLE COME BACK. THAT IS THE ONLY BRIEF WE WORK TO.',
      'MOST OF THE WORK IS FOOD, DRINK AND SMALL RETAIL. THESE ROOMS OPEN, TRADE, AND ARE USED HARD EVERY NIGHT — THAT CONSTRAINT DECIDES THE MATERIALS BEFORE TASTE DOES.',
      'WE START FROM THE HOUR THE ROOM IS ACTUALLY BUSY, NOT NOON WITH NOBODY IN IT. WHERE THE QUEUE STANDS, WHERE THE STAFF TURNS, WHAT THE SEAT BY THE DOOR IS WORTH. LIGHT IS PLACED LAST AND MATTERS MOST.',
      'DRAWINGS, FIT-OUT, SIGNAGE AND STYLING ARE HANDLED IN ONE LINE. IN A SHOP THE MOST EXPENSIVE ACCIDENT IS A DELAYED OPENING, AND A SCHEDULE USUALLY SLIPS AT THE POINT WHERE ONE TRADE HANDS OVER TO THE NEXT. WE REMOVED THAT POINT.'
    ],
    abDl:  [['SERVICES','DESIGN · FIT-OUT<br>SIGNAGE · STYLING'],
            ['SECTORS','F&amp;B · BAR · SHOP<br>SALON · OFFICE'],
            ['BASED IN','DAEJEON, KOREA']],
    abBig: 'A ROOM YOU WANT TO STAY IN LONGER THAN YOU PLANNED.',
    coL:   'CONTACT',
    coK:   ['TEL', 'MAIL', 'INSTAGRAM'],
    coR:   'TELL US THE SCALE<br>AND THE DATE.<br>THAT IS ENOUGH<br>FOR A FIRST ANSWER.',
    copy:  '© 2026 DESIGN SIWOL',
    place: ['DAEJEON', 'KOREA'],
    p1:    ['PROJECT', 'TYPE', 'LOCATION', 'PREV. PROJECT', 'NEXT. PROJECT', 'NEXT PROJECT'],
    frames: n => n + ' FRAMES'
  },
  ko: {
    nav:   ['작업', '스튜디오', '문의'],
    idxHd: ['색인', '전체 프로젝트'],
    heroA: '10月 — 인테리어 디자인',
    heroB: '일 년 중 가장 좋은 계절, 10월.',
    heroC: '그 온도로 머무는 공간을 짓습니다.',
    abL:   '스튜디오',
    ab: [
      '가게는 문 여는 날의 모습으로 평가받지 않습니다. 다시 오는가로 평가받습니다. 10月이 받는 주문서는 그것 하나입니다.',
      '작업의 대부분은 먹고 마시는 곳과 작은 리테일입니다. 문을 열고, 장사를 하고, 매일 밤 험하게 쓰이는 방들입니다. 그 조건이 취향보다 먼저 재료를 정합니다.',
      '가장 바쁜 시간의 그 방에서 시작합니다. 아무도 없는 정오가 아니라. 줄이 어디에 서는지, 직원이 어디서 도는지, 문 옆 자리가 얼마짜리인지. 빛은 가장 마지막에 놓고, 가장 중요합니다.',
      '도면·시공·간판·스타일링을 한 줄에서 다룹니다. 상업 공간에서 가장 비싼 사고는 오픈이 밀리는 것이고, 일정이 밀리는 자리는 대개 사람이 바뀌는 지점입니다. 그 지점을 없앴습니다.'
    ],
    abDl:  [['업무','설계 · 시공<br>간판 · 스타일링'],
            ['분야','F&amp;B · 바 · 리테일<br>살롱 · 오피스'],
            ['기반','대전']],
    abBig: '계획한 것보다 더 오래 머물고 싶어지는 방.',
    coL:   '문의',
    coK:   ['전화', '이메일', '인스타그램'],
    coR:   '공사 규모와 일정만<br>알려주셔도 됩니다.<br>그거면 첫 답을<br>드릴 수 있습니다.',
    copy:  '© 2026 DESIGN SIWOL',
    place: ['대전', '대한민국'],
    p1:    ['프로젝트', '분류', '지역', '이전 프로젝트', '다음 프로젝트', '다음 프로젝트'],
    frames: n => n + '컷'
  }
};

const STUDIO = {
  tel:   '010-8082-9592',
  mail:  'kimjg1994@naver.com',
  insta: '@SIWOR_10_INTERIOR',
  instaUrl: 'https://instagram.com/siwor_10_interior',
  coor:  ['36°21′N', '127°23′E']
};
