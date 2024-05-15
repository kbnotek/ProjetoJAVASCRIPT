/*Crie uma classe Pessoa com propriedades nome, idade e um método apresentar() que exibe uma 
mensagem com o nome e a idade da pessoa.*/

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    apresentar() {
        console.log(`meu Nome é ${this.nome} eu tenho ${this.idade} anos`);
    }
}
const pessoa1 = new Pessoa("Bruno", 28);

pessoa1.apresentar()