const router = require('express').Router();

//Auth Login 
router.get('/login',(req,res)=>{
    res.render('login');
});

//Auth Logout
router.get('/logout',(req,res)=>{
    //Handle the logout with passport
    res.send('logging out');
});



//Authenticate with Google
router.get('/google',(req,res)=>{
    //handles with passport
    res.send('logging in with google');
});

module.exports = router;