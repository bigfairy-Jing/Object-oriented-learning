const fs = require('fs');
const readline = require('readline');

let rl = readline.createInterface({
  input: fs.createReadStream('./observer4.js')
});
let lineNum = 0;
rl.on('line', () => {
  lineNum++
})
rl.on('close', () => {
  console.log('lineNum', lineNum)
})
