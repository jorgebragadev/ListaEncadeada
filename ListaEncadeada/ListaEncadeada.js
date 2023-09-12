class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.filhos = null;
    this.proximo = null;
  }
}

class ListaEncadeada {
  constructor() {
    this.cabeca = null;
  }

  adicionarPessoa(nome, idade) {
    const novaPessoa = new Pessoa(nome, idade);

    if (!this.cabeca) {
      this.cabeca = novaPessoa;
    } else {
      let atual = this.cabeca;
      while (atual.proximo) {
        atual = atual.proximo;
      }
      atual.proximo = novaPessoa;
    }
  }

  adicionarFilho(nomePessoa, nomeFilho, idadeFilho) {
    let atual = this.cabeca;
    while (atual) {
      if (atual.nome === nomePessoa) {
        if (!atual.filhos) {
          atual.filhos = new Pessoa(nomeFilho, idadeFilho);
        } else {
          let filhoAtual = atual.filhos;
          while (filhoAtual.proximo) {
            filhoAtual = filhoAtual.proximo;
          }
          filhoAtual.proximo = new Pessoa(nomeFilho, idadeFilho);
        }
        return;
      }
      atual = atual.proximo;
    }
    console.log(`Pessoa com nome ${nomePessoa} não encontrada.`);
  }

  imprimirLista() {
    let atual = this.cabeca;
    while (atual) {
      console.log(`Nome: ${atual.nome}, Idade: ${atual.idade}`);
      if (atual.filhos) {
        let filhoAtual = atual.filhos;
        while (filhoAtual) {
          console.log(`- Filho: ${filhoAtual.nome}, Idade: ${filhoAtual.idade}`);
          filhoAtual = filhoAtual.proximo;
        }
      }
      atual = atual.proximo;
    }
  }
}

// Exemplo de uso
const lista = new ListaEncadeada();

lista.adicionarPessoa("João", 30);
lista.adicionarPessoa("Maria", 28);
lista.adicionarFilho("João", "Pedro", 5);
lista.adicionarFilho("João", "Ana", 3);
lista.adicionarFilho("Maria", "Lucas", 2);

lista.imprimirLista();
