const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf8');

console.log(first);
console.log(second);

writeFileSync('./content/result-sync.txt', `here is the result ${first}, ${second}`);
