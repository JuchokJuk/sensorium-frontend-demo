import average from "../average";

class SwipeDetector {
    deltaYHistoryLegth = 16;
    deltaYA1HistoryLegth = 16;
    deltaYA2HistoryLegth = 16;
    deltaYA3HistoryLegth = 16;

    previousPositiveDifference = 0;

    element;
    upCallback;
    downCallback;
    draw;

    deltaYHistory = new Array(this.deltaYHistoryLegth).fill(0);
    deltaYA1History = new Array(this.deltaYA1HistoryLegth).fill(0);
    deltaYA2History = new Array(this.deltaYA2HistoryLegth).fill(0);
    deltaYA3History = new Array(this.deltaYA3HistoryLegth).fill(0);
    deltaYA1 = 0;
    deltaYA2 = 0;
    deltaYA3 = 0;

    requestAnimationFrameId;

    constructor(config) {
        this.element = config.element;
        this.upCallback = config.upCallback;
        this.downCallback = config.downCallback;
        this.draw = config?.draw;

        this.wheelListener = this.wheelListener.bind(this);

        this.element.addEventListener('wheel', this.wheelListener, { passive: false });

        this.storeZeros();
    }

    storeZeros() {
        this.storeDelataY(0)
        this.requestAnimationFrameId = requestAnimationFrame(this.storeZeros.bind(this));
    }

    storeDelataY(deltaY) {
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

        if (this.draw) {
            this.draw([
                deltaY,
                this.deltaYA1,
                this.deltaYA2,
                this.deltaYA3,
                positiveDifference
            ]);
        }

        if (this.previousPositiveDifference === 0 && positiveDifference > 0) {
            this.upCallback();
        }
        if (this.previousPositiveDifference === 0 && positiveDifference < 0) {
            this.downCallback();
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

    wheelListener(event) {
        this.storeDelataY(event.deltaY);
    }

    destroy() {
        this.element.removeEventListener('wheel', this.wheelListener);
        cancelAnimationFrame(this.requestAnimationFrameId)
    }
}

export default SwipeDetector;