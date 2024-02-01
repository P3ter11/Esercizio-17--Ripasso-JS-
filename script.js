/* Esercizio 1 */
/* function checkNumber(n1, n2){
    if(n1 === 50 || n2 === 50 || n1+n2 === 50)
        return true;
    else
        return false;
}

console.log(checkNumber(50,65)); */

/* Esercizio 2 */
/* function removeCharacter (string, position){
    return string.slice(0, position) + string.slice(position +1);
}

console.log(removeCharacter("Quanto è bello fare l'amore", 10)); */

/* Esercizio 3 */
/* function checkNumbers(n1,n2){
    if(((n1 <= 60 && n1 >= 40)||(n1 <= 90 && n1 >= 70)) && ((n2 <= 60 && n2 >= 40)||(n2 <= 90 && n2 >= 70)))
        return true;
    else
        return false;
}

console.log(checkNumbers(70,45)); */

/* Esercizio 4 */
/* function checkCity(string){
    if(string.startsWith("Los") || (string.startsWith("New")))
        return string;
    else
        return false;

}

console.log(checkCity("Los Angeles")); */

/* Esercizio 5 */
/* let array = [15, 24, 34]

function sumArray(array){
    let sum = 0;
    for(let i=0; i<array.length; i++){
        sum+=array[i];
    }
    return sum;
}

console.log(sumArray(array)); */

/* Esercizio 6 */
/*  let array = [1, 24, 34]

function checkArray(array){
    if(array.includes(1) || array.includes(3)){
        return false;
    }else{
        return true;
    }
    
}

console.log(checkArray(array));  */

/* Esercizio 7 */
/* function angle(number){
        if (number < 90)
            return "acuto";
        else if (number === 90)
            return "retto";
        else if (number < 180)
            return "ottuso";
        else if (number = 180)
            return "piatto";
        else 
        return "angolo non valido";
}


console.log(angle(180)); */

/* Esercizio 8 */
/* function getLetters(frase) {
    let parole = frase.split(' ');
    // Crea un array per contenere le prime lettere di ogni parola
    const acronimoArray = parole.map(parola => parola[0].toUpperCase());
    // Unisce le prime lettere in un'unica stringa e restituisce l'acronimo
    return acronimoArray.join('');
}

console.log(getLetters("Ciao sono mario ho fame")); */