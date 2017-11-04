function filtro(comments) {
   if (comments && comments.length){
      return comments.filter(comment => comment.message.length > 0); 
   }
   
   return [];
}

module.exports = comments => {
   comments.forEach(comment => comment.replies = filtro(comment.replies));
   return filtro(comments);
};