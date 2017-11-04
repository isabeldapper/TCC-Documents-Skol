const load = require('./loader');

let reposterPages=[
   require('../Comments/ano17/post170308/1.1.json'),
   require('../Comments/ano17/post170308/1.2.json'),
   require('../Comments/ano17/post170308/1.3.json'),
   require('../Comments/ano17/post170308/1.4.json'),
   require('../Comments/ano17/post170308/1.5.json'),
   require('../Comments/ano17/post170308/1.6.json'),
   require('../Comments/ano17/post170308/1.7.json'),
   require('../Comments/ano17/post170308/1.8.json'),
   require('../Comments/ano17/post170308/1.9.json')  
];

module.exports = load(reposterPages);
