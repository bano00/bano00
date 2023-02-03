var remainingAttempts = 3;
var form = document.getElementById("log");
var submitButton
form.addEventListener("submit", function(e) {
e.preventDefault();
var username = document.getElementById("Username").value;
var password = document.getElementById("Password").value;
if (username === "Bitch" && password === "Bano") {
    alert("Login Successful!");
    window.location.href = "eme.html";
} else {
    remainingAttempts--;
    if (remainingAttempts === 0) {
        alert('You have reached your maximum attemps');
        form.ariaDisabled
    }else {
    alert("Incorrect username or password, please try again. You have " + remainingAttempts + " remaining attempts left");
    document.getElementById("Username").value = "";
    document.getElementById("Password").value = "";
    }}});
