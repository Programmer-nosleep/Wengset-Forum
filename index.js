const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));
app.get('/page', (req, res)=> {
    res.sendFile(path.resolve(__dirname, './public/index.html'));
});

// app.all('*', (req,res)=> {
//     res.status(404).send(`Page Not Found.`);
// });

const Port = process.env.PORT || 80;

app.listen(Port, ()=> { 
    console.log(`Server Started on Port ${Port}`);
    // console.log(`Dont Worry, Because this is safely and not a bug`);
});