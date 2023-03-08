import SwipeDetectorDesctop from "./SwipeDetectorDesctop";
import SwipeDetectorMobile from "./SwipeDetectorMobile";
class SwipeDetector {
    swipeDetectorDesctop;
    swipeDetectorMobile;

    constructor(config) {
        this.swipeDetectorDesctop = new SwipeDetectorDesctop(config);
        this.swipeDetectorMobile = new SwipeDetectorMobile(config);
    }

    setCanSwipe(canSwipe) {
        this.swipeDetectorDesctop.canSwipe = canSwipe;
        this.swipeDetectorMobile.canSwipe = canSwipe;
    }

    destroy() {
        this.swipeDetectorDesctop.destroy();
        this.swipeDetectorMobile.destroy();
    }
}

export default SwipeDetector;