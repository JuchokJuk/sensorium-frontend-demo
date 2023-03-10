interface sliderConfigType {
    slidesContainer: HTMLElement;
    onTransitionEnd: (event: TransitionEvent) => void;
    onSlideChange: (from: number, to: number) => void;
}

class Slider {
    slidesContainer: HTMLElement;
    animationTime: number = 1;

    slideslength: number;
    currentSlideIndex: number = 0;
    positionY: number = 0;

    onTransitionEnd: (event: TransitionEvent) => void;
    onSlideChange: (from: number, to: number) => void;

    constructor(config: sliderConfigType) {
        this.slidesContainer = config.slidesContainer;
        this.onTransitionEnd = config?.onTransitionEnd.bind(this);
        this.onSlideChange = config?.onSlideChange.bind(this);

        this.slideslength = this.slidesContainer.children.length;

        this.slidesContainer.style.transition = `transform ${this.animationTime}s ease-in-out`;

        this.slidesContainer.addEventListener('transitionend', this.onTransitionEnd);
        
        this.resizeHandler = this.resizeHandler.bind(this)
        window.addEventListener('resize', this.resizeHandler)
    }

    slideNext() {
        if (this.currentSlideIndex === this.slideslength - 1) return;

        if (this.onSlideChange) {
            this.onSlideChange(this.currentSlideIndex, this.currentSlideIndex + 1)
        }

        this.currentSlideIndex++;
        this.positionY = this.currentSlideIndex * -window.innerHeight;
        this.slidesContainer.style.transform = `translate(0px, ${this.positionY}px)`
    }

    slidePrev() {
        if (this.currentSlideIndex === 0) return;

        if (this.onSlideChange) {
            this.onSlideChange(this.currentSlideIndex, this.currentSlideIndex - 1);
        }

        this.currentSlideIndex--;
        this.positionY = this.currentSlideIndex * -window.innerHeight;
        this.slidesContainer.style.transform = `translate(0px, ${this.positionY}px)`;
    }

    slideTo(slideIndex: number) {
        this.positionY = slideIndex * -window.innerHeight;
        this.slidesContainer.style.transform = `translate(0px, ${this.positionY}px)`;
    }

    resizeHandler() {
        this.slideTo(this.currentSlideIndex);
    }

    destroy() {
        this.slidesContainer.removeEventListener('transitionend', this.onTransitionEnd);
        window.removeEventListener('resize', this.resizeHandler);
    }
}

export default Slider;