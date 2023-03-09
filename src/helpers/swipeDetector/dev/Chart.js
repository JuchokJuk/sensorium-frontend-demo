class Chart {
    canvas;
    context;
    colors;
    dataHistoryLength;
    dataHistory;

    constructor(config) {
        this.canvas = config.canvas;
        this.canvas.width = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;
        this.context = this.canvas.getContext("2d");

        this.colors = config.colors;
        
        this.dataHistoryLength = this.canvas.offsetWidth;
        this.dataHistory = new Array(this.dataHistoryLength).fill(0);
    }

    draw(data) {
        this.dataHistory.push(data);
        this.dataHistory.splice(0, 1);

        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        let startPoint = canvas.width - this.dataHistory.length;

        for (let i = 0; i < this.dataHistory.length; i++) {
            for (let j = 0; j < this.dataHistory[i].length; j++) {
                this.context.beginPath();
                if (i - 1 >= 0) {
                    this.context.moveTo(
                        startPoint + i - 1,
                        this.canvas.height / 2 - this.dataHistory[i - 1][j]
                    );
                    this.context.strokeStyle = this.colors[j];
                    this.context.lineTo(
                        startPoint + i,
                        this.canvas.height / 2 - this.dataHistory[i][j]
                    );
                    this.context.stroke();
                } else {
                    this.context.moveTo(startPoint - i, this.canvas.height / 2);
                }
            }
        }
    }
}

export default Chart;
