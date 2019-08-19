<template>
    <div class="video-bg">
        <Loader :loading-text="LoadingText" :showFull=false v-if="loading"/>
        <div class="back-icon">
            <a @click="goBack">
                <font-awesome-icon icon="arrow-left"></font-awesome-icon>
            </a>
        </div>
        <div class="channels-section" v-if="!loading">

            <div id="player-section" class="player-section ">
                <video-player :uuid="uuid" :options="videoOptions" :src="src" :height="height"/>
            </div>

            <div class="ads-bottom">
                <single-ads-component :limit="2" size="970x90" style="height: 100%;width: 100%"
                               type="static-ads"></single-ads-component>
                <ad-scroller :uuid="uuid"></ad-scroller>

            </div>
        </div>

    </div>
</template>

<script>
    import {loadContent} from '../../../services/loadContent.service'
    import Loader from "../../../components/Loader/Loader";
    import VideoPlayer from "../../../components/VideoPlayer";
    import SingleAdsComponent from '../../../components/SingleAdsComponent';
    import adScroller from '../../../components/adScroller';

    export default {
        components: {
            Loader, VideoPlayer, adScroller,SingleAdsComponent
        },
        data: function () {
            return {
                loading: true,
                LoadingText: "Loading",
                result: {},
                src: '',
                show: false,
                height: '600px',
                videoOptions: {
                    autoplay: true,
                    aspectRatio: '4:3',
                    controls: true,
                    sources: [
                        {
                            src: "",
                            type: "video/mp4"
                        }
                    ]
                }
            };
        },
        props: ['uuid'],
        async created() {
            let that = this;

            await loadContent.fetchContentDetails({uuid: this.uuid}).then((res) => {
                console.log(res);
                that.loading = false;
                that.result = res;
                that.videoOptions.sources[0].src = res.url;
                that.src = res.url;
                this.getHeight();

            }).catch((err) => console.log(err));
        },
        mounted(){

            this.getHeight();
        },
        methods: {
            getHeight() {
                // let hg = JQuery('#player-section').height();
                // console.log(hg)
                let hg = (window.innerHeight * 0.8) -60;
                    console.log(hg)
                    this.height = hg + "px";



            }
        }
    }


</script>
<style>
    .player-section {
        height: 80%;
        top: 0;

    }

    .vjs-fluid {
        padding-top: 70% !important;
    }

    .video-bg {
        height: 100vh;
        width: 100%;
        overflow: hidden;
        background: black;
    }

    .ads-top {
        position: absolute;
        width: 100%;
        top: 0;
        z-index: 1000;
        max-height: 100px;
    }

    .back-icon {
        position: absolute;
        left: 30px;
        top: 20px;
        font-size: 2em;
        z-index: 1005;
        color: #ffffff;
    }

    .ads-bottom {
        position: absolute;
        height: 20%;
        width: 100%;
        display: flex;
        bottom: 0;
        z-index: 1000;

    }
</style>
