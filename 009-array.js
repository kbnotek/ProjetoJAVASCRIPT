/*
O que é um Array em JavaScript?
Um array em JavaScript é um tipo de estrutura 
de dados que permite armazenar múltiplos valores 
em uma única variável. Os elementos de um array 
são indexados numericamente, começando do índice 0,
 o que significa que cada elemento tem uma posição 
 específica no array.
*/
//usando colchetes []
let array1 = [1, 2, 3, 4, 5,];

//usando o construtor Array ()
let array2 = new Array(1, 2, 3, 4, 5);

//criando um array vazio
let array3 = [];

//Arrays podem conter diferente tipos de dados
let array4 = ["Hello", 42, true];

//Acessando indice do array
let array = [10, 20, 30, 40, 50];
console.log(array[0]); // saída 10
console.log(array[2]); //saída 30

//Verificando o tamanho do array
let arrays = [1, 2, 3];
console.log(arrays.length); // Saída: 3

//Inserindo um item no array
arrays.push(4);
console.log(arrays);// saída: [1,2,3,4]

//removendo um item no array
let removendElement = arrays.pop();
console.log(removendElement); //saída 4
console.log(arrays);// saída: [1,2,3]
