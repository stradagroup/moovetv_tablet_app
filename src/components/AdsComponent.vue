<template>
    <div class="ad-banners" v-images-loaded="ImageLoaded">
        <carousel v-if="loaded" :per-page="1" :paginationEnabled="false" :autoplay="true" :loop="true"
                  :autoplayTimeout="5000">
            <slide v-for="(slide, index) in swiperAds" :key="index">
                <img :src="slide.ad" :data-tracker="slide.tracker" class="ads-img" alt="MooveTV">

            </slide>
        </carousel>

    </div>
</template>

<script>
    import {Carousel, Slide} from 'vue-carousel';
    import {loadAds} from '../services/landingAds.service'
    import imagesLoaded from 'vue-images-loaded'

    export default {
        directives: {
            imagesLoaded
        },
        components: {
            Carousel,
            Slide
        },
        name: "AdsComponent",
        data: function () {
            return {
                loaded: false,
                swiperAds: [],
            };
        },
        props: ["type", "slider", "size", "limit"]

        ,
        async created() {

            await loadAds.fetch(this.type, this.size, parseInt(this.limit)).then((res) => {
                if (res) {
                    this.swiperAds  = res[`${this.size}`];
                    console.log(this.swiperAds );
                    this.loaded=true;
                }
                //console.log(res);
                // if(!this.slider && res.length>0){
                //   return  this.single=this.swiperAds[0];
                // }
                // if(res.length>0){
                //     this.swiperAds  = res[`${this.size}`];
                //     console.log(this.swiperAds );
                // }
                //
                // this.loaded=true;
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

            }
        }
    }
</script>

<style scoped>
    .ad-banners{
        overflow: hidden;
    }
    .ads-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>
