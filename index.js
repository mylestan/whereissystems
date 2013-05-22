function onLinkedInLoad() {
	IN.Event.on(IN, "auth", onLinkedInAuth);
}

function onLinkedInAuth() {
	IN.API.Profile("me").fields("firstName", "lastName", "industry", "educations", "positions").result(displayPositions).error(errorPositions);
}

function displayPositions(profile) {
	member = profile.values[0];
	console.log(member);

	document.getElementById("profile").innerHTML = "<p>Yo " +  member.firstName + " " + member.lastName + ".</p>";
	document.getElementById("profile").innerHTML += "<p>You work in the " +  member.industry + " industry.</p>";

	currentPositions = member.positions.values;
	console.log("positions array:");
	console.log(currentPositions);

	for (var i = 0; i < currentPositions.length; i++) {
		if(currentPositions[i].isCurrent){
			document.getElementById("profile").innerHTML += "<p>You work at " + currentPositions[i].company.name + " as a " + currentPositions[i].title + ".</p>";
		} else {
			document.getElementById("profile").innerHTML += "<p>You used to work at " + currentPositions[i].company.name + " as a " + currentPositions[i].title + ".</p>";
		}
	};

	educations = member.educations.values;
	console.log("education array");
	console.log(educations);

	var studiedAtWaterloo = false;
	var studiedSyDe = false;
	var gradYear = 0;

	for (var i = 0; i < educations.length; i++) {
		if (educations[i].schoolName == "University of Waterloo"){
			studiedAtWaterloo = true;
			if(educations[i].fieldOfStudy.indexOf("Systems Design Engineering") != -1){
				studiedSyDe = true;
				gradYear = educations[i].endDate.year;
			}
		}
	};
	if(studiedAtWaterloo){
		document.getElementById("profile").innerHTML += "<p>You did study at the University of Waterloo.</p>";
		if(studiedSyDe){
			document.getElementById("profile").innerHTML += "<p>You did study Systems Design Engineering.</p>";
			document.getElementById("profile").innerHTML += "<p>Your alumni year is " + gradYear + ".</p>";
		} else {
			document.getElementById("profile").innerHTML += "<p>You did NOT Study Systems Design Engineering.</p>";
	}
	} else {
		document.getElementById("profile").innerHTML += "<p>You did NOT Study at the University of Waterloo.</p>";
	}
}

function errorPositions(error) {
	positionsDiv = document.getElementById("positions");
	profilesDiv.innerHTML = "<p>Oh Noes! An Error!</p>";
	console.log(error);
}

