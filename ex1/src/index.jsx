const express = require('express');

const app = express();

app.use(express.json());

app.get('/dadospessoais', (req, res) => {
    res.send({ nome: 'leticia',
               idade:  19,
               email: 'leticianejor@gmail.com',
               profissao: 'professora'});
});

app.get('/formacao', (req, res) => {
    res.send([
   {instituicao: 'unip',
    curso: 'ciencia da computacao',
    situacao: 'cursando',
    semestre: 4},

   {instituicao: 'fortec',
    curso: 'tecnico em informatica',
    situacao: 'formada',
    semestre: 6},

   {instituicao: 'cna',
    curso: 'ingles',
    situacao: 'formada',
    semestre: 12}]);
});

app.get('/projetos', (req, res) => {
    res.send([
   {titulo: 'padaria',
    ferramenta: 'c#, API, SQL Server',
    situacao: 'concluido',
    dataInicio: '20/06/2021'},

    {titulo: 'site',
    ferramenta: 'HTML, CSS, JS',
    situacao: 'concluido',
    dataInicio: '06/03/2020'},

    {titulo: 'criptografia',
    ferramenta: 'Python',
    situacao: 'concluido',
    dataInicio: '08/08/2020'}]);
});

app.get('/experiencia', (req, res) => {
    res.send([
   {cargo: 'professora de ingles',
    local: 'av.kennedy, Praia Grande - SP',
    dataInicio: '04/08/2021',
    atividade: 'Lecionar para as turmas do ensino fundamental I; Planejar conteúdo dos bimestres; Corrigir provas e trabalhos'},
    
   {cargo: 'auxiliar de professor',
    local: 'boqueirao, Praia Grande - SP',
    dataInicio: '03/03/2021',
    atividade: 'Realizar a manutenção dos computadores; Instalar softwares nas máquinas; Lecionar aula de informática para adultos e idosos e aula de inglês para crianças e adultos.'}]);
});

app.get('/lazer', (req, res) => {
    res.send([
   {nome: 'jogar video game',
    local: 'casa',
    tempo: 10},

   {nome: 'estudar',
    local: 'faculdade',
    tempo: 4}]);
});

app.post('/Inserircliente', (req, res) => {
    const{nome} = req.body;
    const{idade} = req.body;
    const{profissao} = req.body;
    const{email} = req.body;

    res.send(`Nome: ${nome} | Idade: ${idade} | Profissao: ${profissao} | Email: ${email}`);
});

app.put('/AlterarCliente/:id', (req, res) => {
    const{nome, idade, profissao, email, telefone} = req.body;

    res.send(`Nome: ${nome} | Idade: ${idade} | Profissao: ${profissao} | Email: ${email} | Telefone: ${telefone}`);
    res.send(`Atualizado com sucesso!`)
});

app.delete('/DeletarCliente/:id', (req, res) => {
    const {id} = req.params;
    
    res.send(`Cliente ${id} foi excluido com sucesso!`);
})

app.listen(8888, () =>{
    console.log('Backend Server ON');
});
