const express = require('express');
const authRoutes = require('./routes/auth-routes');

const app = express();

//Set up view engine
app.set('view engine','ejs');

//Set up auth routes with Auth
app.use('/auth',authRoutes);

//Default Route to home
app.get('/',(req,res)=>{
    res.render('home');
});

app.listen(3000,()=>{
    console.log('app now listening for requests on port 3000');
});
