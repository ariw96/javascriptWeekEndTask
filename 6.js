function mumbling(string) {
    let array = []
    string.toLowerCase().split('').forEach((element, index) => {
        array.push(element.toUpperCase() + element.repeat(index))
    });
    return array.join('-')
}

function coutDuplicate(string) {
    let arrayCount = []
    let arrayString = string.toLowerCase().split('')
    for (let i = 0; i < string.length; i++) {
        if ((string.split(string[i]).length) > 2 && !arrayCount.includes(arrayString[i])) {
            arrayCount.push(arrayString[i])
        }
    }
    return arrayCount.length;
}

function organizeString(stringA, stringB) {
    let newString = "";
    stringA.split('').forEach(element => {
        newString.includes(element) || (newString += element)
    });
    return newString.split('').sort().join('');
}

function isIsogamy(string) {
    let result = true;
    string.split('').forEach(element => {
        string.split(`${element}`).length > 2 && (result = false)
    })
    return result

}
console.log(isIsogamy("Dermatoglyphiccs"))