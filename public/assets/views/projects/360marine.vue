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
                            <h2>360 Marine</h2>
                            <p>
                                Work: Web Development <br />
                                <a href="https://aaron-welsh.co.uk/demos/360marine" target="_blank">Demo</a> <br />
                                Languages/Frameworks: jQuery, Bootstrap 3.x
                            </p>
                        </div>
                        <div class="col-md-6">                        
                            <img src="https://aaron-welsh.co.uk/public/assets/img/360marine.png"  class="img-responsive" alt="360 Marine" />
                        </div>

                        <div class="col-md-12 copy-content">
                           <h3>Development</h3>
                             <p>
                               Callum approached me with the goal of having a fresh, clean website to compete in the Marine industry. It was obvious after a little bit of research that none of his competitors had much of a web presence and that their websites were very outdated. This gives 360Marine a chance to stand out.
                               <br />
                               Callum and I met a few times to discuss how he wants his company to be presented online, how we can define his brand to make a large impact, and overall how to get potential business from his website.
                               <br />
                               The solution was to create a fun, friendly website that was easy to look at and didn’t feel like a task to find out information. With it being an information based website, we found it would make most sense to have a one page website, that is broken in sections, and allows for the potential client to get in contact.
                            </p>
                            <h3>Conclusion</h3>
                            <p>
                              It was great hearing Callum's story on why he started 360Marine and to help a business with a bright-future take its first steps online.<br />
                              The design of the website was fun to create, having photography done to add more character to the design.
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
                        <router-link to="/projects/elcees">
                            <img src="https://aaron-welsh.co.uk/public/assets/img/elc.png" width="900" height="650" class="img-responsive" alt="ElCee's">
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