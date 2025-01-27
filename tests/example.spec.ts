import { test, expect } from '@playwright/test';

test('change to skill page', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  await page.getByText('Liste des compétences').click();

});
