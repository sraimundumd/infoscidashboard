# infoscidashboard
Final project for INST 377 regarding a INST Dashboard 

* Description: An application for Information Science students to easily search for INST courses and save them the hassle of navigating through Testudo - Schedule of classes.
* Heroku link: https://infoscidashboard.herokuapp.com
* Target browsers: Desktop, 1280px min
* [User Manual](#-user-manual)
* [Developer Manual](#-developer-manual)









### User Manual
To work the application, click the Heroku link above. Once on the application, choose the method you want to search the class/classes you are looking for. If you decide to use the search method, type in the INST class you want to search for and click the 'Submit' button. After the button is clicked, the INST class searched should show below along with the amount of credits it is and a description if one is available. If you decide to use the semester search method, simple click on the "Semester" drop down menu to the right of the search bar and choose the semester you are searching for. Then, simply click the 'Submit' button, and the INST classes available for that semester will print out below. If you decide to use the credit search method, simple click on the "Credits" drop down menu to the right of the "Semester" drop down menu and choose the amount of credits you are searching for. Then, simply click the 'Submit' button, and the INST classes that fall in that credit range will print out below. If you want to clear the output, simply click on the dashboard logo to the top right of the screen, and it will return you to a clear main page. Also if you are stressed, simply clicked "Stressed Students Click Here" menu option at the top right of the screen and watch your stress disappear due to an overload of cuteness.




### Developer Manual
##### How to install our application and all dependencies -
The first step is to clone the repository from our main branch infoscidashboard. To do this, go to the infoscidashboard repository. Click on the button to the right called "Code" and a drop down menu is available. Click on "Open with GitHub Desktop" in that menu and follow along Github Desktop instructions to complete the clone. Next, in Github Desktop click "Open in Visual Studio Code". Once opened, open a terminal window and run the command 'npm install'. This will install node js that will be used to run our server.
##### How to run our application on a server -
Once that is installed sucessfully, you will open up a new terminal window and start the server by running the command "npm start". This will run our server on port 3000 and you will be able to open the app in your browser by going to http://localhost:3000/ This will allow you to experience live commits and open the app up on a local host domain on your device.
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
* Use of local storage to create a watchlist and mylist for students 
