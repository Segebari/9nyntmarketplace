
// /*==================== NAV MENU ====================*/

const navMenu = document.getElementById('nav-list'),
    navToggle = document.getElementById('menu-btn')
    navClose = document.getElementById('close-menu')

// /*===== MENU SHOW =====*/

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

// /*===== MENU HIDDEN =====*/

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}