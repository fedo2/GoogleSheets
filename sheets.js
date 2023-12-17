const sheetID = '1P0qr-pH2GoFq2ZsUwSD9NhA6AMMs1wRhdHSbQWV1c4s';
const base = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?`;
const sheetName = 'test';
const qu = 'Select A,B,C';
const query = encodeURIComponent(qu);
const url = `${base}&sheet=${sheetName}&tq=${query}`;
// console.log(url);
const data = [];
document.addEventListener('DOMContentLoaded', init);

const output = document.querySelector('.output');

function init() {
    console.log('ready');
    fetch(url)
    .then(res => res.text())
    .then(rep => {
        const jsData = JSON.parse(rep.substr(47).slice(0,-2));
        console.log(jsData);

        const header = jsData.table.rows.shift();
        const h = [];
        header.c.forEach((temp) => {
            h.push(temp.v);
        })
// data = [{status:'Ano', jmeno: 'Veselý Josef', email: 'joves@example.com},
//         {status:'Ano', jmeno: 'Veselý Josef', email: 'joves@example.com},
//         {status:'Ano', jmeno: 'Veselý Josef', email: 'joves@example.com}]


        console.log('h=', h);
        jsData.table.rows[1].c.forEach((temp, ind) => {
            console.log(ind, temp.v);
        })
        })
    }

