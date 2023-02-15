// const request = obj => {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open(obj.method, obj.url, true);
//     xhr.send();

//     xhr.addEventListener('load', () => {
//       if(xhr.status >= 200 && xhr.status < 300) {
//         resolve(xhr.responseText);
//       } else {
//         reject(xhr.statusText);
//       }
//     });
//   });
// };

// document.addEventListener('click', e => {
//   const el = e.target;
//   const tag = el.tagName.toLowerCase();

//   if (tag === 'a') {
//     e.preventDefault();
//     carregaPagina(el);
//   }
// });

// async function carregaPagina(el) {
//   const href = el.getAttribute('href');

//   const objConfig = {
//     method: 'GET',
//     url: href
//   };

//   try {
//     const response = await request(objConfig);
//     carregaResultado(response);
//   } catch(e) {
//     console.log(e);
//   }
// }

// function carregaResultado(response) {
//   const resultado = document.querySelector('.resultado');
//   resultado.innerHTML = response;
// }
// const request = obj =>{
//   const xhr = new XMLHttpRequest();
//   xhr.open(obj.method, obj.url, true);
//   xhr.send();
//   xhr.addEventListener("load", ()=>{
//     if(xhr.status >= 200 && xhr.status <300){
//       obj.sucess(xhr.responseText);
//     }else{
//       obj.erro(xhr.statusText);
//     }

//   })
// }

// // document.addEventListener("click", e =>{
// //   const el = e.target;
// //   const tag = el.tagName.toLowerCase();
// //   if ( tag === "a"){
// //     e.preventDefault();
// //     carregaPagina(el);
// //   }
// // })

// // function carregaPagina(el){
// //   const href = el.getAttribute("href");
// //   request({
// //     method : "GET",
// //     url: href,
// //     sucess(response){
// //       loadResult(response)
// //     },
// //     erro(errortext){
// //       console.log(errortext)
// //     }
// //   });
// // }

// // function loadResult(response){
// //   const resultado = document.querySelector(".resultado");
// //   resultado.innerHTML = response;
// // }

// fetch("pagina4.html")
//   .then(resposta =>{
//     if(resposta.status !== 200) throw new Error("erro 404 do teu pai");
//     return resposta.text();
//   })
//   .then (html=> console.log(html))
//   .catch(e => console.error(e));

document.addEventListener("click", e =>{
  const el = e.target;
  const tag = el.tagName.toLowerCase();
  if(tag === "a"){
    e.preventDefault();
    carregaPagina(el);
  }
})

async function carregaPagina(el) {
  const href = el.getAttribute('href');
  const response = await fetch(href);
  if (response.status !== 200) throw new Error("erro do teu pai");
  const html = await response.text();
  carregaResultado(html)
  // fetch(href)
  //   .then(response => {
  //     if (response.status !== 200) throw new Error("erro do teu pai");
  //     return response.text();
  //   })
  //   .then(html => carregaResultado(html))
  //   .catch(e => console.log(e));
}  


function carregaResultado(response) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
}