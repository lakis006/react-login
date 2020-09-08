const express = require("express");
const mongoose = require("mongoose");
const cors= require("cors");
require("dotenv").config();
const path = require('path');

// set up express 

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Running on port: ${PORT}`));

// set up mongoose 

mongoose.connect( process.env.MONGODB_URI || process.env.MONGODB_CONNECTION_STRING, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
}, (err) => {
    if (err) throw err;
    console.log("MongoDB connection established")
});

// set up routes 

app.use("/users", require("./routes/userRouter"));


if (process.env.NODE_ENV === 'production') {
    app.use(express.static( 'login-mern/build' ));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'login-mern', 'build', 'index.html')); //relative path 
    });
}
