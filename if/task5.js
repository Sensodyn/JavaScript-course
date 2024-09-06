const login = "log";
const pass = "pass";

if (login == "log" && pass == "pass")
	console.log("Correct");
else if (login != "log" && pass == "pass")
	console.log("Incorrect login");
else if (login == "log" && pass != "pass")
	console.log("Incorrect password");
else console.log("Everything is incorrect");