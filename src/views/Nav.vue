<template>
    <nav id="nav">
        <div class="container">
            <div class="row text-center form-horizontal">
                <div class="col-sm-3">
                    <div class="features-wraper">
                        <router-link to="/" active-class="active" exact>
                            <span class="ion-home icon-set"></span>
                            <h4>Home</h4> 
                        </router-link>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="features-wraper">
                        <router-link to="/about" active-class="active" exact>
                            <span class="ion-person icon-set"></span>
                            <h4>About</h4>                        
                        </router-link> 
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="features-wraper">
                        
                        <router-link to="/projects" active-class="active" exact>
                            <span class="ion-briefcase icon-set"></span>
                            <h4>Projects</h4>
                        </router-link>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="features-wraper">
                        <router-link to="/contact" active-class="active" exact>
                            <span class="ion-email icon-set"></span>
                            <h4>Contact me</h4>         
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
    export default {
        data () {
            return {
            }
        }
    }
</script>
