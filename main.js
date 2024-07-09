//Constants
const sTopNav = document.getElementById("sTopNav")
const fTopNav = document.getElementById("fTopNav")
const leftArrow = document.getElementById('SL');
const rightArrow = document.getElementById('SR');

const tutorialsLink = document.getElementById("tutorialsLink")
const hiddenContentDiv = document.getElementById("hiddenContentDiv")
const tutorialsDiv = document.getElementById("TutorialsDiv")

tutorialsLink.onclick = () => {
    console.log("Working")

    tutorialsDiv.style.display = `block`
    tutorialsDiv.focus()
    sTopNav.style.zIndex = "-1"
}