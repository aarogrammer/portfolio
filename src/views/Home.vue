<template>
    <div v-if="content">
        <router-link to="/about" class="skip-main">Skip to main content</router-link>
        <header class="header-home">
            <div class="pure-g">

                <div class="pure-u-1 pure-u-md-24-24">
                    <div class="avatar-logo">
                        <img class="me pure-img" :src="content.image" alt="My Face">
                    </div>
                </div>
                <div class="pure-u-1">
                    <div class="home-intro">
                        <h1>{{content.h1}}</h1>
                        <h2>{{content.h2}}</h2>
                        <div class="social-icons">
                            <a v-for="x in social" :href="x.url" target="_blank" rel="noopener">
                                <span class="fa" :class="x.icon"></span>
                            </a>
                        </div>

                    </div>
                </div>

            </div>

        </header>
        <section class="main">
            <div class="pure-g">
                <div class="pure-u-1 pure-u-md-24-24">
                    <div class="home-btn-container">
                        <router-link v-for="button in buttons" :to="{path: button.route}" tag="button" class="btn-home">{{button.text}}</router-link>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    export default {
        mounted: function() {
            this.getContent();
        },
        data () {
            return { 
                content: '',
                social: [],
                buttons: []
            }
        },
        methods : {
            /**
             * @name getContent
             * @since 3.0
             * @description AJAX call to bring in JSON data. Why am I doing it this way? Laziness probably. If I want to make a quick text change I don't want to have to transpile and deploy again.
             */
            getContent: function() {
                this.$http.get( '/api/content.json')
                    .then((res) => {
                        // Store returned object to variable. Easier to manage.
                        let obj         = res.data.content[0].home;
                        this.content    = obj;
                        this.social     = obj.social;
                        this.buttons    = obj.button; // We could bring back the first item, but may require more buttons in the future so we will loop!
                    })
                    .catch((res) => {
                        console.error(this.$http, `Err: ${ res }`);
                    }
                );
            }
        }
    }
    
</script>