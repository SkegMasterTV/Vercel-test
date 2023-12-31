const mongoose = require('mongoose');

const detectionSchema = mongoose.Schema({
  nfcReaderId: { type: Number, required: true },
  nfcTagId: { type: Number, required: true },
},{ timestamps: true }
);

module.exports = mongoose.model('Detection', detectionSchema);