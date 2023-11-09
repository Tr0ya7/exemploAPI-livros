const fs = require('fs')
const { pathJSON } = require('../connection/connection')
const readJSON = JSON.parse(fs.readFileSync(pathJSON)) //recebe todo o array json

function getAllBooks() {
    return readJSON //recebe todo o array json
}

function getBookById(id) {
    const filterBook = readJSON.filter((book) => book.id === id)[0] //filtra todos os livros do array pelo id escolhido, criando uma nova lista com o elemento filtrado, mas como possui o [0] para pegar somente o valor isolado e unico ele não retorná-ra uma lista nesse caso
    
    return filterBook
}

function insertNewBook(newBook) {
    const newBooksList = [...readJSON, newBook] //lista anterior JSON + novo item adicionado

    fs.writeFileSync(pathJSON, JSON.stringify(newBooksList)) //pega a lista nova criada na constante newBookList e transforma em uma lista Json e insere no arquivo books.json
}

function modifyBook(id, modifications) {
    var currentBooks = readJSON //para conseguir modificar os livros atuais é necessário ser ou uma var ou let
    const modifiedBook = currentBooks.findIndex((book) => book.id === id) //descobre qual o id do elemento que deve ser modificado, id esse recebido como parametro vindo da url
    const changes = {...currentBooks[modifiedBook], ...modifications} //verifica qual(is) campos foram mudados no elemento desejado

    currentBooks[modifiedBook] = changes
    fs.writeFileSync(pathJSON, JSON.stringify(currentBooks))
}

function deletingBook(id) {
    const book = readJSON.filter((book) => book.id !== id) //nova lista com todos os livros menos o do id que deseja deletar
    fs.writeFileSync(pathJSON, JSON.stringify(book)) //modifica o arquivo criando uma nova lista sem aquele com o id que você quis deletar
}

module.exports = { getAllBooks, getBookById, insertNewBook, modifyBook, deletingBook }