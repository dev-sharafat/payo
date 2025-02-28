document.getElementById("cashout-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const cashOut = document.getElementById("cashout").value;
    const convertCash = parseFloat(cashOut);
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertMainBalance = parseFloat(mainBalance);
    const passKey = document.getElementById("pass-key").value;
    const pass = parseInt(passKey);
    if (pass === 1234) {
        const sum = convertMainBalance - convertCash;
        document.getElementById('main-balance').innerText = sum;
    }
    else {
        alert("Your pass key is wrong")
    }
})