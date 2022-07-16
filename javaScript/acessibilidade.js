function moverAcesso(){
    var acesso = document.getElementById('acesso');
    var barra  = document.getElementById('nav');
    var lista = document.getElementById('listaAcesso');

    if (acesso.style.height != '24vh'){
        acesso.style.height = '24vh';
        acesso.style.opacity= '1';
        /*acesso.style.transition= '1.0s';*/

        lista.style.opacity = '1';
        /*lista.style.transition = '3s';*/

        barra.style.borderRadius = '1vw 1vw 0 1vw';
        

        document.getElementById('imgSeta').src="imagens/setaUp.png"
    }
    else{
        acesso.style.height = '0';
        acesso.style.opacity = '0';
        /*acesso.style.transition= '1.0s';*/

        lista.style.opacity = '0';
        //lista.style.transition = '0.3s';

        barra.style.borderRadius = '1vw 1vw 1vw 1vw';
        /*barra.style.transition = '1s'*/
        /*barra.style.transitionDelay = "0.5s"*/

        document.getElementById('imgSeta').src="imagens/setaDown.png"

    }
}

function moverAcessoEspIng(){
    var acesso = document.getElementById('acesso');
    var barra  = document.getElementById('nav');
    var lista = document.getElementById('listaAcesso');

    if (acesso.style.height != '24vh'){
        acesso.style.height = '24vh';
        acesso.style.opacity= '1';
        acesso.style.transition= '1.0s';

        lista.style.opacity = '1';
        lista.style.transition = '3s';

        barra.style.borderRadius = '1vw 1vw 0 1vw';
        barra.style.transition = '1s'

        document.getElementById('imgSeta').src="../../imagens/setaUp.png"
    }
    else{
        acesso.style.height = '0';
        acesso.style.opacity = '0';
        acesso.style.transition= '1.0s';

        lista.style.opacity = '0';
        lista.style.transition = '0.3s';

        barra.style.borderRadius = '1vw 1vw 1vw 1vw';
        barra.style.transition = '1s'
        barra.style.transitionDelay = "0.5s"

        document.getElementById('imgSeta').src="../../imagens/setaDown.png"

    }
}

var testeModo = 0;
function modoEscuro(){
    var botao = document.getElementById("btnEscuro")
    var h1 = document.getElementById("t1")
    var css = document.getElementById('linkCss')

    if(h1.style.color!="white"){
        botao.src='imagens/switchOn.png';
        css.href = 'css/styleEscuro.css';
        h1.style.color="white"
        testeModo = 1;
        localStorage.setItem('teste', testeModo.value)
    }else{
        botao.src='imagens/switchOff.png';
        css.href = 'css/style.css';
        h1.style.color="black"
        testeModo = 0
        localStorage.setItem('teste', testeModo.value)
    }
    
}

function modoEscuroIngEspIndex(){
    var botao = document.getElementById("btnEscuro")
    var h1 = document.getElementById("t1")
    var css = document.getElementById('linkCss')

    if(h1.style.color!="white"){
        botao.src='../../imagens/switchOn.png';
        css.href = '../../css/styleEscuro.css';
        h1.style.color="white"
        testeModo = 1;
        localStorage.setItem('teste', testeModo.value)
    }else{
        botao.src='../../imagens/switchOff.png';
        css.href = '../../css/style.css';
        h1.style.color="black"
        testeModo = 0
        localStorage.setItem('teste', testeModo.value)
    }
    
}

function modoEscuroSobre(){
    var botao = document.getElementById("btnEscuro")
    var h1 = document.getElementById("t1")
    var css = document.getElementById('linkCss')
    var graduado = document.getElementById('graduado')
    var escola = document.getElementById('escola')

    if(h1.style.color!="white"){
        botao.src='imagens/switchOn.png';
        css.href = 'css/styleEscuro.css';
        h1.style.color="white"
        graduado.src = 'imagens/graduadoBranco.png'
        escola.src = 'imagens/escolaBranco.png'
    }else{
        botao.src='imagens/switchOff.png';
        css.href = 'css/style.css';
        h1.style.color="black"
        graduado.src = 'imagens/graduado.png'
        escola.src = 'imagens/escola.png'
    }
}

function modoEscuroIngEspSobre(){
    var botao = document.getElementById("btnEscuro")
    var h1 = document.getElementById("t1")
    var css = document.getElementById('linkCss')
    var graduado = document.getElementById('graduado')
    var escola = document.getElementById('escola')

    if(h1.style.color!="white"){
        botao.src='../../imagens/switchOn.png';
        css.href = '../../css/styleEscuro.css';
        h1.style.color="white"
        graduado.src = '../../imagens/graduadoBranco.png'
        escola.src = '../../imagens/escolaBranco.png'
    }else{
        botao.src='../../imagens/switchOff.png';
        css.href = '../../css/style.css';
        h1.style.color="black"
        graduado.src = '../../imagens/graduado.png'
        escola.src = '../../imagens/escola.png'
    }
}