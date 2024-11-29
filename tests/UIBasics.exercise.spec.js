const {test, expect} = require('@playwright/test');

const application_url = "https://rahulshettyacademy.com/client";
const email = "test2024125467899@test.com";
const password = "Test@1234";

test.only('Register Account', async ({page})=>{
    const emailLocator = page.locator("#userEmail");
    const passwordLocator = page.locator("#userPassword");
    await page.goto(application_url);
    await page.locator(".text-reset").click();
    await page.locator("#firstName").fill("test2024125");
    await page.locator("#lastName").fill("nov");
    await emailLocator.fill(email);
    await page.locator("#userMobile").fill("1234567890");
    await page.locator("[formcontrolname=occupation]").selectOption("Student");
    await page.locator("[value=Male]").check();
    await passwordLocator.fill(password);
    await page.locator('#confirmPassword').fill(password);
    await page.locator(".col-md-1 input").check();
    await page.locator("[value=Register]").click();
    await expect(page.getByText("Account Created Successfully")).toBeVisible();
    await page.getByText("Login").click();
    await emailLocator.fill(email);
    await passwordLocator.fill(password);
    await page.getByText("Login").click();
    await expect(page.locator("#sidebar p")).toBeVisible();
    console.log(await page.locator(".card-body b").first().textContent());
})