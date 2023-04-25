const express = require('express');
const app = express();

const port = 8000;

//use express router to get routes index
app.use('/',require('./routes/index'));

//view engine ejs
app.set('view engine','ejs');
app.set('views','./views')

app.listen(port,(err)=>{
    if(err){
    console.log(`err`,err);
    return; 
    }
    console.log(port)
})