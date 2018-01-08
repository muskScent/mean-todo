var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TodoSchema = new Schema({
	_id: String,
	userData: {
		login: String,
		firstname: String,
		lastname: String,
		password: String
	},
	tasks: [
		{
			description: String,
			dueDate: String
		},
		{
			description: String,
			dueDate: String
		}
	]
});

module.exports = mongoose.model('Todo', TodoSchema);