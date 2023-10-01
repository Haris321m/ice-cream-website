var burger = document.querySelector(".burger");
var urlres = document.querySelector(".ul-respons");

function toggolres(){

    if (urlres.style.display === "block") {
        urlres.style.display = "none";
    } else {
        urlres.style.display = "block";
    }

}

burger.addEventListener('click', toggolres);