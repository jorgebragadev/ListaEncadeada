
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.filho = null; 
  }
}

const pessoa1 = new Pessoa("Alice", 30);
const pessoa2 = new Pessoa("Bob", 35);
const pessoa3 = new Pessoa("Carol", 25);
const pessoa4 = new Pessoa("David", 28);


pessoa1.filho = pessoa2;
pessoa2.filho = pessoa3;
pessoa3.filho = pessoa4;


