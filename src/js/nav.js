/**
 * @since 3.0
 * @description Toggle classes to check if mobile menu is open or not.
 */
document.addEventListener('DOMContentLoaded', function() {
    // Check if there is a main header first as we do not have one on our home page.
    if(document.querySelector('.main-header')) {
        const menu = document.querySelector('.main-header'),
            WINDOW_CHANGE_EVENT = ('onorientationchange' in window) ? 'orientationchange' : 'resize';

        function toggleHorizontal() {
            [].forEach.call(
                document.querySelector('.main-header').querySelectorAll('.header-can-transform'),
                function (el) {
                    el.classList.toggle('pure-menu-horizontal');
                }
            );
        };

        function toggleMenu() {
            // set timeout so that the panel has a chance to roll up
            // before the menu switches states
            if (menu.classList.contains('open')) {
                setTimeout(toggleHorizontal, 500);
            }
            else {
                toggleHorizontal();
            }
            menu.classList.toggle('open');
            document.getElementById('toggle').classList.toggle('x');
        };

        function closeMenu() {
            if (menu.classList.contains('open')) {
                toggleMenu();
            }
        }

        document.getElementById('toggle').addEventListener('click', function (e) {
            toggleMenu();
            e.preventDefault();
            console.log('working fine')
        });

        document.addEventListener(WINDOW_CHANGE_EVENT, closeMenu);
    }
});