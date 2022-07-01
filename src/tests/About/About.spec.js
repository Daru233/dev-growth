const { test, expect } = require('@playwright/test');

test('About test', async ({ page }) => {
  await page.goto('http://localhost:3000/about');
  const title = page.locator('.navbar__inner .navbar__title');
  await expect(title).toHaveText('Dev Growth');
});
