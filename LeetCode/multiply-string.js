var multiply = function(num1, num2) {
    const len1 = num1.length - 1
    const len2 = num2.length - 1
    const arr = new Array(len1 + len2 + 1).fill(0)
    for (var i = len1; i >= 0; i--) {
        for (var j = len2; j >= 0; j--) {
            arr[i + j] += Number(num1[i]) * Number(num2[j])
        }
    }
    
    for (var k = arr.length - 1; k > 0; k--) {
        arr[k - 1] += Math.floor(arr[k] / 10)
        arr[k] = arr[k] % 10
    }
    const res = arr.join('')
    return res[0] === '0' ? '0' : res
};
