function stringTrasmForm (word){

    // If the string's length is divisible by 3
    if(word.length % 3 === 0){
        // reversing the entier string
        return word.split('').reverse().join('')
    }
    else if(word.length % 5 === 0){
        // If the string's length is divisible by 5
      return word.split('') // spliting the string
      .map((i) => i.charCodeAt(0)) //mapping into the string and the transform each of his elements in ASCII code 
      .join(' ');// joining all the string's element with a space between each one
    }
    else if(word.length % 15 === 0){
        //If the string's length is divisible both by 5 and 3
        // spliting the string
        //mapping into the string and the transform each of his elements in ASCII code            
        // joining all the string's element with a space between each one and reserve them
      return word.split('').map((i) => i.charCodeAt(0)).join(' ').reverse();
    } else {
        return 'test not match' // If none of strings respet the rule
    }
    

}
console.log(stringTrasmForm('Hamburger')); // output : regrubmaH
console.log(stringTrasmForm('Pizza'));// output : 80 105 122 122 97
console.log(stringTrasmForm('Chocolate Chip Cookie')); //output: eikooC pihC etalocohC

