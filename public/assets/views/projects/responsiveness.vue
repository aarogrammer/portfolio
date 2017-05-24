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
                            <h2>Responsiveness</h2>
                            <p>
                                <a href="https://github.com/aarogrammer/responsiveness" target="_blank">Code</a> <br />
                                <a href="https://aaron-welsh.co.uk/demos/responsiveness" target="_blank">Demo</a> <br />
                                Languages/Frameworks: JavaScript, Bootstrap 3.x
                            </p>
                        </div>
                        <div class="col-md-6">                        
                            <img src="https://static.aaron-welsh.co.uk/assets/img/phone.png"  class="img-responsive" alt="Responsiveness" />
                        </div>

                        <div class="col-md-12 copy-content">
                           <h3>Development</h3>
                             <p>
                               This project was mainly developed in JavaScript. The project idea was simple - load a website using an iFrame and then manipulate it using JavaScript.</p>
                               <p>The main goal was to keep the project scalable so that future development can be done by others. The projects code is developed using JavaScript's prototype object to simplify and make the code easy to modify and understand.
                            </p>
                            <p>All the source code can be found on <a href="https://github.com/aarogrammer/responsiveness">Github</a> and can can easily be forked!</p>
                            <h3>Conclusion</h3>
                            <p>
                              Overall this tool is very useful in easily testing the websites design on specific resolutions.
                              It can be very tedious having to resize your browser to test how your website responds and this tool allows you to simply enter the URL and then choose whatever sizes you want.
                            </p>
                            <p>I am happy with the starting point of this project and feel that developers could easily download the source code and make it even better.</p>
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
                        <router-link to="/projects/bearandmeerkat">
                            <img src="https://static.aaron-welsh.co.uk/assets/img/bandm.png" width="900" height="650" class="img-responsive" alt="The Bear &amp; The Meerkat" />
                        </router-link>
                        <div class="overlay">
                            <router-link to="/projects/bearandmeerkat">
                                <h3>The Bear & The Meerkat</h3>
                            </router-link>
                        </div>
                    </div>

                    <div class="col-sm-4 portfolio-item">
                        <router-link to="/projects/elcees">
                            <img src="https://static.aaron-welsh.co.uk/assets/img/elc.png" width="900" height="650" class="img-responsive" alt="Elcee's">
                        </router-link>
                        <div class="overlay">
                            <router-link to="/projects/elcees">
                                <h3>Elcee's</h3>
                            </router-link>
                        </div>
                    </div>

                    <div class="col-sm-4 portfolio-item">
                        <router-link to="/projects/360marine">
                            <img src="https://static.aaron-welsh.co.uk/assets/img/360marine.png" width="900" height="650" class="img-responsive" alt="360marine">
                        </router-link>
                        <div class="overlay">
                            <router-link to="/projects/360marine">
                                <h3>360 Marine</h3>
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