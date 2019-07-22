require('./config/config.js')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json())

app.get('/usuarios', function(req, res) {
    res.json('obtiene usuarios')
})
app.post('/usuarios', function(req, res) {
    let body = req.body;
    if (body.nombre === undefined) {
        res.status(400).json({
            error: false,
            mensaje: 'sin nombre'
        })
    }
    res.json({ body })
})
app.put('/usuarios/:id', function(req, res) {
    let id = req.params.id
    res.json({ id })
})
app.delete('/usuarios', function(req, res) {
    res.json('delete usuarios delete')
})
app.listen(process.env.PORT, () => {
    console.log('Escuchando en p ' + process.env.PORT);
})