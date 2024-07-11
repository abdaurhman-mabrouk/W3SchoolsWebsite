//Constants
const sTopNav = document.getElementById("sTopNav")
const fTopNav = document.getElementById("fTopNav")
const leftArrow = document.getElementById('SL');
const rightArrow = document.getElementById('SR');

const tutorialsLink = document.getElementById("tutorialsLink")
const hiddenContentDiv = document.getElementById("hiddenContentDiv")
const tutorialsDiv = document.getElementById("tutorialsDiv")
const tutorialsHeaderDiv = document.querySelector("tutorialsDiv div.headerDiv")
const tutorialsSearchField = document.querySelector("tutorialsDiv div.headerDiv input[type='search']")

tutorialsLink.onclick = () => {
    let divDisplay = tutorialsDiv.style.display

    if (divDisplay == `` || divDisplay == `block`) {
        tutorialsDiv.style.display = `none`
        sTopNav.style.zIndex = "2"
        tutorialsLink.blur()

    } else {
        tutorialsDiv.style.display = ``
        sTopNav.style.zIndex = "-1"
        tutorialsDiv.focus()
    }
}