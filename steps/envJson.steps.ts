import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { World } from "../support/world";

let response: any;
let headers: Record<string, string>;

Given("I give an env.json header with valid information", function () {
  headers = {
    Referer: "https://iceo.co/",
    Accept: "application/json",
  };
});

When("I submit a request GET to {string}", async function (this: World, endpoint: string) {
  const res = await this.request.get(endpoint, { headers });
  response = {
    status: res.status(),
    body: await res.json(),
  };
});

Then("The response status should be {int}", function (status: number) {
  expect(response.status).toBe(status);
});

Then("I successfully receive the env information", function () {
  const body = response.body;
  expect(body.DomainData.pccloseButtonType).toBe("Icon");
  expect(body.DomainData.pclifeSpanYr).toBe("Year");
  expect(body.DomainData.pclifeSpanYrs).toBe("Years");
  expect(body.DomainData.pclifeSpanSecs).toBe("A few seconds");
  expect(body.DomainData.pclifeSpanWk).toBe("Week");
  expect(body.DomainData.pclifeSpanWks).toBe("Weeks");
  expect(body.DomainData.pccontinueWithoutAcceptText).toBe("Continue without Accepting");
  expect(body.DomainData.MainText).toBe("Customize Cookies");
});
