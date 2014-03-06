//var obj = require ( './Fsdafsdfrienddata.json' );
var array = new Array();
array[0] = "/melissaprofile";
array[1] = "/brianprofile";
array[2] = "/grantprofile";
array[3] = "/snoopprofile";
array[4] = "/imaginedprofile";

$(document).ready(function(event) {
	students = $('table.classmates tbody tr');
	students.filter = filterStudents;
//	console.log(students[0].align);
//		console.log(students[0]);
//		console.log(array[0]);
//		console.log($(this).attr('id'));

	$('.classmates tr').click(function() {
		console.log($(this).attr('align'));
		goToProfile($(this).attr('align'));
	});

	$('#filter').keyup(function(e) {
		students.filter($('#filter').val());
	});
});

function goToProfile(studentId) {
	window.location.href = studentId;
}

// Hides rows that don't contain a match for the name
// students: array of strings that contain the names of students
// name: string to substring pattern match against list of students
function filterStudents(name) {
	name = name.toLowerCase();
	this.each(function() {
		var properties = $(this).find('td');
		//console.log(properties);
		var fullname = ($(properties[1]).text() + " " + $(properties[2]).text()).toLowerCase();
		console.log(fullname.search(name));
		console.log('fullname:' + fullname);
		console.log('name:' + name);
		if ( fullname.search(name) == -1 ) {
			console.log("hide " + fullname);
			$(this).hide();
		}
		else {
			console.log("don't hide " + fullname);
			$(this).show();
		}
	});
}