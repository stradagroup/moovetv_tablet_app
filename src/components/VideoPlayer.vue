<template>
    <div class="ctnr">
        <div class="overlay-controls">
            <div class="contain">
                <div class="flex flex-sb">
                    <button data-skip="-10" class="player__button">
                        <font-awesome-icon icon="step-backward" size="3x">10s</font-awesome-icon>
                        </button>
                    <button><i class="fa fa-play-circle"></i> </button>
                    <button data-skip="25" class="player__button">
                        <font-awesome-icon icon="step-forward" size="3x">10s</font-awesome-icon>
                    </button>
                </div>
                <input type="range" name="volume" class="player__slider" min="0" max="1" step="0.05" value="1">
                <input type="range" name="playbackRate" class="player__slider" min="0.5" max="2" step="0.1" value="1">

            </div>

        </div>
        <video id="opPlayer" class="op-player op-player__media" playsinline v-bind:style="{ height: height }">
            <source :src="src" :type=format>
        </video>
        <div class="player__controls">
            <div class="progress">
                <div class="progress__filled"></div>
            </div>
            <div class="flex flex-sb w-90">
                <button class="player__button toggle" title="Toggle Play">►</button>
                <div class="flex mr-10">
                    <span class="current">00:00</span> <span>/</span> <span class="duration">00:00</span>
                </div>

            </div>


        </div>

    </div>
</template>

<script>
     import OpenPlayer from 'openplayerjs';
    import {loadAds} from '../services/landingAds.service'
    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faFastBackward,
        faFastForward,
        faPause,
        faStepForward,
        faStepBackward,
        faPlayCircle


    } from '@fortawesome/free-solid-svg-icons'

    library.add( faFastBackward, faFastForward,faStepForward,faStepBackward,  faPause,faPlayCircle );


    export default {
        name: "VideoPlayer",
        props: {
            options: {
                type: Object,
                default() {
                    return {};
                }
            },
            format: String,
            default() {
                return "video/mp4"
            },
            height: String,
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
                url: '',

            }
        },
        async created() {
            let that = this;
            await loadAds.video(this.uuid, 1).then((res) => {
                //console.log(res[0]);
                that.vst = res.map((one) =>
                    one.xml
                );
                if (that.vst.length>1) {
                    that.initPlayer(that.src, that.vst);
                    console.log('video ads loaded' + that.vst)
                }
                else {
                    that.initPlayer(that.src);
                }



            }).catch((err) => {

                console.log(err)
            });


        },
        methods: {
            initPlayer(src, vst) {
                if (vst) {
                    this.url = src;
                    this.player = new OpenPlayer('opPlayer', vst, false);
                    // Don't forget to start the player

                    this.player.init();

                    // this.player.play();
                    this.player.getElement().addEventListener('adsloaded', function () {
                        console.log('Ad loaded successfully');

                    });
                    this.player.getElement().addEventListener('adscomplete', function () {
                        console.log('Ad completed successfully');
                    });
                    setTimeout(()=>{
                        this.player.play();
                    },2000)
                }
                else {
                    this.player = new OpenPlayer('opPlayer', false);
                    // Don't forget to start the player
                    this.url = src;
                    this.player.init();

                    setTimeout(()=>{
                        this.player.play();
                    },2000)

                }

            },
            getMimeType(url) {
                if (/\.m3u8/i.test(url)) {
                    this.format = 'application/x-mpegURL';
                } else if (/\.mpd/i.test(url)) {
                    this.format = 'application/dash+xml';
                }

                // Let browser figure out if it can play it
                return '';
            }
        },

        mounteds() {
            /* Get our elements */


            const player = document.querySelector('.ctnr');

            const video = player.querySelector('.op-player ');
            const overlay = player.querySelector('.overlay-controls');

            const progress = player.querySelector('.progress');
            const progressBar = player.querySelector('.progress__filled');

            const toggle = player.querySelector('.toggle');
            const skipButtons = player.querySelectorAll('[data-skip]');
            const ranges = player.querySelectorAll('.player__slider');

            const current = player.querySelector('.current');
            const duration = player.querySelector('.duration');
            //const fullscreen   =  player.querySelector('.fullscreen-btn');


            /* Build out functions */


// toggle play/pause
            function togglePlay() {
                const method = video.paused ? 'play' : 'pause';
                video[method]();
            }

// Detect press of spacebar, toggle play
            function detectKeypress(e) {
                if (e.keyCode == 32) {
                    togglePlay();
                } else {
                    return;
                }
            }

// Update button on play/pause
            function updateButton() {
                if(this.paused){
                    overlay.style.display="flex"
                }
                else{
                    overlay.style.display="none"
                }
                const icon = this.paused ? '►' : '❚ ❚';
                toggle.textContent = icon;
            }

// Allow for video skipping
            function skip() {
                video.currentTime += parseFloat(this.dataset.skip);
            }

// Handle the range of the video
            function handleRangeUpdate() {
                video[this.name] = this.value;
            }

// Track how far the video has progressed and create css
// variable so that we can visually represent it
            function handleProgress() {
                const percent = (video.currentTime / video.duration) * 100;
                progressBar.style.flexBasis = `${percent}%`;
            }

// Allow for video scrubbing
            function scrub(e) {
                const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
                video.currentTime = scrubTime;
                console.log(currentTime);
            }


// Get currnet time of video and append correct amount of 0s
            function currentTime() {
               // console.log('time');
                var curmins = Math.floor(video.currentTime / 60);
                var cursecs = Math.floor(video.currentTime - curmins * 60);
                var durmins = Math.floor(video.duration / 60);
                var dursecs = Math.floor(video.duration - durmins * 60);
                if (cursecs < 10) {
                    cursecs = "0" + cursecs;
                }
                if (dursecs < 10) {
                    dursecs = "0" + dursecs;
                }
                if (curmins < 10) {
                    curmins = "0" + curmins;
                }
                if (durmins < 10) {
                    durmins = "0" + durmins;
                }

                current.innerHTML = curmins + ":" + cursecs;
                duration.innerHTML = durmins + ":" + dursecs;
                if (isNaN(curmins) || isNaN(cursecs)) current.innerHTML = "00" + ":" + "00";
                if (isNaN(durmins) || isNaN(dursecs)) duration.innerHTML = "00" + ":" + "00";
            }


            /* Hook up the event listeners */


// Click events
           // video.addEventListener('click', togglePlay);
            toggle.addEventListener('click', togglePlay);


// Keypress (Play/Pause)
            window.addEventListener('keydown', detectKeypress);

// Play/Pause events
            video.addEventListener('play', updateButton);
            video.addEventListener('pause', updateButton);

// Do these on time update
            video.addEventListener('timeupdate', currentTime);
            video.addEventListener('timeupdate', handleProgress);

// Skip buttons
            skipButtons.forEach(button => button.addEventListener('click', skip));

// Detect how far mouse has moved
            ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
            ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

// Track scrubbing
            let mousedown = false;
            progress.addEventListener('click', scrub);
            progress.addEventListener('mousemove', (e) => mousedown && scrub(e));

// Track when mouse is up/down on scrub bar
            progress.addEventListener('mousedown', () => mousedown = true);
            progress.addEventListener('mouseup', () => mousedown = false);

        },
        watch: {
            src: {
                handler(value) {
                    console.log(value);
                    this.getMimeType(value);
                    // this.player = new OpenPlayer('opPlayer', value, false);
                    // // Don't forget to start the player
                    // this.player.init();
                    // this.url = this.src;
                    // // this.player.play();
                    //
                    // // var id = document.querySelector('.op-player').id;
                    // // var player = OpenPlayer.instances[id];
                    // //
                    // this.player.getElement().addEventListener('adsloaded', function () {
                    //     console.log('Ad loaded successfully');
                    // });
                    // this.player.getElement().addEventListener('adscomplete', function () {
                    //     console.log('Ad complted successfully');
                    // });

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

    .overlay-controls .contain{
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
