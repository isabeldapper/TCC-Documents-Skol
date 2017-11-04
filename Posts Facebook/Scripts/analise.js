const fs = require('fs');
const reposter = require('./reposter');
const filtroVazio = require('./filtro-vazio');
const filtroSkol = require('./filtro-skol');
const filtroNome = require('./filtro-nome');

function total(comentarios){
    return comentarios.length + comentarios.map(c => c.replies).reduce((a,b) => b.concat(a), []).length;
}

let filtrado = reposter;

console.log("total", total(filtrado));

filtrado = filtroSkol(filtrado);
console.log("não skol", total(filtrado));

filtrado = filtroVazio(filtrado);
console.log("não vazio", total(filtrado));

filtrado = filtroNome(filtrado);
console.log("não nome", total(filtrado));

let consolidado = filtrado.map(c => ({ message: c.message, replies: c.replies.map(r => r.message) }));

let json=JSON.stringify(consolidado);
fs.writeFile('consolidado.json', json, 'utf8');