import { Then } from "@cucumber/cucumber";
import { checkTextElement } from "../../core/commands/common";
import { World } from "../../support/world";

Then("I check the element {string} if has the content {string}", async function (this: World, element: string, text: string) {
  await checkTextElement(this.page, element, text, this.iframeId);
});
