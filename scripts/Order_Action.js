const buttonIncrease = document.querySelector(".button-increase")
const buttonDecrease = document.querySelector(".button-decrease ")

const spanNumber = document.querySelector(".span-number")

let number = 0

function increaseNumber() {
    number++
    spanNumber.textContent = number
}

function decreaseNumber() {
    number--
    spanNumber.textContent = number
    if (number <= 0) {
        number = 0
    }
}
buttonIncrease.addEventListener("click", increaseNumber)
buttonDecrease.addEventListener("click", decreaseNumber)
