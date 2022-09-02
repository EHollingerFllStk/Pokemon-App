const express = require('express');
const pokemon = require('./models/pokemon.js');
const app = express();
const port = 3000
const Pokemon = require('./models/pokemon.js');

app.use(express.urlencoded({extended: false}));

// INDEX

app.get('/pokemon', (req, res) => {
res.render('index.ejs', { 
        data: pokemon 
    });
});

//NEW
app.get("/pokemon/new", (req, res) => {
    res.render("new.ejs")
})

//DELETE
app.delete("/pokemon/:id", (req, res) => {
    data.splice(req.params.id, 1) /
    res.redirect("/pokemon") 
  })

//UPDATE
app.put("/pokemon/:id", (req, res) => {
  pokedex[req.params.id] = req.body
  res.redirect("/pokemon")
})

//CREATE
app.post("/pokemon/:id", (req, res) => {
    pokemon.push[req.body]
    res.redirect("/pokemon")
})


//EDIT
app.get("/pokemon/:id/edit", (req, res) => {
    res.render(
      "edit.ejs", 
      {
        pokemon: data[req.params.id], 
        id: req.params.indexOfFruitsArray, 
      }
    )
  })

//SHOW
app.get('/pokemon/:id', (req, res) => {
res.render('show.ejs', { data: pokemon[req.params.id] });
});


//LISTEN
app.listen(port, () => {
    console.log(`Caught One`, port)
});