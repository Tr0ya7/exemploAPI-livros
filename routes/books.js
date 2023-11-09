const { Router } = require('express')
const { getBooks, getBook, postBook, patchBook, deleteBook } = require('../controller/books')
const router = Router()

router.get('/', getBooks) //req -> requisition, res -> response //send para mostrar no navegador
router.get('/:id', getBook)
router.post('/', postBook)
router.patch('/:id', patchBook) //edição do dado
router.delete('/:id', deleteBook)

module.exports = router //exportar componente