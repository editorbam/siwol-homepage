/* ══════════════════════════════════════════════════════════════
   SIWOL 10月 — 프로젝트 데이터 (EN / KO)
   출처: siwol-d/work.html의 PROJECTS 배열 (슬러그·이름·분류·지역·dims 그대로 승계)
   ⚠️ 지역 표기: 확정된 곳만 적고 나머지는 —.
   ⚠️ 슬러그·이미지 폴더명은 업종 기준(상호 노출 금지, 8/30).
   본문은 사진에서 확인 가능한 것만 서술 — 면적·시공기간·연도 등 미확인 수치는 넣지 않음.
   문체: 프로젝트 설명=서술체(도록 캡션) / 스튜디오·컨택=습니다체(기존 시월 목소리 승계)
   ════════════════════════════════════════════════════════════════ */

const PROJECTS = [
  {
    slug: 'charcoal-01', name: 'CHARCOAL GRILL HOUSE', ko: '숯불구이집',
    cat: 'F&B', catKo: '(상업) F&B', loc: '—', locKo: '—', cover: 2, skip: [6],
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
    slug: 'charcoal-02', name: 'CHARCOAL GRILL HOUSE', ko: '숯불구이집',
    cat: 'F&B', catKo: '(상업) F&B', loc: 'GYEONGJU', locKo: '경주', cover: 7, skip: [],
    coverNote: ['EVERY TREE WAS CARVED BY HAND AND RAISED ONE BY ONE.', '하나하나 직접 깎아서 세운 나무.'],
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
    slug: 'izakaya', name: 'IZAKAYA', ko: '이자카야',
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
    slug: 'charcoal-03', name: 'CHARCOAL GRILL HOUSE', ko: '숯불구이집',
    cat: 'F&B', catKo: '(상업) F&B', loc: '—', locKo: '—', cover: 5, home: 4, skip: [],
    dims: [[1600,1200],[1600,1200],[1600,888],[1600,1200],[1600,1200],[1600,1090],[1600,1200],[1600,1200]],
    txt: [
      'THE THIRD OF THREE ROOMS, AND THE COLDEST.',
      'WALLS ARE BOARD-MARKED CONCRETE AND CLEFT SLATE — SURFACES THAT HOLD A SHADOW INSTEAD OF BOUNCING IT BACK.',
      'THE FIREWOOD RETURNS, THIS TIME AS AN INTERIOR WALL. BOTTLES SIT IN LIT NICHES CUT INTO THE STACK, SO THE STORAGE AND THE DISPLAY ARE THE SAME WALL.',
      'FROM THE STREET AT NIGHT THE STACK IS WHAT YOU SEE FIRST. THE SIGN IS SECOND.'
    ],
    txtKo: [
      '세 방 중 세 번째. 셋 중 가장 차갑다.',
      '벽은 거푸집 자국이 남은 콘크리트와 쪼갠 슬레이트. 빛을 되쏘지 않고 그림자를 붙잡는 표면이다.',
      '장작이 다시 나온다. 이번에는 실내 벽으로. 쌓은 틈을 파낸 자리에 조명과 병이 들어간다. 보관과 진열이 같은 벽이다.',
      '밤에 길에서 먼저 보이는 것은 장작이다. 간판은 그다음이다.'
    ]
  },
  {
    slug: 'cafe', name: 'CAFE', ko: '카페',
    /* heroWide: 대표컷을 텍스트 옆이 아니라 아래 가운데로, 가로로 넓게 (8/27 카페만)
       8/28 시월 피드백: 대표컷 = 01(정면 간판 컷). 02는 살롱(07) 사진이 섞여 들어온 것 → 제외.
       05·10 = 01과 같은 정면 컷 → 제외. 남는 컷 11장. */
    cat: 'CAFE', catKo: '(상업) 카페', loc: '—', locKo: '—', cover: 1, heroWide: true, skip: [2, 5, 10],
    dims: [[1600,883],[1600,954],[1199,1600],[1199,1600],[1600,900],[1281,1600],[1280,1600],[1280,1600],[1448,1600],[1600,883],[1600,1200],[1600,1200],[1600,1200],[1600,1200]],
    txt: [
      'A CORNER SHOPFRONT IN BLACK STEEL AND GLASS, WITH A SINGLE LINE OF LETTERING SET STRAIGHT ACROSS THE HEAD OF THE WINDOW.',
      'INSIDE, PALE TIMBER AND WHITE TILE. THE COUNTER WALL HANGS ITS TOOLS ON PEGS — LADLES, SIEVES, A BOARD — SO THE EQUIPMENT IS THE DISPLAY. THE BACK WINDOW OPENS ONTO TREES.',
      'THE BUILD PHOTOS SHOW THE OPPOSITE CONDITION: A RAW SLAB, CABLE ON THE FLOOR, DUCTWORK OPEN.'
    ],
    txtKo: [
      '검은 철과 유리로 짠 모서리 매장. 창 상단을 가로질러 글자 한 줄을 앉혔다.',
      '안은 연한 목재와 흰 타일. 카운터 벽에는 국자와 체, 도마가 못에 걸린다. 도구가 곧 진열이다. 뒷창은 나무를 향해 열려 있다.',
      '시공 컷은 정반대다. 바닥 슬래브가 그대로 드러나고, 전선이 널려 있고, 덕트가 열려 있다.'
    ]
  },
  {
    slug: 'liquor-shop', name: 'LIQUOR SHOP', ko: '주류샵',
    cat: 'SHOP', catKo: '(상업) 리테일', loc: 'GYEONGJU', locKo: '경주', cover: 5, skip: [],
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
    slug: 'hair-salon', name: 'HAIR SALON', ko: '헤어 살롱',
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
    slug: 'restaurant', name: 'RESTAURANT', ko: '일반음식점',
    /* skip 근거: 원본에 같은 사진이 섞여 들어와 있다(md5 대조).
       02 = 08 = 16 (같은 컷 3장) → 08·16 제외 / 03 = 06 → 06 제외. 남는 컷 15장. */
    cat: 'F&B', catKo: '(상업) F&B', loc: '—', locKo: '—', cover: 2, skip: [6, 8, 16],
    dims: [[1600,1066],[1600,1199],[1600,1066],[1600,1199],[1600,1066],[1600,1066],[1600,1199],[1600,1199],[1600,848],[1600,1199],[1600,1199],[1600,1199],[1600,1199],[1600,1066],[1600,1199],[1600,1199],[1600,1199],[1199,1600]],
    txt: [
      'A RESTAURANT BORROWED FROM A TAILOR SHOP. THE BACK WALL IS A ROW OF ARCHED, BACKLIT ALCOVES IN DARK TIMBER — THE SHAPE OF A FITTING ROOM, USED AS A BOTTLE DISPLAY.',
      'FLOOR IN SMALL CHECKERBOARD TILE. BANQUETTE IN GREEN BUTTON-TUFTED LEATHER. DAMASK PAPER ON THE SIDE WALL, DELIBERATELY ONE STEP TOO MUCH.',
      'THE COUNTER TOP IS BRUSHED STEEL, WHICH IS THE ONLY COLD MATERIAL IN THE ROOM AND THE ONLY ONE YOU TOUCH.',
      'BEFORE: A FLOOR PLATE WITH SPRINKLER MAIN AND DECK CEILING FULLY EXPOSED.'
    ],
    txtKo: [
      '양복점을 빌려온 음식점. 뒷벽은 짙은 목재로 짠 아치형 진열구가 줄지어 서고 뒤에서 빛이 나온다. 피팅룸의 형태를 병 진열로 썼다.',
      '바닥은 작은 체커보드 타일. 벤치는 초록 버튼 튀프팅 가죽. 측벽에는 다마스크 벽지, 일부러 한 단계 과하게 넣었다.',
      '카운터 상판은 헤어라인 스테인리스. 방에서 유일하게 차가운 재료이고, 유일하게 손이 닿는 재료다.',
      '이전 상태 — 스프링클러 배관과 데크 플레이트 천장이 전부 드러난 바닥판.'
    ]
  },
  {
    slug: 'office', name: 'CO-WORKING OFFICE', ko: '공유오피스',
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
    nav:   ['WORK', 'PROCESS', 'CONTACT'],
    idxHd: ['INDEX', 'ALL PROJECTS'],
    heroA: 'SIWOL 10月 — INTERIOR DESIGN',
    heroB: 'OCTOBER IS THE BEST MONTH OF THE YEAR.',
    heroC: 'WE BUILD ROOMS THAT HOLD THAT TEMPERATURE.',
    abL:   'PROCESS',
    /* 공사 진행과정 — 6단계 (8/30, STUDIO 글 대체) */
    ab: [
      '01 — CONSULTATION. TELL US THE SCALE AND THE OPENING DATE. THAT IS ENOUGH FOR A FIRST ANSWER.',
      '02 — SITE MEETING AND SURVEY. WE MEET YOU AT THE ROOM, MEASURE IT, AND CHECK WHAT IS ALREADY THERE — COLUMNS, PIPES, POWER, THE STREET OUTSIDE.',
      '03 — FIRST ESTIMATE. SCOPE, MATERIALS AND COST IN ONE DOCUMENT, BASED ON THE SURVEY.',
      '04 — REVISED ESTIMATE. WE ADJUST THE SCOPE AND THE NUMBERS TOGETHER UNTIL THEY FIT THE BUDGET AND THE DATE.',
      '05 — CONTRACT. WHAT IS SIGNED HERE IS WHAT GETS BUILT.',
      '06 — CONSTRUCTION. WORK BEGINS ON THE AGREED DATE.'
    ],
    abDl:  [],
    abBig: 'THE SCHEDULE IS COUNTED BACKWARDS FROM OPENING DAY.',
    coL:   'CONTACT',
    coK:   ['TEL', 'MAIL', 'INSTAGRAM'],
    coR:   'TELL US THE SCALE<br>AND THE DATE.<br>THAT IS ENOUGH<br>FOR A FIRST ANSWER.',
    copy:  '© 2026 DESIGN SIWOL',
    place: ['DAEJEON', 'KOREA'],
    p1:    ['PROJECT', 'TYPE', 'LOCATION', 'PREV. PROJECT', 'NEXT. PROJECT', 'NEXT PROJECT'],
    frames: n => n + ' FRAMES'
  },
  ko: {
    nav:   ['작업', '공사 진행과정', '문의'],
    idxHd: ['색인', '전체 프로젝트'],
    heroA: '10月 — 인테리어 디자인',
    heroB: '일 년 중 가장 좋은 계절, 10월.',
    heroC: '그 온도로 머무는 공간을 짓습니다.',
    abL:   '공사 진행과정',
    ab: [
      '01 — 상담. 공사 규모와 오픈 날짜를 알려주시면 됩니다. 그거면 첫 답을 드릴 수 있습니다.',
      '02 — 현장 미팅(실측). 현장에서 만나 재고, 이미 있는 것을 확인합니다. 기둥, 배관, 전기, 바깥 길까지.',
      '03 — 1차 견적. 실측을 바탕으로 범위·재료·비용을 한 장에 정리해 드립니다.',
      '04 — 2차 수정 견적. 예산과 날짜에 맞을 때까지 범위와 숫자를 함께 조정합니다.',
      '05 — 계약. 여기서 서명한 것이 그대로 지어집니다.',
      '06 — 착공. 약속한 날짜에 공사를 시작합니다.'
    ],
    abDl:  [],
    abBig: '일정은 오픈 날짜에서 거꾸로 셉니다.',
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
