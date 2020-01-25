Feature: opensourcecms feature
    Test opensourcecms

    # @focus
    Scenario: Test login page placeholders
        Given I visit opensourcecms site
        And I check placeholder of 'Username'
        And I check placeholder of 'Password'


    Scenario: Test login page all invalid permutations
        Given I visit opensourcecms site
        Given I login as following
            | UserName      | Password      | Message                  |
            | admin         | password      | Invalid credentials      |
            |               |               | Username cannot be empty |
            |               | opensourcecms | Username cannot be empty |
            | opensourcecms |               | Password cannot be empty |

# | opensourcecms | opensourcecms | Welcome Admin            |



