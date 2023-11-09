const fs = require('fs')
const pathJSON = './json/books.json' //sempre buscar partindo da pasta raiz do projeto
const defaultData = JSON.parse(fs.readFileSync(pathJSON))

console.log(defaultData) //para que seja mostrado o valor alterado é preciso passar por extenço e não pela const criada

module.exports = { pathJSON }