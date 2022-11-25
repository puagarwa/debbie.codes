import { expect, test } from '@playwright/test';

test('color made works', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('button', { name: 'system' }).click();
  await expect(page.getByRole('document')).toHaveAttribute('class', 'dark');

  await page.getByRole('button', { name: 'dark' }).click();
  await expect(page.getByRole('document')).toHaveAttribute('class', 'light');

  await page.getByRole('button', { name: 'light' }).click();
  await expect(page.getByRole('document')).toHaveAttribute('class', 'dark');
});
