rand = (min, max) => {
    max *= 1000;
    min *= 1000;
    //console.log(`${h/1000} segundos é o tempo que vai demorar pra aparecer a msg embaixo: `);
    return Math.floor(Math.random()* (max - min)+min);
}
espera = (msg,tempo) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            if(typeof msg !== "string"){ reject("bad value") 
            return;}
            resolve(msg)
        },tempo);
    })
}
const h = [
    //"dahora",
    espera("OXi", rand(1,5)),
    espera("TOC", rand(1,5)),
    espera("DAHORA", rand(1,5)),
    //"acabou"
];
Promise.all(h)
    .then(function(valor){
        console.log(valor);
    })
    .catch(function(erro){
        console.log(erro)
    })
Promise.race(h)
    .then(function(valor){
        console.log(valor);
    })
    .catch(function(erro){
        console.log(erro)
    })


    
