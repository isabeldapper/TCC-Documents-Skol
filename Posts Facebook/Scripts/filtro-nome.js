function filtro(comentarios) {
    if (comentarios && comentarios.length) {
        return comentarios.filter(comentario => comentario.message.replace(/([A-Z][\w-]*(\s+[A-Z][\w-]*)+)/, '').length > 0);
    }

    return [];
}

module.exports = comentarios => {
    comentarios.forEach(comentario => comentario.replies = filtro(comentario.replies));
    return filtro(comentarios);
};