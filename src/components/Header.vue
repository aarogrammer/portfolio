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
        'main-nav': Nav
    }
};
</script>
