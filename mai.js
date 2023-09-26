function TocaSomPom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const ListaDeSons = document.querySelectorAll('.tecla');

let Contador = 0;

while(Contador < ListaDeSons.length) {
    const tecla = ListaDeSons[Contador];
    const classe = tecla.ListaDeSons[1];
    console.log(classe);

    const idVozes = `#som_${classe}`;
    console.log(idVozes)

    
    ListaDeSons[Contador].onclick = function () {
    TocaSomPom(idVozes);
    }

    Contador = Contador + 1;
    console.log(Contador);

 tecla.classList.add('ativa');
 tecla.classList.remove('ativa');

}

