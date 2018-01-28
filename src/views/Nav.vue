<template>
    <div class="pure-g">
        <div class="pure-u-1-1 pure-u-md-24-24 pure-u-xs-24-24">
            <nav class="nav pure-menu pure-menu-horizontal">
                <ul class="pure-menu-list">
                    <li class="pure-menu-item">
                        <router-link to="/" active-class="active" exact>
                            Home
                        </router-link>
                    </li>
                    <li class="pure-menu-item">
                        <router-link to="/about" active-class="active" exact>
                            About
                        </router-link>
                    </li>
                    <li class="pure-menu-item">
                        <router-link to="/projects" active-class="active" exact>
                            Projects
                        </router-link>
                    </li>
                    <li class="pure-menu-item">
                        <router-link to="/contact" active-class="active" exact>
                            Contact
                        </router-link>
                    </li>

                </ul>
            </nav>
        </div>
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
