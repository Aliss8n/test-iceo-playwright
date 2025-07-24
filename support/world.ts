import { Browser, BrowserContext, chromium, Page, APIRequestContext, request } from "playwright";
import { setWorldConstructor, setDefaultTimeout } from "@cucumber/cucumber";

setDefaultTimeout(60000);

export class World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
  request!: APIRequestContext;
  iframeId?: string;

  async init() {
    const isHeadless = process.env.HEADLESS !== "true";
    this.browser = await chromium.launch({ headless: isHeadless });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
    this.request = await request.newContext();
  }

  async close() {
    await this.browser.close();
  }
}

setWorldConstructor(World);
