const express = require('express');
const app = express();

const handlebars = require("express-handlebars").engine;
const webRoutes = require("./routes/webRoutes");
const bodyParser = require("body-parser");



app.engine("handlebars", handlebars({
    defaultLayout: "main",
       runtimeOptions: {
        allowProtoPropertiesByDefault: true,  
        allowProtoMethodsByDefault: true     
    },
helpers: {
    eq: function (a, b) {
      return a === b;
    }
  }
}));

app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', webRoutes)

app.listen("8082", function(){
console.log('Server Funcionando');

});
