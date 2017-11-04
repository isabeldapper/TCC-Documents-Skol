const fs = require('fs');

module.exports = (data, filename) => {
    let json = JSON.stringify(data);
    fs.writeFile('Resultados/' + filename, json, 'utf8');
}
