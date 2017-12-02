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
                            <h2>Jordan Gadeke</h2>
                            <p>
                                Work: Web Development <br />
                                <a href="https://aaron-welsh.co.uk/demos/jordan" target="_blank">Demo</a> <br />
                                Languages/Frameworks: jQuery, Bootstrap 3.x
                            </p>
                        </div>
                        <div class="col-md-6">                        
                            <img src="https://static.aaron-welsh.co.uk/assets/img/jordan.png"  class="img-responsive" alt="Jordan" />
                        </div>

                        <div class="col-md-12 copy-content">
                           <h3>Development</h3>
                             <p>
                               With Jordan having great design skills, this project was simply me just turning his ideas in to code. Because of this, he provided me with all the graphics and a draft of what he
                               wanted the portfolio to look like via PhotoShop. You can see an optimized version of his PDF draft <a href="https://static.aaron-welsh.co.uk/assets/img/Photoshop-Draft.gif">here</a>.
                            </p>
                            <h3>Communication</h3>
                             <p>
                               Jordan and I kept great contact via Skype, regularly sending messages back and forth, exchanging ideas and making sure I got each part correct. <br />
                            </p>
                            <h3>Conclusion</h3>
                            <p>
                              It was a great experience looking at an idea from an image and making that in to code. I feel that the website totally replicated what Jordan required from his draft and I was happy with the final product.
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