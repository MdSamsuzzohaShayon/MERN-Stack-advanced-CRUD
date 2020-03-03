const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const exerciseRoute = require('./routes/exercises');
const userRoute = require('./routes/users');



const app = express();

require('dotenv').config(); //https://www.npmjs.com/package/dotenv
const URI = process.env.ATLAS_URI;

mongoose.connect(URI, { useNewUrlParser: true, useCreateIndex: true });
let connection = mongoose.connection;

connection.once('open', () => {
    console.log("Mongo db connection has been established successfully");
});
connection.on('error', (err) => {
    console.log(err);
});

const PORT = process.env.PORT || 5000;

app.use(cors()); //https://www.npmjs.com/package/cors
app.use(express.json());



// ROUTES
app.use('/exercises', exerciseRoute);
app.use('/users', userRoute);


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});