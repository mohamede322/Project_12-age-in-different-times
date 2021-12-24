let fBox = document.querySelector(".f")
let eBox = document.querySelector(".e")
let age = document.getElementById("age")
let ageBtn = document.getElementById("age-btn")
let ageInYears = document.getElementById("h1")
let finalResult = document.getElementById("result")

getAge()

function getAge() {
    ageBtn.addEventListener("click" ,() => {
        fBox.style.display = "none"
        eBox.style.display = "flex"
        ageInYears.innerHTML = `Your age is ${age.value} years`
        finalResult.innerText = `Your age in different times
        months => ${(age.value * 12)} Month
        days => ${(age.value * 12) * 30} Day
        hours => ${((age.value * 12) * 30) * 24} Hour
        minutes => ${((age.value * 12) * 30) * 24 * 60} Minute
        seconds => ${((age.value * 12) * 30) * 24 * 60 * 60} Second`
    })
}