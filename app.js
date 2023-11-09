const express = require('express');
const bookRoute = require('./routes/books');

const app = express()
const port = 8000

app.use(express.json()) //faz com que o dado recebido por padrão seja json, evitando o erro de inserir sempre um valor null
app.use('/livros', bookRoute)

app.listen(port, () => console.log(`listen port:${port}`))