Feature: Homepage UI validation

  Scenario: Verify homepage components using data table
    Given User opens the homepage
    Then verify below homepage components are visible in viewport
      | Component Name                |
      | Logo                          |
      | Hamburger Menu                |
      | Login Button                  |
      | Lead Story                    |
      | Latest News Digest             |
      | Video Playlist                |
      | From Our Partner Digests      |
      | Group of Digests              |
      | Footer                        |