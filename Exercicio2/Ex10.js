/*10-Crie uma função chamada removerEspacos que recebe uma string como parâmetro e retorna a mesma string sem espaços em branco.*/
function removerEspacos(str) {
    return str.replace(/\s+/g, '');
}
console.log(removerEspacos("Bruno Ribeiro"))
