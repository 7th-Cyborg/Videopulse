# Videopulse

Videopulse is a mobile web application that makes it easy to discover and watch online videos.

## Technologies Used

Front End :

* HTML
* CSS
* Bootstrap
* JavaScript
* AngularJS
* jQuery ( Bootstrap dependency )

Backend :

* JavaScript
* Node.js
* Express.js
* JSON

## Repository structure

```
Videopulse/
+--wwwroot/
	+--app/							AngularJS application
		+--/components 				Controllers, Views
		+--/shared 					Services
		+--app.module.js 			Module
		+--app.routes.js 			Routes
	+--/assets 						CSS, Images, Third Party Libraries
	+--/data 						Node.js server data
+--server.js 						Node.js server script
```

## Installing Dependencies

Before you can run Application, you must install and configure latest Node.js on your machine:

```
https://nodejs.org/en/download/current/
```

## Download Application

You can either clone or download from GitHub repository.

Clone GitHub repository:

```
git clone https://github.com/7th-Cyborg/Videopulse.git
```

Download GitHub repository:

```
https://github.com/7th-Cyborg/Videopulse/archive/master.zip
```

After its downloaded extract files from an archive into a folder.

## Running Application

First open a cmd window in a project folder location (the one that have package.json file ).

1. To start Node.js server, run:

```
npm start
```

2. To access the local server, enter the following URL into your web browser:

```
http://localhost:8080/
```