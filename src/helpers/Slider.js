class Slider {
    currentSlideIndex = 0;
    slideslength;
    positionY;

    constructor(config) {
        this.slidesContainer = config.slidesContainer;
        this.slideslength = this.slidesContainer.children.length
    }

    slideNext() {
        if (this.currentSlideIndex === this.slideslength - 1) return;
        
        this.currentSlideIndex++;
        this.positionY = this.currentSlideIndex * -window.innerHeight;
        this.slidesContainer.style.transform = `translate(0px, ${this.positionY}px)`
    }
    
    slidePrev() {
        if (this.currentSlideIndex === 0) return;

        this.currentSlideIndex--;
        this.positionY = this.currentSlideIndex * -window.innerHeight;
        this.slidesContainer.style.transform = `translate(0px, ${this.positionY}px)`
    }
}

export default Slider;