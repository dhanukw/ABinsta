exports.authenticate = function(req, res) {
	var data = require("../login.json");
	var email = req.body.email;
	var password = req.body.password;
	var validated = false;


	for ( var i = 0; i < data.users.length; i++ ) {
		var users = data.users[i];
		if (users.email == email
			&& users.password == password) {
			validated = true;
			break;
		}
	}

	if ( validated ) {
		res.redirect('index');
	}
	else {
		res.render('signin', {
			'error': true 
		})
	}
}

