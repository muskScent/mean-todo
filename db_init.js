db.todos.insert({
	_id: "1",
	userData: {
		login: "othmane",
		firstname: "Othmane",
		lastname: "Abouelyzza",
		password: "$2a$10$WRHrSJbg7XvvLavv58hhOe6oNWFUvEXpukM7ZigkshOhWiXcvlcAW"
	},
	tasks: [
		{
			_taskNumber: "1",
			description: "Deploy mean website",
			dueDate: "05/01/2018"
		},
		{	
			_taskNumber: "2",
			description: "Learn CSS Flexbox",
			dueDate: "12/01/2018"
		}
	]
});

db.todos.insert({
	_id: "2",
	userData: {
		login: "momo",
		firstname: "Mohammed",
		lastname: "El Aissawi",
		password: "$2a$10$WRHrSJbg7XvvLavv58hhOe6oNWFUvEXpukM7ZigkshOhWiXcvlcAW"
	},
	tasks: [
		{
			_taskNumber: "1",
			description: "Find a Flat",
			dueDate: "20/01/2018"
		},
		{
			_taskNumber: "2",
			description: "Cook a tagine",
			dueDate: "06/01/2018"
		}
	]
});