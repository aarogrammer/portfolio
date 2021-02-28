<template>
    <div>
        <!-- used for testing -->
        <span id="toggle-theme">{{toggleTheme}}</span>
    </div>
</template>
<script>
    export default {
        props: {
            theme: {
                type: String,
                default: 'light'
            }
        },
        methods: {
            /**
             * Change and return theme.
             */
            changeTheme() {
                const body = document.getElementsByTagName('body')[0];
                // Quick way to reset class to prevent duplicates.
                // Body has no other classes, hence why it's safe to do this.
                body.classList = '';
                body.classList.add(this.theme);
                return this.theme;
            }
        },
        computed: {
            toggleTheme() {
                return this.changeTheme();
            }
        }
    };
</script>
<style>
    #toggle-theme {
        display: none;
    }
    body.dark {
        background-color: #0d1117;
    }
    body.dark section.main .home-btn-container .btn-home {
        background: #16a085;
        border: 0;
        color: #eee;
    }
    body.dark header.header-home {
        background-color: #161b22;
    }
    body.dark section.generic-page.about-me {
        background-color: #161b22;
        box-shadow: none;
        color: #eee;
        transition: .2s all ease;
    }
    body.dark section.about-me h1 {
        color: #eee;
    }
    body.dark section.about-me .about-left-info a > span.about-social.fab {
        color: #eee;
    }
    body.dark section.about-me .about-left-info a > span.about-social.fab:hover {
        color: #16a085;
    }
    body.dark section.about-me .about-right-info a {
        color: #eee;
    }
    body.dark section.about-me .about-right-info p {
        color: #eee;
    }
    body.dark nav.nav .pure-menu-item a {
        color: #eee;
    }
    body.dark nav.nav .pure-menu-item a.active {
        color: #16a085;
    }
    body.light {
        background: #eee;
    }
</style>
