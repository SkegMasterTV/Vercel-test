// Add Express et Mongoose
const express = require("express");
const mongoose = require('mongoose');
const Detection = require('./models/detection');
const Link = require('./models/link');
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
//post route qui fonctionne
  /*app.post('/detection', async (req, res) => {
    try {
          const detection = new Detection({
        ...req.body});
      await detection.save();
            const detections = await Detection.find().limit(2); 
            res.status(200).json({detections})
        } catch(error) {
          console.log(error);
          res.status(400).json({ error });
        }
    });*/

app.post('/detection', async (req, res) => {
    try {
          const detection = new Detection({
        ...req.body});
      await detection.save();
            const OF = await link.findOne({"nfcTagId": detection.nfcTagId}); 
            res.status(200).json({OF})
        } catch(error) {
          console.log(error);
          res.status(400).json({ error });
        }
    });

app.post('/link', async (req, res) => {
    try {
          const link = new Link({
        ...req.body});
      await link.save(); 
            res.status(201).json({message: 'Attribution du tag réalisée'});
        } catch(error) {
          console.log(error);
          res.status(400).json({ error })
        }
    });    
/*simple post route
app.post('/detection', async (req, res) => {
      try {
            const detection = new Detection({
          ...req.body});
        await detection.save();
          res.status(201).json({ message: 'Tag détecté'});
        } catch(error) {
          console.log(error);
          res.status(400).json({ error })
      }
    });       
*/    
    
app.get('/detection', async (req, res) => {
  try {
    const detections = await Detection.find().limit(20); 
    res.status(200).json({detections})}
    catch(error) {res.status(400).json({ error })};
  });

app.get('/detection/:nfcTagId', async (req, res) => {
  try {
    const detection = await Detection.findOne({"nfcTagId": req.params.nfcTagId}); 
    res.status(200).json({detection})}
    catch(error) {res.status(400).json({ error })};
  });

app.get('/link/:nfcTagId', async (req, res) => {
  try {
    const link = await Link.findOne({"nfcTagId": req.params.nfcTagId},{'fabOrder':1}); 
    res.status(200).json({link})}
    catch(error) {res.status(400).json({ error })};
  });  

 

  
// Create GET request
app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

// Export the Express API
module.exports = app;


