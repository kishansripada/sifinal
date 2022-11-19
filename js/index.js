currentLinks = document.querySelectorAll("a")

currentLinks.forEach(function (link) {
    if (link.href === document.URL) {
        link.className += ' current-link'
    }

});

