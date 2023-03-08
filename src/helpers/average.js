function average(arr){
    return arr.reduce((a, b) => a + b, 0) / arr.length;
}

export default average;