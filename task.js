document.addEventListener("DOMContentLoaded", function() {
    // Load task completion status from local storage
    for (let i = 1; i <= 3; i++) {
        if (localStorage.getItem(task${i}) === "complete") {
            document.getElementById(status${i}).innerText = "Complete";
            document.getElementById(status${i}).classList.add("complete");
        }
    }
});

function completeTask(taskId, score) {
    if (localStorage.getItem(task${taskId}) !== "complete") {
        let currentBalance = parseFloat(localStorage.getItem("balance")) || 0;
        localStorage.setItem("balance", currentBalance + score);
        localStorage.setItem(task${taskId}, "complete");
        document.getElementById(status${taskId}).innerText = "Complete";
        document.getElementById(status${taskId}).classList.add("complete");
    }
}