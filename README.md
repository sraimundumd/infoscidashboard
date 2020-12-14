# infoscidashboard
Final project for INST 377 regarding a INST Dashboard 

* Description: An application for Information Science students to easily search for INST courses and save them the hassle of navigating through Testudo - Schedule of classes.
* Heroku link: https://infoscidashboard.herokuapp.com
* Target browsers: Desktop, IOS devices as well (Mobile Screen not organized)


### Developer Manual
##### How to install our application and all dependencies -
First step would be to clone the repo from our main branch infoscidashboard. Once cloned, open the repo in any code or text editor, we prefer Visual studio code. Once opened you want to install npm by runing "npm install". This will instal node js that will be used to run our server.
##### How to run our application on a server -
Once that is installed sucessfully you will open up a new terminal window and start the server by running the command "npm start". This will run our server on port 3000 and you will be able to open the app in your browser by going to http://localhost:3000/ This will allow you to experience live commits and open the app up on a local host domain on your device.
##### How to run any tests you have written for your software you to use the application.
###### The API for your server application - 
    GET- UMD.IO is a GETFUL API. GET request is needed to retrieve information regarding courses
    Endpoint- https://api.umd.io/v0/courses , UMD.IO
    POST- will return information only from the ISchool (dept_id="INST") from the following semesters 


    dept_id:"INST",
      semester:"202101",
      semester:"202008",
      semester:"202001",
      semester:"201908",
      semester:"201901",
      semester:"201808",
      semester:"201801",
      semester:"202101"

###### Bugs 
* UMD.IO API retrieval of information will return a 404 error "No classes are available for this semester". This happens towards the end of the semester when classes are being uploaded into the API. Since the API only pulls current class information you may experience this using the API towards the ending of a semester. 
* Use of Mozilla Firefox to use Localhost3000 may cause memory issues, in which the application may not run. We reconmend using Google Chrome 
###### Future development plans: 
* Work on formatting the output of classes
* Attempt to retrieve more data from the API
* Use of local storage to create a watchlist for students 