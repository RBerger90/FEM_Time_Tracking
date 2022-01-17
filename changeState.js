

let daily = document.getElementById("byDay");
let weekly = document.getElementById("byWeek");
let monthly = document.getElementById("byMonth");



daily.addEventListener("click", () =>{
    clear();
    addClass(daily,"active");
    let tab=document.getElementsByClassName("daily");
    for(let i=0; i < tab.length; i++){
        addClass(tab[i],"activeState");
    }
});

weekly.addEventListener("click", () =>{
    clear();
    addClass(weekly,"active");
    let tab=document.getElementsByClassName("weekly");
    for(let i=0; i < tab.length; i++){
        addClass(tab[i],"activeState");
    }
});

monthly.addEventListener("click", () =>{
    clear();
    addClass(monthly,"active");
    let tab=document.getElementsByClassName("monthly");
    for(let i=0; i < tab.length; i++){
        addClass(tab[i],"activeState");
    }
});

function clear() {
    removeClass(daily,"active");
    removeClass(weekly,"active");
    removeClass(monthly,"active");
    let tab=document.getElementsByClassName("activeState");
    for(let i=0; i < tab.length; i++){
        removeClass(tab[i],"activeState");
    }
}


//Useful functions from plainjs.com to manipulate class
function hasClass(el, className) {
    return el.classList ? el.classList.contains(className) : new RegExp('\\b'+ className+'\\b').test(el.className);
}

function addClass(el, className) {
    if (el.classList) el.classList.add(className);
    else if (!hasClass(el, className)) el.className += ' ' + className;
}

function removeClass(el, className) {
    if (el.classList) el.classList.remove(className);
    else el.className = el.className.replace(new RegExp('\\b'+ className+'\\b', 'g'), '');
}

function toggleClass(el, className) {
    if(hasClass(el, className)){
        removeClass(el, className);
    }else{
        addClass(el, className);
    }
}