var database = [
	{
		username: "David",
		password: "secret",
	},
	{
		username: "Sally",
		password: "1234",
	},
	{
		username: "Kelly",
		password: "123",
	},
];

var newsFeed = [
	{
		username: "Dav",
		timeline: "So tired from all that learning!",
	},
	{
		username: "Sally",
		timeline: "Javascript is soooo coool!",
	},
];

var userNamePrompt = prompt("Whats your username?");
var passwordPrompt = prompt("What your password?");

function isUserValid(username, password) {
	for (var i = 0; i < database.length; i++) {
		if (database[i].username === username && database[i].password === password) {
			return true;
		}
	}
	return false;
}

function signIn(username, password) {
	if (isUserValid(username, password)) {
		console.log(newsFeed);
	} else {
		alert("Sorry, wrong username and password");
	}
}

signIn(userNamePrompt, passwordPrompt);
