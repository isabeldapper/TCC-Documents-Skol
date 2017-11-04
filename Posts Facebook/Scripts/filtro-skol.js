function filtro(comentarios) {
    if (comentarios && comentarios.length) {
        return comentarios.filter(comentario => comentario.from.id !== '132584057957');
    }

    return [];
}

module.exports = comentarios => {
    comentarios.forEach(comentario => comentario.replies = filtro(comentario.replies));
    return filtro(comentarios);
};