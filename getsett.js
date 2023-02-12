function Produto(nome,estoque){
    this.nome = nome;
    Object.defineProperty(this, "estoque",{
        enumerable: true, // mostra a chave
        configurable: true, // configuravel
        get: function(){
            return estoque;
        },
        set: function(valor){
            if(typeof valor !== "number"){
                throw new TypeError("mexeu errado man!");
            }
            estoque = valor;
        }

    });
}
const p1 = new Produto("levy", "eai");
console.log(p1)