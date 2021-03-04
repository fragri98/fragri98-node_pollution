# PROJECT

This is a Node.js app that report polluted areas in the vicinity: the user must upload an image and provide address, city and post code. It is also possible to see all the photos uploaded in the database by clicking VIEW ALL.

**Edit .env.example with your credential and rename this file as .env**

## STRUCTURE

```bash
PROJECT ROOT
├── CONTROLLERS
│   ├── getAll.js: returns views/all.ejs.
│   ├── home.js returns views/index.html.
│   └── upload.js: handles upload and store images.
├── MODELS
│   ├── image.model.js: defines the Sequelize model. Represents the 'images' table in the MySQL Database
│   └── index.js: uses the db.config.js file configuration to initialize Sequelize. Using MAMP, I configured this file to match this; it may be necessary to make changes.
├── CONFIG
│   └── db.config.js: for configuring MySQL database.
├── MIDDLEWARE
│   └── upload.js: defines middleware function and initializes Multer Storage engine.
├── ROUTES
│   └── web.js: defines routes for endpoints that is called from views
├── VIEWS
└── server.js: initializes routes, runs the app.
```


## DB (MySQL) Structure

Database DB_NAME -> table 'image'


|id|int(11)|A_I|

|address|varchar(255)|

|city|varchar(255)|

|cap|int(11)|  

|type|varchar(255)|

|name|varchar(255)|

|createdAt|datetime|  

|updatedAt|datetime|
