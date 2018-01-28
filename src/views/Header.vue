<template>
    <div class="pure-g">
        <header class="main-header">
            <main-nav></main-nav>
        </header>
    </div>
</template>
<script>
    import Nav from './Nav.vue';
    export default {
        components: {
            'main-nav' : Nav
        },
        data () {
            return {

            }
        }
        
    }
    
</script>