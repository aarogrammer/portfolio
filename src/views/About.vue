<template>
    <div>
        <main-header></main-header>
        <div class="pure-g">
            <section class="generic-page about-me">
                <div class="pure-u-1">
                    <div class="pure-g">
                        <div class="pure-u-1 pure-u-md-12-24">
                            <h1>{{content.h1}}</h1>
                            <div class="about-left-info">
                                <span title="Where I am from" aria-hidden class="fa fa-map-marker"></span>
                                <span class="data" v-html="content.location"></span>
                            </div>
                            <div class="about-left-info">
                                <span title="What I do" aria-hidden  class="fa fa-briefcase"></span>
                                <span class="data" v-html="content.profession"></span>
                            </div>
                            <div class="about-left-info">
                                <span title="My education" aria-hidden  class="fa fa-graduation-cap"></span>
                                <span class="data" v-html="content.education"></span>
                            </div>
                            <div class="about-left-info">
                                <span title="What languages/frameworks I typically use" aria-hidden class="fa fa-code"></span>
                                <span class="data" v-html="content.stack"></span>
                            </div>
                        </div>

                        <div class="pure-u-1 pure-u-md-12-24">
                            <div class="about-right-info" v-html="content.copy"></div>
                            <div class="about-btn-container">
                                <router-link v-for="button in buttons" :key="button.route" :to="{path: button.route}" :aria-label="button.label" tag="button" class="btn-about">{{button.text}}</router-link>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    </div>
</template>
<script>
    import Header from './Header.vue';
    export default {
        mounted: function() {
            this.getContent();
        },
        components: {
            'main-header' : Header
        },
        data () {
            return {
                content: '',
                buttons: ''
            }
        },
        methods : {
            /**
             * @name getContent
             * @since 3.0
             * @description AJAX call to bring in JSON data. Why am I doing it this way? Laziness probably. If I want to make a quick text change I don't want to have to transpile and deploy again.
             */
            getContent: function() {
                this.$http.get('/api/content.json')
                .then((res) => {
                    // Store returned object to variable. Easier to manage.
                    let obj         = res.data.content[0].about;
                    this.content    = obj;
                    this.buttons    = obj.button; // We could bring back the first item, but may require more buttons in the future so we will loop!
                    document.title  = `Aaron Welsh - ${this.content.title}`; // Set DOM title
                })
                .catch((res) => {
                        console.error(this.$http, `Err: ${ res }`);
                    }
                );
            }
        }
    }
</script>