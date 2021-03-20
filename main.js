// tady je místo pro náš program
function ztucni() {
    document.querySelector('#text').style.fontWeight = 'bold';
}

function nacerveno(){
let clanek = document.querySelector('p');
clanek.classList.toggle('cervena');
}

function zvetsipismo(){
    document.querySelector('#text').style.fontSize = "17px";
}

function prehraj() {
    let audioElement = document.querySelector('audio');
    audioElement.play();
}


function zastav() {
    let audioElement = document.querySelector('audio');
    audioElement.pause();
}

function nula() {
    let audioElement = document.querySelector('audio');
    audioElement.volume=0;
}

function napul() {
    let audioElement = document.querySelector('audio');
    audioElement.volume=0.5;
}

function jedna() {
    let audioElement = document.querySelector('audio');
    audioElement.volume=1;
}

function zacatek() {
    let audioElement = document.querySelector('audio');
    audioElement.currentTime=0;
}