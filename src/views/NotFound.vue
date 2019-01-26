<style>
    .center {
        text-align: center;
    }
</style>
<template>
    <div>
        <main-header></main-header>
        <div class="pure-g">
            <section class="generic-page about-me">
                <div class="pure-u-1">
                    <div class="pure-g">
                        <div class="pure-u-1">
                            <h1 class="center">404 - Page not found</h1>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
    import Header from './Header.vue';
    export default {
        components: {
            'main-header' : Header
        },
        data () {
            document.title  = 'Aaron Welsh - 404 - Page not found'; // Set DOM title
        },
        methods : {

        }
    }
</script>