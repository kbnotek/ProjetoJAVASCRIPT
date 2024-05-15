/*Crie uma classe Animal com propriedades nome e tipo e um método para exibir uma mensagem
 com o nome e o tipo do animal.*/

 class Animal{
    constructor(nome,tipo){
        this.nome = nome;
        this.tipo = tipo;
    }
    exibirMensagem(){
        console.log(` o Animal é  ${this.nome} do Tipo Espécie ${this.tipo}`);
    }
 }
 const Especie = new Animal("Baleia","Mamífero")
Especie.exibirMensagem();