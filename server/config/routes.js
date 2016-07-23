var user = require('../controllers/users.js');

module.exports = function(app){
	app.post('/name', user.save_name)
	app.get('/get_name', user.return_name)
}