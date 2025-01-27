import { test, expect } from '@playwright/test';

test('change to skill page', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  await page.getByText('Liste des compétences').click();

});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
