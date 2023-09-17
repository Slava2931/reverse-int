module.exports = function reverse (n){
    let Number = Array.from(String(n));
    let reversedArray = Number.reduce((acc, Number) =>
        [Number, ...acc], []);
    return parseInt(reversedArray.join(''));

}
