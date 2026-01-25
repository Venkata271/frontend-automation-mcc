Feature: AMP Media articles validation

Scenario: Verify AMP lead video article
Given user opens an amp lead video article
When user verify the amp lead video
Then lead video should be visible in amp
And there should not be any errors