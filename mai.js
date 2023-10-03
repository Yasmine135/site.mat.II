function TocaSomPom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const ListaDeSons = document.querySelectorAll('.tecla');

let Contador = 0;

while(Contador < ListaDeSons.length) {
    const tecla = ListaDeSons[Contador];
    const classe = tecla.classList[1];
    console.log(classe);

    const idVozes = `#som_${classe}`;
    console.log(idVozes)


    tecla.onclick = function () {
    TocaSomPom(idVozes);
    }

    Contador = Contador + 1;
    console.log(Contador);

  tecla.onkeydown = function (evento) {
    if (evento.code === 'Space'|| evento.code  === 'Enter') { }
  tecla.classList.add('ativa');
  //console.log(evento.code === 'Space'|| evento.code  === 'Enter');

  }

   tecla.onkeyup = function () { 
    tecla.classList.remove('ativa');
   }
}