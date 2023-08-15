const nav = document.getElementById('menuu');
const abrir = document.getElementById("abrir");
const cerrar = document.getElementById("cerrar");

abrir.addEventListener('click', () =>{
    nav.classList.add('visible');
    cerrar.classList.add('mostrar');
    abrir.classList.add('ocultar');
})
cerrar.addEventListener('click', () =>{
    nav.classList.remove('visible');
    cerrar.classList.remove('mostrar');
    abrir.classList.remove('ocultar');
})