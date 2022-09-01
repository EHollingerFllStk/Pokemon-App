const express = require('express');
const app = express();
const port = 3000
const Pokemon = require('./models/pokemon.js');

app.use(express.urlencoded({extended: false}));

// INDEX

app.get('/pokemon', (req, res) => {
res.render('index.ejs', { data: Pokemon });
});



// // SHOW
// app.get('photos/:id', (req, res) => {
// res.render('show.ejs', { data: Pokemon[req.params.id] });
// });

//NEW

//EDIT

//CREATE
//UPDATE
//DESTROY



//LISTEN
app.listen(port, ()=>{
    console.log(`Caught One`, port)
});