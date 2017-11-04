function filtro(comments) {
   if (comments && comments.length) {
      return comments.filter(comment => {
         if (comment.from.id === '132584057957') {
            // console.log('comment.from.id', comment.from.id);
            // console.log('comment.from.id', comment);
         }
         return comment.from.id !== '132584057957';
      });
   }
   
   return [];
}

module.exports = comments => {
   let teste = filtro(comments);
   teste.forEach(comment => comment.replies = filtro(comment.replies));
   return teste;
};