module.exports = function reverse (n) {
    if(-n) {
        let absolute = Math.abs(n)
        let toString = String(absolute)
        let toArray = toString.split('')
        toArray = toArray.reverse()
        let arrayToString = toArray.join('')
        let result = Number(arrayToString)
        return result
    } else {
        let toString = String(n)
        let toArray = toString.split('')
        toArray = toArray.reverse()
        let arrayToString = toArray.join('')
        let result = Number(arrayToString)
        return result
    }
}