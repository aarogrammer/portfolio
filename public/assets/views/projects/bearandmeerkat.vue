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
                    <div class="ccol-xs-12 col-sm-12 col-md-10 col-md-offset-1">
                        <div class="col-md-6">
                            <h2>The Bear &amp; The Meerkat</h2>
                            <p>
                                Work: Web Development <br />
                                <a href="http://thebearandthemeerkat.co.uk" target="_blank">Demo</a> <br />
                                Languages/Frameworks: AngularJS, Bootstrap 3.x
                            </p>
                        </div>
                        <div class="col-md-6">                        
                            <img src="https://static.aaron-welsh.co.uk/assets/img/bandm.png"  class="img-responsive" alt="The Bear &amp; The Meerkat" />
                        </div>

                        <div class="col-md-12 copy-content">

                            <h3>Notice</h3>
                            <p>
                                This project is for a start up that myself, and friends who have a passion for the creative industry started up over the summer.<br />
                                With three of our team members finishing their final year at University, The Bear & The Meerkat is currently a freelance collaboration.<br />
                                If you're interested in working with The Bear & The Meerkat, contact <a href="mailto:hello@thebearandthemeerkat.co.uk">hello@thebearandthemeerkat.co.uk</a> for more information.
                            </p>
                            <h3>Development</h3>
                            <p>
                                For this project I decided to go a bit more adventurous and use an exciting technology - AngularJS, and some Angular modules such as ui-router, to set up routing and ngAnimate to animate views (pages) to dynamically come in, rather than having to wait for the page to load.
                                <br />
                                I have used AngularJS before when developing applications when using the MEAN stack, but that was simply for creating RESTful API’s and some data binding. The use of AngularJS this time around was all about user experience.
                                <br />
                                When a user clicks on a link to load a new page, I slide the page into their view, rather than having them wait around for a page to load. All pages are pretty small in file size so they load almost instantly, giving a fun, book-like website to look through.
                                <br />
                                The design was created using Bootstrap, a front-end framework for creating fully responsive web applications. This allows for a quicker turn around as I can use Bootstrap elements, such as the container and columns, to have everything grouped together so that they respond well together. Of course a lot of CSS on my end had to be done, Bootstrap made it much easier to develop.
                            </p>
                            <h3>Conclusion</h3>
                            <p>
                                A fun, yet challenging project having a chance to work with amazing technologies like AngularJS, and being able to work concurrently with designers to build graphics and a brand.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="other-projects">
            <div class="container">
                <div class="row">
                    <h2 class="text-center">Other Projects</h2>
                    <div class="col-sm-4 portfolio-item">
                        <router-link to="/projects/360marine">
                            <img src="https://static.aaron-welsh.co.uk/assets/img/360marine.png" width="900" height="650" class="img-responsive" alt="360Marine">
                        </router-link>
                        <div class="overlay">
                                <router-link to="/projects/360marine">
                                    <h3>360Marine</h3>
                                </router-link>
                        </div>
                    </div>

                    <div class="col-sm-4 portfolio-item">
                        <router-link to="/projects/responsiveness">
                            <img src="https://static.aaron-welsh.co.uk/assets/img/phone.png" width="900" height="650" class="img-responsive" alt="Responsiveness">
                        </router-link>
                        <div class="overlay">
                                <router-link to="/projects/responsiveness">
                                    <h3>Responsiveness</h3>
                                </router-link>
                        </div>
                    </div>

                    <div class="col-sm-4 portfolio-item">
                        <router-link to="/projects/elcees">
                            <img src="https://static.aaron-welsh.co.uk/assets/img/elc.png" width="900" height="650" class="img-responsive" alt="ElCee's">
                        </router-link>
                        <div class="overlay">
                            <router-link to="/projects/elcees">
                                <h3>Elcee's</h3>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                
            }
        }
    }
</script>