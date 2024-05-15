/* 
Crie uma classe Livro com propriedades titulo, autor e ano e um método para exibir todas 
as informações do livro.*/
class Livro {
constructor(titulo,autor){
    this.titulo = titulo;
    this.autor = autor;
}
exibirLivro(){
console.log(`Titulo ${this.titulo} da Autora ${this.autor}`)
}
}
const Livraria = new Livro("Aprendendo JavaScript","Shelly Powers")
Livraria.exibirLivro()