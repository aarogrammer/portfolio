<template>
    <div>
        <transition name="easeInOut" mode="out-in">
            <router-view id="main"></router-view>
        </transition>
    </div>
</template>
<script>

    // Scroll to a specific element
    function animateScroll(el, to, duration) {
        if (duration <= 0) return;
        var difference = to - el.scrollTop;
        var perTick = difference / duration * 10;

        setTimeout(function() {
            el.scrollTop = el.scrollTop + perTick;
            if (el.scrollTop === to) return;
            animateScroll(el, to, duration - 10);
        }, 10);
    }

    function scrollToView(el, duration) {
        const id = document.getElementById(el);
        animateScroll(document.body, id.offsetTop, duration);
    }

    export default {
        data () {
            return {
               
            }
        },
        mounted() {


            // Event listener to scroll to main content once nav link clicked            
            const navLink = document.getElementsByClassName('features-wraper');
            for(let i = 0; i < navLink.length; i++) {
                navLink[i].addEventListener('click', () => {
                    scrollToView('main', 600);
                });
            }

            // Event listener to scroll to main content once portfolio overlays clicked            
            const portfolio = document.getElementsByClassName('other-projects')[0];
            if(document.body.contains(portfolio)) {            
                portfolio.addEventListener('click', () => {
                    scrollToView('main', 600);
                });
            }

            // Event listener to scroll to main content once footer links clicked
            const footerLinks = document.getElementsByClassName('footer-item');
            for(let i = 0; i < footerLinks.length; i++) {
                footerLinks[i].addEventListener('click', () => {
                    scrollToView('main', 200);
                })
            }
        },
        updated() {
            // Once page has been updated, make sure we can still scroll... We only need to call it on other-projects as header/nav and footer views never leave the state
            const portfolio = document.getElementsByClassName('other-projects')[0];
            
            if(document.body.contains(portfolio)) {
                portfolio.addEventListener('click', () => {
                    scrollToView('main', 600);
                });
            }
        }
    }
</script>