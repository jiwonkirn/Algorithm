function compute(str1, str2) {
    if(str1.length !== str2.length) throw new Error('left and right strands must be of equal length')
    return [...str1].filter((item, index) => item !== str2[index]).join('').length
}

export default compute