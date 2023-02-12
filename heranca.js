function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function(valor){
    this.preco += valor
}
Produto.prototype.desconto = function(valor){
    this.preco -= valor
}
function Perfume(nome,preco,cheiro){
    Produto.call(this, nome,preco);
    this.cheiro = cheiro;
}
Perfume.prototype = Object.create(Produto.prototype);
Perfume.prototype.constructor = Perfume;
const perf = new Perfume("franca", 30, "doce");
perf.aumento(30);
console.log(perf.preco);
