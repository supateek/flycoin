document.addEventListener("DOMContentLoaded", function() {
    let balance = localStorage.getItem("balance") || 0;
    document.getElementById("balance").innerText = balance;
});