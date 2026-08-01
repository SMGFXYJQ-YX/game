/* =========================================================
 * 化学卡牌闯关游戏 — 核心配置数据
 * 纯前端，无依赖。所有页面通过 <script src="config.js"> 引入。
 * ========================================================= */

/* ---------- 卡牌类别（用于配色与展示） ---------- */
const CARD_TYPES = {
  acid:       { label: '酸',        color: '#e53935' },
  base:       { label: '碱',        color: '#1e88e5' },
  salt:       { label: '盐',        color: '#8e24aa' },
  metal:      { label: '金属单质',   color: '#f9a825' },
  nonmetal:   { label: '非金属单质', color: '#00897b' },
  oxide:      { label: '氧化物',     color: '#6d4c41' },
  condition:  { label: '条件',       color: '#607d8b' },
};

/* ent=true 表示同时进入娱乐池；false 表示仅学习池 */
const CARD_POOL = [
  { id: 'hcl',    formula: 'HCl',      name: '盐酸',     type: 'acid',      ent: true  },
  { id: 'h2so4',  formula: 'H₂SO₄',    name: '硫酸',     type: 'acid',      ent: true  },
  { id: 'hno3',   formula: 'HNO₃',     name: '硝酸',     type: 'acid',      ent: true  },

  { id: 'naoh',   formula: 'NaOH',     name: '氢氧化钠', type: 'base',      ent: true  },
  { id: 'caoh2',  formula: 'Ca(OH)₂',  name: '氢氧化钙', type: 'base',      ent: true  },
  { id: 'cuoh2',  formula: 'Cu(OH)₂',  name: '氢氧化铜', type: 'base',      ent: false },
  { id: 'feoh3',  formula: 'Fe(OH)₃',  name: '氢氧化铁', type: 'base',      ent: false },
  { id: 'koh',    formula: 'KOH',      name: '氢氧化钾', type: 'base',      ent: false },
  { id: 'nh3h2o', formula: 'NH₃·H₂O',  name: '氨水',     type: 'base',      ent: false },

  { id: 'nacl',   formula: 'NaCl',     name: '氯化钠',   type: 'salt',      ent: true  },
  { id: 'na2co3', formula: 'Na₂CO₃',   name: '碳酸钠',   type: 'salt',      ent: true  },
  { id: 'nahco3', formula: 'NaHCO₃',   name: '碳酸氢钠', type: 'salt',      ent: true  },
  { id: 'caco3',  formula: 'CaCO₃',    name: '碳酸钙',   type: 'salt',      ent: true  },
  { id: 'cuso4',  formula: 'CuSO₄',    name: '硫酸铜',   type: 'salt',      ent: true  },
  { id: 'agno3',  formula: 'AgNO₃',    name: '硝酸银',   type: 'salt',      ent: true  },
  { id: 'bacl2',  formula: 'BaCl₂',    name: '氯化钡',   type: 'salt',      ent: false },
  { id: 'baso4',  formula: 'BaSO₄',    name: '硫酸钡',   type: 'salt',      ent: false },
  { id: 'fecl3',  formula: 'FeCl₃',    name: '氯化铁',   type: 'salt',      ent: false },
  { id: 'kmno4',  formula: 'KMnO₄',    name: '高锰酸钾', type: 'salt',      ent: false },

  { id: 'fe',     formula: 'Fe',       name: '铁',       type: 'metal',     ent: true  },
  { id: 'zn',     formula: 'Zn',       name: '锌',       type: 'metal',     ent: true  },
  { id: 'mg',     formula: 'Mg',       name: '镁',       type: 'metal',     ent: true  },
  { id: 'al',     formula: 'Al',       name: '铝',       type: 'metal',     ent: false },
  { id: 'cu',     formula: 'Cu',       name: '铜',       type: 'metal',     ent: true  },
  { id: 'na',     formula: 'Na',       name: '钠',       type: 'metal',     ent: false },

  { id: 'o2',     formula: 'O₂',       name: '氧气',     type: 'nonmetal',   ent: true  },
  { id: 'h2',     formula: 'H₂',       name: '氢气',     type: 'nonmetal',   ent: true  },
  { id: 'c',      formula: 'C',        name: '碳',       type: 'nonmetal',   ent: true  },
  { id: 's',      formula: 'S',        name: '硫',       type: 'nonmetal',   ent: false },
  { id: 'cl2',    formula: 'Cl₂',      name: '氯气',     type: 'nonmetal',   ent: false },
  { id: 'p',      formula: 'P',        name: '磷',       type: 'nonmetal',   ent: false },

  { id: 'co2',    formula: 'CO₂',      name: '二氧化碳', type: 'oxide',     ent: true  },
  { id: 'co',     formula: 'CO',       name: '一氧化碳', type: 'oxide',     ent: false },
  { id: 'cao',    formula: 'CaO',      name: '氧化钙',   type: 'oxide',     ent: true  },
  { id: 'cuo',    formula: 'CuO',      name: '氧化铜',   type: 'oxide',     ent: true  },
  { id: 'fe2o3',  formula: 'Fe₂O₃',    name: '氧化铁',   type: 'oxide',     ent: true  },
  { id: 'h2o',    formula: 'H₂O',      name: '水',       type: 'oxide',     ent: true  },
  { id: 'h2o2',   formula: 'H₂O₂',     name: '双氧水',   type: 'oxide',     ent: true  },
  { id: 'so2',    formula: 'SO₂',      name: '二氧化硫', type: 'oxide',     ent: true  },
  { id: 'so3',    formula: 'SO₃',      name: '三氧化硫', type: 'oxide',     ent: false },
  { id: 'mgo',    formula: 'MgO',      name: '氧化镁',   type: 'oxide',     ent: false },
  { id: 'na2o',   formula: 'Na₂O',     name: '氧化钠',   type: 'oxide',     ent: false },
  { id: 'p2o5',   formula: 'P₂O₅',     name: '五氧化二磷', type: 'oxide',   ent: false },
  { id: 'al2o3',  formula: 'Al₂O₃',    name: '氧化铝',   type: 'oxide',     ent: false },
  { id: 'sio2',   formula: 'SiO₂',     name: '二氧化硅', type: 'oxide',     ent: false },

  { id: 'catalyst',   formula: '⚙',   name: '催化剂',   type: 'condition', ent: true  },
  { id: 'hightemp',   formula: '△',   name: '高温',     type: 'condition', ent: true  },
  { id: 'electrolysis',formula: '⚡',  name: '电解',     type: 'condition', ent: true  },
];

/* 反应类型标签（英文 key → 中文） */
const REACTION_TYPE_LABEL = {
  combination:  '化合反应',
  decomposition:'分解反应',
  displacement: '置换反应',
  doubleDecomp: '复分解反应',
  neutralization:'中和反应',
  redox:        '氧化还原反应',
};

/* ---------- 反应库 ----------
 * a/b: 两卡 id（顺序无关）
 * equation: 配平化学方程式
 * type: 主类型中文（用于信息卡主标题）
 * types: 计数维度数组（可多填，对应 LEVELS.goal 的 key）
 */
const REACTIONS = [
  // —— 燃烧（氧化还原 + 化合） ——
  { a:'o2', b:'c',      equation:'C + O₂ → CO₂',                       type:'燃烧反应', types:['redox','combination'] },
  { a:'o2', b:'s',      equation:'S + O₂ → SO₂',                       type:'燃烧反应', types:['redox','combination'] },
  { a:'o2', b:'p',      equation:'4P + 5O₂ → 2P₂O₅',                  type:'燃烧反应', types:['redox','combination'] },
  { a:'o2', b:'fe',     equation:'4Fe + 3O₂ → 2Fe₂O₃',                type:'燃烧反应', types:['redox','combination'] },
  { a:'o2', b:'mg',     equation:'2Mg + O₂ → 2MgO',                   type:'燃烧反应', types:['redox','combination'] },
  { a:'o2', b:'na',     equation:'4Na + O₂ → 2Na₂O',                  type:'燃烧反应', types:['redox','combination'] },
  { a:'o2', b:'h2',     equation:'2H₂ + O₂ → 2H₂O',                   type:'燃烧反应', types:['redox','combination'] },
  { a:'o2', b:'co',     equation:'2CO + O₂ → 2CO₂',                   type:'燃烧反应', types:['redox','combination'] },
  { a:'o2', b:'cu',     equation:'2Cu + O₂ → 2CuO',                  type:'燃烧反应', types:['redox','combination'] },

  // —— 金属 + 酸（置换 + 氧化还原），HNO₃ 与 Cu 特殊 ——
  { a:'fe', b:'hcl',    equation:'Fe + 2HCl → FeCl₂ + H₂↑',           type:'置换反应', types:['displacement','redox'] },
  { a:'fe', b:'h2so4',  equation:'Fe + H₂SO₄ → FeSO₄ + H₂↑',          type:'置换反应', types:['displacement','redox'] },
  { a:'zn', b:'hcl',    equation:'Zn + 2HCl → ZnCl₂ + H₂↑',           type:'置换反应', types:['displacement','redox'] },
  { a:'zn', b:'h2so4',  equation:'Zn + H₂SO₄ → ZnSO₄ + H₂↑',          type:'置换反应', types:['displacement','redox'] },
  { a:'mg', b:'hcl',    equation:'Mg + 2HCl → MgCl₂ + H₂↑',           type:'置换反应', types:['displacement','redox'] },
  { a:'mg', b:'h2so4',  equation:'Mg + H₂SO₄ → MgSO₄ + H₂↑',          type:'置换反应', types:['displacement','redox'] },
  { a:'al', b:'hcl',    equation:'2Al + 6HCl → 2AlCl₃ + 3H₂↑',       type:'置换反应', types:['displacement','redox'] },
  { a:'al', b:'h2so4',  equation:'2Al + 3H₂SO₄ → Al₂(SO₄)₃ + 3H₂↑',  type:'置换反应', types:['displacement','redox'] },
  { a:'na', b:'hcl',    equation:'2Na + 2HCl → 2NaCl + H₂↑',          type:'置换反应', types:['displacement','redox'] },
  { a:'na', b:'h2so4',  equation:'2Na + H₂SO₄ → Na₂SO₄ + H₂↑',        type:'置换反应', types:['displacement','redox'] },
  { a:'cu', b:'hno3',   equation:'Cu + 4HNO₃ → Cu(NO₃)₂ + 2NO₂↑ + 2H₂O', type:'氧化还原反应', types:['redox'] },

  // —— 金属 + 盐（置换） ——
  { a:'fe', b:'cuso4',  equation:'Fe + CuSO₄ → FeSO₄ + Cu',           type:'置换反应', types:['displacement'] },
  { a:'zn', b:'cuso4',  equation:'Zn + CuSO₄ → ZnSO₄ + Cu',           type:'置换反应', types:['displacement'] },
  { a:'zn', b:'agno3',  equation:'Zn + 2AgNO₃ → Zn(NO₃)₂ + 2Ag',      type:'置换反应', types:['displacement'] },
  { a:'al', b:'cuso4',  equation:'2Al + 3CuSO₄ → Al₂(SO₄)₃ + 3Cu',    type:'置换反应', types:['displacement'] },
  { a:'al', b:'agno3',  equation:'Al + 3AgNO₃ → Al(NO₃)₃ + 3Ag',      type:'置换反应', types:['displacement'] },
  { a:'cu', b:'agno3',  equation:'Cu + 2AgNO₃ → Cu(NO₃)₂ + 2Ag',      type:'置换反应', types:['displacement'] },

  // —— 还原金属氧化物（H₂/CO/C） ——
  { a:'h2', b:'cuo',    equation:'H₂ + CuO → Cu + H₂O',               type:'置换反应', types:['displacement','redox'] },
  { a:'h2', b:'fe2o3',  equation:'3H₂ + Fe₂O₃ → 2Fe + 3H₂O',          type:'置换反应', types:['displacement','redox'] },
  { a:'co', b:'cuo',    equation:'CO + CuO → Cu + CO₂',               type:'氧化还原反应', types:['redox'] },
  { a:'co', b:'fe2o3',  equation:'3CO + Fe₂O₃ → 2Fe + 3CO₂',          type:'氧化还原反应', types:['redox'] },
  { a:'c',  b:'cuo',    equation:'C + 2CuO → 2Cu + CO₂↑',             type:'置换反应', types:['displacement','redox'] },
  { a:'c',  b:'fe2o3',  equation:'3C + 2Fe₂O₃ → 4Fe + 3CO₂↑',         type:'置换反应', types:['displacement','redox'] },
  { a:'c',  b:'co2',    equation:'C + CO₂ 高温→ 2CO',                  type:'氧化还原反应', types:['redox'] },

  // —— 中和（中和 + 复分解） ——
  { a:'hcl',   b:'naoh',  equation:'HCl + NaOH → NaCl + H₂O',                  type:'中和反应', types:['neutralization','doubleDecomp'] },
  { a:'hcl',   b:'caoh2', equation:'2HCl + Ca(OH)₂ → CaCl₂ + 2H₂O',           type:'中和反应', types:['neutralization','doubleDecomp'] },
  { a:'hcl',   b:'cuoh2', equation:'2HCl + Cu(OH)₂ → CuCl₂ + 2H₂O',           type:'中和反应', types:['neutralization','doubleDecomp'] },
  { a:'hcl',   b:'feoh3', equation:'3HCl + Fe(OH)₃ → FeCl₃ + 3H₂O',           type:'中和反应', types:['neutralization','doubleDecomp'] },
  { a:'hcl',   b:'koh',   equation:'HCl + KOH → KCl + H₂O',                   type:'中和反应', types:['neutralization','doubleDecomp'] },
  { a:'hcl',   b:'nh3h2o',equation:'HCl + NH₃·H₂O → NH₄Cl + H₂O',              type:'中和反应', types:['neutralization','doubleDecomp'] },
  { a:'h2so4', b:'naoh',  equation:'H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O',           type:'中和反应', types:['neutralization','doubleDecomp'] },
  { a:'h2so4', b:'caoh2', equation:'H₂SO₄ + Ca(OH)₂ → CaSO₄ + 2H₂O',           type:'中和反应', types:['neutralization','doubleDecomp'] },
  { a:'h2so4', b:'cuoh2', equation:'H₂SO₄ + Cu(OH)₂ → CuSO₄ + 2H₂O',           type:'中和反应', types:['neutralization','doubleDecomp'] },
  { a:'h2so4', b:'feoh3', equation:'3H₂SO₄ + 2Fe(OH)₃ → Fe₂(SO₄)₃ + 6H₂O',     type:'中和反应', types:['neutralization','doubleDecomp'] },
  { a:'h2so4', b:'koh',   equation:'H₂SO₄ + 2KOH → K₂SO₄ + 2H₂O',             type:'中和反应', types:['neutralization','doubleDecomp'] },
  { a:'h2so4', b:'nh3h2o',equation:'H₂SO₄ + 2NH₃·H₂O → (NH₄)₂SO₄ + 2H₂O',      type:'中和反应', types:['neutralization','doubleDecomp'] },
  { a:'hno3',  b:'naoh',  equation:'HNO₃ + NaOH → NaNO₃ + H₂O',                type:'中和反应', types:['neutralization','doubleDecomp'] },
  { a:'hno3',  b:'caoh2', equation:'2HNO₃ + Ca(OH)₂ → Ca(NO₃)₂ + 2H₂O',        type:'中和反应', types:['neutralization','doubleDecomp'] },
  { a:'hno3',  b:'cuoh2', equation:'2HNO₃ + Cu(OH)₂ → Cu(NO₃)₂ + 2H₂O',        type:'中和反应', types:['neutralization','doubleDecomp'] },
  { a:'hno3',  b:'feoh3', equation:'3HNO₃ + Fe(OH)₃ → Fe(NO₃)₃ + 3H₂O',        type:'中和反应', types:['neutralization','doubleDecomp'] },
  { a:'hno3',  b:'koh',   equation:'HNO₃ + KOH → KNO₃ + H₂O',                  type:'中和反应', types:['neutralization','doubleDecomp'] },
  { a:'hno3',  b:'nh3h2o',equation:'HNO₃ + NH₃·H₂O → NH₄NO₃ + H₂O',            type:'中和反应', types:['neutralization','doubleDecomp'] },

  // —— 酸 + 碳酸盐（复分解） ——
  { a:'hcl',   b:'na2co3',equation:'2HCl + Na₂CO₃ → 2NaCl + H₂O + CO₂↑',       type:'复分解反应', types:['doubleDecomp'] },
  { a:'hcl',   b:'nahco3',equation:'HCl + NaHCO₃ → NaCl + H₂O + CO₂↑',         type:'复分解反应', types:['doubleDecomp'] },
  { a:'hcl',   b:'caco3', equation:'2HCl + CaCO₃ → CaCl₂ + H₂O + CO₂↑',        type:'复分解反应', types:['doubleDecomp'] },
  { a:'h2so4', b:'na2co3',equation:'H₂SO₄ + Na₂CO₃ → Na₂SO₄ + H₂O + CO₂↑',     type:'复分解反应', types:['doubleDecomp'] },
  { a:'h2so4', b:'nahco3',equation:'H₂SO₄ + 2NaHCO₃ → Na₂SO₄ + 2H₂O + 2CO₂↑',  type:'复分解反应', types:['doubleDecomp'] },
  { a:'h2so4', b:'caco3', equation:'H₂SO₄ + CaCO₃ → CaSO₄ + H₂O + CO₂↑',       type:'复分解反应', types:['doubleDecomp'] },
  { a:'hno3',  b:'na2co3',equation:'2HNO₃ + Na₂CO₃ → 2NaNO₃ + H₂O + CO₂↑',      type:'复分解反应', types:['doubleDecomp'] },
  { a:'hno3',  b:'nahco3',equation:'HNO₃ + NaHCO₃ → NaNO₃ + H₂O + CO₂↑',        type:'复分解反应', types:['doubleDecomp'] },
  { a:'hno3',  b:'caco3', equation:'2HNO₃ + CaCO₃ → Ca(NO₃)₂ + H₂O + CO₂↑',     type:'复分解反应', types:['doubleDecomp'] },

  // —— 盐 + 盐（复分解） ——
  { a:'agno3', b:'nacl',  equation:'AgNO₃ + NaCl → AgCl↓ + NaNO₃',             type:'复分解反应', types:['doubleDecomp'] },
  { a:'agno3', b:'bacl2', equation:'2AgNO₃ + BaCl₂ → 2AgCl↓ + Ba(NO₃)₂',       type:'复分解反应', types:['doubleDecomp'] },
  { a:'agno3', b:'fecl3', equation:'3AgNO₃ + FeCl₃ → 3AgCl↓ + Fe(NO₃)₃',      type:'复分解反应', types:['doubleDecomp'] },
  { a:'agno3', b:'hcl',   equation:'AgNO₃ + HCl → AgCl↓ + HNO₃',               type:'复分解反应', types:['doubleDecomp'] },
  { a:'agno3', b:'na2co3',equation:'2AgNO₃ + Na₂CO₃ → Ag₂CO₃↓ + 2NaNO₃',      type:'复分解反应', types:['doubleDecomp'] },
  { a:'bacl2', b:'na2co3',equation:'BaCl₂ + Na₂CO₃ → BaCO₃↓ + 2NaCl',          type:'复分解反应', types:['doubleDecomp'] },
  { a:'bacl2', b:'h2so4', equation:'BaCl₂ + H₂SO₄ → BaSO₄↓ + 2HCl',            type:'复分解反应', types:['doubleDecomp'] },
  { a:'bacl2', b:'cuso4', equation:'BaCl₂ + CuSO₄ → BaSO₄↓ + CuCl₂',           type:'复分解反应', types:['doubleDecomp'] },

  // —— 盐 + 碱（复分解） ——
  { a:'cuso4', b:'naoh',  equation:'CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄',        type:'复分解反应', types:['doubleDecomp'] },
  { a:'cuso4', b:'koh',   equation:'CuSO₄ + 2KOH → Cu(OH)₂↓ + K₂SO₄',          type:'复分解反应', types:['doubleDecomp'] },
  { a:'cuso4', b:'caoh2', equation:'CuSO₄ + Ca(OH)₂ → Cu(OH)₂↓ + CaSO₄',        type:'复分解反应', types:['doubleDecomp'] },
  { a:'fecl3', b:'naoh',  equation:'FeCl₃ + 3NaOH → Fe(OH)₃↓ + 3NaCl',         type:'复分解反应', types:['doubleDecomp'] },
  { a:'fecl3', b:'koh',   equation:'FeCl₃ + 3KOH → Fe(OH)₃↓ + 3KCl',           type:'复分解反应', types:['doubleDecomp'] },
  { a:'na2co3',b:'caoh2', equation:'Na₂CO₃ + Ca(OH)₂ → CaCO₃↓ + 2NaOH',         type:'复分解反应', types:['doubleDecomp'] },

  // —— 酸性氧化物 + 碱（复分解） ——
  { a:'co2',  b:'naoh',   equation:'CO₂ + 2NaOH → Na₂CO₃ + H₂O',               type:'复分解反应', types:['doubleDecomp'] },
  { a:'co2',  b:'caoh2',  equation:'CO₂ + Ca(OH)₂ → CaCO₃↓ + H₂O',             type:'复分解反应', types:['doubleDecomp'] },
  { a:'co2',  b:'koh',    equation:'CO₂ + 2KOH → K₂CO₃ + H₂O',                 type:'复分解反应', types:['doubleDecomp'] },
  { a:'so2',  b:'naoh',   equation:'SO₂ + 2NaOH → Na₂SO₃ + H₂O',              type:'复分解反应', types:['doubleDecomp'] },
  { a:'so2',  b:'caoh2',  equation:'SO₂ + Ca(OH)₂ → CaSO₃↓ + H₂O',             type:'复分解反应', types:['doubleDecomp'] },
  { a:'so2',  b:'koh',    equation:'SO₂ + 2KOH → K₂SO₃ + H₂O',                type:'复分解反应', types:['doubleDecomp'] },
  { a:'so3',  b:'naoh',   equation:'SO₃ + 2NaOH → Na₂SO₄ + H₂O',              type:'复分解反应', types:['doubleDecomp'] },
  { a:'so3',  b:'koh',    equation:'SO₃ + 2KOH → K₂SO₄ + H₂O',                type:'复分解反应', types:['doubleDecomp'] },
  { a:'sio2', b:'naoh',   equation:'SiO₂ + 2NaOH → Na₂SiO₃ + H₂O',            type:'复分解反应', types:['doubleDecomp'] },
  { a:'sio2', b:'koh',    equation:'SiO₂ + 2KOH → K₂SiO₃ + H₂O',              type:'复分解反应', types:['doubleDecomp'] },

  // —— 活泼金属 + 水（置换 / 氧化还原）——
  { a:'na',  b:'h2o',   equation:'2Na + 2H₂O → 2NaOH + H₂↑',        type:'置换反应', types:['displacement','redox'] },
  { a:'mg',  b:'h2o',   equation:'Mg + H₂O 高温→ MgO + H₂↑',        type:'置换反应', types:['displacement','redox'] },
  { a:'al',  b:'h2o',   equation:'2Al + 3H₂O 高温→ Al₂O₃ + 3H₂↑',   type:'置换反应', types:['displacement','redox'] },
  { a:'zn',  b:'h2o',   equation:'Zn + H₂O 高温→ ZnO + H₂↑',        type:'置换反应', types:['displacement','redox'] },
  { a:'fe',  b:'h2o',   equation:'3Fe + 4H₂O 高温→ Fe₃O₄ + 4H₂↑',   type:'置换反应', types:['displacement','redox'] },

  // —— 氧化物 + 水（化合） ——
  { a:'co2',  b:'h2o',    equation:'CO₂ + H₂O → H₂CO₃',                        type:'化合反应', types:['combination'] },
  { a:'so2',  b:'h2o',    equation:'SO₂ + H₂O → H₂SO₃',                        type:'化合反应', types:['combination'] },
  { a:'so3',  b:'h2o',    equation:'SO₃ + H₂O → H₂SO₄',                        type:'化合反应', types:['combination'] },
  { a:'p2o5', b:'h2o',    equation:'P₂O₅ + 3H₂O → 2H₃PO₄',                    type:'化合反应', types:['combination'] },
  { a:'na2o', b:'h2o',    equation:'Na₂O + H₂O → 2NaOH',                       type:'化合反应', types:['combination'] },
  { a:'cao',  b:'h2o',    equation:'CaO + H₂O → Ca(OH)₂',                      type:'化合反应', types:['combination'] },

  // —— 金属氧化物 + 酸（复分解） ——
  { a:'cao',  b:'hcl',    equation:'CaO + 2HCl → CaCl₂ + H₂O',                type:'复分解反应', types:['doubleDecomp'] },
  { a:'cao',  b:'h2so4',  equation:'CaO + H₂SO₄ → CaSO₄ + H₂O',               type:'复分解反应', types:['doubleDecomp'] },
  { a:'cao',  b:'hno3',   equation:'CaO + 2HNO₃ → Ca(NO₃)₂ + H₂O',            type:'复分解反应', types:['doubleDecomp'] },
  { a:'cuo',  b:'hcl',    equation:'CuO + 2HCl → CuCl₂ + H₂O',               type:'复分解反应', types:['doubleDecomp'] },
  { a:'cuo',  b:'h2so4',  equation:'CuO + H₂SO₄ → CuSO₄ + H₂O',               type:'复分解反应', types:['doubleDecomp'] },
  { a:'cuo',  b:'hno3',   equation:'CuO + 2HNO₃ → Cu(NO₃)₂ + H₂O',            type:'复分解反应', types:['doubleDecomp'] },
  { a:'fe2o3',b:'hcl',    equation:'Fe₂O₃ + 6HCl → 2FeCl₃ + 3H₂O',            type:'复分解反应', types:['doubleDecomp'] },
  { a:'fe2o3',b:'h2so4',  equation:'Fe₂O₃ + 3H₂SO₄ → Fe₂(SO₄)₃ + 3H₂O',        type:'复分解反应', types:['doubleDecomp'] },
  { a:'fe2o3',b:'hno3',   equation:'Fe₂O₃ + 6HNO₃ → 2Fe(NO₃)₃ + 3H₂O',         type:'复分解反应', types:['doubleDecomp'] },
  { a:'mgo',  b:'hcl',    equation:'MgO + 2HCl → MgCl₂ + H₂O',               type:'复分解反应', types:['doubleDecomp'] },
  { a:'mgo',  b:'h2so4',  equation:'MgO + H₂SO₄ → MgSO₄ + H₂O',              type:'复分解反应', types:['doubleDecomp'] },
  { a:'mgo',  b:'hno3',   equation:'MgO + 2HNO₃ → Mg(NO₃)₂ + H₂O',           type:'复分解反应', types:['doubleDecomp'] },
  { a:'na2o', b:'hcl',    equation:'Na₂O + 2HCl → 2NaCl + H₂O',              type:'复分解反应', types:['doubleDecomp'] },
  { a:'na2o', b:'h2so4',  equation:'Na₂O + H₂SO₄ → Na₂SO₄ + H₂O',            type:'复分解反应', types:['doubleDecomp'] },
  { a:'al2o3',b:'hcl',    equation:'Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O',           type:'复分解反应', types:['doubleDecomp'] },
  { a:'al2o3',b:'h2so4',  equation:'Al₂O₃ + 3H₂SO₄ → Al₂(SO₄)₃ + 3H₂O',       type:'复分解反应', types:['doubleDecomp'] },

  // —— 两性氧化物 + 碱（复分解） ——
  { a:'al2o3',b:'naoh',   equation:'Al₂O₃ + 2NaOH → 2NaAlO₂ + H₂O',           type:'复分解反应', types:['doubleDecomp'] },
  { a:'al2o3',b:'koh',    equation:'Al₂O₃ + 2KOH → 2KAlO₂ + H₂O',            type:'复分解反应', types:['doubleDecomp'] },

  // —— 氯的化合（氧化还原 + 化合） ——
  { a:'cl2',  b:'na',     equation:'2Na + Cl₂ → 2NaCl',                      type:'化合反应', types:['redox','combination'] },
  { a:'cl2',  b:'fe',     equation:'2Fe + 3Cl₂ → 2FeCl₃',                   type:'化合反应', types:['redox','combination'] },
  { a:'cl2',  b:'cu',     equation:'Cu + Cl₂ → CuCl₂',                      type:'化合反应', types:['redox','combination'] },
  { a:'cl2',  b:'h2',     equation:'H₂ + Cl₂ → 2HCl',                       type:'化合反应', types:['redox','combination'] },
  { a:'cl2',  b:'naoh',   equation:'Cl₂ + 2NaOH → NaCl + NaClO + H₂O',       type:'氧化还原反应', types:['redox'] },
  { a:'cl2',  b:'caoh2',  equation:'2Cl₂ + 2Ca(OH)₂ → CaCl₂ + Ca(ClO)₂ + 2H₂O', type:'氧化还原反应', types:['redox'] },
  { a:'cl2',  b:'koh',    equation:'Cl₂ + 2KOH → KCl + KClO + H₂O',           type:'氧化还原反应', types:['redox'] },
  { a:'cl2',  b:'nh3h2o', equation:'Cl₂ + 2NH₃·H₂O → NH₄Cl + NH₂Cl + 2H₂O',    type:'氧化还原反应', types:['redox'] },

  // —— 分解反应（普通出牌：条件/催化剂 卡参与） ——
  { a:'h2o',     b:'electrolysis', equation:'2H₂O 通电→ 2H₂↑ + O₂↑',         type:'分解反应', types:['decomposition'] },
  { a:'h2o2',    b:'catalyst',     equation:'2H₂O₂ (催化剂)→ 2H₂O + O₂↑',     type:'分解反应', types:['decomposition'] },
  { a:'caco3',   b:'hightemp',     equation:'CaCO₃ 高温→ CaO + CO₂↑',        type:'分解反应', types:['decomposition'] },
  { a:'kmno4',   b:'hightemp',     equation:'2KMnO₄ 高温→ K₂MnO₄ + MnO₂ + O₂↑', type:'分解反应', types:['decomposition'] },
  { a:'cuoh2',   b:'hightemp',     equation:'Cu(OH)₂ 加热→ CuO + H₂O',        type:'分解反应', types:['decomposition'] },
  { a:'feoh3',   b:'hightemp',     equation:'2Fe(OH)₃ 加热→ Fe₂O₃ + 3H₂O',    type:'分解反应', types:['decomposition'] },
  { a:'nahco3',  b:'hightemp',     equation:'2NaHCO₃ 加热→ Na₂CO₃ + H₂O + CO₂↑', type:'分解反应', types:['decomposition'] },
];

/* ---------- 可右键分解的卡（产物均在卡池内，可加入手牌） ---------- */
const DECOMPOSABLE = {
  h2o2:  { equation:'2H₂O₂ → 2H₂O + O₂↑',        products:['h2o','o2'] },
  caco3:  { equation:'CaCO₃ → CaO + CO₂↑',        products:['cao','co2'] },
  cuoh2:  { equation:'Cu(OH)₂ → CuO + H₂O',       products:['cuo','h2o'] },
  feoh3:  { equation:'2Fe(OH)₃ → Fe₂O₃ + 3H₂O',   products:['fe2o3','h2o'] },
  nahco3: { equation:'2NaHCO₃ → Na₂CO₃ + H₂O + CO₂↑', products:['na2co3','h2o','co2'] },
};

/* ---------- 关卡配置（可继续追加/修改） ----------
 * goal 的 key：reactionTotal（总反应数）、以及各 REACTION_TYPE_LABEL 的 key
 */
const LEVELS = [
  { id: 1, name: '初出茅庐', desc: '完成 10 次任意化学反应即可通关。',
    goal: { reactionTotal: 10 } },
  { id: 2, name: '氧化还原', desc: '完成 15 次反应，其中氧化还原 ≥ 3、置换 ≥ 3。',
    goal: { reactionTotal: 15, redox: 3, displacement: 3 } },
  { id: 3, name: '面面俱到', desc: '完成 20 次反应，其中分解 ≥ 2、中和 ≥ 2。',
    goal: { reactionTotal: 20, decomposition: 2, neutralization: 2 } },
];

/* ---------- 主题预设（背景颜色） ---------- */
const THEMES = {
  blueWhite: { name: '蓝白', bg: 'linear-gradient(135deg,#e8f3ff 0%,#ffffff 100%)', cardBg: '#ffffff', accent: '#2196f3', text: '#0d47a1', sub: '#1565c0' },
  darkNight: { name: '暗夜', bg: 'linear-gradient(135deg,#1a1a2e 0%,#16213e 100%)', cardBg: '#232946', accent: '#7c4dff', text: '#eaeaea', sub: '#9aa7d6' },
  freshGreen:{ name: '清新绿', bg: 'linear-gradient(135deg,#e8f5e9 0%,#ffffff 100%)', cardBg: '#ffffff', accent: '#43a047', text: '#1b5e20', sub: '#2e7d32' },
  warmOrange:{ name: '暖橙', bg: 'linear-gradient(135deg,#fff3e0 0%,#ffffff 100%)', cardBg: '#ffffff', accent: '#fb8c00', text: '#e65100', sub: '#ef6c00' },
};
/* ---------- 道具定义 ----------
 * use: 'drag' 表示需拖动到目标卡使用；'click' 表示点击直接使用
 */
const ITEMS = [
  { id:'trash',  name:'垃圾桶', icon:'🗑️', use:'drag',  desc:'拖动到一张手牌上，弃掉该手牌（进弃牌堆）。' },
  { id:'bulb',   name:'灯泡',   icon:'💡', use:'click', desc:'随机高亮一组「场上卡 + 可反应手牌」；若没有可反应组合则刷新全部场上卡。' },
  { id:'beaker', name:'烧杯',   icon:'🧪', use:'drag',  desc:'拖动到一张手牌，与场上随机一张卡交换位置。' },
];

const DEFAULT_THEME = 'blueWhite';

/* ---------- 音频占位（网页 <audio> 加载，需用户交互后启动） ---------- */
const AUDIO_SRC = {
  bgm:     '',   // 背景音乐占位 URL
  success: '',   // 成功出牌
  error:   '',   // 非法操作
  draw:    '',   // 摸牌
  win:     '',   // 通关
};

/* ---------- 常量 ---------- */
const PUBLIC_CARDS = 5;   // 公共区卡牌数量
const MAX_DRAW = 2;       // 卡手时最多摸牌数
const INITIAL_HAND = 7;   // 初始手牌数

/* ---------- 辅助函数 ---------- */
const CARD_MAP = {};
CARD_POOL.forEach(c => { CARD_MAP[c.id] = c; });

/* 两卡是否能反应（顺序无关） */
function isCanReact(a, b) {
  return REACTIONS.some(r => (r.a === a && r.b === b) || (r.a === b && r.b === a));
}

/* 取反应对象（含方程/类型），无则返回 null */
function getReaction(a, b) {
  return REACTIONS.find(r => (r.a === a && r.b === b) || (r.a === b && r.b === a)) || null;
}

/* 取某卡能与之反应的全部卡 id 列表 */
function partnersOf(id) {
  const out = [];
  REACTIONS.forEach(r => {
    if (r.a === id) out.push(r.b);
    else if (r.b === id) out.push(r.a);
  });
  return out;
}

/* 根据关卡选择卡池（娱乐池 / 学习全量） */
function poolForLevel(level) {
  // 默认学习全量；若关卡标记 useEntertainment 则用娱乐池
  if (level && level.useEntertainment) return CARD_POOL.filter(c => c.ent);
  return CARD_POOL.slice();
}
