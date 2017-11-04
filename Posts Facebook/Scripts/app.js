const fs = require('fs');

let postsPages=[
   require('./ano16/post161111/1.1.json'),
   require('./ano16/post161111/2.1.json'),
   require('./ano16/post161118/1.1.json'),
   require('./ano16/post161124/1.1.json'),
   require('./ano16/post161128/1.1.json'),
   require('./ano16/post161206/1.1.json'),
   require('./ano16/post161209/1.1.json'),
   require('./ano16/post161212/1.1.json'),
   require('./ano16/post161216/1.1.json'),
   require('./ano16/post161220/1.1.json'),
   require('./ano16/post161221/1.1.json'),
   require('./ano16/post161223/1.1.json'),
   require('./ano16/post161229/1.1.json'),
   require('./ano16/post161231/1.1.json'),
   require('./ano17/post170101/1.1.json'),
   require('./ano17/post170102/1.1.json'),
   require('./ano17/post170105/1.1.json'),
   require('./ano17/post170105/2.1.json'),
   require('./ano17/post170111/1.1.json'),
   require('./ano17/post170116/1.1.json'),
   require('./ano17/post170126/1.1.json'),
   require('./ano17/post170127/1.1.json'),
   require('./ano17/post170131/1.1.json'),
   require('./ano17/post170201/1.1.json'),
   require('./ano17/post170201/1.2.json'),
   require('./ano17/post170204/1.1.json'),
   require('./ano17/post170215/1.1.json'),
   require('./ano17/post170220/1.1.json'),
   require('./ano17/post170220/1.2.json'),
   require('./ano17/post170220/1.3.json'),   
   require('./ano17/post170223/1.1.json'),
   require('./ano17/post170302/1.1.json'),
   // require('./ano17/post170308/1.1.json'), REPOSTER
   // require('./ano17/post170316/1.1.json'),
   // require('./ano17/post170323/1.1.json'),
   // require('./ano17/post170404/1.1.json'),
   // require('./ano17/post170404/1.2.json'),
   // require('./ano17/post170404/1.3.json'),
   // require('./ano17/post170404/1.4.json'),   
];
let reposterPages=[
   require('./ano17/post170308/1.1.json'),
   require('./ano17/post170308/1.2.json'),
   require('./ano17/post170308/1.3.json'),
   require('./ano17/post170308/1.4.json'),
   require('./ano17/post170308/1.5.json'),
   require('./ano17/post170308/1.6.json'),
   require('./ano17/post170308/1.7.json'),
   require('./ano17/post170308/1.8.json'),
   require('./ano17/post170308/1.9.json')  
];

let reposter=reposterPages.map(page => page.data).reduce((a,b) => a.concat(b),[]);
let posts=postsPages.map(page => page.data).reduce((a,b) => a.concat(b),[]);

let duplicates=reposter.filter(repost => posts.some(post => post.from.id === repost.from.id));
let summary=duplicates.map(duplicate => ({
   commentId: duplicate.id,
   message: duplicate.message,
   userId: duplicate.from.id,
   replies: duplicate.comments ? duplicate.comments.data.length : 0,
   previous: []
})).sort((a,b) => a.message.length > b.message.length ? -1 : 1);

let map=new Map();
summary.forEach(post => map.set(post.userId, post));
posts.map(post => ({
   commentId: post.id, 
   message: post.message,
   userId: post.from.id, 
   date: post.created_time
})).forEach(post => {
   if(map.has(post.userId)){
      let match = map.get(post.userId);
      match.previous.push(post);
   }
});

let json=JSON.stringify([...map]);
console.info('json', json);
fs.writeFile('result.json', json, 'utf8');

console.info('posts', posts.length);
console.info('reposter', reposter.length);
console.info('duplicates', duplicates.length);
// console.info('summary', summary);
// console.info('map', map);