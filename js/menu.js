const menu = document.querySelector('.menu');
const navmenu = document.querySelector('.menu-navegacion');

//console.log(menu)
//console.log(navmenu)

//Abrir menu
menu.addEventListener('click', ()=>{
    navmenu.classList.toggle("spread")
})


//Cerrar el menu
window.addEventListener('click', e=>{
    if(navmenu.classList.contains('spread') && e.target != navmenu && e.target != menu   ){
        navmenu.classList.toggle("spread")

    }
})