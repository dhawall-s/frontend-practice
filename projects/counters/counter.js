let increase_btn = document.getElementById("increase");
let reset_btn = document.getElementById("reset");
let decrease_btn = document.getElementById("decrease");
let count_label = document.getElementById("countlabel"); // Corrected to match the HTML id
let count = 0;

increase_btn.onclick = function() {
    count++;
    console.log(count);
    count_label.textContent = count;
}

reset_btn.onclick = function() {
    count = 0;
    console.log(count);
    count_label.textContent = count;
}

decrease_btn.onclick = function() {
    count--;
    console.log(count);
    count_label.textContent = count;
}
