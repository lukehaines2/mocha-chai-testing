var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blobSchema = new Schema({
  name: String,
  lastName: String,
  lukedata: String
});


module.exports = mongoose.model('blobs', blobSchema);
