var homeid = document.getElementsByClassName("home");
var studyid = document.getElementsByClassName("about");
var projectsid = document.getElementsByClassName("projects");
var experienceid = document.getElementsByClassName("experiences");

var navHome = document.getElementsByClassName("nav-home");
var navProj = document.getElementsByClassName("nav-proj");
var navExpe = document.getElementsByClassName("nav-expe");
var navAbot = document.getElementsByClassName("nav-abot");

function hideShowFunc(n) {
    if (n === 1) {
        navHome[0].classList.add("Inpage");
        navProj[0].classList.remove("Inpage");
        navExpe[0].classList.remove("Inpage");
        navAbot[0].classList.remove("Inpage");
        homeid[0].style.display = "block";
        studyid[0].style.display = "none";
        projectsid[0].style.display = "none";
        experienceid[0].style.display = "none";
    } else if (n === 2) {
        navHome[0].classList.remove("Inpage");
        navProj[0].classList.remove("Inpage");
        navExpe[0].classList.remove("Inpage");
        navAbot[0].classList.add("Inpage");
        homeid[0].style.display = "none";
        studyid[0].style.display = "block";
        projectsid[0].style.display = "none";
        experienceid[0].style.display = "none";
    } else if (n === 3) {
        navHome[0].classList.remove("Inpage");
        navProj[0].classList.add("Inpage");
        navExpe[0].classList.remove("Inpage");
        navAbot[0].classList.remove("Inpage");
        homeid[0].style.display = "none";
        studyid[0].style.display = "none";
        projectsid[0].style.display = "block";
        experienceid[0].style.display = "none";
    } else {
        navHome[0].classList.remove("Inpage");
        navProj[0].classList.remove("Inpage");
        navExpe[0].classList.add("Inpage");
        navAbot[0].classList.remove("Inpage");
        homeid[0].style.display = "none";
        studyid[0].style.display = "none";
        projectsid[0].style.display = "none";
        experienceid[0].style.display = "block";
    }
}
