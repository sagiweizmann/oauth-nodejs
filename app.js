const express = require('express');

const app = express();

//set up view engine
app.set('view engine','ejs');

//create home router
app.get('/',(req,res)=>{
    res.render('home');
});

app.listen(3000,()=>{
    console.log('app now listening for requests on port 3000');
});
