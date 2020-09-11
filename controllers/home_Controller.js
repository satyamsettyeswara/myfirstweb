module.exports.home = function(req,res){
    return res.render('home',{
        title:'Codial'
    });
};
module.exports.com = function(req,res){
    return res.end('<h1> Came from home(com) </h1>');
};