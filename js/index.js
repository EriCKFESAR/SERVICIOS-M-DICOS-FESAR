const   target = document.getElementById('menu-rapido'),
        btnArriba = document.getElementById('icono-arriba'),
        menuRapido = document.getElementById('menu-rapido'),
        hold = 1;

function go(id){
    let element = document.getElementById(id);
    element.scrollIntoView({block: "start", behavior: "smooth"});
}

const observer = new IntersectionObserver(interseccion, {
    rootMargin: '-70px',
    threshold: hold
});
observer.observe(target);

function interseccion(events){
    let event = events[0];
    let visible = event.intersectionRatio >= hold;
    if(visible){
        btnArriba.removeEventListener('click', irArriba);
        btnArriba.classList.add('oculto');
    }else{
        btnArriba.addEventListener('click', irArriba);
        btnArriba.classList.remove('oculto');
    }
}

function irArriba(){
    menuRapido.scrollIntoView({block: "end", behavior: "smooth"});
}


