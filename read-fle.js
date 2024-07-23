const fs = require('fs');

const data = fs.readFileSync('./text.txt',
    { encoding: 'utf8', flag: 'r' });
console.log(data);