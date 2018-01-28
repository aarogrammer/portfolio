<template>
    <div>
        <main-header></main-header>
        <div class="pure-g">
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
        },
        components: {
            'main-header' : Header
        },
        data() {
            return {
                projects: ''
            }
        },
        methods : {
            getProjects: function() {
                this.$http.get('/api/projects.json')
                .then((res) => {
                    this.projects = res.data.projects[0];
                })
                .catch((res) => {
                    console.error(this.$http, `Err: ${ res }`);
                });
            }
        }
    }
</script>
