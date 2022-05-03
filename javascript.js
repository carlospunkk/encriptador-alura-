function criptografar() {
  let imgf = document.getElementById('imagem1')
  imgf.innerHTML = ' Criptografado com sucesso !!! '

  var textareavazia = document.querySelector('#text-area-vazia')
  textareavazia.value = text_area.value
    .replace(/[e|é|è|ê|ể|ë]/g, 'enter')
    .replace(/[|i|í|ì|î]/g, 'imes')
    .replace(/[a|à|á|â|ã|ä|å]/g, 'ai')
    .replace(/[o|ó|ò|ô|ö]/g, 'ober')
    .replace(/[u|ú|ù|ü]/g, 'ufat')
    .replace(/[$|@|!|*|%||¨|{|}|#]/g, ' ')

  text_area.value = ''
}

function descriptogafar() {
  let imgf2 = document.getElementById('imagem1')
  imgf2.innerHTML = `Descriptografado`
  //descriptografar
  var textareavazia2 = document.querySelector('#text-area-vazia')
  textareavazia2.value = textareavazia2.value
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u')
    .replace(/[$|@|!|*|%||¨|{|}|#]/, ' ')

  //reverter o botao de copiado para copia
  let copiado = document.querySelector('#text-area-vazia').value
  if (navigator.clipboard.writeText(copiado)) {
    document.querySelector('#copiar').textContent = 'Copiar'
    text_area.focus()
    //textareavazia2.value = ''
  }
}

function copiarAreaTransferencia() {
  let copiado = document.querySelector('#text-area-vazia').value
  if (navigator.clipboard.writeText(copiado)) {
    document.querySelector('#copiar').textContent = 'Copiado'

    let divimgf = document.getElementById('imagem1')
    divimgf.innerHTML = `<img src="/imagens_desk01/imagem-01.svg" alt="Imagem_menino_Lupa" />
    <h1>Nenhuma Mensagem Encontrada</h1>
    <p>
     Copiado com sucesso !!!<br />
    </p>`

    text_area.focus()
  }
}

//text-area
var text_area = document.querySelector('#text-area') //recebe elemento html
text_area.value = ''
text_area.focus()

//botao criptografar
var btn = document.querySelector('#criptografar') //linkei botao criptografar
btn.onclick = criptografar // chamei a função ao clicar

//botao descriptografar
var btn2 = document.querySelector('#descriptografar')
btn2.onclick = descriptogafar
text_area.value = ''

// botao copiar
var btcopi = document.querySelector('#copiar')
btcopi.onclick = copiarAreaTransferencia
