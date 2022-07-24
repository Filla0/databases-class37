What columns violate 1NF?
member_id (values are not unique and there is no primary key)
food_code, food_description (multiple values)
dinner_date (values should be the same kind or type) dates here are written in different ways and sequence


What entities do you recognize that could be extracted?
Member
Dinner
Venue
Food

Name all the tables and columns that would make a 3NF compliant solution.

Members table (member_id PK, member_name, member_address)
Dinner table (dinner_id PK, date, venue_code, venue_description) 
Food table (food_code PK, food_description)

Junction tables : 
Reservation table (member_id FK, dinner_id FK)
Dinner_food table (dinner_id FK, food_code FK)

// in our case all venues are unique per dinner_id, in real life venues will start to repeat thus not unique
// in this case we should create Venues table (venue_code PK, venue_description) and add venue code as FK in Dinner table