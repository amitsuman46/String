const string = "amit"

function reverseString(string) {
    return  string.split('').reverse().join('');
}

console.log(reverseString(string));