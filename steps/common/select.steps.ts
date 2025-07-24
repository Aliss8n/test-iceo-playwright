import { Given } from "@cucumber/cucumber";
import { select } from "../../core/commands/common";
import { World } from "../../support/world";

Given("I select {string} in the {string}", async function (this: World, option: string, element: string) {
  if (option !== "null") {
    await select(this.page, element, option, this.iframeId);
  }
});
