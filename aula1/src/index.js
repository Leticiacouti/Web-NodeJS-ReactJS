const express = require('express');

const app = express();

app.use(express.json());
app.get('/home', (req, res) => {
    res.send('Olá Turma. Nossa primeira API REST em NodeJS!');
});

app.get('/mensagem', (req, res) => {
    res.send( [ 
                    {nome: "Letícia", funcao: "aluna"},
                    {nome: "Josseffe", funcao: "professor"},
            ]);
});

app.post('/mensagem', (req,res) => {
    const {msg} = req.body;
    res.send(`Você enviou o texto: ${msg}`);
});

app.post('/anuncio/:id', (req, res) => {
    const {id} = req.params;
    res.send(`O parâmetro de rota enviado foi: ${id}`);

    console.log(id);
});

app.get('/pedido', (req, res) => {
    const {titulo, categoria} = req.query;
    res.send(`O query param enviado foi: ${titulo} e também: ${categoria}`);
});

app.listen(8888, () =>{
    console.log('Backend Server ON');
});