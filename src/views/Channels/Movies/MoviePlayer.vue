<template>
    <div class="video-bg">
        <Loader :loading-text="LoadingText" :showFull=false v-if="loading"/>
        <div class="back-icon">
            <a @click="$router.go(-1)"><font-awesome-icon icon="arrow-left"></font-awesome-icon></a>
        </div>
        <div class="channels-section" v-if="!loading">
            <div class="ads-top">
                <single-ads-component :slider="false" type="static-ads" size="970x90" :limit="5"
                               style="height: 100%;width: 100%"></single-ads-component>
            </div>

            <div id="player-section" class="player-section ">
                <video-player :uuid="uuid" :options="videoOptions" :src="src" :height="getHeight"/>
            </div>
            <div class="ads-bottom" >
                <div style="width: 100%;">
                    <single-ads-component :slider="false" type="static-ads" size="970x90" :limit="2"
                                          style="height: 100%;width: 100%"></single-ads-component>
                </div>
                <div>
                    <single-ads-component :slider="false" type="static-ads" size="320x50" :limit="2"
                                          style="height: 100%;width: 100%"></single-ads-component>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
    import {loadContent} from '../../../services/loadContent.service'
    import Loader from "../../../components/Loader/Loader";
    import VideoPlayer from "../../../components/VideoPlayer";
    import SingleAdsComponent from '../../../components/SingleAdsComponent';

    export default {
        components: {
            Loader, VideoPlayer, SingleAdsComponent,
        },
        data: function () {
            return {
                loading: true,
                LoadingText: "Loading",
                result: {},
                src: '',
                show: false,
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
            }).catch((err) => console.log(err));
        },
        computed:{
            getHeight(){
                let hg=window.innerHeight *(0.7);
                console.log(hg)
               // console.log(document.getElementById("player-section").height);
                return hg+"px";
            }
        }
    }


</script>
<style>
    .player-section {
        height: 80%;
        top: 0;
        margin-top: 10%;
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
        width: 100%;
        display: flex;
        bottom: 0;
        z-index: 1000;
        max-height: 100px;
    }
</style>
