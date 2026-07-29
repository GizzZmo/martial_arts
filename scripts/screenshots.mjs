/**
 * Capture full-page screenshots of key HTML pages served locally.
 * Used by .github/workflows/screenshots.yml
 */
import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';

const BASE = process.env.BASE_URL || 'http://127.0.0.1:8080';
const OUT = process.env.SCREENSHOT_DIR || 'screenshots';

const PAGES = [
  { name: 'index', path: '/index.html' },
  { name: 'wiki', path: '/wiki.html' },
  { name: 'introduction', path: '/introduction.html' },
  { name: 'libraries-archives', path: '/libraries-archives.html' },
  { name: 'publishers', path: '/publishers.html' },
  { name: 'scholarship', path: '/scholarship.html' },
  { name: 'book-compendium', path: '/book-compendium.html' },
  { name: 'building-library', path: '/building-library.html' },
  { name: 'conclusion', path: '/conclusion.html' },
  { name: 'industry-trends', path: '/martial_arts_industry_trends.html' },
];

const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 390, height: 844 },
];

async function main() {
  await mkdir(OUT, { recursive: true });
  const browser = await chromium.launch();
  const context = await browser.newContext({
    deviceScaleFactor: 1,
  });

  for (const vp of VIEWPORTS) {
    for (const pageDef of PAGES) {
      const page = await context.newPage();
      await page.setViewportSize({ width: vp.width, height: vp.height });
      const url = `${BASE}${pageDef.path}`;
      console.log(`Capturing ${vp.name} ${url}`);
      try {
        await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
        // Allow fonts/CDN CSS a moment
        await page.waitForTimeout(800);
        const file = path.join(OUT, `${pageDef.name}-${vp.name}.png`);
        await page.screenshot({ path: file, fullPage: true });
        console.log(`  -> ${file}`);
      } catch (err) {
        console.error(`  FAILED ${url}:`, err.message || err);
      } finally {
        await page.close();
      }
    }
  }

  await browser.close();
  console.log('Done.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
