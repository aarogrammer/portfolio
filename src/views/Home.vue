<template>
    <div v-if="content">
        <router-link to="/about" class="skip-main">Skip to about me page</router-link>
        <header class="header-home">
            <div class="pure-g">

                <div class="pure-u-1 pure-u-md-24-24">
                    <div
                        class="avatar-logo"
                        role="img"
                        :aria-label="content.image.ariaLabel"
                    >
                        <img
                            class="me pure-img"
                            :src="content.image.main.src"
                            :alt="content.image.main.alt"
                        />
                        <img
                            class="me pure-img image-hover"
                            :src="content.image.mainHover.src"
                            :alt="content.image.mainHover.alt"
                        />
                    </div>
                </div>
                <div class="pure-u-1">
                    <div class="home-intro">
                        <h1>{{content.h1}}</h1>
                        <h2>{{content.h2}}</h2>
                        <div class="social-icons">
                            <a
                                v-for="x in social"
                                :key="x.url"
                                :href="x.url"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span aria-hidden :class="x.icon"></span>
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
                        <router-link
                        v-for="button in buttons"
                        :key="button.route"
                        :to="{path: button.route}"
                        :aria-label="button.label"
                        tag="button"
                        class="btn-home"
                        @mouseover="handleButtonHover(
                            true,
                            button.hover.enabled ? button.hover.text : button.text
                        )"
                        @mouseleave="handleButtonHover(false, button.text)"
                    >
                        <span v-if="buttonMessage">{{ buttonMessage }}</span>
                        <span v-else>{{ button.text }}</span>
                    </router-link>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                content: null,
                social: null,
                buttons: null,
                hover: false,
                hoverMessage: null
            };
        },
        async mounted() {
            await this.getHomeContent();
        },
        computed: {
            buttonMessage() {
                return this.hoverMessage;
            }
        },
        methods: {
            async getHomeContent() {
                const getContent = await fetch('/api/content.json');
                const data = await getContent.json();
                const { home: content } = data[0];
                const { social, buttons } = content;
                this.content = content;
                this.social = social;
                this.buttons = buttons;
                document.title = 'Aaron Welsh - Portfolio'; // Set DOM title
            },
            handleButtonHover(state, message) {
                this.hover = state;
                this.hoverMessage = message;
            }
        }
    };
</script>
