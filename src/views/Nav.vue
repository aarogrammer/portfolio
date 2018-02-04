<template>
    <div class="pure-g">
        <div class="pure-u-1-1 pure-u-md-24-24 pure-u-xs-24-24">
            <nav class="nav pure-menu pure-menu-horizontal header-can-transform">
                <ul class="pure-menu-list">
                    <li class="pure-menu-item">
                        <router-link v-on:click.native="closeMobileMenu" to="/" active-class="active" exact>
                            Home
                        </router-link>
                    </li>
                    <li class="pure-menu-item">
                        <router-link v-on:click.native="closeMobileMenu" to="/about" active-class="active" exact>
                            About
                        </router-link>
                    </li>
                    <li class="pure-menu-item">
                        <router-link v-on:click.native="closeMobileMenu" to="/projects" active-class="active">
                            Projects
                        </router-link>
                    </li>
                    <li class="pure-menu-item">
                        <router-link v-on:click.native="closeMobileMenu" to="/contact" active-class="active" exact>
                            Contact
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>
<script>
    export default {
        mounted: function() {
          this.nav();
        },
        data () {
            return {
            }
        },
        methods: {
            /**
             * @since 3.0
             * @description Toggle classes to check if mobile menu is open or not.
             */
            nav: function() {
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

            },
            closeMobileMenu: function() {
                document.querySelector('.main-header').classList.remove('open');
                document.getElementById('toggle').classList.toggle('x');
            }
        }
    }
</script>
