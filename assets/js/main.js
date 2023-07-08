
// /*==================== NAV MENU ====================*/

const navMenu = document.getElementById('nav-list'),
    navToggle = document.getElementById('menu-btn'),
    navClose = document.getElementById('close-menu')

// /*===== MENU SHOW =====*/

if(navToggle){
    navToggle.addEventListener('click', (event) =>{
        navMenu.classList.add('show-menu')
        event.stopPropagation(); // Stop the click event from propagating to document
    })
}

// /*===== MENU HIDDEN =====*/

if(navClose){
    navClose.addEventListener('click', (event) =>{
        navMenu.classList.remove('show-menu')
        event.stopPropagation(); // Stop the click event from propagating to document
    })
}