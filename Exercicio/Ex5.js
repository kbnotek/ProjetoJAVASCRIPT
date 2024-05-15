/*Crie uma classe Carro com propriedades marca, modelo e ano e um método para exibir todas as
 informações do carro. */
 class Carro {
    constructor(marca,modelo,ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    exibir(){
        console.log(`Marca: ${this.marca} \n Modelo: ${this.modelo} \n Ano: ${this.ano}`);
    }
 }
 const Chevrolet = new Carro("Chevrolet","Onix LTZ",2024)
 Chevrolet.exibir();