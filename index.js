// Add Express et Mongoose
const express = require("express");
const mongoose = require('mongoose');
const Detection = require('./models/detection');
const Grade = require('./models/grade');
const uri = "mongodb+srv://Skeg:rZIxBT2aGJ5lOQiM@go-fullstack.9nnj4kf.mongodb.net/?retryWrites=true&w=majority";
const uri2 = "mongodb+srv://vercel:4QgX1J34vLaU3xik@go-fullstack.9nnj4kf.mongodb.net/?retryWrites=true&w=majority";

// Initialize Express
const app = express();

function connectDb (){

}

app.use((req, res, next) => {
  
mongoose.connect(uri,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => {
    next();
    console.log('Connexion à MongoDB réussie !')
})
  .catch(() => {
    console.log('Connexion à MongoDB échouée !')
})
  } 
  );  

app.post('/detection', (req, res) => {
    delete req.body._id;
    const detection = new Detection({
      ...req.body
    });
    Detection.save()
      .then(() => res.status(201).json({ message: 'Tag détecté'}))// ajouter une réponse avec l'OF en question
      .catch(error => res.status(400).json({ error }));
      //Si l'arduino ne peut pas ajouter le RTC, ajouter timestamp ici
  });

app.get('/grade', (req, res) => {
    Grade.find()
    .then(grades => res.status(200).json(grades))
    .catch(error => res.status(400).json({ error }));
});
  
// Create GET request
app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

// Export the Express API
module.exports = app;