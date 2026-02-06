Feature: Canonical Url test validation

  Scenario: Verify canonical url in article
    Given User opens a publication
    When user verifies the canonical URL in view page source
    Then canonical URL should be present and match the page URL and screenshot should be taken
