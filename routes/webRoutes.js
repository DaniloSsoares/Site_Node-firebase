const express = require('express');
const router = express.Router();
const db = require('../config/firebaseConfig');

   router.get('/', (req, res) => {
    res.render('home');
     });

     router.get('/consulta', (req, res) => {
        res.render('Consulta/consulta');
     });

     router.get("/editar/:id", function(req, res){
        res.render('Editar/editar');
     })

     router.get('/excluir/:id', function(req, res){
        
     })

     router.get('/cadastro', (req, res) => {
        res.render('Cadastro/cadastro');
     });

     router.post('/cadastro', function(req, res){
       db.collection('agendamentos').add({
             nome:req.body.nome,
             email:req.body.email,
             telefone:req.body.telefone,
             data_contato:req.body.data_contato,
             observacao:req.body.observacao,
             origem:req.body.origem
       }).then(function(){
        console.log('Cadastrado');
         res.redirect('/');
       })
     });


     router.post('/editar/:id', function(req, res){
         post.update({
             nome:req.body.nome,
             email:req.body.email,
             telefone:req.body.telefone,
             data_contato:req.body.data_contato,
             observacao:req.body.observacao,
             origem:req.body.origem
          },{where:{id: req.params.id}}).then(function(){
             res.redirect('/consulta')
         }).catch(function(erro){
             res.send('Erro ao atualizar o post'+erro)
         })
     })

module.exports = router;