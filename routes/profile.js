var userdata = require("../userdata");



exports.grantprofile = function(req, res){
	res.render('grantprofile');
};

exports.brianprofile = function(req, res){
	res.render('brianprofile');
};
exports.brianprofile1 = function(req, res){
	res.render('brianprofile1');
};


exports.snoopprofile = function(req, res){
	res.render('snoopprofile');
};

exports.imaginedragonsprofile = function(req, res){
	res.render('imaginedragonsprofile');
};

exports.melissaprofile = function(req, res){
	res.render('melissaprofile');
};

exports.signinattempt = function(req, res){

	var eMail = req.body.email;
	var password = req.body.password;

	if(eMail == userdata.email && password == userdata.password) {
		res.render('index');
	}
	else {
		res.render('signin');
	}
};