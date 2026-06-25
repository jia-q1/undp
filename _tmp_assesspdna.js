const { chromium } = require("playwright");
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1600, height: 1200 } });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  const el = await page.$('[data-chapter="3"]');
  const box = await el.boundingBox();
  await page.mouse.wheel(0, box.y - 20);
  await page.waitForTimeout(1000);
  await page.screenshot({ path: "C:/Users/jiaqi/AppData/Local/Temp/claude/c--Users-jiaqi-Downloads-cb-interactive/c76811aa-1e27-4733-88eb-ebfd87a00418/scratchpad/assessments-4box.png" });

  const buttons = await page.$$('section[data-chapter="3"] button');
  for (const b of buttons) {
    const text = await b.textContent();
    if (text && text.includes("assessments since")) {
      await b.click();
      break;
    }
  }
  await page.waitForTimeout(600);
  await page.screenshot({ path: "C:/Users/jiaqi/AppData/Local/Temp/claude/c--Users-jiaqi-Downloads-cb-interactive/c76811aa-1e27-4733-88eb-ebfd87a00418/scratchpad/assessments-4box-expanded.png" });
  await browser.close();
})();
