var mongoose = require('mongoose'),
    Schemma = mongoose.Schema;

var bookModel = new Schemma({
  title: {
    type: String
  },
  author:{type:String},
  genre:{type:String},
  read:{type:Boolean, deafult: false}
});

module.exports = mongoose.model('Book', bookModel);
