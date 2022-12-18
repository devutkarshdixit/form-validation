function validate() {
  var user = document.getElementById("username").value;
  var mail = document.getElementById("email").value;
  var pass = document.getElementById("password").value;
  var cpass = document.getElementById("cpassword").value;

  checkUsername(user);
  checkEmail(mail);
  checkPassword(pass);
  checkPasswordsMatch(pass, cpass);
}

function checkUsername(username) {
  if (username.length > 7) {
    document.getElementById("username").classList.add("success");
    document.getElementById("username").classList.replace("error", "success");
    document.getElementById("username_err").innerText = "";
  } else {
    document.getElementById("username").classList.add("error");
    document.getElementById("username_err").innerText =
      "Username should be 8 letters long";
  }
}

function checkEmail(email) {
  if (email.length > 7 && email.includes("@gmail")) {
    document.getElementById("email").classList.add("success");
    document.getElementById("email").classList.replace("error", "success");
    document.getElementById("email_err").innerText = "";
  } else {
    document.getElementById("email").classList.add("error");
    document.getElementById("email_err").innerText =
      "Email must include @gmail and should be 8 letters long";
  }
}

function checkPassword(password) {
  if (password.length > 7 && password.includes(".")) {
    document.getElementById("password").classList.add("success");
    document.getElementById("password").classList.replace("error", "success");
    document.getElementById("password_err").innerText = "";
  } else {
    document.getElementById("password").classList.add("error");
    document.getElementById("password_err").innerText =
      "Password should be 8 letters long and should contain '.'";
  }
}

function checkPasswordsMatch(password, cpassword) {
  if (password == cpassword && password != "") {
    document.getElementById("cpassword").classList.add("success");
    document.getElementById("cpassword").classList.replace("error", "success");
    document.getElementById("cpassword_err").innerText = "";
  } else {
    document.getElementById("cpassword").classList.add("error");
    document.getElementById("cpassword_err").innerText =
      "Passwords do not match";
  }
}
