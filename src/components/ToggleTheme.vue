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
                default: 'dark'
            }
        },
        methods: {
            /**
             * Change and return theme.
             */
            changeTheme(manualThemeChange) {
                const body = document.getElementsByTagName('body')[0];
                // Quick way to reset class to prevent duplicates.
                // Body has no other classes, hence why it's safe to do this.
                body.classList = '';
                const themeStyle = this.theme || manualThemeChange;
                body.classList.add(this.theme);
                this.setThemeCookie();
                return themeStyle;
            },
            /**
             * Get the current theme that is set within the theme cookie.
             * Defaults to dark.
             */
            getCurrentThemeFromCookie() {
                const value = `; ${document.cookie}`;
                const parts = value.split('; theme=');
                if (parts.length === 2) return parts.pop().split(';').shift();
                return 'dark';
            },
            setThemeCookie() {
                const date = new Date();
                // Set cookie to expire in a year.
                date.setTime(date.getTime() + 3600 * 1000 * 24 * 365 * 1);
                const ttl = date.toUTCString();
                document.cookie = `theme=${this.theme}; expires=${ttl}; path=/;`;
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
    body.dark section.about-me .about-left-info a > span.about-social.fab,
    body.dark section.about-me .about-left-info a > span.about-social.fas {
        color: #eee;
    }
    body.dark section.about-me .about-left-info a > span.about-social.fab:hover,
    body.dark section.about-me .about-left-info a > span.about-social.fas:hover {
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
