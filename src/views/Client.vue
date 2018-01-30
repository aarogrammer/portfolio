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
    .project-template p a {
        text-decoration: underline;
    }
</style>
<template>
    <div>
        <main-header></main-header>
        <div class="pure-g">
            <section class="generic-page client">
                <div class="pure-u-1">
                    <div class="pure-g">
                        <div class="pure-u-1 pure-u-md-12-24">
                            <div class="content-left">
                                <h1>{{name}}</h1>
                                <div class="client-left-info" v-if="work">
                                    <span class="fa fa-handshake-o" title="Type of work"></span>
                                    <span class="data" v-html="work"></span>
                                </div>

                                <div class="client-left-info" v-if="code">
                                    <a rel="noopener noreferrer" :href="code"><span title="Code" class="fa fa-github"></span></a>
                                    <span class="data">
                                        <a rel="noopener noreferrer" :href="code">Code</a>
                                    </span>
                                </div>

                                <div class="client-left-info" v-if="demo">
                                    <span title="Demo" class="fa fa-desktop"></span>
                                    <span class="data">
                                        <a rel="noopener noreferrer" :href="demo">Demo</a>
                                    </span>
                                </div>

                                <div class="client-left-info" v-if="screenshots.length > 0">
                                    <span class="fa fa-image"></span>
                                    <span class="data">
                                        <div class="inline-div" v-for="screenshot, key in screenshots">
                                            <a target="_blank" aria-hidden rel="noopener noreferrer" :href="screenshot.image">Screenshot {{++key}}</a>
                                        </div>
                                    </span>
                                </div>

                                <div class="client-left-info" v-if="stack">
                                    <span class="fa fa-code" title="Code in use"></span>
                                    <span class="data" v-html="stack"></span>
                                </div>
                                <div v-if="notice" class="notice">
                                    <h3>Notice</h3>
                                    <p v-html="notice"></p>
                                </div>

                            </div>
                        </div>

                        <div class="pure-u-1 pure-u-md-12-24">
                            <div>
                                <img :src="image" class="pure-img" :alt="name + ' logo'" />
                            </div>
                        </div>
                        <div class="pure-u-1">
                            <div class="copy-content">
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
            <other-projects></other-projects>
        </div>
    </div>
</template>

<script>
    import Header from './Header.vue';
    import OtherProjects from './components/OtherProjects.vue';
    export default {
        components: {
            'main-header' : Header,
            'other-projects': OtherProjects
        },
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
                            if(this.slug === this.projects[this.slug].route) {
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
        },
        computed: {
            project: function() {
                return this.$store.getters.getProject;
            }
        },
        watch: {
            'project': function() {
                this.name = this.project.name;
                this.image = this.project.image;
                this.description = this.project.description;
                this.conclusion = this.project.conclusion;
                this.notice = this.project.notice;
                this.work = this.project.work;
                this.demo = this.project.demo;
                this.code = this.project.code;
                this.screenshots = this.project.screenshots;
                this.stack = this.project.stack;
                this.testimonial = this.project.testimonial;
            }
        }
    }
</script>