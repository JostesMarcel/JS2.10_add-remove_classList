let small = document.getElementById("klein")
let middle = document.getElementById("middle")
let big = document.getElementById("big")
let element = document.getElementById("element")

function classSmall() {
    console.log("test1")
    element.classList.remove("middle")
    element.classList.remove("big")
    element.classList.add("klein")
}
function classMiddle(){
    console.log("test2")
    element.classList.remove("big")
    element.classList.remove("klein")
    element.classList.add("middle")
}
function classBig(){
    console.log("test3")
    element.classList.remove("klein")
    element.classList.remove("middle")
    element.classList.add("big")
}