var
	mongoose = require('mongoose'),
	Schema = mongoose.Schema
  // bcrypt = require('bcrypt-nodejs')

  var userSchema = new Schema({
	name: String,
	email: String,
	password: String,
  state: Number
})



var User = mongoose.model('User', userSchema)

module.exports = User
