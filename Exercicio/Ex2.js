/*Crie uma classe Retangulo com propriedades largura e altura e métodos para calcular a área e o 
perímetro do retângulo.*/
class Retangulo{
    constructor(largura,altura){
        this.largura = largura;
        this.altura = altura;
    }
    get area(){
        
        return this.largura* this.altura
    }   
    get perimetro(){
        return 2*(this.largura + this.altura)
    }

}
const Valor = new Retangulo(3,5);

console.log(`o Valor da Largura e Altura é: `, Valor.area);
console.log(`o Valor do perimetro ${Valor.perimetro} `);

