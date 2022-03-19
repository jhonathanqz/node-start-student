const express = require('express');
const app = express();
const responseJson = require('./data/response.json');
const filmes = require('./data/filmes.json');

app.get('/route-teste', (req, res) => {
    return res.json({ mensagem: 'Esquema de rota funcionando' })
});

app.get('/filmes', (req, res) => {
    return res.json(filmes)
});

app.get('/route-scheme', (req, res) => {
    return res.json(responseJson)
});

app.use((req, res, next) => {
    res.status(200).send(responseJson);
});



module.exports = app;