const User = require('../models/user');
module.exports.profile = function(req,res){
    return res.render('user_profile',{
        title:'User Profile'
    });
}
//user signup page
module.exports.signup = function(req,res){
    return res.render('user_sign_up',{
        title:"Codial | Sign Up"
    });
}
//user signin page
module.exports.signin = function(req,res){
    return res.render('user_sign_in',{
        title:"Codial | Sign In"
    });
}
//get sign up data
module.exports.create = function(req,res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }
    User.findOne({email:req.body.email},function(err,user){
        if(err){ console.log('Error in creating user1');return; }
        if(!user){            
            User.create(req.body,function(err,user){
                if(err){ console.log('Error in creating user2');return; }
                return res.redirect('/users/sign-in');
            })
        }
        else{
            return res.redirect('back');
        }
    });
}
//sign in session
module.exports.createSession = function(req,res){
    
}