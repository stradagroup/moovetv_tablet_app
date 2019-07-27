<template>
    <div class="moovetv-tab">
        <div class="left">
            <div class="moove-ads">

                <div class="ads-icon">
                    <button class="p-0 show-ads-btn" type="button" data-toggle="modal" data-target="#myModal">
                        <img alt="Ads Icon" src="../../assets/images/ads-icon.svg" class="ads-icon-btn">
                    </button>
                </div>
                <div class="modal" id="myModal">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header text-center">
                                <div class="text-center">
                                    <img alt="Ads Icon" src="../../assets/images/moovetv-blue.svg" class="ad-icon">
                                </div>
                                <!-- <button type="button" class="close" data-dismiss="modal">&times;</button> -->
                            </div>
                            <form>
                                <div class="modal-body text-center">
                                    <p class="moove-modal-text">Advertise with MooveTV <br>How do we reach you? </p>
                                    <div class="form-group " style="display: inline-flex; width: 100%;">
                                        <div class="flag">
                                            <img src="../../assets/images/flag.svg" class="flag-icon ">
                                        </div>
                                        <input type="number" class="form-input" id="number" placeholder="Phone Number">
                                    </div>
                                    <div class="form-group">
                                        <input type="email" class="form-input" id="email" placeholder="Email">
                                    </div>
                                    <button type="submit" class="btn-continue ">Continue</button>
                                </div>
                                <small id="emailHelp" class="form-text text-muted text-center">Ads on this platform are
                                    paid for.
                                </small>
                            </form>

                        </div>
                    </div>
                </div>

                <div class="ad-banners">
                    <carousel :per-page="1" :paginationEnabled="false" :autoplay="true" :loop="true" :autoplayTimeout="5000">
                        <slide v-for="(slide, index) in swiperSlides" :key="index" v-images-loaded="ImageLoaded">
                            <img  :src="slide.ad" :data-tracker="slide.tracker"  class="movies-slider" alt="MooveTV" >

                        </slide>
                    </carousel>

                </div>

            </div>

        </div>
        <div class="right" >
            <div class="moove-tv-right text-center">
                <div ></div>
                <div class="">
                    <div class="welcome-text ">
                        <h4 class="text-white pb-4">Click on</h4>
                    </div>
                    <div class=" pb-5">
                        <img src="../../assets/images/moove_logo.svg">
                    </div>

                    <div class="moove-button pt-2">
                        <router-link to="/home"><img src="../../assets/images/moove-btn.svg" class="pulse"></router-link>
                    </div>
                </div>
                <footer class="footer ">
                    <div class="text-white copyright">
                        <p>Copyright &copy; Moove TV. All rights reserved</p>
                    </div>
                </footer>
            </div>
        </div>
    </div>

</template>
<script>

    import { Carousel, Slide } from 'vue-carousel';
    import {loadAds} from '../../services/landingAds.service'
    import imagesLoaded from 'vue-images-loaded'

    export default {
        directives: {
            imagesLoaded
        },
        components: { Carousel,
            Slide},

        data: function () {
            return {
                swiperOption: {
                    loop: true,
                    autoplay: {
                        delay: 2500,

                    }
                },
                swiperSlides: [],
            };
        },
        async created() {

            await loadAds.fetch('static-ads', '100%',3).then((res) => {
                this.swiperSlides  = res['100%'];
                console.log(res['100%'].length);
            }).catch((err) => console.log(err));


        },
        methods: {
            async ImageLoaded(instance) {

                // console.log('done');
                // console.log(instance.images[0].img.dataset.tracker);
                let tracker_url = (instance.images[0].img.dataset.tracker);
                await loadAds.tracker(tracker_url).then((res) => {
                   console.log(res);
                }).catch((err) => console.log(err));

            }}
    }

</script>
<style scoped>
    .show-ads-btn{
        border: none;
    }
    .ads-icon-btn{
        width: 100px;
        -webkit-box-shadow: 4px -1px 9px 1px rgba(0,0,0,0.75);
        -moz-box-shadow: 4px -1px 9px 1px rgba(0,0,0,0.75);
        box-shadow: 4px -1px 9px 1px rgba(0,0,0,0.75);
    }
    .ad-banners{
        /*padding-top: 50px;*/
        width: 100%;
        overflow: hidden;
        height: 100%;
    }
    .movies-slider{
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
    }
    .VueCarousel{
        height: 100%;
    }
    .nav-bar-dark{
        display: none!important;
    }
    .pb-4 {
        padding-bottom: 4px !important;
        font-size: 1.7em !important;
        font-weight: 600;
    }
</style>
