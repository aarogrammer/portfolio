<template>
    <div>
        <router-link to="/" class="skip-main">Go back to home page.</router-link>
        <main-header></main-header>
        <div class="pure-g">
            <section class="generic-page about-me">
                <error v-if="APIError"/>
                <div v-if="loaded && !APIError" class="pure-u-1 pure-u-md-2-5">
                    <h1>{{h1}}</h1>
                    <div class="about-left-info">
                        <span
                            title="Where I am from"
                            aria-hidden
                            class="fa fa-map-marker-alt"
                        ></span>
                        <span class="data" v-html="location"></span>
                    </div>
                    <div class="about-left-info">
                        <span
                            title="What I do"
                            aria-hidden
                            class="fa fa-briefcase"
                        ></span>
                        <span class="data" v-html="profession"></span>
                    </div>
                    <div class="about-left-info">
                        <span
                            title="My education"
                            aria-hidden
                            class="fa fa-graduation-cap"
                        ></span>
                        <span class="data" v-html="education"></span>
                    </div>
                    <div class="about-left-info">
                        <span
                            title="What languages/frameworks I typically use"
                            aria-hidden
                            class="fa fa-code"
                        ></span>
                        <span class="data" v-html="mainStacks"></span>
                    </div>
                    <div class="about-left-info otherStack">
                        <span
                            title="I also use"
                            aria-hidden
                            class="fa fa-plus"
                        ></span>
                        <span class="data" v-html="otherStacks"></span>
                    </div>
                    <div class="about-left-info">
                        <span
                            title="I have experience working with"
                            aria-hidden
                            class="fa fa-cloud"
                        ></span>
                        <span class="data" v-html="cloudEnvs"></span>
                    </div>
                    <div class="about-left-info">
                        <span
                            title="I deploy applications for"
                            aria-hidden
                            class="fa fa-server"
                        ></span>
                        <span class="data" v-html="deployment"></span>
                    </div>
                    <div class="about-left-info">
                        <span
                            title="I have database experience with"
                            aria-hidden
                            class="fa fa-database"
                        ></span>
                        <span class="data" v-html="databases"></span>
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
                    <div class="about-right-info" v-html="copy"></div>
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
    import Error from '../components/Error.vue';

    export default {
        async mounted() {
            await this.getContent();
        },
        components: {
            'main-header': Header,
            error: Error
        },
        data() {
            return {
                APIError: false,
                loaded: false,
                h1: null,
                location: null,
                profession: null,
                education: null,
                mainStacks: null,
                otherStacks: null,
                cloudEnvs: null,
                deployment: null,
                databases: null,
                copy: null,
                buttons: null,
                social: null
            };
        },
        methods: {
            async getContent() {
                try {
                    const getContent = await fetch(`${this.apiURL}/about`);
                    const {
                        title,
                        h1,
                        location,
                        profession,
                        education,
                        mainStacks,
                        otherStacks,
                        cloudEnvs,
                        deployment,
                        databases,
                        copy,
                        social,
                        button
                    } = await getContent.json();

                    this.loaded = true;
                    this.social = social;
                    this.button = button;
                    this.h1 = h1;
                    this.location = location;
                    this.profession = profession;
                    this.education = education;
                    this.mainStacks = mainStacks;
                    this.otherStacks = otherStacks;
                    this.cloudEnvs = cloudEnvs;
                    this.deployment = deployment;
                    this.databases = databases;
                    this.copy = copy;
                    document.title = `${title} | Aaron Welsh `; // Set DOM title
                } catch (err) {
                    this.APIError = true;
                    console.error({
                        message: 'Something went wrong when fetching content. Please try again.',
                        errMsg: err
                    });
                }
            }
        }
    };
</script>
