function TocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
}

const ListaDeSons = document.querySelectorAll('.tecla');





let Contador = 0;

//conição
while(Contador < 9) {
    ListaDeSons[Contador].onclick = TocaSom;
    Contador = Contador + 1;
    console.log(Contador);
}

