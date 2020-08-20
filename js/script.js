/*JavaScript jquery*/

var rodape = $('#rodape')

rodape.delay(3000).animate({
    'margin-right': "-5px",
    'border-bottom-right-radius': "50px"
},4000)

/* JavaScript Puro */

function typeWrity(elemento){

  const textoArray = elemento.innerHTML.split('')
  elemento.innerHTML = ''
  textoArray.forEach((letra, i) => {
      setTimeout(function(){
        elemento.innerHTML += letra
     }, 1000 * i)
  })

}

const texto = document.querySelector('div#letra h1')
texto.style.color = '#fff'
typeWrity(texto)
document.getElementById('letra').style.display = 'block'