const { getAllBooks, getBookById, insertNewBook, modifyBook, deletingBook } = require('../services/books')

function getBooks(req, res) {
    try {
        res.send(getAllBooks())
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

function getBook(req, res) {
    try {
        const id = req.params.id //pega o id do final da url e passa como constante //id é o nome escolhido por mim passado na url do path -> :id

        if (id && Number(id)) { //verifica a url informada
            res.send(getBookById(id)) //getBookById recebe como parametro o id passado na linha de cima que vem do final da url pesqusada
        } else {
            res.status(422) //valor não esperado pela aplicação, ou seja, o valor não é numérico
            res.send('url inválida')
        }
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

function postBook(req, res) {
    try {
        const newBook = req.body

        if (req.body.id && req.body.nome) { //verifica se o campo inserido possui um nome dentro de seu body antes de ser inserido
            insertNewBook(newBook)
            res.status(201) //status de criado com sucesso -> post inserido com sucesso
            res.send('Sucesso post')
        } else {
            res.status(422)
            res.send('Adicione os campos que faltam')
        }
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchBook(req, res) {
    try {
        const id = req.params.id //id do livro na url
        
        if (id && Number(id)) {
            const body = req.body //dados modificados
            modifyBook(id, body)
            res.send('Sucesso patch')
        } else {
            res.status(422)
            res.send('url inválida')
        }
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteBook(req, res) {
    try {
        const id = req.params.id //id do livro na url

        if (id && Number(id)) {
            deletingBook(id)
            res.send('Sucesso delete')
        } else {
            res.status(422)
            res.send('url inválida')
        }
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = { getBooks, getBook, postBook, patchBook, deleteBook }