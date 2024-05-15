/*Crie uma classe Produto com propriedades nome, preco e quantidade e métodos para calcular
 o valor total do produto (preço * quantidade).*/

class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    calcularValorTotal() {
        return this.preco * this.quantidade;
        

    }    
}
const Qtd = new Produto("Chocolate",5,10);
console.log(`Produto ${Qtd.nome} Preço ${Qtd.preco} Quantidade ${Qtd.quantidade} Valor Total R$:`,Qtd.calcularValorTotal());
