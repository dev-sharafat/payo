document.getElementById("add-money").addEventListener("click", function (event) {
    event.preventDefault();
    const addMoney = document.getElementById("Add-Amount").value;
    const converAddmoney = parseFloat(addMoney)
    const mainBalance = document.getElementById("main-balance").innerText;
    const converMainBalance = parseFloat(mainBalance);
    const passKey = document.getElementById("pass-key").value;
    const converPass = parseInt(passKey);

    if (converPass === 1234) {
        const sum = converMainBalance + converAddmoney;
        document.getElementById("main-balance").innerText = sum;
    }
    else {
        alert("Your pass is wrong")
    }


})
