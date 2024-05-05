const arrowDown = document.querySelector(".arrow-down")
const road1 = document. querySelector(".road1")

arrowDown.addEventListener("click", () => {
    road1.scrollIntoView()
})