
const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");//selects the form with class name="login"
const loginBtn = document.querySelector("label.login"); //selects the label with name login
const signupBtn = document.querySelector("label.signup");
const linkButton = document.getElementById("signUpButton");
const signupLink = document.querySelector("form .signup-link a"); //anchor element with name assignuplink  
const linkbtn = document.getElementById("signup");
signupBtn.onclick = (() =>//arrow function when signupbtn is clicked login is moved to left 
{
	loginForm.style.marginLeft = "-50%";
	loginText.style.marginLeft = "-50%";
});
linkButton.onclick = (() => // arrow function when login is clicked
{
	loginForm.style.marginLeft = "-50%";
	loginText.style.marginLeft = "-50%";
	linkbtn.checked = true;

});
loginBtn.onclick = (() => {
	loginForm.style.marginLeft = "0%";
	loginText.style.marginLeft = "0%";
});
function ValidateLogin() {
	var mail = document.getElementById("logmail").value;
	var password = document.getElementById("logpass").value;

	if (mail == "" || password == "") {
		alert("Enter email and password");
		return false;
	}
	else if (password.length < 8) {
		alert("Password must have atleast 8 characters");
		return false;
	}
	else {
		alert("Successfully logged in");
		return true;
	}
}
function Toggle() {
	let temp = document.getElementById("logpass");

	if (temp.type === "password") {
		temp.type = "text";
	}
	else {
		temp.type = "password";
	}
}
function Toggle1() {
	let temp = document.getElementById("confpass");
	let temp2 = document.getElementById("signpass");

	if (temp.type === "password" && temp2.type === "password") {
		temp.type = "text";
		temp2.type = "text";
	}
	else {
		temp.type = "password";
		temp2.type = "password";
	}
}

