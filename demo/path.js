const path = require('path');

console.log('File name:', path.basename(__filename));
console.log('Dir name:', path.dirname(__dirname));
console.log('File ext:', path.extname(__filename));
console.log('Parse: ', path.parse(__filename));


