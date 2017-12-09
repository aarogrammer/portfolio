<template>
    <div>
        <section class="portfolio other-projects">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <h2>Other projects</h2>
                        <div class="clear"></div>
                    </div>
                </div>
                <div class="row">

                    <div v-for="project in content.slice(0, 3)">
                        <div class="col-sm-4 portfolio-item">
                            <router-link :to="{path: '/projects/' + project.route + '/'}">
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
                projects: '',
                content: ''
            }
        },
        methods : {
            getProjects: function() {
                this.$http.get( '/api/projects.json')
                .then((res) => {
                    this.projects = res.data.projects[0];
                    this.shuffle(this.projects);
                })
                .catch((res) => {
                    console.error(this.$http, `Err: ${ res }`);
                });
            },
            shuffle: function(obj) {
                let arr = [];
                // Bit messy but looping a good few times so a few items are added to the array. I can then just display three with v-for
                let keys = Object.keys(obj);
                for (let i = 1; i <= keys.length; i++) {

                    // Get objects keys and randomise the key use in this iteration
                    let index = Math.floor(Math.random() * keys.length);
                    let randomKey = keys[index];

                    // Check if item is already in the array, remove if so.
                    if(arr.includes(obj[randomKey])) {
                        let index = arr.indexOf(obj[randomKey]);
                        arr.splice(index, 1);
                    }
                    // Push item to array.
                    arr.push(obj[randomKey]);

                }
                this.content = arr;
            }
        }
    }
</script>
