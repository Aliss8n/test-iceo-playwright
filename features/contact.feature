@frontend
Feature: Form tests on the Contact page

  Scenario: Send correct content in the contact form
    Given I visit "Contact Page"
    And I allow all cookies
    And I switch to iframe "#native-forms-contact"
    And I write "test@company.com" in the "Email"
    And I write "12345" in the "Phone number"
    And I write "Test" in the "Message"
    And I click on the "I need NDA first"
    And I click on the "I accept the Privacy Policy"
    And I click on the "I agree to receive emails"
    And I click on the "I agree to receive telephone calls"
    And I solve the CAPTCHA
    When I click on the "Submit button"
    Then I receive a success message "test" in the "test" element on the contact page
    
  Scenario: Send blank values in all fields
    Given I visit "Contact Page"
    And I allow all cookies
    And I switch to iframe "#native-forms-contact"
    When I click on the "Submit button"
    And I receive the error message "This field is required" in the "Email validation" field on the contact page
  
  Scenario Outline: Send incorrect content in the email contact form: <content>
    Given I visit "Contact Page"
    And I allow all cookies
    And I switch to iframe "#native-forms-contact"
    And I write <content> in the "Email"
    When I click on the "Submit button"
    Then I receive the error message <errorMessage> in the "Email validation" field on the contact page
    Examples:
      | content               | errorMessage               |
      | "test"                | "Email is not valid"       |
      | "test@"               | "Email is not valid"       |
    # | "test@test"           | "A"                        | # The scenario will not run because we have an issue here
    # | "test@test.test"      | "A"                        | # The scenario will not run because we have an issue here
    # | "test@test com"       | "A"                        | # The scenario will not run because we have an issue here
      | "test@test.test@"     | "Email is not valid"       |
  