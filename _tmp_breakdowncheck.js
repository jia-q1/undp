const { chromium } = require("playwright");
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 1600 } });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  const el = await page.$('[data-chapter="1"]');
  const box = await el.boundingBox();
  await page.mouse.wheel(0, box.y + box.height - 1500);
  await page.waitForTimeout(1200);
  const table = await page.$("table");
  await table.screenshot({ path: "C:/Users/jiaqi/AppData/Local/Temp/claude/c--Users-jiaqi-Downloads-cb-interactive/c76811aa-1e27-4733-88eb-ebfd87a00418/scratchpad/leverage-table-zoom.png" });
  await browser.close();
})();
