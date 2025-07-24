import { Given, Then } from "@cucumber/cucumber";
import { Locator } from "playwright";
import { expect } from "@playwright/test";
import { World } from "../support/world";
import { getElement } from "../core/utils/elementMapper";

Given("I switch to iframe {string}", function (this: World, iframeId: string) {
  this.iframeId = iframeId;
});

Given("I allow all cookies", async function (this: World) {
  const cookiesModalLocator = this.page.locator(getElement("Cookies modal"));
  const cookiesAllowButtonLocator = this.page.locator(getElement("Cookies accept button"));

  if (await cookiesModalLocator.isVisible({ timeout: 10000 })) {
    await cookiesAllowButtonLocator.click();
    await expect(cookiesModalLocator).toBeHidden({ timeout: 5000 });
  }
});

Given("I solve the CAPTCHA", async function () {
  // TODO
  // Not implemented because this is a production environment and I will not send data
  // This step is a placeholder for solving CAPTCHA manually or using a service.
  // In a QA environment, you might use a mock or a test CAPTCHA that can be solved automatically.
});

Then("I receive a success message {string} in the {string} element on the contact page", async function (message: string, elementName: string) {
  // TODO
  // Not implemented because this is a production environment and I will not send data
});

Then("I receive the error message {string} in the {string} field on the contact page", async function (this: World, expectedMessage: string, elementName: string) {
  const selector = getElement(elementName);
  const target: Locator = this.iframeId ? this.page.frameLocator(this.iframeId).locator(selector) : this.page.locator(selector);
  await expect(target).toHaveText(expectedMessage);
});
