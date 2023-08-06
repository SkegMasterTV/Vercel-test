// Add Express et Mongoose
const express = require("express");
const mongoose = require('mongoose');
const Detection = require('./models/detection');
const Grade = require('./models/grade');
const uri = "mongodb+srv://Skeg:rZIxBT2aGJ5lOQiM@go-fullstack.9nnj4kf.mongodb.net/?retryWrites=true&w=majority";
const uri2 = "mongodb+srv://vercel:4QgX1J34vLaU3xik@go-fullstack.9nnj4kf.mongodb.net/?retryWrites=true&w=majority";

// Initialize Express
const app = express();
app.use(express.json());
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

 app.post('/detection', async (req, res) => {
  try {
        const detection = new Detection({
      ...req.body
    });
    console.log(detection);
    console.log(req.body)
    await detection.save();
      res.status(201).json(Detection.findOne({ nfcTagId: req.body.nfcTagId },{nfcTagId}));
    } catch(error) {console.log(error); res.status(400).json({ error })
  };
});

app.get('/detection', (req, res) => {
    Detection.find().limit(20)
    .then(detections => res.status(200).json(detections))
    .catch(error => res.status(400).json({ error }));
});
  
// Create GET request
app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

// Export the Express API
module.exports = app;