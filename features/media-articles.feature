Feature: Media articles validation

Scenario: Verify lead video article
Given user opens a lead video article
When user verifies the lead video
Then lead video should be visible


Scenario: Verify lead image article
Given user opens a lead image article
When user verifies the lead image
Then lead image should be visible