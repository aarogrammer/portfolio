<template>
    <div v-if="content">
        <router-link to="/about" class="skip-main">Skip to about me page</router-link>
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
                            <a v-for="x in social" :key="x.url" :href="x.url" target="_blank" rel="noopener noreferrer">
                                <span class="fa" aria-hidden :class="x.icon"></span>
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
                        <router-link v-for="button in buttons" :key="button.route" :to="{path: button.route}" :aria-label="button.label" tag="button" class="btn-home">{{button.text}}</router-link>
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
            getContent: async function() {
                try {
                    const contentData = await this.$http.get('/api/content');
                    let content         = contentData.data.content[0].home;
                    this.content    = content;
                    this.social     = content.social;
                    this.buttons    = content.button; // We could bring back the first item, but may require more buttons in the future so we will loop!
                    document.title  = `Aaron Welsh - Portfolio`; // Set DOM title
                } catch (err) {
                    console.error(this.$http, `Err: ${ err }`);                    
                }
            }
        }
    }
    
</script>