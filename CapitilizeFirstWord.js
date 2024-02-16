function capitalizeWords(sentence) {
   
    const words = sentence.split(' ');


    const capitalizedWords = words.map(word => {
      
        if (word.length > 0) {
          
            return word[0].toUpperCase() + word.slice(1);
        } else {
            return ''; 
        }
    });

    
    const capitalizedSentence = capitalizedWords.join(' ');

    return capitalizedSentence;
}

const sentence = "hello world how are you";
const a = "amit";
console.log(a.slice(3));
console.log(capitalizeWords(sentence));
