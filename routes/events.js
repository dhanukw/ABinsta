var databrian1 = require("../brian1");
var databrian2 = require("../brian2");
var databrian3 = require("../brian3");

var datamelissa1 = require("../melissa1");
var datamelissa2 = require("../melissa2");

var datagrant1 = require("../grant1");
var datagrant2 = require("../grant2");

var datadhanuk1 = require("../dhanuk1");
var datadhanuk2 = require("../dhanuk2");

var datasnoop = require("../snoop1");

var dataimagined = require("../imagined1");

exports.events_source = function(req, res) {  
	res.send(databrian.brian1);
};

exports.events_source1 = function(req, res) {
	res.send(datamelissa.melissa1);
};

exports.events_source2 = function(req, res) {
	res.send(datagrant.grant1);
};

exports.events_source3 = function(req, res) {
	res.send(datadhanuk.dhanuk1);
};

exports.events_source4 = function(req, res) {
	res.send(datasnoop.snoop1);
};

exports.events_source5 = function(req, res) {
	res.send(dataimagined.imagined1);
};

exports.multi_source = function(req, res){
	switch(req.params.event_id) {
		case 'brian1':
			res.send(databrian1.brian1);
			break;
		case 'brian2':
			res.send(databrian2.brian2);
			break;
		case 'brian3':
			res.send(databrian3.brian3);
			break;
		case 'melissa1':
			res.send(datamelissa1.melissa1);
			break;
		case 'melissa2':
			res.send(datamelissa2.melissa2);
			break;
		case 'dhanuk1':
			res.send(datadhanuk1.dhanuk1);
			break;
		case 'dhanuk2':
			res.send(datadhanuk2.dhanuk2);
			break;
		case 'grant1':
			res.send(datagrant1.grant1);
			break;
		case 'grant2':
			res.send(datagrant2.grant2);
			break;
		default:
			res.send('hello world');
			break;
	};
	
};
		