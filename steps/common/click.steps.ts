import { Given } from "@cucumber/cucumber";
import { click } from "../../core/commands/common";
import { World } from "../../support/world";

Given("I click on the {string}", async function (this: World, element: string) {
  await click(this.page, element, this.iframeId);
});
