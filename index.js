// Add Express et Mongoose
const express = require("express");
const mongoose = require('mongoose');
const Detection = require('./models/detection');
const uri = "mongodb+srv://Skeg:rZIxBT2aGJ5lOQiM@go-fullstack.9nnj4kf.mongodb.net/?retryWrites=true&w=majority";
const uri2 = "mongodb+srv://vercel:4QgX1J34vLaU3xik@go-fullstack.9nnj4kf.mongodb.net/?retryWrites=true&w=majority";

// Initialize Express
const app = express();

mongoose.connect(uri,
    { useNewUrlParser: true,
      useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

// Create GET request
app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

// Export the Express API
module.exports = app;