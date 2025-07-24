import { Page, Locator } from "playwright";
import { expect } from "@playwright/test";
import { getElement } from "../../core/utils/elementMapper";

export async function write(page: Page, elementName: string, text: string, iframeId?: string) {
  const selector = getElement(elementName);
  const target: Locator = iframeId ? page.frameLocator(iframeId).locator(selector) : page.locator(selector);
  await target.fill(text);
}

export async function click(page: Page, elementName: string, iframeId?: string) {
  const selector = getElement(elementName);
  const target: Locator = iframeId ? page.frameLocator(iframeId).locator(selector) : page.locator(selector);
  await target.click();
}

export async function select(page: Page, elementName: string, option: string, iframeId?: string) {
  const selector = getElement(elementName);
  const target: Locator = iframeId ? page.frameLocator(iframeId).locator(selector) : page.locator(selector);
  await target.selectOption({ label: option });
}

export async function checkTextElement(page: Page, elementName: string, expectedText: string, iframeId?: string) {
  const selector = getElement(elementName);
  const target: Locator = iframeId ? page.frameLocator(iframeId).locator(selector) : page.locator(selector);
  await expect(target).toHaveText(expectedText);
}

export async function visit(page: Page, path: string) {
  await page.goto(path);
}
