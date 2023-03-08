class SwipeDetectorMobile {
    xDown = null;
    yDown = null;
    // config
    touchscreenTreshold = 150; // порог свайпа на сенсорном экране

    downCallback;
    upCallback;

    touchStartHandler;
    touchMoveHandler;

    element;

    constructor(config) {
        this.element = config.element;
        this.downCallback = config.downCallback;
        this.upCallback = config.upCallback;

        this.touchStartHandler = this.touchStart.bind(this);
        this.touchMoveHandler = this.touchMove.bind(this)

        this.element.addEventListener("touchstart", this.touchStartHandler, false);
        this.element.addEventListener("touchmove", this.touchMoveHandler, false);
    }
    touchStart(event) {
        this.xDown = event.touches[0].clientX;
        this.yDown = event.touches[0].clientY;
    }
    touchMove(event) {
        let xUp = event.touches[0].clientX;
        let yUp = event.touches[0].clientY;

        let xDiff = this.xDown - xUp;
        let yDiff = this.yDown - yUp;

        // ?
        if (!this.xDown || !this.yDown) {
            return;
        }

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
            this.xDown = null;
            this.yDown = null;
        }
    }
    destroy(){
        this.element.removeEventListener("touchstart", this.touchStartHandler, false);
        this.element.removeEventListener("touchmove", this.touchMoveHandler, false);
    }
}

export default SwipeDetectorMobile;
