@backend
Feature: Request tests on the Env.Json endpoint

  Scenario: Get correct content in the Env.Json end
    Given I give an env.json header with valid information
    When I submit a request GET to "https://cdn.cookielaw.org/consent/59d3a469-a5e4-4500-9eff-9f1d773ac326/0f0f7e6c-ee8c-4826-af96-e2640a15f100/en.json"
    Then The response status should be 200
    And I successfully receive the env information
