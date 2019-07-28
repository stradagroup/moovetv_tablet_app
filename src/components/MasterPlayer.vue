<template>
    <div class="ctnr">

        <video id="opPlayer" class="" >

        </video>


    </div>
</template>

<script>
    import Hls from 'hls.js';


    export default {
        name: "MasterPlayer",
        props: {
            options: {
                type: Object,
                default() {
                    return {};
                }
            },
            height: Number,
            width: Number,
            src: String,
            single: false,
            uuid: String,
            vast: String,
            country: String,
            default() {
                return null;
            }
        },
        data() {
            return {
                player: null,
                vst: [],
                format: "video/mp4",
                url: '',

            }
        },
        async created() {
            let that = this;


        },
        methods: {},

        mounted() {
        },
        watch: {
            src: {
                handler(value) {
                    console.log(value);
                    let video = document.getElementById('opPlayer');
                    video.height = this.height;
                    // video.width = this.width;

                    if (Hls.isSupported()) {
                        let hls = new Hls();
                        hls.loadSource(value);
                        hls.attachMedia(video);
                        hls.on(Hls.Events.MANIFEST_PARSED, function () {
                            video.play();
                        });
                    }
                    // hls.js is not supported on platforms that do not have Media Source Extensions (MSE) enabled.
                    // When the browser has built-in HLS support (check using `canPlayType`), we can provide an HLS manifest (i.e. .m3u8 URL) directly to the video element through the `src` property.
                    // This is using the built-in support of the plain video element, without using hls.js.
                    // Note: it would be more normal to wait on the 'canplay' event below however on Safari (where you are most likely to find built-in HLS support) the video.src URL must be on the user-driven
                    // white-list before a 'canplay' event will be emitted; the last video event that can be reliably listened-for when the URL is not on the white-list is 'loadedmetadata'.
                    else if (video.canPlayType('application/vnd.apple.mpegurl')) {
                        video.src = value;
                        video.addEventListener('loadedmetadata', function () {
                            video.play();
                        });
                    }


                }
            }
        },
        beforeDestroy() {
            if (this.player) {
                this.player.destroy()
            }
        }
    }
</script>
<style scoped>
    .overlay-controls {
        position: fixed;
        width: 100%;
        overflow: hidden;
        height: 75%;
        background: rgba(0, 0, 0, 0.79);
        z-index: 9;
        display: none;
        align-items: center;
        justify-content: center;

    }

    .overlay-controls .contain {
        padding: 30px 35px;
        width: 600px;

    }

    .op-player__media {

    }

    .op-player {
        object-fit: contain;
    }

    .player {
        max-width: 750px;
        border: 5px solid rgba(0, 0, 0, 0.2);
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
        position: relative;
        font-size: 0;
        overflow: hidden;
    }

    /* This css is only applied when fullscreen is active. */
    .player:fullscreen {
        max-width: none;
        width: 100%;
    }

    .player:-webkit-full-screen {
        max-width: none;
        width: 100%;
    }

    .player__video {
        width: 100%;
    }

    .player__button {
        background: none;
        border: 0;
        line-height: 1;
        color: white;
        text-align: center;
        outline: 0;
        padding: 0;
        cursor: pointer;
        max-width: 40px;
    }

    .player__button:focus {
        border-color: #0288D1;
    }

    .player__slider {
        width: 10px;
        height: 30px;
    }

    .player__controls {
        display: flex;
        position: relative;
        left: 0;
        bottom: 30px;
        width: 100%;
        transform: translateY(100%) translateY(-5px);
        transition: all .3s;
        flex-wrap: wrap;
        background: rgba(0, 0, 0, 0.4);
        color: #fff;
        z-index: 2147483648;
        /* This is ridiculous so that it overrides the shadow
        dom and shows the custom player in full screen mode instead */
    }

    .player:hover .player__controls {
        transform: translateY(0);
    }

    .player:hover .progress {
        height: 15px;
    }

    .player__controls > * {
        flex: 1;
    }

    .progress {
        flex: 10;
        position: relative;
        display: flex;
        flex-basis: 100%;
        height: 5px;
        transition: height 0.3s;
        background: rgba(0, 0, 0, 0.5);
        cursor: ew-resize;
    }

    .fullscreen-btn {
        color: #000;
        margin: auto 6px;
        background-color: #f9f9f9;
        border-radius: 2px;
        border: 0;
    }

    .progress__filled {
        width: 50%;
        background: #0288D1;
        flex: 0;
        flex-basis: 0%;
    }

    .progress__filled .current {
        position: absolute;
        right: 0;
        top: -10px;
    }

    /* unholy css to style input type="range" */

    video::-webkit-media-controls {
        display: none !important;
    }

    input[type=range] {
        -webkit-appearance: none;
        background: transparent;
        width: 100%;
        margin: 0 5px;
    }

    input[type=range]:focus {
        outline: none;
    }

    input[type=range]::-webkit-slider-runnable-track {
        width: 100%;
        height: 8.4px;
        cursor: pointer;
        box-shadow: 1px 1px 1px rgba(0, 0, 0, 0), 0 0 1px rgba(13, 13, 13, 0);
        background: rgba(255, 255, 255, 0.8);
        border-radius: 1.3px;
        border: 0.2px solid rgba(1, 1, 1, 0);
    }

    input[type=range]::-webkit-slider-thumb {
        height: 15px;
        width: 15px;
        border-radius: 50px;
        background: #0288D1;
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -3.5px;
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
    }

    input[type=range]:focus::-wefbkit-slider-runnable-track {
        background: #bada55;
    }

    input[type=range]::-moz-range-track {
        width: 100%;
        height: 8.4px;
        cursor: pointer;
        box-shadow: 1px 1px 1px rgba(0, 0, 0, 0), 0 0 1px rgba(13, 13, 13, 0);
        background: #ffffff;
        border-radius: 1.3px;
        border: 0.2px solid rgba(1, 1, 1, 0);
    }

    input[type=range]::-moz-range-thumb {
        box-shadow: 0 0 0 rgba(0, 0, 0, 0), 0 0 0 rgba(13, 13, 13, 0);
        height: 15px;
        width: 15px;
        border-radius: 50px;
        background: #0288D1;
        cursor: pointer;
    }

    .ctnr {
        position: relative;
        width: 100%;
        height: 100%;
    }

</style>
