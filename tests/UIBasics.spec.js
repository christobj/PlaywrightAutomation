const {test, expect} = require('@playwright/test');

test('Browser Context Playwright Test', async ({browser})=> {
    const userName = page.locator("#username");
    const password = page.locator("[type=password]");
    const signInBtn = page.locator("#signInBtn");

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await userName.fill("rahul");
    await password.fill("learning");
    await signInBtn.click();
    console.log(await page.locator("[style*=block]").textContent());
    await expect(await page.locator("[style*=block]")).toContainText("Incorrect");
    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await password.fill("");
    await password.fill("learning");
    await signInBtn.click();
    console.log(await page.locator(".card-title a").first().textContent());
    console.log(await page.locator(".card-title a").nth(1).textContent());
});

test('Without Browser Context Playwright Test', async ({page})=> {
    await page.goto("https://www.google.com/");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
})