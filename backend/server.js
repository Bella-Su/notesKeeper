const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");


//environment varibles env
require('dotenv').config();

//create express server
const app = express();
const port = process.env.PORT || 5000;

//create middleware
app.use(cors());
app.use(express.json());

//connect to mongodb
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser:true});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
})

//require and use the files
const notesRouter = require("./routes/notes");
app.use("/notes", notesRouter);




//start the sever
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});