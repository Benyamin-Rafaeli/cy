Feature: opensourcecms feature
    Test opensourcecms
    Scenario: Test the login feature without credentials
        Given I visit opensourcecms site
        Given I check placeholder of 'UserName' and 'Password'
        And I check text of 'LOGIN' button and click
        Then I check the message 'Username cannot be empty'

    Scenario: Test the login feature all permutations
        Then I login as following
            | UserName      | Password      | Message                  |
            | admin         | password      | Invalid credentials      |
            |               | opensourcecms | Username cannot be empty |
            | opensourcecms |               | Password cannot be empty |

# | opensourcecms | opensourcecms | Welcome Admin            |



