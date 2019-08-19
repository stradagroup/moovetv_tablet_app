<template>
    <!-- ============= FLEXBOX AUDIO PLAYER ============== -->
    <div class="audio-player">
        <Loader :showFull=true loading-text="Loading" v-if="loading"></Loader>
        <audio :src="currentSong.url || lastPlayedTrack.url" @ended="loadNextAudio" @loadeddata="preloadData"
               @paused="isPlaying = false"
               @playing="isPlaying = true"
               @timeupdate="progressUpdate"
               id="player" preload="auto"
               ref="player" type="audio/*">
        </audio>
        <!-- Audio Player -->

        <!-- Visual Container -->
        <div aria-label="media player" class="jp-audio" id="jp_container_1" role="application">
            <div class="jp-type-playlist">
                <!-- Flexbox -->
                <div class="jp-gui jp-interface flex-wrap"
                     v-bind:style="{ backgroundImage: 'url(' + currentSong.poster || lastPlayedTrack.poster + ')' }">
                    <div class="controls">
                        <div class="jp-now-playing flex-item">
                            <div class="jp-track-name">{{currentSong.title || lastPlayedTrack.title}}</div>
                            <!--<div class="jp-artist-name"></div>-->
                            <div class="jp-track-poster">
                                <img :src="currentSong.poster || lastPlayedTrack.poster"/>
                            </div>
                        </div>

                        <!-- Progress bar -->
                        <div class="jp-progress-container flex-item">
                            <!-- Progress Time -->
                            <div class="jp-time-holder">
                                <span aria-label="time" class="jp-current-time" role="timer">{{this.currentTime}}</span>
                                <span aria-label="duration" class="jp-duration"
                                      role="timer">{{this.endTime || `00:00`}}</span>
                            </div>
                            <!-- End Time holder -->


                            <div class="jp-progress">
                                <div @click="seek" class="jp-seek-bar">
                                    <div class="jp-play-bar" ref="playBar"
                                         v-bind:style="{width:this.progressValue +'px'}">
                                        <div class="bullet">
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <!-- End Flex Item -->
                        <!-- Album & Artist Info -->
                        <!-- Play / Pause... Controls -->
                        <div class="jp-controls flex-item">
                            <button :disabled="nowPlayingAd === true" @click="prev" class="jp-previous" role="button"
                                    tabindex="0">
                                <font-awesome-icon icon="step-backward"/>
                            </button>
                            <button :disabled="nowPlayingAd === true" @click="togglePlay" class="jp-play" role="button"
                                    tabindex="0">
                                <font-awesome-icon :icon="playState" size="sm"/>
                            </button>
                            <button :disabled="nowPlayingAd === true" @click="next" class="jp-next" role="button"
                                    tabindex="0">
                                <font-awesome-icon icon="step-forward"/>

                            </button>
                        </div>
                        <!-- End Flex Item -->


                        <!-- End Flex Item -->
                    </div>
                </div>
                <!-- End Flexbox -->
                <!-- Playlist -->
                <div class="jp-playlist" id="playlist-wrap">
                    <div class="text-bold">Track List</div>
                    <div class="play-controls">

                        <!-- Shuffle Toggle -->
                        <button class="jp-shuffle" role="button">
                            <font-awesome-icon :size="shuffleState" icon="random"/>
                        </button>
                        <!-- Repeat Toggle -->
                        <button class="jp-repeat" role="button">
                            <font-awesome-icon :size="repeatState" icon="exchange-alt"/>

                        </button>

                    </div>
                    <ul class="songList">
                        <li :key="index" v-for="(song, index) in songs"
                            v-bind:class="{playing : song.uuid===currentSong.uuid}" @click="selectList(song)">
                            <div class="title">{{getArtist(song.title,true)}}</div>
                            <div class="artist">{{getArtist(song.title)}}</div>
                        </li>


                    </ul>
                </div>
                <!-- End Playlist -->

            </div>
            <!-- Player Type Playlist -->
        </div>
        <!-- End Contaner -->

    </div>
    <!-- End Fixed Audio Player -->
</template>

<script>
    import svgComponent from '../components/svgComponent'
    import Loader from "../components/Loader/Loader";
    // import svgComponent from '../../node_modules/jplayer/dist/jplayer'
    import {library} from '@fortawesome/fontawesome-svg-core'
    import {loadAds} from '../services/landingAds.service'
    import {
        faCheckSquare,
        faChevronCircleLeft,
        faExchangeAlt,
        faFastBackward,
        faFastForward,
        faPause,
        faPlay,
        faRandom,
        faStepBackward,
        faStepForward,
        faStop
    } from '@fortawesome/free-solid-svg-icons'

    library.add(faChevronCircleLeft, faCheckSquare, faFastBackward, faFastForward, faStepBackward, faStepForward, faPlay, faPause, faStop, faRandom, faExchangeAlt);
    export default {
        name: "MusicPlayer",
        components: {
            svgComponent, Loader
        },
        props: {
            uuid: String,
            songs: Array
        },
        data() {
            return {
                isPlaying: false,
                isShuffle: false,
                isRepeat: false,
                progressValue: 0,
                endTime: 0,
                timeDrag: false,
                playTrackNext: true,
                currentTime: 0,
                startTime: 0,
                myPlayList: this.songs || [],
                lastPlayedTrack: {},
                alreadyPlayedAds: [],
                currentSong: {},
                loading: true,
                ads: [],
                nowPlayingAd: false,
                adFiles: []
            }
        },
        async created() {
            this.player = document.getElementById('player');
            this.fetchRemoteAds();
        },
        computed: {
            repeatState() {
                return (this.isRepeat) ? "lg" : "xs"
            },
            shuffleState() {
                return (this.isShuffle) ? "lg" : "xs"
            },
            playState() {
                return (this.isPlaying) ? "pause" : "play"
            },
            curentlyPlaying() {

            },
            nextTrack() {
                if (this.myPlayList.length < 2)
                    return '';

                console.log(this.myPlayList);
                // console.log(this.lastPlayedTrack);
                console.log(this.currentSong);
                // Get the index of the lastPlayed Track
                let lastPlayedTrackIndex = this.myPlayList.findIndex((song) => song.url === this.currentSong.url);
                console.log('lastplayed:' + lastPlayedTrackIndex)

                return (typeof this.myPlayList[lastPlayedTrackIndex + 1] !== undefined) ?
                    this.myPlayList[lastPlayedTrackIndex + 1] : '';
            }
        },
        methods: {
            selectList(song) {
                console.log(song)
                if (song.uuid === this.currentSong.uuid) {
                    this.togglePlay()
                }
                else {
                    this.currentSong = song;
                    setTimeout(()=>{
                        this.togglePlay();
                    },1000)

                    // this.toggleNewPlay();
                }
            },
            fetchRemoteAds: async function () {
                await loadAds.audio(this.uuid, 1).then((res) => {
                    this.ads = res;
                }).catch(() => {
                });
            },
            getArtist(txt,other=false) {
                if(other){
                    if(txt.indexOf('|')!==-1){
                        return txt.split('|')[0];
                    }
                    if(txt.indexOf('-')!==-1){
                        return txt.split('-')[0];
                    }
                    return txt
                }
                if(txt.indexOf('|')!==-1){
                    return txt.split('|')[1];
                }
                if(txt.indexOf('-')!==-1){
                    return txt.split('-')[1];
                }
                return txt

            },
            calculateTotalValue(length) {
                if (isNaN(length))
                    return "00:00";

                let minutes = Math.floor(length / 60),
                    seconds_int = (length - minutes * 60).toFixed(),
                    seconds_str = seconds_int.toString(),
                    seconds = seconds_str.substr(0, 2),
                    time = minutes + ':' + (seconds) ? seconds : 0,
                    current_time = (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds_int < 10 ? "0" + seconds_int : seconds_int);

                return current_time;
            },
            calculateCurrentValue(currentTime) {
                let current_hour = parseInt(currentTime / 3600) % 24,
                    current_minute = parseInt(currentTime / 60) % 60,
                    current_seconds_long = currentTime % 60,
                    current_seconds = current_seconds_long.toFixed(),
                    current_time = (current_minute < 10 ? "0" + current_minute : current_minute) + ":" + (current_seconds < 10 ? "0" + current_seconds : current_seconds);

                return current_time;
            },
            progressUpdate() {
                let length = this.player.duration;
                let current_time = this.player.currentTime;
                // calculate total length of value
                this.endTime = this.calculateTotalValue(length);
                // calculate current value time

                this.currentTime = this.calculateCurrentValue(current_time);
                this.updateBar(this.player.currentTime / this.player.duration);
                if (this.player.currentTime === this.player.duration) {
                    // this.isPlaying = false;
                    this.progressValue = 0;
                    this.currentTime = 0;
                    if (! this.nowPlayingAd)
                        this.injectAds();

                }

            },
            seek(e) {
                if (this.nowPlayingAd) return false;

                this.updateBar(e.offsetX / e.target.offsetWidth);
                this.player.currentTime = (e.offsetX / e.target.offsetWidth) * this.player.duration;
            },
            play() {

            },
            pause() {
            },
            next() {
                if (this.nextTrack.length > 0)
                    this.currentSong = this.nextTrack;
            },
            prev() {
            },
            preloadData() {
                this.loading = false;
                this.progressUpdate();
            },
            injectAds() {
                if (this.adFiles.length > 0) {
                    this.player.src = this.adFiles[0];
                    this.player.load();
                    this.nowPlayingAd = true;
                    this.player.play();
                }
            },
            loadNextAudio() {
                if (! this.nowPlayingAd)
                    this.injectAds();
                // this.isPlaying = false;
                // If ad just finished playing
                if (this.nowPlayingAd) {
                    this.player.src = this.currentSong.url;
                    this.player.load();
                    // this.player.play();

                    if (this.alreadyPlayedAds.length > 0)
                        this.lastPlayedTrack = this.currentSong;

                    // If the current song is different from the lastPlayed track
                    if (this.playTrackNext)
                        this.player.play();
                    else
                        this.isPlaying = false;

                    this.nowPlayingAd = false;

                    if (this.nextTrack.length > 0)
                        this.currentSong = this.nextTrack;

                    this.player.play();

                } else {
                    this.injectAds();

                }
            },
            toggleNewPlay() {
                this.loading = false;

                if (this.player.paused === false) {
                    this.player.pause();
                    this.isPlaying = false;
                    $('#play-btn').removeClass('pause');

                } else {
                    this.player.load();
                    this.player.play();
                    $('#play-btn').addClass('pause');
                }
            },
            togglePlay() {
                this.loading = false;

                if (this.player.paused === false) {
                    this.player.pause();
                    this.isPlaying = false;
                    $('#play-btn').removeClass('pause');

                } else {
                    if (this.alreadyPlayedAds.length === 0)
                        this.injectAds();

                    console.log(this.currentSong);

                    this.player.play();
                    $('#play-btn').addClass('pause');
                }
            },
            updateBar(val, set) {
                let progress = $('.jp-progress');
                this.progressValue = val * progress.width();
                if (set) {
                    console.log(val);
                    this.player.currentTime = val;
                }
            },
            touchEvents() {
                console.log(this.$refs)
            },
            touchMove() {

            },
            touchEnd() {
                console.log(this.$refs)
            }
        },
        mounted() {
            this.player = document.getElementById('player');
            // this.player.onloadeddata = function() {
            //     alert("Browser has loaded the audio");
            // };


            // var timeDrag = false;
            // /* Drag status */
            // $('.jp-seek-bar').click(function (e) {
            //     that.updateBar(e.offsetX / this.offsetWidth);
            //     that.player.currentTime = (e.offsetX / this.offsetWidth) * player.duration;
            // });

        },
        watch: {
            ads: {
                async handler(ad) {
                    if (ad.length > 0) {
                        this.adFiles = ad.map((audio) => audio.ad);
                        this.playTrackNext = (this.adFiles.length !== 1);
                    } else {
                        // Empty already played ads
                        this.alreadyPlayedAds = [];
                        this.fetchRemoteAds();
                        this.playTrackNext = false;
                        this.currentSong = this.lastPlayedTrack;
                        this.isPlaying = false;
                    }
                }
            },
            nowPlayingAd: {
                async handler(justPlayed) {
                    if (!justPlayed) {
                        let index = this.ads.findIndex((ad) => ad.ad === this.adFiles[0]);
                        let ad = this.ads[index];
                        // Add the Tracker
                        await loadAds.tracker(ad.tracker);
                        // Add it to the list of already played ads
                        // console.log(songs);
                        this.alreadyPlayedAds.push(this.ads[0]);
                        // Remove the item from the ad files and the
                        this.ads.shift();
                    }
                }
            },
            currentSong: {
                handler(song) {
                    if (song.length > 0)
                        this.preloadData();
                }
            },
            myPlayList: {
                handler(songs) {
                    if (songs.length > 0)
                        this.currentSong = songs[0];
                    else
                        this.currentSong = {};
                }
            }
        }


    }
</script>

<style scoped>
    button {
        border: 0;
    }

    .play-controls {
        display: flex;
        position: absolute;
        top: 10px;
        right: 10px;

        margin-left: auto;
        justify-content: space-between;
        align-items: center;
    }

    .fa-xs {
        font-size: 2em;
        opacity: .5;
    }

    .fa-lg {
        font-size: 2em;
    }

    .audio-player {
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .jp-interface .controls {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 30px;
    }

    .jp-type-playlist {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
    }

    .jp-interface {
        flex: 1;
        flex-basis: 45%;

        position: relative;

        /*-webkit-filter: blur(20px);*/
        /*filter: blur(5px)*/

    }

    .jp-interface::before {
        content: '';
        position: absolute;
        width: 103%;
        height: 103%;
        margin: auto;
        background: rgba(2, 2, 2, 0.92);
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        /*left: 0;*/
        /*-webkit-filter: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3Cdefs%3E%3Cfilter id='blur'%3E%3CfeGaussianBlur stdDeviation='5'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E");*/
        /*filter: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3Cdefs%3E%3Cfilter id='blur'%3E%3CfeGaussianBlur stdDeviation='5'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E");*/
        /*-webkit-filter: blur(5px);*/
        /*filter: blur(5px);*/
        /*-webkit-filter: blur(20px);*/
        /*filter: blur(5px);*/
    }

    .action {
        width: 30px;
        height: 30px;
    }

    .jp-playlist {
        flex: 1;
        position: relative;
        flex-basis: 55%;
        background: #131313;
        padding: 10px 20px;
    }

    #jp_container_1 {
        height: 100%;
    }

    .no-flexbox .audio-player {
        display: none;
    }

    .flex-wrap {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
    }

    .flex-item {
    }

    .jp-controls.flex-item {
        flex-basis: 100%;
        justify-content: center;
        align-items: center;
        text-align: center;
        display: flex;
        color: white;
    }

    .jp-progress-container.flex-item {
        flex-basis: 350px;
        flex-grow: 2;
        flex-shrink: 2;
        margin-top: 30px;
    }

    .jp-now-playing.flex-item {
        flex-basis: 100%;
        text-align: center;
        justify-content: center;
        align-items: center;
    }

    .jp-toggles.flex-item {
        flex-basis: 130px;
    }

    .jp-volume-controls.flex-item {
        flex-basis: 155px;
    }

    .text-bold {
        font-weight: bold;
        font-size: 1.8em;
    }

    .jp-track-poster img {
        width: 280px;
        object-fit: cover;
        height: 280px;
        border-radius: 10px;
    }

    .jp-audio,
    .jp-audio-stream,
    .jp-video {
        background: rgba(0, 0, 0, 0.8);

        position: relative;
    }

    .overlay-cover {
        width: 100%;
        position: absolute;
        height: 100%;

    }

    /*Controls*/

    /*.jp-playlist {*/
    /*display: none;*/
    /*}*/

    .jp-interface .jp-controls button,
    .jp-interface .jp-toggles button,
    .jp-interface .jp-volume-controls button {
        background: none;
        border: none;
        outline: none;
        color: white;
        line-height: 24px;
        font-weight: 600;
        -webkit-transition-delay: 0;
        transition-delay: 0;
        -webkit-transition-property: all;
        -webkit-transition-duration: 0.2s;
        -webkit-transition-timing-function: ease-in-out;
        transition-property: all;
        transition-duration: 0.2s;
        transition-timing-function: ease-in-out;
        -webkit-transition: all 0.2s linear;
        -moz-transition: all 0.2s linear;
        -ms-transition: all 0.2s linear;
        -o-transition: all 0.2s linear;
        transition: all 0.2s linear;
        font-size: 20px;
        padding: 0 5px;
    }

    .jp-interface .jp-controls .jp-play i,
    .jp-interface .jp-controls .jp-previous i,
    .jp-interface .jp-controls .jp-next i {
        font-size: 23px;
        color: #FFF;
    }

    .jp-interface .jp-controls .jp-play {
        background: #2196F3;
        color: white;
        border-radius: 50%;
        height: 80px;
        width: 80px;
    }

    .jp-interface .jp-controls .jp-play img {
        width: 30px;
        height: 30px;
        text-align: center;
        margin-left: 3px;

    }

    .jp-interface .jp-controls .jp-play i {
        padding-left: 5px;
        padding-top: 5px;
    }

    .jp-audio.jp-state-playing .jp-play i {
        padding-left: 0px;
    }

    .jp-audio.jp-state-playing .jp-play i:before {
        content: "\f04c" !important;
    }

    /*Progress bars*/

    .jp-progress-container,
    .jp-volume-bar-container {
        height: 30px;
        padding: 10px;
    }

    .jp-playlist li
    .jp-progress,
    .jp-seek-bar,
    .jp-play-bar,
    .jp-volume-bar,
    .jp-volume-bar-value {
        height: 8px;
        -webkit-border-radius: 1px;
        -moz-border-radius: 1px;
        border-radius: 1px;
    }

    .jp-progress {
        margin: 0 50px;
        background-color: #2b2b2b;
        border-radius: 5px;
    }

    .jp-seek-bar,
    .jp-volume-bar {
        cursor: pointer;
        background-color: #a0a0a0;
        border-radius: 5px;
    }

    .jp-play-bar {
        float: left;
        position: relative;
        background-color: #2196F3;
        border-radius: 5px;
        overflow: visible !important;
    }

    .jp-volume-bar-value {
        float: left;
        position: relative;
        background-color: #aaaaaa;
    }

    .jp-progress .bullet,
    .jp-volume-bar .bullet {
        position: absolute;
        content: "";
        top: -5px;
        right: -7px;
        height: 18px;
        width: 18px;
        background: #ffffff;
        border-radius: 50%;
    }

    .jp-time-holder {
        position: relative;
        top: 0;
        color: #bdbdbd;
        font-family: inherit;
        font-size: 12px;
    }

    .jp-time-holder .jp-current-time {
        position: absolute;
        left: 50px;
        top: -25px;
    }

    .jp-time-holder .jp-duration {
        position: absolute;
        right: 50px;
        top: -25px;
    }

    /* Track & Artist */

    .jp-now-playing {
        padding: 10px;
        margin-top: 20px;
    }

    .jp-track-name {
        color: #ffffff;
        font-size: 1.3em;
        overflow: hidden;
        white-space: nowrap;
        font-weight: bold;
        margin-bottom: 10px;
        text-align: center;
        text-overflow: ellipsis;

    }

    .jp-artist-name {
        color: #6d6d6d;
        font-size: 14px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: 140px;
    }

    /* Toggles */

    .jp-toggles button {
        margin: 0 3px;
    }

    .jp-toggles button:hover {
        color: #FFF;
    }

    .jp-state-looped .jp-toggles .jp-repeat,
    .jp-state-shuffled .jp-toggles .jp-shuffle,
    .jp-interface .jp-toggles .playlist-is-visible.jp-show-playlist {
        color: #00c85f;
    }

    .jp-playlist ul {
        padding-top: 20px !important;
    }

    .jp-playlist .title {
        font-size: 1.3em;
        font-weight: 500;
        color: white;
    }

    .jp-playlist .artist {
        font-size: 1em;
        margin-top: -5px;
        color: #888888;
    }

    /* Volume Controls */

    .jp-volume-controls button {
        float: left;
    }

    .jp-volume-controls .jp-volume-bar {
        margin-left: 40px;
        margin-top: 8px;
    }

    .jp-state-muted .jp-mute i:before {
        content: "\f026" !important;
    }

    .jp-volume-bar,
    .jp-volume-bar-value {
        border-radius: 5px;
    }

    .jp-state-no-volume .jp-volume-controls {
        display: none;
    }

    /* Playlist  */

    .jp-playlist {
        color: white;
        overflow-y: scroll;
        /*position: absolute;*/
        /*right: 65px;*/
        /*bottom: 100%;*/
        /*background: rgba(0, 0, 0, 0.8);*/
        /*padding: 20px 25px;*/
        /*width: 400px;*/
    }

    .jp-playlist ul {
        padding: 0;
        margin: 0;
        overflow: auto;
        flex-direction: column;
    }

    .jp-playlist li {
        list-style: none;
        padding: 13px 10px;
        border-bottom: 1px solid rgba(156, 156, 156, 0.65);
    }

    .jp-playlist li a {
        color: #c9c9c9;
        display: block;
        padding: 10px 0;
        outline: none;
        /*border-bottom: 1px solid #1F1F1F;*/
    }

    .jp-playlist li:last-child a {
        border-bottom: 0;
    }

    .jp-playlist li a:hover,
    .jp-playlist li a:focus,
    .jp-playlist li a:active {
        color: #00c85f;
        text-decoration: none;
    }

    .jp-playlist li a span {
        color: #6d6d6d;
    }

    /* ==================== Media Query ==================== */

    @media (max-width: 992px) {
        .jp-now-playing {
            display: none;
        }
    }

    @media (max-width: 767px) {
        .jp-volume-bar,
        .jp-volume-bar .bullet,
        .jp-time-holder {
            display: none !important;
        }

        .jp-progress-container.flex-item {
            flex-basis: 140px;
            padding: 12px 15px;
        }

        .jp-progress .bullet {
            right: -10px;
        }

        .jp-volume-controls.flex-item {
            flex-basis: 33px;
        }

        .jp-progress {
            margin: 0;
        }

        .jp-interface .jp-controls .jp-play {
            margin: 0 3px;
        }

        .jp-interface .jp-controls .jp-play i,
        .jp-interface .jp-controls .jp-previous i,
        .jp-interface .jp-controls .jp-next i {
            font-size: 16px;
        }

        .jp-interface .jp-controls .jp-play {
            background: blue;
            border-radius: 50%;
            height: 50px;
            width: 50px;
        }

        .jp-interface .jp-controls .jp-play i {
            padding-left: 3px;
            padding-top: 0;
        }

        .jp-state-playing .jp-interface .jp-controls .jp-play i {
            padding-left: 0;
        }

        .jp-controls.flex-item {
            flex-basis: 100px;
        }
    }

    @media (max-width: 480px) {
        .jp-toggles,
        .jp-playlist {
            display: none !important;
        }
    }

    .jp-no-solution {
        position: absolute;
        bottom: 0;
    }

    .jp-previous, .jp-next {
        color: white;
    }

    .songList li {
        position: relative;
        animation: .5s ease-in-out all;
        min-height: 60px;
    }

    .songList .playing:before {
        content: url("../assets/images/playing-now.png");
        position: absolute;
        top: 25px;

    }

    .playing .title {
        color: #2295f3;
        margin-left: 40px;
    }

    .playing .artist {
        color: #2295f3;
        margin-left: 40px;
    }

</style>
