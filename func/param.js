function funcao(){
    let soma = 0;
    for(let argumentos of arguments){
        soma += argumentos;
    }
    console.log(`a soma dos argumentos são: ${soma}`);
}
funcao(4,5,7,8,2,3,4,5);