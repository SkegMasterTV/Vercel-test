const mongoose = require('mongoose');

const linkSchema = mongoose.Schema({
  fabOrder: { type: Number, required: true },
  nfcTagId: { type: Number, required: true },
},{ timestamps: true }
);

module.exports = mongoose.model('Link', linkSchema);