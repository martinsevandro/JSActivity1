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
    console.log("\nQuestão6: \nNúmero escolhido = ", n);
    let numberArray = n.split("");
    console.log(numberArray);  

    for(let i=0; i<numberArray.length; i++){
        if((numberArray[i] % 2 == 0) && (numberArray[i+1] % 2 == 0)){
            numberArray.splice((i+1),0,"-");
        }
    }
    console.log(numberArray.join(''));
}

//Questão7 item mais frequente
const array7 = [1, 2, 3, 4, 2, 3, 2, 3, 3, 0, 3];   // 3
Frequente(array7);
function Frequente(array){
    console.log("\nQuestão7: \nArray escolhido: ",array);
    let cont1 = 0;
    let cont2 = 0;
    let moda = 0;
    for(let i=0; i<array.length; i++){
        for(let y=0; y<array.length; y++){
            if(array[i] == array[y+1]){
                cont1++;
            }
            if(cont1 == 0) cont1 = 1;
            // moda = array[i];
        }
        if(cont1 > cont2){    // cont1 = 3  cont2 = 1
            moda = array[i];  // moda = 2
            cont2 = cont1;    // cont2 = 3
        }
        cont1 = 0;
    }
    console.log("\nNúmero mais frequente: ",moda);
    
}
