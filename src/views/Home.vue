<template>
    <div>
        <router-link to="/about" class="skip-main">Skip to main content</router-link>
        <header class="header">
            <div class="pure-g">

                <div class="pure-u-1 pure-u-md-24-24">
                    <div class="avatar-logo">
                        <img class="me pure-img" src="https://scontent-lht6-1.cdninstagram.com/vp/56becb192f36bcbb55c915d47f3c5c54/5AE2342B/t51.2885-19/s320x320/18645161_1726768474282512_6312819622596837376_a.jpg" alt="">
                    </div>
                </div>
                <div class="pure-u-1">
                    <div class="home-intro">
                        <h1>
                            Hello, my name is Aaron.
                        </h1>
                        <h2>
                            I am Software Developer from Glasgow, Scotland.
                        </h2>
                        <div class="social-icons">
                            <a href="https://github.com/aarogrammer" target="_blank" rel="noopener">
                                <span class="fa fa-github"></span>
                            </a>
                            <a href="https://www.linkedin.com/in/aaronwelsh505/" target="_blank" rel="noopener">
                                <span class="fa fa-linkedin"></span>
                            </a>
                            <a href="https://twitter.com/_aaronwelsh" target="_blank" rel="noopener">
                                <span class="fa fa-twitter"></span>
                            </a>
                        </div>
                    </div>
                </div>

            </div>

        </header>
        <section class="main">
            <div class="pure-g">
                <div class="pure-u-1 pure-u-md-24-24">
                    <div class="home-btn-container">
                        <router-link to="/about" tag="button" class="btn-home">Get to know me!</router-link>
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