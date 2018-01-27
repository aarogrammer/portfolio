<template>
    <div>
        <main-header></main-header>
        <section class="about-me">
            <div class="pure-g">
                <div class="pure-u-1">
                    <h1>Hi, my name is Aaron Welsh.</h1>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    import Header from './Header.vue';
    import Footer from './Footer.vue';
    export default {
        components: {
            'main-header' : Header,
            'main-footer' : Footer
        },
        data () {
            return {
            }
        }
    }
</script>