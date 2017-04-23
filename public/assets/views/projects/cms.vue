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
                            <h2>Custom Control Management System</h2>
                            <p>
                                <strong>Demo is currently down due to server change. Will be back up soon!</strong><br />
                                Languages/Frameworks: PHP5 (OOP) with PDO extention for database connections, MySQL, JavaScript, jQuery, HTML5, CSS3
                            </p>
                        </div>
                        <div class="col-md-6">                        
                            <img src="https://aaron-welsh.co.uk/public/assets/img/cms.png"  class="img-responsive" alt="cms" />
                        </div>

                        <div class="col-md-12 copy-content">
                           <h3>Development</h3>
                             <p>
                               The CMS was mainly developed in PHP using the PHP Data Objects (PDO) extension for the database connection and built with OOP. This allowed for a lightweight, secure method with communicating with MySQL. <br />
                               Any query made to or from the database is sanitised to ensure that no input, even by the admin, can damage the database.
                            </p>
                            <br />
                            <h4>Some features</h4>
                            <dl>
                               <dt>Simple install</dt>
                               <dd>- Simply type what database you want to use and the installation will install the tables!</dd>
                               <dt>Register & Login system</dt>
                               <dd>- Register your admin account and log in! If you forget to delete the install folder, we will keep a reminder until it's gone.</dd>
                               <dt>Edit websites content</dt>
                               <dd>- All sections on your website can be edited</dd>
                               <dt>Create blog posts post</dt>
                               <dd>- Create blog posts from your control panel.</dd>
                               <dd>- Edit and delete posts</dd>
                               <dd>- Create pretty, SEO friendly URLs to whatever you want it to be called</dd>
                               <dt>BBCode Editor</dt>
                               <dd>- An easy-to-use text editor that uses BBCode to simply and securely add content to your website and database</dd>
                               <dd>- Add images, headers, links, different font size and colour, alignment and much more to your content/posts</dd>
                               <dt>Additional SEO options</dt>
                               <dd>- Improve your search engine ranking by editing your page's description and keywords</dd>
                               <dt>Search for posts</dt>
                               <dd>- Simply search for posts</dd>
                            </dl>
                            <h3>Conclusion</h3>
                            <p>
                              This project pushed me to ensure all connections with the database are secure and sanitised. I learned some new methods when using PDO and overall gained much more experience in PHP.
                            </p>
                            <p>Although I am happy with the back-end, in future updates I will make the font-end look much nicer. At the moment is was a quick Bootstrap design.</p>
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
                        <router-link to="/projects/360marine">
                            <img src="https://aaron-welsh.co.uk/public/assets/img/360marine.png" width="900" height="650" class="img-responsive" alt="360marine">
                        </router-link>
                        <div class="overlay">
                            <router-link to="/projects/360marine">
                                <h3>360 Marine</h3>
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