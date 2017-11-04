const fs = require('fs');
const reposter = require('./reposter');
const filtroVazio = require('./filtro-vazio');
const filtroSkol = require('./filtro-skol');

//console.log('vazio', reposter.map(c => c.replies).reduce((a,b) => b.concat(a), []).filter(c => c.message.length === 0));

// let json=JSON.stringify(reposter);
// console.info('json', json);
// fs.writeFile('teste.json', json, 'utf8');

function total(comments){
   return comments.length + comments.map(c => c.replies).length;
}

console.log("total", total(reposter));

let naoVazio = filtroVazio(reposter);
console.log("não vazio", total(naoVazio));

let naoSkol = filtroSkol(naoVazio);
console.log("não skol", total(naoSkol));