# Animal-Crossing-Application

## Description

An Animal Crossing full-stack application utilizing <i>express, node.js, postgres, and ejs</i>.

#### Backstory: Animal Crossing

Since its first release in 2001 by Katsuya Eguchi and Hisashi Nogami, the Animal Crossing franchise has become a successful hit. Five games have been released wordwide along with three mobile applicaions. 

## User Stories

* As a user (AAU) I want to create an account
* (AAU) I want to sign in and out of my account
* (AAU) I want to browse all available villagers and items
* As a logged-in user (AALU), I want to select my favorite villagers/items and add them to a favorites list
* (AALU) I want to be able to direct to my favorites page

## Wireframes


![main](/public/imgs/Main.PNG)
![main](/public/imgs/submitform.PNG)
![main](/public/imgs/villagertab.PNG)
![main](/public/imgs/villagerdetail.PNG)
![main](/public/imgs/itemtab.PNG)
![main](/public/imgs/itemdetail.PNG)
![main](/public/imgs/favoritetab.PNG)

## ERDs

![ERDs](/public/imgs/ERD.PNG)

## RESTful Routing Chart
Users Chart

| Method  | URL             | Functionality   | View                 |
| ------- | ----------      | --------------  | -------------------  |
| GET     | /users/new      | sign up         | redirect to /index   |
| POST    | /users          | create new user | redirect to /profile |
| GET     | /users/login    | login           | redirect to /index   |
| POST    | /users/login    | logs in new user| redirect to /profile |
| GET     | /users/logout   | logout          | redirect to /index   |


Villagers Chart

| Method  | URL             | Functionality      | View                       |
| ------- | ----------      | --------------     | ------------------------   |
| GET     | /villagers      | list all villagers | show villagers/index.ejs   |
| POST    | /villagers      | add a villager     | redirect to /villagers/:id |
| GET     | /villagers/:id  | show one villager  | show villagers/detail.ejs  |
| PUT     | /villagers/:id  | update a villager  | redirect to /villagers/:id |
| DELETE  | /villagers/:id  | delete a villager  | redirect to /villagers     |



Household_Items Chart

| Method  | URL                   | Functionality  | View                   |
| ------- | ----------            | -------------- | ---------------------- |
| GET     | /household_items      | list all items | show items/index.ejs   |
| POST    | /household_items      | add an item    | redirect to /items/:id |
| GET     | /household_items/:id  | show one item  | show items/detail.ejs  |
| PUT     | /household_items/:id  | update a item  | redirect to /items/:id |
| DELETE  | /household_items/:id  | delete a item  | redirect to /items     |

## MVP Goals

* Functional application with all working routes
* User able to view their favorites list

## Stretch Goals

* Authenication
* Visually appealing application - CSS/Bootstrap
* Add more models/table for the users such as special events, DIY recipes, art, or music
* On the main page, display the villager's birthday depending on day
* Random page for user to click on to find something new
* Sticky Navbar
* Pagination

## Daily Sprints

* Monday
  * Soft/hard pitch
  * Test API
  * Wireframe app
  * Plan routes 
  * Install required packages
  * Create db models - test db
  * Set up basic html/css
  * Start user routes

* Tuesday
  * Update readme with wireframes
  * Test API
  * Render villager name and image
  * User routes/Villager routes - create loops
  * Format grid view of villagers

* Wednesday
  * Show details page on Villagers
  * Items index page
  * Items show details page 
  * Start working on logging in and signing out (creating the pages and forms)

* Thursday
  * Finish logging in/out - fix navbar to display favorites when logged in
  * Authentication
  * Create favorites route
  * Add favorites page - grab favorites input from db

* Friday
  * Correct any bugs
  * Style pages
  * Stretch goals
  * MVP

* Saturday / Sunday
  * More styling
  * Stretch goals

## Resources | APIs

For this application I will be using the [ACNHAPI](http://achnapi.com/)

  * https://stackoverflow.com/questions/3298477/get-the-first-key-name-of-a-javascript-object
  * https://www.freecodecamp.org/news/how-to-create-an-image-gallery-with-css-grid-e0f0fd666a5c/
  * https://www.w3schools.com/howto/howto_js_sticky_header.asp
  
* Images:
  * Poket Camp Img | https://www.clipartkey.com/view/Jobbmi_animal-crossing-pocket-camp-tree/

