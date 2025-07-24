import { Given } from "@cucumber/cucumber";
import { write } from "../../core/commands/common";
import { World } from "../../support/world";

Given("I write {string} in the {string}", async function (this: World, text: string, element: string) {
  if (text !== "null") {
    await write(this.page, element, text, this.iframeId);
  }
});
