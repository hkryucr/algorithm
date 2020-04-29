function radixSort(arr) {
    if (!Array.isArray(arr)) return null;
    if (arr.length <= 1) return arr;

    let maxDigits = getMaxDigits(arr);
    for(let i = 0; i < maxDigits; i++){
        buckets = Array.from({length: 10}, ()=>[]);

        for (let j = 0; j < arr.length; j++) {
            let curEl = arr[j];
            let curElDigit = getDigitFrom(curEl, i);
            buckets[curElDigit].push(curEl);
        }
        arr = [].concat(...buckets);
    } 
    return arr;   
}

function getDigitFrom(num, digit){
    return Math.floor( Math.abs(num) / Math.pow(10, digit) ) % 10;
}

function getMaxDigits(arr){
    let maxDigits = 0;

    for(let i = 0; i < arr.length; i++){
        maxDigits = Math.max(maxDigits, getIntLength(arr[i]));
    }
    return maxDigits;
}

function getIntLength(num){
    return (num === 0) ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;
};


module.exports = {
    radixSort
};
