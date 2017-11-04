function reduce(comments) {
   return comments
      .map(page => page.data)
      .reduce((a,b) => a.concat(b),[])
   ;
}

function getReplies(comment) {
   if (comment && comment.comments) {
      return comment.comments.data;
   }

   return [];
}

module.exports = array => {
   let comments = reduce(array);

   comments.forEach(comment => {
      comment.replies = getReplies(comment);
      delete comment.comments;
   });

   return comments;
}