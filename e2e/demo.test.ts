import { expect, test } from '@playwright/test';

test('home page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('h1')).toBeVisible();
});

test('homepage has title and links to about page', async ({ page }) => {
  await page.goto('http://localhost:5173/'); // change if you're using another port

  await expect(page).toHaveTitle("Welcome to SvelteKit");

  await page.click('text=svelte.dev/docs/kit');
  await expect(page).toHaveURL(/svelte\.dev\/docs\/kit/);
});
