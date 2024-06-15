/*DEIXANDO O CARROSSEL DINAMICO*/

const r = document.querySelectorAll('.slide');

function carregar(imagem){
  const url = 'http://localhost:3000/Carrosssel1';

  fetch (url).then (
    t => t.json()
  ).then(
    response => {
      console.log(response);
      num = 0;
      [...r].forEach(el => {
        el.innerHTML = `<img src="${response[num].img}"></img>`;
        num++
      }) //innerHTML = `<img src="${response[0].img}"></img>`;
    }
  )
  
  
}

// carregar('');

const q = document.querySelectorAll('.slide');

function carregar2(imagem){
  const url = 'http://localhost:3000/Carrosssel2';

  fetch (url).then (
    t => t.json()
  ).then(
    response => {
      console.log(response, r);
      num = 0;
      [...r].forEach(el => {
        el.innerHTML = `<img src="${response[num].img}"></img>`;
        num++
      }) //innerHTML = `<img src="${response[0].img}"></img>`;
    }
  )
  
  
}

// carregar('');

const t = document.querySelectorAll('.slide');

function carregar3(imagem){
  const url = 'http://localhost:3000/Carrosssel3';

  fetch (url).then (
    t => t.json()
  ).then(
    response => {
      console.log(response, r);
      num = 0;
      [...r].forEach(el => {
        el.innerHTML = `<img src="${response[num].img}"></img>`;
        num++
        innerHTML = `<img src="${response[0].img}"></img>`;
      }) 
    }
  )
  
  
}

// carregar('');

const a = document.querySelectorAll('.slide');

function carregar4(imagem){
  const url = 'http://localhost:3000/Carrosssel4';

  fetch (url).then (
    t => t.json()
  ).then(
    response => {
      console.log(response, r);
      num = 0;
      [...r].forEach(el => {
        el.innerHTML = `<img src="${response[num].img}"></img>`;
        num++
      }) //innerHTML = `<img src="${response[0].img}"></img>`;
    }
  )
  
  
}

// carregar('');

const b = document.querySelectorAll('.slide');

function carregar5(imagem){
  const url = 'http://localhost:3000/Carrosssel5';

  fetch (url).then (
    t => t.json()
  ).then(
    response => {
      console.log(response, r);
      num = 0;
      [...r].forEach(el => {
        el.innerHTML = `<img src="${response[num].img}"></img>`;
        num++
      }) //innerHTML = `<img src="${response[0].img}"></img>`;
    }
  )
  
  
}

// carregar('');


const d = document.querySelectorAll('.slide');

function carregar6(imagem){
  const url = 'http://localhost:3000/Carrosssel6';

  fetch (url).then (
    t => t.json()
  ).then(
    response => {
      console.log(response, r);
      num = 0;
      [...r].forEach(el => {
        el.innerHTML = `<img src="${response[num].img}"></img>`;
        num++
      }) //innerHTML = `<img src="${response[0].img}"></img>`;
    }
  )
  
  
}

// carregar6('');


