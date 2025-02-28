
document.getElementById("addMoney").style.display = "block"
document.getElementById("cashOut").style.display = "none"

document.getElementById("money-add").addEventListener("click", function (event) {
    document.getElementById("addMoney").style.display = "block"
    document.getElementById("cashOut").style.display = "none"
})
document.getElementById("cash-out").addEventListener("click", function (event) { 
    
    document.getElementById("addMoney").style.display="none"
    document.getElementById("cashOut").style.display="block"
})