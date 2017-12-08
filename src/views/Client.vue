<style>
    .inline-div {
        display: inline-block;
    }
    .inline-div:nth-of-type(1):after {
        content: "\007C";
        padding: 0 0.5em
    }
    .inline-div:nth-of-type(3):before {
        content: "\007C";
        padding: 0 0.5em
    }
    .icon {
        font-size: 30px;
    }
    .project-template p a {
        text-decoration: underline;
    }
</style>
<template>
    <div>
        <section class="project-template">
            <div class="container">
                <div class="row">
                    <div class="col-md-10 col-md-offset-1">
                        <router-link to="/projects" class="btn btn-goback">
                            Go back
                        </router-link>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-10 col-md-offset-1">
                        <div class="col-md-6">
                            <h2>{{name}}</h2>
                            <div>
                                Work: {{work}}
                            </div>

                            <div v-if="code">
                                <a :href="code"><span class="icon ion-social-github"></span></a>
                            </div>

                            <div v-if="demo">
                                <a :href="demo">Demo</a>
                            </div>

                            <div v-if="screenshots">
                                <div class="inline-div" v-for="screenshot, key in screenshots">
                                    <a :href="screenshot.image">Screenshot {{++key}}</a>
                                </div>
                            </div>

                            <div>
                                Languages/Frameworks: {{stack}}
                            </div>
                        </div>
                        <div class="col-md-6">
                            <img :src="image" class="img-responsive" :alt="name + ' logo'" />
                        </div>

                        <div class="col-md-12 copy-content">

                            <div v-if="notice">
                                <h3>Notice</h3>
                                <p class="breadcrumb" v-html="notice"></p>
                            </div>

                            <div v-if="description">
                                <h3>Development</h3>
                                <p v-html="description"></p>
                            </div>

                            <div v-if="testimonial">
                                <h3>Testimonial</h3>
                                <p v-html="testimonial" class="testimonial breadcrumb"></p>
                            </div>
                            <div v-if="conclusion">
                                <h3>Conclusion</h3>
                                <p v-html="conclusion"></p>
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
                slug: this.$route.path.split("/").pop(),
                name: '',
                image: '',
                description: '',
                conclusion: '',
                notice: '',
                work: '',
                demo: '',
                code: '',
                screenshots: [],
                stack: '',
                testimonial: ''
            }
        },
        methods : {
            getProjects: function() {
                this.$http.get( '/api/projects.json')
                .then((res) => {

                    // Grab project object are loop through until matched route is found
                    this.projects = res.data.projects[0];
                    for(let prop in this.projects) {
                        if (this.projects.hasOwnProperty(prop)) {
                            if(this.slug == this.projects[this.slug].route) {
                                // Returned object for this route
                                let obj = this.projects[this.slug];

                                // Data to be outputted
                                this.name = obj.name;
                                this.image = obj.image;
                                this.description = obj.description;
                                this.conclusion = obj.conclusion;
                                this.notice = obj.notice;
                                this.work = obj.work;
                                this.demo = obj.demo;
                                this.code = obj.code;
                                this.screenshots = obj.screenshots;
                                this.stack = obj.stack;
                                this.testimonial = obj.testimonial;
                            }
                        }
                    }
                })
                .catch((res) => {
                    console.error(`Err: ${ res }`);
                });
            }
        }
    }
</script>