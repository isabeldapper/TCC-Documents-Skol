const fs = require('fs');



const reposter = require('./reposter');
const posts = require('./skol');


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