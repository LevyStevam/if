
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
            return;
        },tempo);
    })
}
// espera("REACT ESTUDO", rand(1,4))
//     .then((msg) => {
//         console.log(msg);
//         return espera("OUTRA", rand(1,5));
//     })
//     .then((msg) =>{
//         console.log(msg);
//     })

async function executa(){
    try{
        const fase1 = await espera("TAMOJUNTO", rand(1,3));
        console.log(fase1);
        const fase2 = await espera("CEARAMOR", rand(1,3));
        console.log(fase2);
        // teste de erro ===> const fase3 = await espera(321321, rand(1,3));
    } catch(e){
        console.log(e);
    }
    console.log("terminou");
}
executa();