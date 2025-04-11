const { test, expect } = require('@playwright/test');

test('перевірка кнопки Sign up', async ({ page }) => {
  await page.goto('https://guest:welcome2qauto@qauto.forstudy.space');
  await expect(page.getByRole('button', { name: /Sign up/i })).toBeVisible();
});
