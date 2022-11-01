const fs = require('fs');
const json = JSON.stringify({
  a:1,
  b:2
})
fs.appendFile('./file/message.txt', '\n'+json, (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
  fs.readFile('./file/message.txt','utf8', (err, fd) => {
    console.log('fd',fd)
    // => [Error: EISDIR: illegal operation on a directory, open <directory>]
  });
});
