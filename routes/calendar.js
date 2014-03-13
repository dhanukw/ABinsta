var eventdata1 = require("../brian1");
var eventdata2 = require("../brian2");
var eventdata3 = require("../brian3");
var frienddata = require("../Frienddata");

var fs = require('fs');

exports.compareForm = function(req, res) {
	res.render('compareForm');
};

exports.compare = function(req, res) {
	var id = req.body.share;
	var events1;
	var events2;

	for(i = 0; i < frienddata.friends.length; i++){
		if(id ==frienddata.friends[i].id){
			events1 = require("../" + frienddata.friends[i].json1);
			events2 = require("../" + frienddata.friends[i].json2);

		}
		
	}
	fs.writeFile('compare1.json',JSON.stringify(events1, null, 4), function(){});
	fs.writeFile('compare2.json',JSON.stringify(events2, null, 4), function(){});

	res.render('duoCal');
}

exports.eventsuccess = function(req, res){

	var eventTitle = req.body.title;

	var startdate = req.body.starttime;

	var enddate = req.body.endtime;

	var notes = req.body.notes;

	var color;

	if(req.body.filter == 'social') {
		color = '#1E90FF';
	}
	else if(req.body.filter == 'work') {
		color = '#00BFFF';
	}
	else if(req.body.filter == 'volunteering') {
		color = '#20B2AA'
	}
	else {}

	var newEvent = {
		'title': eventTitle,
		'start': startdate,
		'end': enddate,
		'notes': notes,
		'color':color
	};

	switch(req.body.filter) {
		case 'social':

			eventdata1["brian1"].push(newEvent);

			fs.writeFile('brian1.json',JSON.stringify(eventdata1, null, 4), function(){});
			break;

		case 'work':

			eventdata2["brian2"].push(newEvent);

			fs.writeFile('brian2.json',JSON.stringify(eventdata2, null, 4), function(){});
			break;

		case 'volunteering':

			eventdata3["brian3"].push(newEvent);

			fs.writeFile('brian3.json',JSON.stringify(eventdata3, null, 4), function(){});
			break;

		default:

	}

	res.render('calendar');
}