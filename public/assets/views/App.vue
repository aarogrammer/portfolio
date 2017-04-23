<template>
    <div>
        <main-header></main-header>
        <main-nav></main-nav>
        <transition name="slideInLeft">
            <router-view></router-view>
        </transition>    
        <main-footer></main-footer>
    </div>
</template>
<script>

    import Header from './Header.vue';
    import Nav from './Nav.vue';
    import Footer from './Footer.vue';
    export default {
        components: {
            'main-header' : Header,
            'main-nav' : Nav,
            'main-footer' : Footer
            
            },
        data () {
            return {
               
            }
        }
    }
</script>