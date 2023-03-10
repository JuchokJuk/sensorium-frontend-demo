import SwipeDetectorDesctop from "./SwipeDetectorDesctop";
import SwipeDetectorMobile from "./SwipeDetectorMobile";

export interface swipeDetectorConfigType {
    element: HTMLElement,
    upCallback: () => void,
    downCallback: () => void
}

class SwipeDetector {
    swipeDetectorDesctop;
    swipeDetectorMobile;

    constructor(config: swipeDetectorConfigType) {
        this.swipeDetectorDesctop = new SwipeDetectorDesctop(config);
        this.swipeDetectorMobile = new SwipeDetectorMobile(config);
    }

    setCanSwipe(canSwipe: boolean) {
        this.swipeDetectorDesctop.canSwipe = canSwipe;
        this.swipeDetectorMobile.canSwipe = canSwipe;
    }

    destroy() {
        this.swipeDetectorDesctop.destroy();
        this.swipeDetectorMobile.destroy();
    }
}

export default SwipeDetector;