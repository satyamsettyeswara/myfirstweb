const express = require('express');
const app  = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);

app.use(express.static('./assets/'))

//extract style and scripts 
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
//express router
app.use('/',require('./routes'));

//setting up view engine
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err){
    if(err){
        // console.log(err); normal print
        // using interpolation (``)
        console.log(`Error in running the server${err}`);
    }
    console.log(`Running on port: ${port}`);
});