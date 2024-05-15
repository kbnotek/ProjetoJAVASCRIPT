/*
Crie uma classe Aluno com propriedades nome, matricula, notas (array) e um método para
 calcular a média das notas.*/
class Aluno {
    constructor(nome, matricula, nota = []) {
        this.nome = nome;
        this.matricula = matricula;
        this.nota = nota;
    }
    calcularMedia() {

        var notas = this.nota

        var soma = 0; // Inicialize a soma
    
        notas.forEach(function(nota) {
            soma += nota; // Acumule a soma
        });
    
        var media = soma / notas.length; // Calcule a média
    
        console.log("Média:", media);
        
         /* let soma = this.nota.reduce((acumulador, nota) => acumulador + nota, 0);
         const media = soma / this.nota.length;
         return media;*/

    }
}
const aluno1 = new Aluno("Bruno", "25684", [7, 7, 3])
console.log("Nome do aluno:", aluno1.nome);
console.log("Matrícula:", aluno1.matricula);
console.log("Notas:", aluno1.nota);
aluno1.calcularMedia()