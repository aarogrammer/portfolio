<template>
    <div>
        <section class="portfolio other-projects">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <h2>Recent projects</h2>
                        <div class="clear"></div>
                    </div>
                </div>
                <div class="row">

                    <div v-for="project in projects">
                        <div class="col-sm-4 portfolio-item">
                            <router-link :to="{path: '/projects/' + project.route}">
                                <img :src="project.image" width="900" height="650" class="img-responsive" :alt="project.name" />
                            </router-link>
                            <div class="overlay">
                                <router-link :to="{path: '/projects/' + project.route}">
                                    <h3>{{project.name}}</h3>
                                </router-link>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        mounted: function() {
            this.getProjects();
        },
        data() {
            return {
                projects: ''
            }
        },
        methods : {
            getProjects: function() {
                this.$http.get( '/api/projects.json', {

                })
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
