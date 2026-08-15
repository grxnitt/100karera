import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const html = readFileSync(resolve(root, 'index.html'), 'utf8');
const css = readFileSync(resolve(root, 'styles.css'), 'utf8');
const text = `${html}\n${css}`;

const required = [
  '100Б Карьера',
  'Твой путь после ЕГЭ',
  'Профессии',
  'Карьерный старт',
  'Реальные истории',
  'Возможности',
  'Карьерный диалог',
  'Как пройти первое собеседование',
  'Где искать стажировки',
  'Развивай навыки'
];

const forbidden = [
  /<form\b/i,
  /цена|тариф|купить|оплатить/i,
  /roadmap проекта|роадмап|1–2 недели|6\+ месяцев/i
];

for (const phrase of required) {
  if (!text.includes(phrase)) {
    throw new Error(`Missing required phrase: ${phrase}`);
  }
}

for (const pattern of forbidden) {
  if (pattern.test(text)) {
    throw new Error(`Forbidden landing content matched: ${pattern}`);
  }
}

if (!/@media\s*\(max-width:\s*760px\)/.test(css)) {
  throw new Error('Missing mobile media query');
}

console.log('Static landing checks passed.');
