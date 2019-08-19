<template>
    <div id="welcomes">


        <Loader v-if="loading" :showFull=false :loading-text="LoadingText"/>
        <carousel :per-page="1" :paginationEnabled="false" :autoplay="true" :loop="true" :autoplayTimeout="5000">
            <slide v-for="(slide, index) in swiperSlides" :key="index">
                <img :src="slide.image" class="movies-slider" alt="MooveTV">
                <!--<div class="movies-overlay"></div>-->
                <!--<div class="movies-section text-white">-->
                    <!--<p>MOVIES</p>-->
                    <!--<h1>{{slide.name}}</h1>-->
                    <!--<p>{{truncate(slide.description)}}</p>-->
                    <!--<div class="action-drama">-->
                        <!--<div class="actions-btn">Actions</div>-->
                        <!--<div class="drama-btn">Drama</div>-->
                    <!--</div>-->
                <!--</div>-->

            </slide>
        </carousel>

        <ul class="moove-icon">
            <li class="moove-icons">
                <router-link to="LiveTv">
                    <img src="../../assets/images/livetv-icon.svg">
                    <p>Live Tv</p>
                </router-link>
            </li>
            <li class="moove-icons">
                <router-link to="news">
                    <img src="../../assets/images/news-card.svg">
                    <p>NewsFeeds</p>
                </router-link>
            </li>
            <li class="moove-icons">
                <router-link to="category">
                    <img src="../../assets/images/movies-icon.svg">
                    <p>Movies</p>
                </router-link>
            </li>
            <li class="moove-icons">
                <router-link to="category">
                    <img src="../../assets/images/funny_skit.svg" class="skit-icon">
                    <p>Skits</p>
                </router-link>
            </li>
            <li class="moove-icons">
                <router-link to="LiveScore">
                    <img src="../../assets/images/livescore-icon.png" class="livescore-icon">
                    <p>Live Score</p>
                </router-link>
            </li>
            <li class="moove-icons">
                <router-link to="category">
                    <img src="../../assets/images/podcast-icon.svg">
                    <p>Podcast</p>
                </router-link>
            </li>
            <li class="moove-icons">
                <router-link to="category">
                    <img src="../../assets/images/ebook-icon.svg">
                    <p>E-book</p>
                </router-link>
            </li>
            <li class="moove-icons">
                <router-link to="mart">
                    <img src="../../assets/images/moovemart.svg">
                    <p class="">MooveMart</p>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>

    import Loader from '../../components/Loader/Loader';
    import {swiper, swiperSlide} from 'vue-awesome-swiper';
    import { Carousel, Slide } from 'vue-carousel';
    import {loadContent} from '../../services/loadContent.service'

    export default {
        name: "Homepage",
        components: {Loader, swiper, swiperSlide,Carousel,
            Slide},
        data: function () {
            return {

                loading: true,
                LoadingText: "Loading"
            };
        },
        async created() {
            let that = this;
            //alert(window.innerWidth);
            await loadContent.fetchLatest().then((res) => {
                 console.log(res);
                that.loading = false;
                that.swiperSlides = res;

            }).catch((err) => console.log(err));

        },
        methods: {
            truncate(str){
                if(!str)return
                return str.substring(0,50)+"...."
            }
        }
    }
</script>
<style scoped>
    #welcomes{
        width: 100%;
        height: 100vh;
        overflow: hidden;
        background: black;
        padding: unset;
    }
    .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
        bottom: 25% !important;
    }

    .details {

    }

    .movies-section {
        position: absolute;
        left: 15px;
        bottom: 40%;
        max-width: 800px;
    }

    .movies-section > h1 {
        font-size: 50px!important;
        text-overflow: ellipsis;
        word-wrap: break-word;
        text-transform: capitalize;
    }

    .movies-slider {
        width: 100%;
        height: 100%;
        position: absolute;
        object-fit: cover;
        z-index: 0;
    }
    .moove-icon{
        z-index: 1000;
        bottom: -12px;
    }
    .movies-overlay{
        position: absolute;
        width: 100%;
        height: 100%;
        /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#000000+0,000000+100&0+0,0.65+100 */
        background:  rgba(0,0,0,0.75) ; /* FF3.6-15 */

        z-index: 1;
    }
    .VueCarousel{
        height: 100vh;
    }

    .VueCarousel-slide{
        position: relative;
        height: 100vh;
    }
    .moove-icons p{
        font-size: .8em;
        margin-top: 5px;
    }
</style>
