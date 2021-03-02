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

Villagers Chart


| Method  | URL             | Functionality      | View                       |
| ------- | ----------      | --------------     | ------------------------   |
| GET     | /villagers      | list all villagers | show villagers/index.ejs   |
| POST    | /villagers      | add a villager     | redirect to /villagers/:id |
| GET     | /villagers/:id  | show one villager  | show villagers/detail.ejs  |
| PUT     | /villagers/:id  | update a villager  | redirect to /villagers/:id |
| DELETE  | /villagers/:id  | delete a villager  | redirect to /villagers     |


Items Chart


| Method  | URL         | Functionality  | View                   |
| ------- | ----------  | -------------- | ---------------------- |
| GET     | /items      | list all items | show items/index.ejs   |
| POST    | /items      | add an item    | redirect to /items/:id |
| GET     | /items/:id  | show one item  | show items/detail.ejs  |
| PUT     | /items/:id  | update a item  | redirect to /items/:id |
| DELETE  | /items/:id  | delete a item  | redirect to /items     |

## MVP Goals

* Functional application with all working routes
* User able to view their favorites list

## Stretch Goals

* Authenication
* Visually appealing application - CSS/Bootstrap
* Add more models/table for the users such as special events, DIY recipes, art, or music
* On the main page, display the villager's birthday depending on day
* Random page for user to click on to find something new

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
  * User routes/Villager routes - create loops
  * Stub routes - test routes
  * Build routes

* Wednesday
  * Finish routes
  * Create views

* Thursday
  * Finish views
  * MVP
  * Authentication

* Friday
  * Style pages
  * Stretch goals

* Saturday / Sunday
  * More styling
  * Stretch goals

## Resources | APIs

For this application I will be using the [ACNHAPI](http://achnapi.com/)

  * https://stackoverflow.com/questions/3298477/get-the-first-key-name-of-a-javascript-object
  
* Images:
  * Poket Camp Img | https://www.clipartkey.com/view/Jobbmi_animal-crossing-pocket-camp-tree/

