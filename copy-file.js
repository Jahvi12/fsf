const fs = require('fs');


fs.copyFile('nuevo_archivo.txt', 'text.txt', (err) => {
  if (err) throw err;
  console.log('nuevo_archivo.txt a sido copiado a text.txt');
});