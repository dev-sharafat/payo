document.getElementById("login-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById("Account-number").value;
    const passKey = document.getElementById("pass-key").value;
    const pass = parseInt(passKey)
    if (accountNumber.length === 11) {
        if (pass === 1234) {
            window.location.href ="./main.html";
        }
        else {
            alert("Your passkey is wrong")
        }
    }
    else {
        alert("Sorry you can stay")
    }
})