<template>
    <div>
        <main-header></main-header>
        <div class="pure-g">
            <section v-if="cookie === '0' || !cookie" class="notice">
                <div class="pure-g">
                    <div class="pure-u-1">
                        <span title="Click to hide this notice" aria-label="Click to hide this notice" @click="closeNotice" class="closeNotice fa fa-close"></span>
                        <h1>{{content.title}}</h1>
                        <p v-html="content.description"></p>
                    </div>
                </div>
            </section>
            <section class="projects">
                <div class="pure-g">
                    <div class="pure-u-1 pure-u-md-8-24"  v-for="project in projects">
                        <div class="portfolio-item">
                            <router-link :to="{path: '/projects/' + project.route}">
                                <img :src="project.image" width="900" height="650" class="pure-img" :alt="project.name" />
                            </router-link>
                            <div class="overlay">
                                <router-link :to="{path: '/projects/' + project.route}">
                                    <h3>{{project.name}}</h3>
                                </router-link>
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
            this.getProjects();
            // Get the cookie so we can check if closed or not
            this.cookie = document.cookie.replace(/(?:(?:^|.*;\s*)noticeClose\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        },
        components: {
            'main-header' : Header
        },
        data() {
            return {
                projects: '',
                content: '',
                cookie: ''
            }
        },
        methods : {
            getProjects: function() {
                this.$http.get('/api/projects.json')
                .then((res) => {
                    this.projects   = res.data.projects[0];
                    this.content    = res.data.content;
                    document.title  = `Aaron Welsh - Projects`; // Set DOM title
                })
                .catch((res) => {
                    console.error(this.$http, `Err: ${ res }`);
                });
            },

            /**
             * Close the notice message and hide it for 30 days.
             */
            closeNotice: function () {
                document.querySelector('.notice').style.display = 'none';
                const date = new Date;
                date.setDate(date.getDate() + 30);
                document.cookie = "noticeClose="+1+"; expires=" + date + ";";
            }
        }
    }
</script>
