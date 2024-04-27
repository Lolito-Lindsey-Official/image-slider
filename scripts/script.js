let slideImage = document.querySelectorAll(".slide");
let slideLeft = document.querySelector("#arrow-left");
let slideRight = document.querySelector("#arrow-right");
let currentSlideCount = 0;

    // make a reset function that canscan through an array of images, display none of the photos
function resetImage() {
        for (let i = 0; i < slideImage.length; i++) {
            slideImage[i].style.display = "none";
        }
    }

// make a function that resets to the first image in an array
function firstImage() {
    resetImage();
    slideImage[0].style.display = "block";
}

// make a function that shows the previous and next image in an array
function previousImage() {
    resetImage();
    if (currentSlideCount > 0) {
        slideImage[currentSlideCount - 1].style.display = "block";
    }
    currentSlideCount--;
}

function nextImage() {
    resetImage();
    if (currentSlideCount < slideImage.length - 1) {
        slideImage[currentSlideCount + 1].style.display = "block";
    }  
    currentSlideCount++;
}

// add an event listener to the previous and next image function
slideLeft.addEventListener('click',  function() {
    if (currentSlideCount === 0) {
        currentSlideCount = slideImage.length;
    }
    previousImage();
});

slideRight.addEventListener('click', function() {
    if (currentSlideCount > 0 && currentSlideCount < slideImage.length) {
        currentSlideCount = - 1;
    }
    nextImage();
});

firstImage();