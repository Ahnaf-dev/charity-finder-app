# Charity Finder App
A simple charity finder app that allows you to find active charities and view their ongoing projects .

[Live Link](https://charity-finder-app.netlify.app/)

## Technologies

### Frontend
* [Global Giving API](https://www.globalgiving.org/api/)
* **Languages**: HTML5, CSS3, ES6 JavaScript
* **Frameworks**: JQuery, TypeScript, Ajax, SCSS/SASS
* **Testing**: Jest
* **Build Tools**: Webpack, Babel, Gulp, NPM
* **Clean Code**: Clear Variable Names, Reusable Logic (DRY), One Function One Action, Simple Code, Clean Folder Structure
* **Performance**: Single Page Application Router, Minified Images

## Features

### Technical Features

*  Created single page app router using `Locations API` and `ES6 JavaScript` logic. Components will render into the `DOM`depending on the URL.
*  Unit tested over 4 functions using `Jest` to ensure they work properly and applied `BDD` (red, green, refactor) concepts.
*  Fetched GlobalGivings API using `Ajax` and incorporated the returned `JSON` data into `semantic HTML` tags to be styled by `SASS`.
*  Simple local `state management` using objects.
*  Created load more functionality by interacting with API and recursively doing function calls to add returned state to previous state until API runs out of pages.
*  Developed filtering functionality by cloning state array, applying filters from user inputs and displaying the filtered array into UI components.
*  Integrated `Webpack` to create a clean modular environment, bundling `TypeScript`, `SASS`, images and `Babel` into one minified script.
*  Incorporated `Gulp` to optimize images instead of manual image optimization.
*  Wrote clean code by giving `clear variable names`, following `DRY` principles for code `reusability`, one action per function, `simplifying` code and commenting where needed.
* Clean project structure to increase project `maintainability` and `scalability`.
* Utilized `JQuery` to write less and `simple` code for `manipulating the DOM`.
* Styled with `SASS` using variables, mixins and partials.

### User Features

* Upon visiting a website, users will see information on what the application is about with a button to proceed to the site.
* After proceeding to the site, the user will see a list of 10 charities with a load more button, search bar and a select input.
* If user clicks on a load more button, they will see 10 more additional charities displayed.
* User's can filter the displayed charities with the search and select inputs.
* Upon clicking view projects button, users will be able to see all the active projects ongoing by the charity chosen.

