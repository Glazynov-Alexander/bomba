let mongoose = require('mongoose')

const task = new mongoose.Schema({
  title:   String  ,
  text: { String ,required : false},
}, { versionKey: false });

const tasks = mongoose.model('Task', task);

module.exports = { Tasks: tasks };
