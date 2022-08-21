    let sliderPosition = 0;
    const sliderContainer = document.getElementsByClassName('sliderContainer');
    const sliderTrack = document.getElementsByClassName('sliderTrack');
    const sliderItem = document.getElementsByClassName('sliderItem');
    const sliderItemWidth = sliderItem[0].offsetWidth;
    const sliderContainerWidth = sliderContainer[0].style.width;

    const sliderTrackWidth = sliderItem.length * sliderItemWidth - sliderContainerWidth; 
    const sliderButtonPrev = document.getElementsByClassName('arrowLeft')[0];
    const sliderButtonNext = document.getElementsByClassName('arrowRight')[0];

    function PrevScroll(){
        sliderPosition += sliderItemWidth;

        if (sliderPosition > 0) sliderPosition = 0;

        sliderTrack[0].style.transform = "translateX(" + sliderPosition + "px)";
        sliderButtons();
    };
    function NextScroll(){
        sliderPosition -= sliderItemWidth;

        if (sliderPosition < -sliderTrackWidth) sliderPosition = -sliderTrackWidth;

        sliderTrack[0].style.transform = "translateX(" + sliderPosition + "px)";
        sliderButtons();
    };

    const sliderButtons = () => {
        if (sliderPosition === 0) {
            sliderButtonPrev.style.display = 'none';
        } else {
            sliderButtonPrev.style.display = 'flex';
        }
        if (sliderPosition === -sliderTrackWidth + sliderItemWidth) {
            sliderButtonNext.style.display = 'none';
        } else {
            sliderButtonNext.style.display = 'flex';
        }
    };
    sliderButtons();