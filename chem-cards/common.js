/* =========================================================
 * 共享逻辑：主题 / 设置 / 音效 / 卡牌渲染
 * 依赖 config.js（须先引入）
 * ========================================================= */

const SETTINGS_KEY = 'chemcard_settings_v1';
const DEFAULT_SETTINGS = {
  theme: 'blueWhite', soundOn: true, bgmOn: false, volume: 60, showCardColor: true,
};

function getSettings() {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (raw) return Object.assign({}, DEFAULT_SETTINGS, JSON.parse(raw));
  } catch (e) {}
  return Object.assign({}, DEFAULT_SETTINGS);
}

function saveSettings(s) {
  try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(s)); } catch (e) {}
}

/* 应用主题到 CSS 变量 */
function applyTheme() {
  const s = getSettings();
  const t = THEMES[s.theme] || THEMES[DEFAULT_THEME];
  const root = document.documentElement.style;
  root.setProperty('--bg', t.bg);
  root.setProperty('--card-bg', t.cardBg);
  root.setProperty('--accent', t.accent);
  root.setProperty('--text', t.text);
  root.setProperty('--sub', t.sub);
  if (document.body) document.body.dataset.theme = s.theme;
}

/* 音效：URL 占位为空时静默跳过 */
let _audioCache = {};
function playAudio(name) {
  const s = getSettings();
  if (!s.soundOn) return;
  const url = AUDIO_SRC[name];
  if (!url) return;
  try {
    let a = _audioCache[name];
    if (!a) { a = new Audio(url); a.volume = (s.volume || 60) / 100; _audioCache[name] = a; }
    a.currentTime = 0; a.play().catch(() => {});
  } catch (e) {}
}

/* 卡牌 DOM 元素
 * opts: { small, dim, extraClass }
 */
function cardEl(card, opts) {
  opts = opts || {};
  const el = document.createElement('div');
  const showColor = getSettings().showCardColor;
  const ct = CARD_TYPES[card.type] || { label: '', color: '#90a4ae' };
  const ctColor = showColor ? ct.color : '#90a4ae';
  el.className = 'card type-' + card.type +
    (opts.small ? ' card-sm' : '') +
    (opts.dim ? ' dim' : '') +
    (opts.extraClass ? ' ' + opts.extraClass : '');
  el.dataset.id = card.id;
  el.style.setProperty('--ctype', ctColor);
  el.innerHTML =
    '<div class="card-cat">' + ct.label + '</div>' +
    '<div class="card-formula">' + card.formula + '</div>' +
    '<div class="card-name">' + card.name + '</div>';
  return el;
}

/* 简单 HTML 转义（安全渲染文本） */
function esc(s) {
  return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}
