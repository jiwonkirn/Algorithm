// first (148 ms, 100% / 41.8 MB)
const intToRoman = function(num) {
    const roman = {
        1: "I",
        4: "IV",
        5: "V",
        9: "IX",
        10: "X",
        40: "XL",
        50: "L",
        90: "XC",
        100: "C",
        400: "CD",
        500: "D",
        900: "CM",
        1000: "M",
    }
    const arr = Object.keys(roman).reverse();
    let cur = 0;
    let str = "";
    while(arr[cur] || num !== 0) {
        if (num >= arr[cur]) {
            num -= Number(arr[cur]);
            str += roman[arr[cur]];
        }
        if (num < arr[cur]) {
            cur++
        }
    }
    return str;
};
