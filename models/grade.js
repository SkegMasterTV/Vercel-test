const mongoose = require('mongoose');

const gradeSchema = mongoose.Schema({
student_id: { type: Number, required: true },
  scores: { type: Array, required: false },
  class_id: {type: Number, required: true}
}, {collection : 'sample_training'}); 

module.exports = mongoose.model('Grade', gradeSchema);