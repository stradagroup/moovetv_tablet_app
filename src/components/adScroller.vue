<template>
    <div class="breaking-news-ticker" id="example">
        <div class="bn-label">Moove</div>
        <div class="bn-news">
            <div id="domer" class="marquee">

                <div class="add" v-for="(ad, index) in ads">
                    <img v-if="ad.logo" :src="ad.logo"/>
                    <div class="text">{{ad.text}}</div>
                </div>


            </div>
        </div>

    </div>

</template>

<script>
    import {loadAds} from '../services/landingAds.service'
    import MarqueeText from 'vue-marquee-text-component'

    export default {
        name: "adScroller",
        components: {MarqueeText},
        props: ['uuid'],
        data() {
            return {
                player: null,
                vst: [],
                plugin: null,
                ads: [],
                dom: '',
                dx: null


            }
        },
        computed: {
            getDom() {

                return f;
            }

        },
        async created() {
            let that = this;
            await loadAds.scroll(this.uuid, 5).then((res) => {

                if (res['Scrolling Ads']) {
                    that.ads = res['Scrolling Ads']
                    console.log(that.ads);

                }
                //  jQuery('#domer').html(that.dom);

                this.$nextTick(() => {
                    console.log('next tick');

                    let marquee = $('.marquee');
                    let marqueeLength = marquee.width() - 200;
                    let counter = parseInt($('.marquee').css("marginLeft"));

                    this.dx = setInterval(() => {
                        if (counter + marqueeLength <= 2) {
                            counter = 100;
                        }
                        $('.marquee').animate({marginLeft: counter}, 100);
                        counter -= 10;

                    }, 101)

                })
            }).catch((err) => {
                console.log(err)
            });


        },
        beforeDestroy() {
            if (this.dx) {
                clearInterval(this.dx)
            }
        },
        mounted() {
            // jQuery('#example').breakingNews({
            //     background: "white",
            //     height: "60px"
            // });

        }
    }
</script>

<style scoped>
    .breaking-news-ticker {
        position: absolute;
        min-height: 40px;
        bottom: 0;
        border: unset;
        width: 100%;
        background: #FFF;
        box-sizing: border-box;
        overflow: hidden;
        border-radius: 2px;
        text-align: justify;
        display: flex;
        align-items: center;

    }

    .breaking-news-ticker * {
        box-sizing: border-box;
    }

    .breaking-news-ticker.bn-fixed-top {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
    }

    .breaking-news-ticker.bn-fixed-bottom {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
    }

    /*********************************/
    /*title styles start**************/
    .bn-label {
        left: 0;
        top: 0;
        display: flex;
        align-items: center;
        bottom: 0;
        height: 100%;
        position: absolute;
        background-color: #0288D1;
        text-align: center;
        color: #FFF;
        font-weight: bold;
        z-index: 3;
        padding: 0 15px;
        white-space: nowrap;
    }

    /*controls style end *************/
    /*********************************/
    .bn-direction-rtl {
        direction: rtl;
    }

    .bn-direction-rtl .bn-label {
        left: auto;
        right: 0;
    }

    .marquee {
        display: flex;
        justify-content: space-between;
        white-space: nowrap;
        margin-left: 100px;
        background: white;
        width: 100%;

        /*   animation: scrollLeft 38s linear infinite; */
        /*padding-left: 101%;*/

    }

    .marquee .add {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-left: 20px;
    }

    .add img {
        height: 2em;
        margin-right: 7px;

    }

    .text {

    }

    @keyframes animation {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-100%);
        }
    }

    /*.marquee {*/
    /*width: 100%;*/
    /*position: absolute;*/
    /*height: 100%;*/
    /*display: flex;*/
    /*justify-content: space-around;*/
    /*align-items: center;*/
    /*text-align: right;*/
    /*animation: marquee 10s linear infinite;*/
    /*}*/

    /*@keyframes marquee {*/
    /*0% {*/
    /*left: 0;*/
    /*}*/
    /*100% {*/
    /*left: -100%;*/
    /*}*/
    /*}*/

    /*********************************/
    /*********************************/

</style>
