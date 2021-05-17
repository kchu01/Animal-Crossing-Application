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

| Method  | URL             | Functionality           | View                 |
| ------- | ----------      | --------------          | -------------------  |
| GET     | /users/new      | sign up                 | redirect to /new     |
| POST    | /users          | create new user         | redirect to /        |
| GET     | /users/login    | login                   | redirect to /login   |
| GET     | /users/login    | logs in new user        | redirect to /login   |
| GET     | /users/profile  | direct user to fav prof | redirect to /profile |
| GET     | /users/logout   | logout                  | redirect to /        |


Villagers Chart

| Method  | URL             | Functionality      | View                   |
| ------- | ----------      | --------------     | -----------------------|
| GET     | /villagers      | list all villagers | show villagers/index   |
| POST    | /villagers      | favs a villager    | redirect to /favorites |
| GET     | /villagers/:id  | show one villager  | show villagers/show    |
| DELETE  | /villagers/:id  | delete a villager  | redirect to /favorites |



Items Chart

| Method  | URL         | Functionality  | View                   |
| ------- | ----------  | -------------- | ---------------------- |
| GET     | /items      | list all items | show items/index       |
| POST    | /items      | favs an item   | redirect to /favorites |
| GET     | /items/:id  | show one item  | show items/show        |
| DELETE  | /items/:id  | delete a item  | redirect to /favorites |

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


## Resources | APIs

For this application I will be using the [ACNHAPI](http://achnapi.com/)

  * https://stackoverflow.com/questions/3298477/get-the-first-key-name-of-a-javascript-object
  * https://www.freecodecamp.org/news/how-to-create-an-image-gallery-with-css-grid-e0f0fd666a5c/
  * https://www.w3schools.com/howto/howto_js_sticky_header.asp
  * https://stackoverflow.com/questions/3794919/replace-all-spaces-in-a-string-with
  
* Images:
  * Poket Camp Img | https://www.clipartkey.com/view/Jobbmi_animal-crossing-pocket-camp-tree/

