import { swipeDetectorConfigType } from "./SwipeDetector";
import average from "../average";

class SwipeDetectorDesctop {
    element: HTMLElement;
    upCallback: () => void;
    downCallback: () => void;

    deltaYHistoryLegth: number = 16;
    deltaYA1HistoryLegth: number = 16;
    deltaYA2HistoryLegth: number = 16;
    deltaYA3HistoryLegth: number = 16;

    deltaYHistory: number[] = new Array(this.deltaYHistoryLegth).fill(0);
    deltaYA1History: number[] = new Array(this.deltaYA1HistoryLegth).fill(0);
    deltaYA2History: number[] = new Array(this.deltaYA2HistoryLegth).fill(0);
    deltaYA3History: number[] = new Array(this.deltaYA3HistoryLegth).fill(0);

    deltaYA1: number = 0;
    deltaYA2: number = 0;
    deltaYA3: number = 0;

    previousPositiveDifference: number = 0;

    requestAnimationFrameId?: number;

    canSwipe = true;

    constructor(config: swipeDetectorConfigType) {
        this.element = config.element;
        this.upCallback = config.upCallback;
        this.downCallback = config.downCallback;

        this.wheelListener = this.wheelListener.bind(this);

        this.element.addEventListener('wheel', this.wheelListener, { passive: false });

        this.storeZeros();
    }

    storeZeros() {
        this.storeDelataY(0)
        this.requestAnimationFrameId = requestAnimationFrame(this.storeZeros.bind(this));
    }

    storeDelataY(deltaY: number) {
        this.deltaYHistory.push(deltaY);
        this.deltaYHistory.splice(0, 1);

        this.deltaYA1 = average(this.deltaYHistory);
        this.deltaYA1History.push(this.deltaYA1);
        this.deltaYA1History.splice(0, 1);

        this.deltaYA2 = average(this.deltaYA1History);
        this.deltaYA2History.push(this.deltaYA2);
        this.deltaYA2History.splice(0, 1);

        this.deltaYA3 = average(this.deltaYA2History);
        this.deltaYA3History.push(this.deltaYA3);
        this.deltaYA3History.splice(0, 1);

        const positiveDifference = this.calcPositiveDifference();

        if (this.canSwipe) {
            if (this.previousPositiveDifference === 0 && positiveDifference > 0) {
                this.upCallback();
            }
            if (this.previousPositiveDifference === 0 && positiveDifference < 0) {
                this.downCallback();
            }
        }

        this.previousPositiveDifference = positiveDifference;
    }

    calcPositiveDifference() {
        const diff = (this.deltaYA2 - this.deltaYA3);
        if (this.deltaYA2 > 0) {
            return diff > 0 ? diff : 0;
        } else if (this.deltaYA2 < 0) {
            return diff < 0 ? diff : 0;
        } else {
            return 0
        }
    }

    wheelListener(event: WheelEvent) {
        if(event.ctrlKey) return;
        this.storeDelataY(event.deltaY);
    }

    destroy() {
        this.element.removeEventListener('wheel', this.wheelListener);
        if (this.requestAnimationFrameId === undefined) return;
        cancelAnimationFrame(this.requestAnimationFrameId)
    }
}

export default SwipeDetectorDesctop;