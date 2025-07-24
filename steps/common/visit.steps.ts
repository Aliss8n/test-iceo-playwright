import { Given } from "@cucumber/cucumber";
import { visit } from "../../core/commands/common";
import { World } from "../../support/world";
import { routes } from "../../routes";
import { envConfig } from "../../config";

Given("I visit {string}", async function (this: World, pageName: string) {
  const path = routes[pageName];
  if (!path) throw new Error(`Route for "${pageName}" not found`);

  const fullUrl = `${envConfig.base_url}${path}`;
  await visit(this.page, fullUrl);
});
