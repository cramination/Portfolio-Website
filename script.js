function switchVideos() {

    let video1 = document.getElementById("video1");
  
    let video2 = document.getElementById("video2");
  
  
  
    video1.style.display = "none"; 
  
    video2.style.display = "block";
  
  }




const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const dotsNav  = document.querySelector('.carousel_nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;


//slides[0].style.left = slideWidth * 0 + 'px';
//slides[1].style.left = slideWidth * 1 + 'px';
//slides[2].style.left = slideWidth * 2 + 'px';


const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}

slides.forEach(setSlidePosition);



const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current_slide');
    targetSlide.classList.add('current_slide');
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current_slide');
    targetDot.classList.add('current_slide');
}

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
    if (targetIndex ===  0)  {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    } else  if  (targetIndex ===  slides.length - 1) {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    } else {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
}


nextButton.addEventListener('click', e =>  {
    const currentSlide = track.querySelector('.current_slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current_slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrows(slides, prevButton, nextButton, nextIndex);
})

prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current_slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current_slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);
    
    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideShowArrows(slides, prevButton, nextButton, prevIndex);
});

dotsNav.addEventListener('click', e => {
const targetDot = e.target.closest('button');
 
if (!targetDot) return;
const currentSlide = track.querySelector('.current_slide');
const currentDot  = dotsNav.querySelector('.current_slide');
const targetIndex = dots.findIndex(dot => dot === targetDot);
const targetSlide =  slides[targetIndex];

moveToSlide(track, currentSlide, targetSlide);
updateDots(currentDot, targetDot);
hideShowArrows(slides, prevButton, nextButton, targetIndex);

})

// CAROUSEL  2       //////////////////////////////////////////////////////////////////////

const track2 = document.querySelector('.carousel_track-2');
const slides2 = Array.from(track2.children);
const nextButton2 = document.querySelector('.next-2');
const prevButton2 = document.querySelector('.prev-2');
const dotsNav2  = document.querySelector('.carousel_nav-2');
const dots2 = Array.from(dotsNav2.children);

const slideWidth2 = slides2[0].getBoundingClientRect().width;


//slides[0].style.left = slideWidth * 0 + 'px';
//slides[1].style.left = slideWidth * 1 + 'px';
//slides[2].style.left = slideWidth * 2 + 'px';


const setSlidePosition2 = (slide2, index2) => {
    slide2.style.left = slideWidth2 * index2 + 'px';
}

slides2.forEach(setSlidePosition2);



const moveToSlide2 = (track2, currentSlide2, targetSlide2) => {
    track2.style.transform = 'translateX(-' + targetSlide2.style.left + ')';
    currentSlide2.classList.remove('current_slide-2');
    targetSlide2.classList.add('current_slide-2');
}

const updateDots2 = (currentDot2, targetDot2) => {
    currentDot2.classList.remove('current_slide-2');
    targetDot2.classList.add('current_slide-2');
}

const hideShowArrows2 = (slides2, prevButton2, nextButton2, targetIndex2) => {
    if (targetIndex2 ===  0)  {
        prevButton2.classList.add('is-hidden-2');
        nextButton2.classList.remove('is-hidden-2');
    } else  if  (targetIndex2 ===  slides2.length - 1) {
        prevButton2.classList.remove('is-hidden-2');
        nextButton2.classList.add('is-hidden-2');
    } else {
        prevButton2.classList.remove('is-hidden-2');
        nextButton2.classList.remove('is-hidden-2');
    }
}


nextButton2.addEventListener('click', e =>  {
    const currentSlide2 = track2.querySelector('.current_slide-2');
    const nextSlide2 = currentSlide2.nextElementSibling;
    const currentDot2 = dotsNav2.querySelector('.current_slide-2');
    const nextDot2 = currentDot2.nextElementSibling;
    const nextIndex2 = slides2.findIndex(slide2 => slide2 === nextSlide2);

    moveToSlide2(track2, currentSlide2, nextSlide2);
    updateDots2(currentDot2, nextDot2);
    hideShowArrows2(slides2, prevButton2, nextButton2, nextIndex2);
})

prevButton2.addEventListener('click', e => {
    const currentSlide2 = track2.querySelector('.current_slide-2');
    const prevSlide2 = currentSlide2.previousElementSibling;
    const currentDot2 = dotsNav2.querySelector('.current_slide-2');
    const prevDot2 = currentDot2.previousElementSibling;
    const prevIndex2 = slides2.findIndex(slide2 => slide2 === prevSlide2);
    
    moveToSlide2(track2, currentSlide2, prevSlide2);
    updateDots2(currentDot2, prevDot2);
    hideShowArrows2(slides2, prevButton2, nextButton2, prevIndex2);
});

dotsNav2.addEventListener('click', e => {
const targetDot2 = e.target.closest('button');
 
if (!targetDot2) return;
const currentSlide2 = track2.querySelector('current_slide-2');
const currentDot2  = dotsNav2.querySelector('.current_slide-2');
const targetIndex2 = dots2.findIndex(dot2 => dot2 === targetDot2);
const targetSlide2 =  slides2[targetIndex2];

moveToSlide2(track2, currentSlide2, targetSlide2);
updateDots2(currentDot2, targetDot2);
hideShowArrows2(slides2, prevButton2, nextButton2, targetIndex2);

})


// CAROUSEL  3    //////////////////////////////////////////////////////////////////////


const track3 = document.querySelector('.carousel_track-3');
const slides3 = Array.from(track3.children);
const nextButton3 = document.querySelector('.next-3');
const prevButton3 = document.querySelector('.prev-3');
const dotsNav3  = document.querySelector('.carousel_nav-3');
const dots3 = Array.from(dotsNav3.children);

const slideWidth3 = slides3[0].getBoundingClientRect().width;


//slides[0].style.left = slideWidth * 0 + 'px';
//slides[1].style.left = slideWidth * 1 + 'px';
//slides[2].style.left = slideWidth * 2 + 'px';


const setSlidePosition3 = (slide3, index3) => {
    slide3.style.left = slideWidth3 * index3 + 'px';
}

slides3.forEach(setSlidePosition3);



const moveToSlide3 = (track3, currentSlide3, targetSlide3) => {
    track3.style.transform = 'translateX(-' + targetSlide3.style.left + ')';
    currentSlide3.classList.remove('current_slide-3');
    targetSlide3.classList.add('current_slide-3');
}

const updateDots3 = (currentDot3, targetDot3) => {
    currentDot3.classList.remove('current_slide-3');
    targetDot3.classList.add('current_slide-3');
}

const hideShowArrows3 = (slides3, prevButton3, nextButton3, targetIndex3) => {
    if (targetIndex3 ===  0)  {
        prevButton3.classList.add('is-hidden-3');
        nextButton3.classList.remove('is-hidden-3');
    } else  if  (targetIndex3 ===  slides3.length - 1) {
        prevButton3.classList.remove('is-hidden-3');
        nextButton3.classList.add('is-hidden-3');
    } else {
        prevButton3.classList.remove('is-hidden-3');
        nextButton3.classList.remove('is-hidden-3');
    }
}


nextButton3.addEventListener('click', e =>  {
    const currentSlide3 = track3.querySelector('.current_slide-3');
    const nextSlide3 = currentSlide3.nextElementSibling;
    const currentDot3 = dotsNav3.querySelector('.current_slide-3');
    const nextDot3 = currentDot3.nextElementSibling;
    const nextIndex3 = slides3.findIndex(slide3 => slide3 === nextSlide3);

    moveToSlide3(track3, currentSlide3, nextSlide3);
    updateDots3(currentDot3, nextDot3);
    hideShowArrows3(slides3, prevButton3, nextButton3, nextIndex3);
})

prevButton3.addEventListener('click', e => {
    const currentSlide3 = track3.querySelector('.current_slide-3');
    const prevSlide3 = currentSlide3.previousElementSibling;
    const currentDot3 = dotsNav3.querySelector('.current_slide-3');
    const prevDot3 = currentDot3.previousElementSibling;
    const prevIndex3 = slides3.findIndex(slide3 => slide3 === prevSlide3);
    
    moveToSlide3(track3, currentSlide3, prevSlide3);
    updateDots3(currentDot3, prevDot3);
    hideShowArrows3(slides3, prevButton3, nextButton3, prevIndex3);
});

dotsNav3.addEventListener('click', e => {
const targetDot3 = e.target.closest('button');
 
if (!targetDot3) return;
const currentSlide3 = track3.querySelector('current_slide-3');
const currentDot3  = dotsNav3.querySelector('.current_slide-3');
const targetIndex3 = dots3.findIndex(dot3 => dot3 === targetDot3);
const targetSlide3 =  slides3[targetIndex3];

moveToSlide3(track3, currentSlide3, targetSlide3);
updateDots3(currentDot3, targetDot3);
hideShowArrows3(slides3, prevButton3, nextButton3, targetIndex3);

})


/////  IMAGE BUTTONS

function showButton() {
    document.getElementById('img-full-1')
        .style.visibility = "visible";
    document.getElementById('hide-button')
        .style.display = "block";
}

function showButton2() {
    document.getElementById('img-full-2')
        .style.visibility = "visible";
    document.getElementById('hide-button')
        .style.display = "block";
}

function showButton3() {
    document.getElementById('img-full-3')
        .style.visibility = "visible";
    document.getElementById('hide-button')
        .style.display = "block";
}

function showButton4() {
    document.getElementById('img-full-4')
        .style.visibility = "visible";
    document.getElementById('hide-button')
        .style.display = "block";
}

function showButton5() {
    document.getElementById('img-full-5')
        .style.visibility = "visible";
    document.getElementById('hide-button')
        .style.display = "block";
}
function showButton6() {
    document.getElementById('img-full-6')
        .style.visibility = "visible";
    document.getElementById('hide-button')
        .style.display = "block";
}
function showButton7() {
    document.getElementById('img-full-7')
        .style.visibility = "visible";
    document.getElementById('hide-button')
        .style.display = "block";
}
function showButton8() {
    document.getElementById('img-full-8')
        .style.visibility = "visible";
    document.getElementById('hide-button')
        .style.display = "block";
}

function hideButton() {
    document.getElementById('img-full-1')
        .style.visibility = "hidden";
    document.getElementById('img-full-2')
        .style.visibility = "hidden";
    document.getElementById('img-full-3')
        .style.visibility = "hidden";
    document.getElementById('img-full-4')
        .style.visibility = "hidden";
    document.getElementById('img-full-5')
        .style.visibility = "hidden";
    document.getElementById('img-full-6')
        .style.visibility = "hidden";
    document.getElementById('img-full-7')
        .style.visibility = "hidden";
    document.getElementById('img-full-8')
        .style.visibility = "hidden";
    document.getElementById('hide-button')
    .style.display = "none";
}