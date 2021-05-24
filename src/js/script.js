function navButton(){
    var navLinks = document.getElementById("nav-links");
    console.log(hasClass(navLinks, "nav-links-open"));
    if(hasClass(navLinks, "nav-links-open")){
        navLinks.className = navLinks.className.replace(/\bnav-links-open\b/g, "");
    }else{
        navLinks.classList.add("nav-links-open");
    }
}

function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}