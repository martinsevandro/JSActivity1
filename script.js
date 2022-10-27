//Array.isArray verifica se a entrada é array ou nao, true ou false, respectivamente
const questao1 = ['item1', 'item2', 'item3', 'item4', 'item5'];
console.log("Questão1: \nEntrada:", questao1," é Array?", Array.isArray(questao1));

//slice é quem copia um array
var clone = questao1.slice();
console.log("\nQuestão2: \nArray da questão1: ", questao1, "\nSeu clone: ", clone);


//Primeiro Elemento e Ns primeiros elementos
console.log("\nQuestão3: \nArray da questão1: ", questao1, "\nExibir Elementos: ");
PrimeiroElemento(questao1, 3);
function PrimeiroElemento(array, n){
    console.log("Primeiro Elemento: ", array[0]); //Primeiro Elemento
    console.log("Exibir qtd de elementos com n = ", n);
    for(let i=0; i<n; i++){
        console.log((i+1),"º elemento: ", array[i]);
    }
}

//Último Elemento e Ns últimos elementos
console.log("\nQuestão4: \nArray da questão1: ", questao1, "\nExibir Elementos: ");
UltimoElemento(questao1, 3);
function UltimoElemento(array, n){
    let ultimo = array[array.length - 1];
    console.log("Ultimo Elemento: ", ultimo); //Primeiro Elemento
    console.log("Exibir qtd de elementos com n = ", n);
    for(let i=0; i<n; i++){        
        console.log((array.length-(i)),"º elemento: ", array[array.length-(i+1)]);
    }
}

//Array para String apenas utilizando o toString
let arrayString = questao1.toString();
console.log("\nQuestão5: \nArray da questão1: ", questao1, "\nUnir em String: ",arrayString);

//Questao6 Numeros pares divididos por traços
numerosPares("025468");
function numerosPares(n){
    console.log("\nQuestão6: Número escolhido = ", n);
    let numberArray = n.split("");
    console.log(numberArray);  

    for(let i=0; i<numberArray.length; i++){
        if((numberArray[i] % 2 == 0) && (numberArray[i+1] % 2 == 0)){
            numberArray.splice((i+1),0,"-");
        }
    }
    console.log(numberArray.join(''));
}

//Questão7