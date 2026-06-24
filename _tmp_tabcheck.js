const { chromium } = require("playwright");
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: "C:/Users/jiaqi/AppData/Local/Temp/claude/c--Users-jiaqi-Downloads-cb-interactive/c76811aa-1e27-4733-88eb-ebfd87a00418/scratchpad/tabs-bigger.png", clip: { x: 0, y: 0, width: 1440, height: 140 } });
  await browser.close();
})();
