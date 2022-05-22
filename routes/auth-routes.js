const router = require('express').Router();
const passport = require('passport');

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
router.get('/google',passport.authenticate('google',{
    scope:['profile']
}));

module.exports = router;