// https://developers.facebook.com/docs/graph-api/reference/v2.5/insights

const save = require('./save');
const fs = require('fs');

const periodo1 = require('../Insights/1.json');
const periodo2 = require('../Insights/2.json');

const periodo = periodo1.data[0].values.concat(periodo2.data[0].values);

function getDate(endTime) {
    let date = new Date(endTime);
    date.setDate(date.getDate() - 1);
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}


let insights = periodo.map(v => ({
    date: getDate(v.end_time),
    value: v.value.BR
}));
    
// json
save(insights, 'insights.json');

// csv
let csv = 'A,B\n';
insights.forEach(v => csv += `${v.date},${v.value}\n`);
fs.writeFile('insights.csv', csv, 'utf8');
