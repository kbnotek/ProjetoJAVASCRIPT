/* Crie uma classe Triangulo com propriedades lado1, lado2 e lado3 e métodos para calcular 
a área e o perímetro do triângulo.*/
class Triangulo {
constructor(lado1,lado2,lado3){
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
}
calcular(){
   /*return  this.lado1 + this.lado2 + this.lado3*/
   console.log(this.lado1+this.lado2+this.lado3)

}
perimetro(){
    return 2* (this.lado1 + this.lado2 + this.lado3)
}
}
const Somador = new Triangulo(10,10,10)
//console.log("o Valor dos lados é",Somador.calcular())
console.log("o Perimetro do Triangulo é",Somador.perimetro())
Somador.calcular()