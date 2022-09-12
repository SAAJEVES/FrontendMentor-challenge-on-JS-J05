let linksContainer = document.querySelector(".header-links");
let openLinksBtn = document.querySelector(".open");
let closeLinksBtn = document.querySelector(".close");

function openLinks() {
    closeLinksBtn.style.display = "block";
    linksContainer.classList.add("height");
}

function closeLinks() {
    closeLinksBtn.style.display = "none";
    linksContainer.classList.remove("height");
}

openLinksBtn.addEventListener("click", function() {
    openLinks();
});

closeLinksBtn.addEventListener("click", function() {
    closeLinks();
})


/* document.documentElement.addEventListener("resize", function() {
    if (document.documentElement.clientWidth <= 425 || document.body.clientWidth <= 425) {
        openLinksBtn.style.display ="none";
        closeLinksBtn.style.display ="none";
    }
}); */