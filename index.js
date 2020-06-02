const express = require('express');
const hbs = require('hbs');
const app= express();
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));
app.get('/inicio', (req, res)=>{
    res.render('index', {
        autor:"Brayan Ulises Morales Rodriguez",
        año:new Date().getFullYear(),
        title:"Inicio"
    });
});
app.get('/diego', (req, res)=>{
    res.render('diego', {
        autor:"Brayan Ulises Morales Rodriguez",
        año:new Date().getFullYear(),
        title:"Diego Velazquez"
    });
});
app.get('/vincent', (req, res)=>{
    res.render('vincent', {
        autor:"Brayan Ulises Morales Rodriguez",
        año:new Date().getFullYear(),
        title:"Vincent Van Gogh"
    });
});
app.get('/munch', (req, res)=>{
    res.render('munch', {
        autor:"Brayan Ulises Morales Rodriguez",
        año:new Date().getFullYear(),
        title:"Edvard Munch"
    });
});
app.get('/angel', (req, res)=>{
    res.render('angel', {
        autor:"Brayan Ulises Morales Rodriguez",
        año:new Date().getFullYear(),
        title:"Miguel Angel"
    });
});
app.listen(3000, ()=>{
    console.log("Escuchando puerto 3000");
});