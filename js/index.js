currentLinks = document.querySelectorAll("a")

currentLinks.forEach(function (link) {
    if (link.href === document.URL) {
        link.className += ' current-link'
    }

});


const clickHandler = (e) => {
    let isModel = e.composedPath()
        .map((elem) => elem.id)
        .includes("modal")

    console.log(e)
    if (e.target.id === "viewResume") {
        document.getElementById("modal").style.display = "block"
    } else {
        if (!isModel) {
            document.getElementById("modal").style.display = "none"
        }

    }


}
document.addEventListener("click", clickHandler)

