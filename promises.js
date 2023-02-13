rand = (min, max) => {
    max *= 1000;
    min *= 1000;
    let h = Math.floor(Math.random()* (max - min)+min)
    console.log(`${h/1000} segundos é o tempo que vai demorar pra aparecer a msg embaixo: `);
    return h;
}
espera = (msg,tempo) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(msg)
        },tempo);
    })
}
espera("CEARAMOR", rand(1,5))
    .then((resp)=>{
        console.log(resp);
        return espera("MOFI", rand(1,5));
    })
    .then((resp) =>{
        console.log(resp);
        return espera("KAYKAO", rand(1,5));
    })
    .then((resp)=>{
        console.log(resp);
        return console.log(`acabou...`);
    })