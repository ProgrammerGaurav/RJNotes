const navbarNav = document.querySelector('.navbar-nav');
const toggle = document.querySelector('.toggle');
const navbar = document.querySelector('.navbar')

toggle.addEventListener('click', () => {
    navbarNav.classList.toggle('show');
});


const menus = document.querySelectorAll('.menu-item')
menus.forEach(menu => {
    menu.querySelector('.menu-title').addEventListener('click', () => {
        menus.forEach(menuu => {
            const panel = menuu.querySelector('.menu-context');

            if (panel.style.maxHeight && menu != menuu) {
                menuu.classList.toggle('active')
                panel.style.maxHeight = null;
            }
        });
        menu.classList.toggle('active')
        const panel = menu.querySelector('.menu-context');
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
});

const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.menu');
const context = document.querySelector('.context');
sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    context.classList.toggle('active')

})