var password = prompt("Please provide the password");
var p = document.querySelector("p");

if (password === "joshua") {
    p.classList.add("green");
    p.classList.remove("transparent")
}