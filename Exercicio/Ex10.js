/*Crie uma classe Circulo com propriedade raio e métodos para calcular a
 área e o perímetro do círculo.
*/
class Circulo {
    constructor(raio) {
      this.raio = raio;
    }
  
    
    calcularPerimetro() {
      const pi = Math.PI;
      return 2 * pi * this.raio;
    }
  
    calcularArea() {
      const pi = Math.PI;
      return pi * this.raio ** 2;
    }
  }
  
 
  const meuCirculo = new Circulo(5);
  
  console.log(`Perímetro: ${meuCirculo.calcularPerimetro().toFixed(2)}`);
  console.log(`Área: ${meuCirculo.calcularArea().toFixed(2)}`);
  