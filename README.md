# Project : EliteScheduleApp
## By  Fouad Asharf

## Table of contents
- [Description](#description)
- [Technologies](#technologies)
- [Required Libraries and Dependencies](#required-libraries-and-dependencies)
- [How to Run Project](#how-to-run-project)
- [Copyright and license](#copyright-and-license)

## Description
Hybrid app contains the schedules for all active leagues and tournaments of basketball sport, this project is a part of the
Pluralsight's [Building Mobile Apps With the Ionic Framework and AngularJS](https://www.pluralsight.com/courses/building-mobile-apps-ionic-framework-angularjs)


## Technologies
* [Ionic 1](https://ionicframework.com/docs/v1/)
* [Cordova](https://cordova.apache.org/docs/en/latest/)
* [AngularJS 1.5.3](https://code.angularjs.org/1.5.3/docs/guide)
* [Angular Ui-Router](https://ui-router.github.io/ng1/)
* [lodash](https://lodash.com/)
* [showdownjs](http://showdownjs.com/)



## Required Libraries and Dependencies
* Ionic CLI and Cordova:
     * install them globally by using the following command:
       ```
       npm install -g ionic cordova
       ```
## How to Run Project

1. clone or download this repository.

2. run the app on the browser by using the following commands:
      1. Navigate to the project folder:
          ```
          cd EliteScheduleApp
          ```
      2. Install app dependancies:
          ```
          npm install
          ```
          ```
          bower install
          ```
      3. Start the app:
          ```
          ionic serve
          ```
      
 4. run and build the app for android or ios by using the following commands:
 .
      1. Navigate to the project folder:
          ```
          cd EliteScheduleApp
          ```
      2. run and build for android:
          ```
          ionic cordova platform add android
          ```
          ```
          ionic cordova run android
          ```
      3. run and build for ios:
          ```
          ionic cordova platform add ios
          ```
          ```
          ionic cordova build ios
          ```
          ```
          ionic cordova emulate ios
          ```


## Copyright and License
- supplied without rights information contributed by [Pluralsight](https://app.pluralsight.com) and [Steve Michelotti](https://app.pluralsight.com/profile/author/steve-michelotti).
