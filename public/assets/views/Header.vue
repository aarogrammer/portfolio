<template>
    <header id="home">
        <div class="col-md-6 header-left">
            <div class="row">
                <div class="col-md-12">
                    <h1>So you're looking for a freelance Web Developer?</h1>
                    <p>Phew! You're in the right place!</p>
                </div>
            </div>
        </div>
        <div class="col-md-6 header-right">
            <div class="row">
                <div class="col-md-12 vertical-top">
                    <p>Hi, my Name is Aaron Welsh. I am a Freelance Web Developer from Glasgow, Scotland.</p>
                    <p>Check out my work below! I would love to do business with you!</p>
                    <router-link to="/about" class="btn btn-custom btn-home" exact>
                        Find out more!
                    </router-link>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
    export default {
        data () {
            return {
            }
        }
    }
</script>