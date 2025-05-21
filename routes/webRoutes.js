
const express = require('express');
const router = express.Router();
const db = require('../config/firebaseConfig');

   router.get('/', (req, res) => {
    res.render('home');
     });

     router.get('/consulta', async(req, res) => {
      
      db.collection("agendamentos").get().then((snapshot)=>{
         const posts = snapshot.docs.map(doc =>{
            return{
               id: doc.id,
               ...doc.data()
            }
         })
        res.render('Consulta/consulta', {posts:posts});
          console.log(posts)
      }) 
         })
          
            
     router.get("/editar/:id", function(req, res){
          db.collection("agendamentos").doc(req.params.id).get().then((doc)=>{
            res.render('Editar/editar', { post: {id: doc.id, ...doc.data() }});
          })
            })
   

     router.get('/excluir/:id', function(req, res){
      db.collection("agendamentos").doc(req.params.id).delete().then(function(){
            console.log('Documento atualizado com sucesso');
              res.redirect('/consulta');
     })
       })

     router.get('/cadastro', (req, res) => {
      
      db.collection("agendamentos").get().then((snapshot)=>{
         const posts = snapshot.docs.map(doc =>{
            return{
               id: doc.id,
               ...doc.data()
            }
         })
        res.render('Cadastro/cadastro', {posts:posts});
        })
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
         db.collection("agendamentos").doc(req.params.id).update({
             nome:req.body.nome,
             email:req.body.email,
             telefone:req.body.telefone,
             data_contato:req.body.data_contato,
             observacao:req.body.observacao,
             origem:req.body.origem
          }).then(function(){
            console.log('Documento atualizado com sucesso');
              res.redirect('/consulta');
            })
       });

module.exports = router;