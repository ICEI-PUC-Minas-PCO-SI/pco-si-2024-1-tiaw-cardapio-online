var bolas = document.querySelector('.bolas')
var quant = document.querySelectorAll('.slides .image')
var atual = 0
var imagem = document.getElementById('atual')
var next = document.getElementById('next')
var back = document.getElementById('voltar')
var rolar = true

for(let i=0; i < quant.length; i++){
    var div = document.createElement('div')
    div.id = i
    bolas.appendChild(div)

}
document.getElementById('0').classList.add('imgAtual')

var pos = document.querySelectorAll('.bolas div')

for(let i=0; i< pos.length; i++){
    pos[i].addEventListener('click', ()=>{
        atual = pos[i].id
        rolar = false
        slide()
    })
}

back.addEventListener('click', ()=>{
    atual--
    rolar = false
    slide()
})
next.addEventListener('click', ()=>{
    atual++
    rolar = false
    slide()
})

function slide (){
    if(atual >= quant.length){
        atual = 0
    }
    else if (atual < 0){
        atual = quant.length-1
    }
    document.querySelector('.imgAtual').classList.remove('imgAtual')
    imagem.style.marginLeft = -1024*atual+'px'
    document.getElementById(atual).classList.add('imgAtual')
}
setInterval(()=>{
    if(rolar){
        atual++
        slide()
    }
    else{
        rolar = true
    }

})