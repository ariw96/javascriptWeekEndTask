function trim(string) {
    let arr = string.split("")
    for (let i = 0; i < arr.length;) {
        if (arr[i] === ' ') { arr.shift() } else { i = arr.length }
    }
    for (let j = arr.length - 1; j > 0; j--) {
        if (arr[j] === ' ') { arr.pop() } else { j = 0 }
    }
    return arr.join('')
}

function repeatString(repeatNumber, string) {
    let index = 0
    let result = ""
    while (repeatNumber > index) {
        result += string
        index++
    }
    return result

}

function toCamelCase(string) {
    let array = string.replaceAll("-", " ").split(' ')
    let newString = array[0]
    array.shift()
    array.forEach((e) => {
        newString += " " + e[0].toUpperCase() + e.slice(1);
    });
    return newString
}

function toWiRdECase(string) {
    let array = string.split('')
    let newString = ''
    let i = 0
    array.forEach((e) => {
        i % 2 === 0 ? newString += e.toUpperCase() : newString += e;
        i++
        (e === " ") && (i = 0)
    });
    return newString
}

function toMask(string) {
    return "#".repeat(string.slice(0, -4).length) + string.slice(-4)
}

function shortestWord(string) {
    let shortestWord = string
    string.split(' ').forEach((e) => {
        e.length <= shortestWord.length && (shortestWord = e);
    })
    return shortestWord
}

console.log(shortestWord("aaa bbbbb cccccccdd yyyyyy yyyyyyyyyyyyy yyyyyyyyyyyyyyy"))