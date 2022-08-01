const express = require('express')
const app = express()

app.use(express.urlencoded({extended: true}))

app.post('/user', (req, resp) =>{
    console.log(req.body)
    resp.send('<h1>Cadastro concluído</h1>')
})

app.listen(3000)