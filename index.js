const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const notes = require("./routes/notes.routes");
const users = require("./routes/users.routes");
const app = express();

let port = 3000;

//Initializers

//MongoDB
let dev_db_url = 'mongodb+srv://thirdfort:thirdfort@thirdfort-4arht.mongodb.net/thirdfort?retryWrites=true&w=majority';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
//connecting to the remotely hosted db
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//linking the routes created to the app
app.use('/notes', notes);
app.use('/users', users);

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});