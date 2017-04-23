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
                            <h2>Elcee's</h2>
                            <p>
                                Work: Web Development <br />
                                <a href="https://aaron-welsh.co.uk/demos/elcees" target="_blank">Demo</a> <br />
                                Languages/Frameworks: jQuery, Bootstrap 3.x
                            </p>
                        </div>
                        <div class="col-md-6">                        
                            <img src="https://aaron-welsh.co.uk/public/assets/img/elc.png"  class="img-responsive" alt="Elcees" />
                        </div>

                        <div class="col-md-12 copy-content">
                           <h3>Development</h3>
                             <p>
                              With Elcee's being a completely brand new salon and of course not having a previous website, I was completely free to design and develop this website from scatch.<br />
                              I met up with Elcee's owner, Leeanne to discuss what kind of website she would like, and about the overall design of the website. Meeting at her salon was a great way to understand
                              what Elcee's is, and have a general feel of the salon.<br />
                              I designed the website to look similar to the design of the salon, using similar fonts and colours to achieve the final product
                            </p>
                            <h3>Communication</h3>
                             <p>
                               Communication was always maintained throughout the project with regular meetings and messages exchanged. I was always updating Leeanne with any ideas I had, and asking for her opinion.
                            </p>
                            <h3>Testimonial</h3>
                            <p class="testimonial breadcrumb">
                                Aaron Welsh produced a brilliant website for my salon. The colour scheme went well with the black and white theme in the salon. We wanted it to be modern, clean and not have too much going on.<br /> 
                                A lot of salon websites can be too cluttered and a bit of an eye sore and that's what we wanted to avoid.  Aaron was professional and informative. I would definitely recommend his services. <br />
                                -Leeanne Callaghan. El CEE'S Hair and Beauty.
                            </p>

                            <h3>Conclusion</h3>
                            <p>
                              This was great experience dealing with a client/company that has had no web presence before, allowing me to help build that from grond up.
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
                        <router-link to="/projects/bearandmeerkat">
                            <img src="https://aaron-welsh.co.uk/public/assets/img/bandm.png" width="900" height="650" class="img-responsive" alt="The Bear &amp; The Meerkat" />
                        </router-link>
                        <div class="overlay">
                            <router-link to="/projects/bearandmeerkat">
                                    <h3>The Bear & The Meerkat</h3>
                            </router-link>
                        </div>
                    </div>

                    <div class="col-sm-4 portfolio-item">
                        <router-link to="/projects/responsiveness">
                            <img src="https://aaron-welsh.co.uk/public/assets/img/phone.png" width="900" height="650" class="img-responsive" alt="Responsiveness">
                        </router-link>
                        <div class="overlay">
                                <router-link to="/projects/responsiveness">
                                    <h3>Responsiveness</h3>
                                </router-link>
                        </div>
                    </div>

                    <div class="col-sm-4 portfolio-item">
                        <router-link to="/projects/360marine">
                            <img src="https://aaron-welsh.co.uk/public/assets/img/360marine.png" width="900" height="650" class="img-responsive" alt="360marine" />
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