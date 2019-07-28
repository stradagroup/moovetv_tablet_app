<template>
    <div id="app">
        <div id="busyUI">
            <div id="busyMsg"></div>
        </div>
        <HeaderNav v-if="!['login','landing','moviePlayer','musicPlayer'].includes(currentPage)"/>
        <router-view/>
    </div>
</template>

<script>
    import HeaderNav from './views/Navigation/HeaderNav';

    export default {
        name: 'app',
        computed: {
            currentPage() {
                return this.$route.name;
            }
        },
        components: {
            HeaderNav
        }
    }
</script>

<style>
    @import "assets/css/bootstrap.css";
    @import "assets/css/animate.css";
    @import "assets/css/moove.css";
    @import "assets/css/masonry.css";
    @import "assets/css/util.css";
    @import "assets/css/grid.css";
    @import "assets/css/openplayer.css";
    @import "assets/css/swiper.min.css";

    #app {
        background: black;
    }

    #busyUI {
        position: absolute;
        display: none;
        width: 100%;
        height: 100%;
        animation: 1s all ease-in-out;
        justify-content: center;
        align-items: center;
        color: white;
        background: black;
        z-index: 1000;
    }

    #busyMsg {
        color: white;
        font-size: 1.3em;
        font-weight: bold;
        font-family: 'Montserrat', sans-serif;
    }
</style>

