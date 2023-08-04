const mongoose = require('mongoose');

const detectionSchema = mongoose.Schema({
  nfcreaderid: { type: String, required: true },
  description: { type: Array, required: true },// voir mongoose schema
  //imageUrl: { type: String, required: true },
 // userId: { type: String, required: true },
  //price: { type: Number, required: true },
},{ timestamps: true });

module.exports = mongoose.model('Detection', detectionSchema);