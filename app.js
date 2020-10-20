// DOM
// HEADER
const headerSliderDOM = document.getElementById('headerSlider');
const headerBtnLeftDOM = document.getElementById('headerBtnLeft');
const headerBtnRemoveDOM = document.getElementById('headerBtnRight');
const headerDotsDOM = document.getElementById('headerDots');
// NEWS
const caruselDOM = document.getElementById('caruselContainer');
// GLOBALS
const headerImgs = [
    'img/header_bed_1.jpg',
    'img/header_bed_2.jpg',
    'img/header_bed_3.jpg'
];
// FUNCTIONS   
function createDots() {
    let dot = '';
    for( let i=0; i < headerImgs.length; i++) {
        dot += 
        `<div class="header__dot">
        </div>`;
        headerDotsDOM.innerHTML = dot;
    }
}
function setSliderBackground() {

    let num = 0;
    let dots = document.querySelectorAll(".header__dot");
   
    headerBtnRemoveDOM.addEventListener("click", () => {
        if( num < headerImgs.length -1 ) {
            num++;
            changeDot(num);
            changeBackground(num);
        }
        
    })
    headerBtnLeftDOM.addEventListener("click", () =>{
        if( num > 0 ) {
            num--;
            changeDot(num)
            changeBackground(num);
        }
        
    });
    const changeBackground = (num) => headerImgs.forEach( (photo, id) => {
        if(id === num) {
            headerSliderDOM.style.backgroundImage = `url(${photo})`;
        }
    });
    const changeDot = (num) => dots.forEach( (dot, id) => {
        dot.style.backgroundColor = "transparent";
        if(id === num) {
            dot.style.backgroundColor = "#fff";
        }
    })
    changeBackground(num);
    changeDot(num);
}
// EVENTS
document.addEventListener("DOMContentLoaded", () => {
    createDots();
    setSliderBackground();
})