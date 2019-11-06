# Simple Dashboard App with Authentication 

### Overview

A task for to develop a React Native application according to the following specifications:

1) A simple login screen, prompting for username/password for our service. The app will retrieve a token from a rest API and store all these in the app for future use.
2) A dashboard page (“app home page”) with some dynamic data displayed (some might be links) and a large main button to open our service. The button and all other links will open the phone default browser with the token added to the supplied links. The dashboard contents will be retrieved through the rest api (details below).
3) A settings page, that will allow setting for push notifications and offer a logout option.
4) Catch notifications (this is the most important functionality, and the main “reason” for the app)


### Wireframes 

The following wireframes were supplied by the customer

Login Screen
![alt text](https://i.imgur.com/TJwc2Dh.png)

Dashboard and Settings Screens
![alt text](https://i.imgur.com/T3occCl.png)

### Technology Stack

 * **Firebase Authentication** was used to authenticate the users and store the user data
 * **Firebase Database** was used to store the settings data
 * **FontAwesome** was used for icons in the app
 * **React Navigation Stack** was integrated for the navigation purposes
 * **React Gesture Handler** was integrated in order to handle swipe gestures
 * **Random User API** was used to populate the Dasboard
 
 ### Live Demo 
 
 A screenrecording can be viewed here: https://www.youtube.com/watch?v=uUXyLScl4TM
