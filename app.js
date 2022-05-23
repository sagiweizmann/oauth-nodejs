const express = require('express');
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');

const app = express();

//Set up view engine
app.set('view engine','ejs');

//connect to mongodb
mongoose.connect(keys.mongodb.dbURI,() =>{
    console.log('connected to mongodb');
});

//Set up auth routes with Auth
app.use('/auth',authRoutes);

//Default Route to home
app.get('/',(req,res)=>{
    res.render('home');
});

app.listen(3000,()=>{
    console.log('app now listening for requests on port 3000');
});
