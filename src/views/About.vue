<template>
    <div v-if="content">
        <main-header></main-header>
        <div class="pure-g">
            <section class="generic-page about-me">
                <div class="pure-u-1 pure-u-md-2-5">
                    <h1>{{content.h1}}</h1>
                    <div class="about-left-info">
                        <span
                            title="Where I am from"
                            aria-hidden
                            class="fa fa-map-marker-alt"
                        ></span>
                        <span class="data" v-html="content.location"></span>
                    </div>
                    <div class="about-left-info">
                        <span
                            title="What I do"
                            aria-hidden
                            class="fa fa-briefcase"
                        ></span>
                        <span class="data" v-html="content.profession"></span>
                    </div>
                    <div class="about-left-info">
                        <span
                            title="My education"
                            aria-hidden
                            class="fa fa-graduation-cap"
                        ></span>
                        <span class="data" v-html="content.education"></span>
                    </div>
                    <div class="about-left-info">
                        <span
                            title="What languages/frameworks I typically use"
                            aria-hidden
                            class="fa fa-code"
                        ></span>
                        <span class="data" v-html="content.mainStack"></span>
                    </div>
                    <div class="about-left-info otherStack">
                        <span
                            title="I also use"
                            aria-hidden
                            class="fa fa-plus"
                        ></span>
                        <span class="data" v-html="content.otherStack"></span>
                    </div>
                    <div class="about-left-info">
                        <a
                            v-for="x in social"
                            :key="x.url"
                            :href="x.url"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span class="about-social" aria-hidden :class="x.icon"></span>
                        </a>
                    </div>
                </div>

                <div class="pure-u-1 pure-u-md-3-5">
                    <div class="about-right-info" v-html="content.copy"></div>
                    <div class="about-btn-container">
                        <router-link
                            v-for="button in buttons"
                            :key="button.route"
                            :to="{path: button.route}"
                            :aria-label="button.label"
                            tag="button"
                            class="btn-about"
                        >{{button.text}}</router-link>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
    import Header from '../components/Header.vue';

    export default {
        async mounted() {
            await this.getContent();
        },
        components: {
            'main-header': Header
        },
        data() {
            return {
                content: null,
                buttons: null,
                social: null
            };
        },
        methods: {
            async getContent() {
                try {
                    const getContent = await fetch('/api/content.json');
                    const data = await getContent.json();
                    const { about: content, home } = data[0];
                    const { buttons } = content;
                    const { social } = home;
                    this.content = content;
                    this.buttons = buttons;
                    this.social = social;
                    document.title = `Aaron Welsh - ${this.content.title}`; // Set DOM title
                } catch (err) {
                    console.error({
                        message: 'Something went wrong.',
                        errMsg: err
                    });
                }
            }
        }
    };
</script>
