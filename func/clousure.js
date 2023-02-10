function retornafuncao(nome){
    return function(){
        return nome;
    };
}

const funcao = retornafuncao("levy");
const funcao2 = retornafuncao("jon");
console.dir(funcao());
console.dir(funcao2());
