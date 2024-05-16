/*6-Escreva uma função chamada calcularMedia que recebe um array de números como parâmetro e retorna a média desses números.*/
function calcularMedia(array) {
    let soma = 0;
    for(let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    return soma / array.length;
}

console.log(calcularMedia([5,3,2]));
