function onLinkedInLoad() {
	IN.Event.on(IN, "auth", onLinkedInAuth);
}

function onLinkedInAuth() {
	IN.API.Profile("me").fields("firstName", "lastName", "industry", "positions").result(displayPositions).error(errorPositions);
}

function displayPositions(profile) {
	member = profile.values[0];
	document.getElementById("profile").innerHTML = "<p>Yo " +  member.firstName + " " + member.lastName + ".</p>";
	document.getElementById("profile").innerHTML += "<p>You work in the " +  member.industry + " industry.</p>";
	currentPositions = member.positions.values;
	console.log(currentPositions);
	for (var i = 0; i < currentPositions.length; i++) {
		if(currentPositions[i].isCurrent){
			document.getElementById("profile").innerHTML += "<p>You work at " + currentPositions[i].company.name + " as a " + currentPositions[i].title + ".</p>";
		} else {
			document.getElementById("profile").innerHTML += "<p>You used to work at " + currentPositions[i].company.name + " as a " + currentPositions[i].title + ".</p>";
		}
	};
	console.log(profile);
}

function errorPositions(error) {
	positionsDiv = document.getElementById("positions");
	profilesDiv.innerHTML = "<p>Oh Noes! An Error!</p>";
	console.log(error);
}

  // function displayProfiles(profiles) {
  //   member = profiles.values[0];
  //   document.getElementById("profiles").innerHTML = 
  //     "<p id=\"" + member.id + "\">Hello " +  member.firstName + " " + member.lastName + "</p>";
  // }