<template>
    <div>
        <transition name="easeInOut" mode="out-in">
            <router-view />
        </transition>
        <div class="switch-theme">
            <div
                v-if="themeStyle === 'light'"
                @click="changeTheme('dark')"
                class="fas fa-moon tooltip"
            >
                <span class="tooltiptext">Toggle dark mode!</span>
            </div>
            <div
                v-else
                @click="changeTheme('light')"
                class="fas fa-sun tooltip"
            >
                <span class="tooltiptext">Toggle light mode!</span>
            </div>
        </div>
        <toggle-theme :theme="themeStyle" />
    </div>
</template>
<script>
    import ToggleTheme from './components/ToggleTheme.vue';

    export default {
        components: {
            'toggle-theme': ToggleTheme
        },
        data() {
            return {
                themeStyle: 'light'
            };
        },
        methods: {
            changeTheme(theme) {
                this.themeStyle = theme;
            }
        }
    };
</script>
<style>
    .tooltip {
        position: relative;
        display: inline-block;
    }
    .tooltip .tooltiptext {
        visibility: hidden;
        opacity: 0;
        transition: 0.3s all ease;
        min-width: 200px;
        background-color: #0d1117;
        color: #eee;
        text-align: center;
        padding: 10px 0;
        border-radius: 6px;
        position: absolute;
        left: 30px;
        bottom: -5px;
        z-index: 1;
        font-size: 1em;
    }
    .tooltip:hover .tooltiptext {
        visibility: visible;
        opacity: 1;
    }
</style>
