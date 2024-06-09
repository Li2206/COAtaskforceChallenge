function stringTrasmForm (word){

    // If the string's length is divisible by 3
    if(word.length % 3 === 0){
        // reversing the entier string
        return word.split('').reverse().join('')
    }
    else if(word.length % 5 === 0){
        // If the string's length is divisible by 5
      return word.split('') // spliting
      .map((i) => i.charCodeAt(0))
      .join(' ');
    }
    else if(word.length % 15 === 0){
      return word.split('').map((i) => i.charCodeAt(0)).join(' ');
    } else {
        return 'test not match' // If none of strings respet the rule
    }
    

}
console.log(stringTrasmForm('Africa')); // output : acirfA
console.log(stringTrasmForm('difficulty'));// output : 100 105 102 102 105 99 117 108 116 121

