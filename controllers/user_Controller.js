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
    
}
//sign in session
module.exports.createSession = function(req,res){
    
}