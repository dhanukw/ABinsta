var data = require('../Frienddata.json');

exports.view = function(req, res){
	res.render('index');
};

exports.signin = function(req, res){
	res.render('signin');
};

exports.calendar = function(req, res){
	res.render('calendar');
};

exports.melissacalendar = function(req, res) {
	res.render('melissacalendar');
};

exports.grantcalendar = function(req, res) {
	res.render('grantcalendar');
};

exports.briancalendar = function(req, res) {
	res.render('briancalendar');
};

exports.snoopcalendar = function(req, res) {
	res.render('snoopcalendar');
};

exports.imaginedcalendar = function(req, res) {
	res.render('imaginedcalendar');
};

exports.welcome = function(req, res){
	res.render('welcome');
};

exports.signup = function(req, res) {
	res.render('signup');
};

exports.addevent = function(req,res){
	res.render('addevent');
};

exports.friends = function(req, res){
	res.render('friends', data);
};

exports.newfriend = function(req, res){
	res.render('newfriend', data);
};

exports.forgot = function(req, res){
	res.render('forgot');
};

exports.about = function(req, res){
	res.render('about');
};

exports.addfilter = function(req, res){
	res.render('addfilter');
};

exports.contactus = function(req, res){
	res.render('contactus');
};

exports.settings = function(req, res){
	res.render('settings');
};

exports.people = function(req, res){
	res.render('people');
};

exports.notfollowing = function(req, res){
	res.render('notfollowing');
};

exports.notifi = function(req, res) {
	res.render('notifi');
};

exports.emptyNoti = function (req, res) {
	res.render('emptyNoti');
};

exports.profile = function(req, res){
	res.render('profile');
};

exports.event = function(req, res){
	console.log("params of event_title " + req.params['event_title']);


		var eventTitle = req.params['event_title'].title;
		var eventStart = req.params['event_title'].start;
		var eventEnd = req.params['event_title'].end;
		var eventNotes = req.params['event_title'].notes;

		res.render('event', {
		'title': eventTitle,
		'start' : eventStart,
		'end': eventEnd,
		'notes': eventNotes
	});
};

exports.psswdreset = function(req, res){
	res.render('psswdreset');
};

exports.aboutsignedin = function(req, res){
	res.render('aboutsignedin');
};

exports.contactusin = function(req, res){
	res.render('contactusin');
};


exports.event1 = function (req, res) {
	res.render('eventB1');
};



exports.event2 = function (req, res) {
	res.render('eventB2');
};


exports.event3 = function (req, res) {
	res.render('eventB3');
};

exports.event4 = function (req, res) {
	res.render('eventM1');
};

exports.event5 = function (req, res) {
	res.render('eventM2');
};

exports.event6 = function (req, res) {
	res.render('eventM3');
};

exports.event7 = function (req, res) {
	res.render('eventG1');
};

exports.event8 = function (req, res) {
	res.render('eventG2');
};

exports.event9 = function (req, res) {
	res.render('eventG3');
};

exports.event10 = function (req, res) {
	res.render('eventS');
};

exports.eventD1 = function (req, res) {
	res.render('event1');
};
exports.eventD2 = function (req, res) {
	res.render('event2');
};
exports.eventD3 = function (req, res) {
	res.render('event3');
};

exports.supremecourt = function (req, res) {
	res.render('supremecourt');
};