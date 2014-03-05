var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');

var events = require('./routes/events')

var index = require('./routes/index');
var profile = require('./routes/profile');
var calendar = require('./routes/calendar');

var app = express();

app.set('port', process.env.PORT || 8080);
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', index.welcome);
app.get('/index', index.view);
app.get('/forgot', index.forgot);
app.get('/friends', index.friends); 
app.get('/newfriend', index.newfriend); 
app.get('/profile', index.profile);
app.get('/welcome', index.welcome);
app.get('/signin', index.signin);
app.get('/signup', index.signup);


app.get('/calendar', index.calendar);
app.get('/melissacalendar', index.melissacalendar);
app.get('/grantcalendar', index.grantcalendar);
app.get('/briancalendar', index.briancalendar);
app.get('/snoopcalendar', index.snoopcalendar);
app.get('/imaginedcalendar', index.imaginedcalendar);

app.get('/addevent', index.addevent);
app.get('/about', index.about);
app.get('/addfilter', index.addfilter);
app.get('/contactus', index.contactus);
app.get('/emptyNoti', index.emptyNoti);
app.get('/settings', index.settings);
app.get('/people', index.people);
app.get('/notifi', index.notifi);
app.get('/notfollowing', index.notfollowing);
app.get('/brianprofile', profile.brianprofile);
app.get('/grantprofile', profile.grantprofile);
app.get('/snoopprofile', profile.snoopprofile);
app.get('/imaginedragonsprofile', profile.imaginedragonsprofile);
app.get('/melissaprofile', profile.melissaprofile);
app.get('/events_source', events.events_source);
app.get('/events_source1', events.events_source1);
app.get('/events_source2', events.events_source2);
app.get('/events_source3', events.events_source3);
app.get('/events_source4', events.events_source4);
app.get('/events_source5', events.events_source5);
app.post('/eventsuccess', calendar.eventsuccess);
app.post('/signinattempt', profile.signinattempt);
app.get('/multi_source/:event_id', events.multi_source);
app.get('/event', index.event);
app.get('/psswdreset', index.psswdreset);
app.get('/aboutsignedin', index.aboutsignedin);
app.get('/contactusin', index.contactusin);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
