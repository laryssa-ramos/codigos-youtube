let closePlayer = document.querySelector('#close-player'); // a variável 'closePlayer' recebe o seletor da classe css 'close-player'
let musicPlayer = document.querySelector('.music-player'); // a variável 'musicPlayer' recebe o seletor da classe css 'music-player'
let boxContainer = document.querySelector('.container .box-container'); // a variável 'boxContainer' recebe os seletores das classes css 'container' e 'box-container'

closePlayer.onclick =() =>{ //função para quando o seletor 'close-player' for clicado
    closePlayer.classList.toggle('fa-times'); // se não tiver o ícone 'fa-times', adicioná-lo; se tiver, retirá-lo
    musicPlayer.classList.toggle('active'); // se não tiver a classe 'active', adicioná-la; se tiver, retirá-la
    boxContainer.classList.toggle('active'); // se não tiver a classe 'active', adicioná-la; se tiver, retirá-la
}

let boxes = document.querySelectorAll('.container .box-container .box'); // variável para receber as "caixas com as músicas"

boxes.forEach(box =>{ // para cada caixa selecionada

    box.onclick = () =>{
        let src = box.getAttribute('data-src');
        let text = box.querySelector('.content h3').innerText;
        closePlayer.classList.add('fa-times');
        musicPlayer.classList.add('active');
        boxContainer.classList.add('active');
        musicPlayer.querySelector('h3').innerText = text;
        musicPlayer.querySelector('audio').src = src;
        musicPlayer.querySelector('audio').play();
    }

})