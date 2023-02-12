function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}
Pessoa.prototype.idade;
const p1 = new Pessoa("levy", "Stevam", 20);
p1.idade = 20;
console.log(p1);

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.desconto = function(valor){
    this.preco = this.preco - (this.preco *(valor/100));
}
Produto.prototype.aumento = function(valor){
    this.preco = this.preco + (this.preco *(valor/100));
}
const produ = new Produto("camiseta", 50)
produ.desconto(100);
console.log(produ);

p2 = {
    nome: "mouse",
    preco: 15
}
Object.setPrototypeOf(p2, Produto.prototype);
p2.aumento(100);
console.log(p2);
const p3 = Object.create(Produto.prototype);
p3.preco = 50;
p3.aumento(100);
console.log(p3)