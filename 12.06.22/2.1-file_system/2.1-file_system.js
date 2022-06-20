const fs = require('fs');



// 1
fs.writeFileSync('node.txt', 'Hello World!!');

// 2
fs.copyFileSync('node.txt', 'copyNode.txt');

// 3
fs.renameSync('node.txt', 'helloWorld.txt')

// 4
fs.appendFileSync('copyNode.txt', 'Moshe Hadad');
