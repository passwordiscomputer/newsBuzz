##NEWS BUZZ
News Buzz is the news website that allows you to create your own front page. Once you get the site set up or visit our hosted website simply select a few news sources you like and either select a category or enter a keyword for a specific topic you are interested in. After doing this a module will be created on the page full of the latest breaking stories on the topics you selected from the sources you want. Experiment with some different combinations and see what works for you. We suggest  keeping the sources narrow and the categories/keywords broad or vice versa. A good example of a query would be entering keywords "mueller" and "trump", then choosing sources like "washington times", wallstreet journal", and "new york times".

##Getting Started
To download your own instance of the site and run it locally follow these instructions.
enter the following command line prompts
  1. $ git clone https://github.com/passwordiscomputer/newsBuzz.git
  2. $ npm install
  3. $ ng serve --open
To see check it out online just visit https://newsbu-35630.firebaseapp.com/
##Prerequisites
You must have node and angular cli installed

##Features
######current Features
  1. Simple user interface
  2. New Story Holder component maker
  3. Story Holder Component that keeps displays newest stories based on user Input
#######future Features
  1. User Authentication
  2. Ability to save stories
  3. Ability to edit query parameters
  4. Store information from api so it will only update on a predertimined interval and not on page reload to save api calls and make page run faster.
  5. Twitter intergration to track stories user is interested in.
##Built With
ANGULAR
ANGULAR CLI
Bootstrap
eventregistry.com api
newsAPI api
Firebase





Authors
Billie Thompson - Initial work - PurpleBooth


License
This project is licensed under the MIT License - see the LICENSE.md file for details

Acknowledgments
Hat tip to anyone who's code was used
Inspiration
etc

######Generated README####
# NewsWebsite

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
