let postsPages=[
   require('../Comments/ano16/post161111/1.1.json'),
   require('../Comments/ano16/post161111/2.1.json'),
   require('../Comments/ano16/post161118/1.1.json'),
   require('../Comments/ano16/post161124/1.1.json'),
   require('../Comments/ano16/post161128/1.1.json'),
   require('../Comments/ano16/post161206/1.1.json'),
   require('../Comments/ano16/post161209/1.1.json'),
   require('../Comments/ano16/post161212/1.1.json'),
   require('../Comments/ano16/post161216/1.1.json'),
   require('../Comments/ano16/post161220/1.1.json'),
   require('../Comments/ano16/post161221/1.1.json'),
   require('../Comments/ano16/post161223/1.1.json'),
   require('../Comments/ano16/post161229/1.1.json'),
   require('../Comments/ano16/post161231/1.1.json'),
   require('../Comments/ano17/post170101/1.1.json'),
   require('../Comments/ano17/post170102/1.1.json'),
   require('../Comments/ano17/post170105/1.1.json'),
   require('../Comments/ano17/post170105/2.1.json'),
   require('../Comments/ano17/post170111/1.1.json'),
   require('../Comments/ano17/post170116/1.1.json'),
   require('../Comments/ano17/post170126/1.1.json'),
   require('../Comments/ano17/post170127/1.1.json'),
   require('../Comments/ano17/post170131/1.1.json'),
   require('../Comments/ano17/post170201/1.1.json'),
   require('../Comments/ano17/post170201/1.2.json'),
   require('../Comments/ano17/post170204/1.1.json'),
   require('../Comments/ano17/post170215/1.1.json'),
   require('../Comments/ano17/post170220/1.1.json'),
   require('../Comments/ano17/post170220/1.2.json'),
   require('../Comments/ano17/post170220/1.3.json'),   
   require('../Comments/ano17/post170223/1.1.json'),
   require('../Comments/ano17/post170302/1.1.json'),
   // require('../Comments/ano17/post170308/1.1.json'), REPOSTER
   // require('../Comments/ano17/post170316/1.1.json'),
   // require('../Comments/ano17/post170323/1.1.json'),
   // require('../Comments/ano17/post170404/1.1.json'),
   // require('../Comments/ano17/post170404/1.2.json'),
   // require('../Comments/ano17/post170404/1.3.json'),
   // require('../Comments/ano17/post170404/1.4.json'),   
];

let posts=postsPages
.map(page => page.data)
.reduce((a,b) => a.concat(b),[])
;

module.exports = posts;