function sim() {
    alert("Você aceitou convite!!! Mande um print da resposta pls")
}

function desvia(t) {
    var btn = t;
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.rigth = geraPosicao(10, 90);
    console.log("Opa, desviei...");
}


function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}
