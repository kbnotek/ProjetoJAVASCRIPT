/*
    O while é utilizado quando
    queremos executar um bloco de código
    repetidamente enquanto uma condição específica
    for verdadeira. Ele é especialmente útil quando o
    número de iterações não é conhecido antecipadamente ou 
    quando precisamos repetir uma ação até que uma condição 
    específica seja atendida.
*/

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

const frutas = ['maça', 'banana', 'laranja', 'pera', 'melacia'];
let j = 0;
while (j < frutas.length) {
  console.log('Eu gosto de ' + frutas[j]);
  j++;
}

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30
};

const keys = Object.keys(person);
let k = 0;
while (k < keys.length) {
  let key = keys[k];
  console.log(key + ': ' + person[key]);
  k++;
}

let l = 0;
while (l < 10) {
  if (l === 5) {
    break;
  }
  console.log(l);
  l++;
}
