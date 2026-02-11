import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const textRender = readFileSync(path.join(__dirname, 'main.txt'), 'utf8');

console.log(textRender);
 
setInterval(()=>{
    console.log(__dirname);
}, 1000);
