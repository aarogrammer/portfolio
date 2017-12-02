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
                            <h2>DSD Scotland</h2>
                            <p>
                                Work: Web Development <br />
                                <a href="http://dsd-scotland.co.uk/" target="_blank">Demo</a> <br />
                                Languages/Frameworks: WordPress (CMS), PHP, SQL, JavaScript
                            </p>
                        </div>
                        <div class="col-md-6">                        
                            <img src="https://static.aaron-welsh.co.uk/assets/img/dsd.png"  class="img-responsive" alt="DSD" />
                        </div>

                        <div class="col-md-12 copy-content">
                           <h3>Development</h3>
                             <p>
                                Being in college and having a huge passion for Web Development - knowing this is what I wanted to do career wise - I decided to get the experience by taking on clients.
                                When I was approached by DSD Scotland, I was excited to start my freelance Web Development journey.<br />
                                Keith, who was head of security, approached me with an idea of what he was after, and already had a theme that he had purchased and wanted me to edit it to fit the style of DSD Scotland.
                                When I started working on this theme, I noticed that it was full of bugs. I brought these issues up to Keith, and we sat down and drew up new ideas.<br />
                                I was then hired to completely redevelop their website, taking as much information as possible on how they would want it to look.
                            </p>
                            <h3>Communication</h3>
                             <p>
                               With having to start this project from nothing, communication was very important with understanding what DSD wanted for their website.
                               Keith was very vocal from the start on what he had visioned for the website, giving me ideas and examples of what he thinks would be good for the website.<br />
                               Keith and I kept great communication throughout the project exchanging several emails and meeting up in person regularly
                            </p>
                            <h3>Testimonial</h3>
                            <p class="testimonial breadcrumb">
                              I contacted Aaron to build our company website with just a few ideas in mind, a limited budget and a view to maintain the site ourselves as the company expanded.<br />

                              Aaron provided an onsite consultation and walked us through what the possibilities were given the budget and requirements from this primarily service based website.<br />

                              After viewing some draft copies of the website and some minor changes we had a final consultation to add the required content and check functionality. The end result is a website which provides a slick and easy to use informational site with all of the required functionality and content.<br />

                              Communications were excellent throughout the whole process and Aaron went out of his way to ensure he met our expectations. DSD Scotland Ltd would be happy to recommend Aaron to any prospective customers.<br />

                              Keith Yuill<br />
                              Contracts Manager<br />
                              DSD Scotland Ltd<br />
                            </p>
                            <h3>Conclusion</h3>
                            <p>
                              This was a fantastic first-paid client project - having its ups and downs with progress due to their theme being buggy.<br />
                              This helped me learn how to communicate with clients in the real world and how to act professional.
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
                            <img src="https://static.aaron-welsh.co.uk/assets/img/bandm.png" width="900" height="650" class="img-responsive" alt="The Bear &amp; The Meerkat" />
                        </router-link>
                        <div class="overlay">
                            <router-link to="/projects/bearandmeerkat">
                                <h3>The Bear & The Meerkat</h3>
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