<template>
    <div class="ad-banners" v-images-loaded="ImageLoaded">
        <img v-if="loaded" :src="single.ad" :data-tracker="single.tracker" class="ads-img" alt="MooveTV">


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
        name: "SlideAdsComponent",
        data: function () {
            return {
                loaded: false,
                single: {},
                ads: null,
                interval: null,
                loadedTrackers: false,
                index: 0,
                timeout: 5

            };
        },
        props: ["type", "slider", "size", "limit"]

        ,
        async created() {

            await loadAds.fetch(this.type, this.size, parseInt(this.limit)).then((res) => {
                if (res) {
                    let ads = res[`${this.size}`];
                    if (ads) {
                        this.ads = res[`${this.size}`];
                        this.loaded = true;

                        this.interval = setInterval(() => {
                            this.single = res[`${this.size}`][this.index];
                            this.index++;
                            if (this.index >= this.ads.length) {
                                this.index = 0;
                            }
                        }, this.timeout * 1000)
                    }

                    //console.log(this.swiperAds );

                }
                console.log(res);
                // let g = res[`${this.size}`];
                // if (g) {
                //     this.single = g[0];
                // }
                // // this.single=res[`${this.size}`][0];
                // console.log(g);
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
                // let tracker_url = (instance.images[0].img.dataset.tracker);
                // await loadAds.tracker(tracker_url).then((res) => {
                //     console.log(res);
                // }).catch((err) => console.log(err));

            },
            async loadTracker(ad) {

                let tracker_url = ad.tracker;
                let that=this;
                if (this.loadedTrackers) return null;

                await loadAds.tracker(tracker_url).then((res) => {
                    console.log(res.status_code);

                }).catch((err) => {that.loadedTrackers = true});

            }
        },
        beforeDestroy() {
            if (this.interval) {
                clearInterval(this.interval);
            }
        },
        watch: {
            single: {
                handler(value) {
                    // let ad = this.ads.find(x => x.ad === value);
                    // console.log(value.tracker);
                    this.loadTracker(value)
                }
            }
        }
    }
</script>

<style scoped>
    .ads-img {
        transition: .5s all ease-in-out;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>
