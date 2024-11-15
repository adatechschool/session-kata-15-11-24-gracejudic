const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
}

function getLatinCharacterList(monTexte) {
    let myArray = []
    for (let index = 0; index < monTexte.length; index++) {
        myArray.push(monTexte[index]);
    }
    return myArray
}

function translateLatinCharacter(character) {
    //let myIndex = latinToMorse.findIndex((latinToMorse) => latinToMorse == myCharacter);
    //console.log(myIndex)
    //let result = latinToMorse.filter((latinToMorse) => latinToMorse.myIndex == myCharacter)
    // latinToMorse.array.forEach(element => { (let index = 0; index<2; index++)   })
    // return result
    //if (myCharacter == Object.keys(latinToMorse)) {
    //  return Object.values(latinToMorse)
    //}
    //Object.getOwnPropertyNames
    //
    return latinToMorse[character]
}
console.log(translateLatinCharacter("A"))


function encode(monTexte) {
// la fonction ne marche pas encore et je n'ai plus de temps    
    let myMorseArray = [];
    let texteLatin = getLatinCharacterList(monTexte)
    for(let i = 0; i < texteLatin.length; i++) {
    let monCode = translateLatinCharacter(texteLatin);
    myMorseArray.push(monCode);
    return myMorseArray
    }   
}    

console.log(encode("TEST"))