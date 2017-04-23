<template>
 <footer class="footer">
        <div class="footer-above">
            <div class="container">
                <div class="row">
                    <div class="myportfolio col-md-5 col-sm-5">
                    <h3>My portfolio</h3>
                        <p>Thank you for visiting my portfolio! I am always updating this website with new projects and fixing the website itself.
                        <br />If you have any problems or want to do work with me, please do not hesitate to <a href="#contact">contact me</a>!
                        </p>
                    </div>
                    <div class="col-md-2 col-sm-2 col-md-offset-2">
                        <h3>Useful Links</h3>
                        <ul>
                        <li><router-link to="/home">Home</router-link></li>
                        <li><router-link to="/about">About</router-link></li>
                        <li><router-link to="/projects">Projects</router-link></li>
                        <li><router-link to="/contact">Contact</router-link></li>
                        </ul>
                    </div>
                    <div class="col-md-3">
                      <h3>Get in contact!</h3>
                        <ul>
                        <li><a href="mailto:contact@aaron-welsh.co.uk">contact@aaron-welsh.co.uk</a></li>
                        </ul>
                       <div class="socialIcons">
                            <a href="https://uk.linkedin.com/pub/aaron-welsh/8b/2a1/656"><span class="ion-social-linkedin"></span></a>
                            <a href="https://plus.google.com/+AaronWelsh/"><span class="ion-social-googleplus"></span></a>
                            <a href="https://github.com/aarogrammer/"><span class="ion-social-github"></span></a>
                            <a href="https://twitter.com/_aaronwelsh"><span class="ion-social-twitter"></span></a>
            			    </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-below">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        Copyright &copy; Aaron Welsh 2013 - 2017
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
    export default {
        data () {
            return {
            }
        }
    }
</script>