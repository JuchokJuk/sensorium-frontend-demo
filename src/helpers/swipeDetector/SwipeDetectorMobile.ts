import { swipeDetectorConfigType } from "./SwipeDetector";

class SwipeDetectorMobile {
    element: HTMLElement;
    upCallback: () => void;
    downCallback: () => void;

    touchscreenTreshold: number = 150; // порог свайпа на сенсорном экране

    xDown?: number;
    yDown?: number;

    touchStartHandler: (event: TouchEvent) => void;
    touchMoveHandler: (event: TouchEvent) => void;

    canSwipe: boolean = true;

    constructor(config: swipeDetectorConfigType) {
        this.element = config.element;
        this.upCallback = config.upCallback;
        this.downCallback = config.downCallback;

        this.touchStartHandler = this.touchStart.bind(this);
        this.touchMoveHandler = this.touchMove.bind(this)

        this.element.addEventListener("touchstart", this.touchStartHandler, false);
        this.element.addEventListener("touchmove", this.touchMoveHandler, false);
    }

    touchStart(event: TouchEvent) {
        this.xDown = event.touches[0].clientX;
        this.yDown = event.touches[0].clientY;
    }

    touchMove(event: TouchEvent) {
        if (!this.canSwipe) return;

        let xUp = event.touches[0].clientX;
        let yUp = event.touches[0].clientY;


        if (!this.xDown || !this.yDown) return;

        let xDiff = this.xDown - xUp;
        let yDiff = this.yDown - yUp;

        if (Math.abs(xDiff) + Math.abs(yDiff) > this.touchscreenTreshold) {
            if (Math.abs(xDiff) < Math.abs(yDiff)) {
                if (yDiff > 0) {
                    // up (touch)
                    this.upCallback();
                } else {
                    // down (touch)
                    this.downCallback();
                }
            }
            this.xDown = undefined;
            this.yDown = undefined;
        }
    }

    destroy() {
        this.element.removeEventListener("touchstart", this.touchStartHandler, false);
        this.element.removeEventListener("touchmove", this.touchMoveHandler, false);
    }
}

export default SwipeDetectorMobile;
