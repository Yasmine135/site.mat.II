function TocaSom() {
    document.querySelector('#som_tecla').play();
}

const ListaDeSons = document.querySelectorAll('.tecla');

let Contador = 0;

while(Contador < 9) {
    ListaDeSons[Contador].onclick = TocaSom;
    Contador = Contador + 1;
    console.log(Contador);
}

document.querySelectorAll('.tecla').onclick = TocaSom;

