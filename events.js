
var moviesDiv = document.getElementById('movies-container');
var searchField = document.querySelector('input');

function Movie(name, picture) {
	this.name = name;
	this.picture = "img/" + picture + ".png";
};

var starWars = new Movie("STARWARS", "WARS");
var rainMan = new Movie("RainMan", "Man");
var manInBlack = new Movie("Man in Black", "Black");
var fightClub = new Movie("Fight Club", "fight");
var lambs = new Movie("The Silence of the Lambs", "lamb");
var blade = new Movie("Blade Runner", "rabbit");
var shrek = new Movie("Shrek", "Shrek");
var peppa = new Movie("Peppa Pig", "pig");
var garfield = new Movie("Garfield", "garfield");
var madagaskar = new Movie("Madagaskar", "madagaskar");
var madagaskarPengiun = new Movie("Madagaskar Pengiun", "kowalski");
var tomAndJerry = new Movie("Tom and Jerry", "tomAndJerry");

var moviesArray = [starWars, rainMan, manInBlack, fightClub, lambs, blade, shrek, peppa, garfield, madagaskar, madagaskarPengiun, tomAndJerry];

searchField.addEventListener("keyup", function(e) {
 	var searching = moviesArray.filter(function(item) {
	 		if (item.name.toLowerCase().indexOf(searchField.value.toLowerCase()) > -1) {
	 		 	return item
	 		}
 	 	});
 	moviesDiv.innerHTML = "";
 	createMovie(searching);
 	removeParent();
}); 	

function createMovie(arr) {
	arr.forEach(function(item) {
		var newMovie = document.createElement('div');
		newMovie.classList.add('movie');
		moviesDiv.appendChild(newMovie);
		newMovie.innerHTML += '<div>' + item.name + '</div><img src="' + item.picture + '" alt="movie image">' + '<button>CLOSE</button>'; //or '<input type="button" value="CLOSE">'
	});
}

function removeParent() {
	var close = document.querySelectorAll('button');

	close.forEach(function(item) {
		item.addEventListener("click", function() {
		var parentClose = item.parentElement;

		for (var i = 0; i < moviesArray.length; i++) {
			if (parentClose.firstChild.textContent == moviesArray[i].name) {
				moviesArray.splice([i], 1);	
			}
		}
		
		moviesDiv.innerHTML = "";
		createMovie(moviesArray);
		removeParent();
		searchField.value = "";
		});
	});
};

createMovie(moviesArray);
removeParent();

