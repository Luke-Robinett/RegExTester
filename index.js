document.querySelector("button")
    .addEventListener("click", () =>
    {
const pattern = document.querySelector("#pattern").value;
const searchString = document.querySelector("#searchString").value;
const rx = new RegExp(pattern);
const doesMatch = rx.test(searchString);
alert(doesMatch ? "That matches!" : "That doesn't match.");
    });