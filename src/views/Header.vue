<template>
    <div class="pure-g">
        <header class="main-header">
            <a href="#" class="nav-toggle" id="toggle"><s class="bar"></s><s class="bar"></s></a>
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
        },
        methods: {
            closeMobileMenu: function() {
                if(document.querySelector('.main-header').classList.contains('open')) {
                    document.querySelector('.main-header').classList.remove('open');
                    document.getElementById('toggle').classList.toggle('x');
                }
            }
        }
        
    }
    
</script>