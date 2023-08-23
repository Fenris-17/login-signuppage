function ValidateSignin() {
	var smail = document.getElementById("signmail").value;
	var spassword = document.getElementById("signpass").value;
	var cpassword = document.getElementById("confpass").value;
	console.log(cpassword);
	console.log(spassword);
	if (smail == "" || spassword == "" || cpassword == "") {
		alert("Fill in all required fields");
		return false;
	}

	else if (spassword.length < 8) {
		alert("Password must have atleast 8 characters");
		return false;
	}
	else if (spassword !== cpassword) {
		alert("Passwords don't match");
		return false;
	}
	else {
		alert("Successfully signed up");
		return true;
	}
}