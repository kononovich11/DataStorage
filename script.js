let slider = document.querySelectorAll('.slider-review');
let sliderCollection  = [... slider];


let count = 1;
let index = 0;
function nextReview() {
    for(let i = index; i<count; i++){
        let currentReview = document.querySelector('.slider-review');
        sliderCollection[i + 1].style.display = "block";
        sliderCollection[i].style.display = "none";
        currentReview = currentReview.nextElementSibling;
    }
    index++;
    count++;
}

function prevReview() {
    for(let i = index; i<count; i++){
        let currentReview = document.querySelector('.slider-review');
        sliderCollection[i - 1].style.display = "block";
        sliderCollection[i].style.display = "none";
        currentReview = currentReview.nextElementSibling;
    }
    index--;
    count--;
}

