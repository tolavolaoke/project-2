# sg-project-3

## Project: Angular JS SPA - Family Tree

###Synopsis

This App allows users to create an account and create a list of relatives and gives users the ability to locate them on google maps.

This project is a MEAN app that uses a rMVC approach and uses HTTP requests. It involved Node/Express server-side, and AngularJS client-side and an external API to create a single page application.

A demo of this app is available on Heroku https://sg-project-3-to.herokuapp.com/#!/

###Installation

####To use this app:

* Clone the repository
* In the command line npm install
    * This will install all the necessary dependencies in the package.json file
* To start up the server input in the terminal npm run nodemon.


##Functions

* This project uses Firebase to create new users, signing in and signing out.
* The user can create and update a list of relatives by using a form where they can input the following first name, last name, relation and location.
* The user can select a location using the dropdown option which provides a list of places from the Google Places API.
* The user can view the location of the relative saved onto the Google Maps.

##Technologies Used

* The server is running with node.js
* The client side also referred to the frontend of the App is built using AngularJs which controls the states through ui-routing and the logic to create a single page app.
* The users relative will also be saved onto MongoDB
* The app is built with HTML, CSS and JavaScript
* The styling is done by CSS and Bootstrap

##Author

Tola Olaoke

##Useful Resources

* w3Schools
* Angular Docs
* http://angular-ui.github.io/angular-google-maps/#!/quickstart
