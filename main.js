const { readFileSync } = require('fs');

const textRender = readFileSync('./main.txt', 'utf8');

console.log(textRender);
 
setInterval(()=>{
    console.log(__dirname);
}, 1000);