const express = require('express');
const app  = express();

const port = 8000;

app.use('/',require('./routes/index'));
app.use('/com',require('./routes/index'))
app.listen(port,function(err){
    if(err){
        // console.log(err); normal print
        // using interpolation (``)
        console.log(`Error in running the server${err}`);
    }
    console.log(`Running on port: ${port}`);
});