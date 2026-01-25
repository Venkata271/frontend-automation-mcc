Feature: Article API validation

  Scenario: Verify article API response
    Given user hit the article endpoint
    When Verify the api response
    Then the response should return 200 OK