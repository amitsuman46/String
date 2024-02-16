const str = 'this is a new way to count the vowel';


const vowelInString = (str) => {

    const charArray = str.split('');
    const vowel = ['a','e','i','o','u'];
    const set = new Set(vowel);
    let count=0;
    for(let i=0;i<charArray.length;i++){
        if(set.has(charArray[i]))
            count++;
    }

    return count;
}

console.log(vowelInString(str));