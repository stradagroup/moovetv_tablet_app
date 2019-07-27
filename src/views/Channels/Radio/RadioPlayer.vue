<template>
    <div class="chanels-bg">
        <HeaderNav/>

        <div class="channels-section">
            <div class="container-fluid">
                <div class="music-top-nav">
                    <div class="back-btn">
                        <a @click="$router.go(-1)"><img src="../../../assets/images/back-btn.svg"></a>
                        <!--<router-link to="/Radio"><img src="../../../assets/images/back-btn.svg"></router-link>-->
                    </div>
                    <div class="songs-cart">
                        <div class="song-artist">
                            <img src="../../../assets/images/icon-sm/radio-icon2.svg"> Radio
                        </div>
                    </div>
                </div>
                <div class="player">
                    <div class="row mt-3">
                        <div class="col-md-4">
                            <div class="song-title">
                                <h3>Adele - Hello</h3>
                            </div>
                            <div class="cover1">
                                <img src="../../../assets/images/radio/maxfm1023.png">
                            </div>
                            <!-- <nav>
                                <div class="left">
                                    <i class="material-icons">menu</i>
                                    <h6>Playlist</h6>
                                </div>
                                <div class="right">
                                    <i class="material-icons search">search</i>
                                    <i class="material-icons">queue_music</i>
                                </div>
                            </nav> -->
                            <div class="player-ui">

                                <div class="progress">
                                    <div class="played">
                                        <div class="circle"></div>
                                    </div>
                                </div>
                                <div class="controls">
                                    <i class="material-icons">skip_previous</i>
                                    <a href="../../../assets/audio/fire-boy-jealous.mp3" target="_self"> <i class="material-icons">play_arrow</i></a>
                                    <i class="material-icons">skip_next</i>
                                </div>
                            </div>

                        </div>

                        <div class="col-md-8">
                            <div class="music">
                                <div class="track-list ">
                                    <p class="tracklist">Radio Stations</p>
                                </div>
                                <div class="song-1">
                                    <div class="info">
                                        <div class="track-number ">
                                            <p class="">1</p>
                                        </div>
                                        <div class="titles">
                                            <h5>Hello</h5>
                                            <p>Adele</p>
                                        </div>
                                    </div>
                                    <div class="state playing">
                                        <i class="material-icons">equalizer</i>
                                    </div>
                                </div>
                                <div class="song-2">
                                    <div class="info">
                                        <div class="track-number ">
                                            <p class="">2</p>
                                        </div>
                                        <div class="titles">
                                            <h5>Californication</h5>
                                            <p>Red Hot Chili Pepers</p>
                                        </div>
                                    </div>
                                    <div class="state">
                                        <i class="material-icons">play_arrow</i>
                                    </div>
                                </div>
                                <div class="song-3">
                                    <div class="info">
                                        <div class="track-number ">
                                            <p>3</p>
                                        </div>
                                        <div class="titles">
                                            <h5>6 INCH</h5>
                                            <p>beyoncé</p>
                                        </div>
                                    </div>
                                    <div class="state">
                                        <i class="material-icons">play_arrow</i>
                                    </div>
                                </div>
                                <div class="song-4">
                                    <div class="info">
                                        <div class="track-number ">
                                            <p>4</p>
                                        </div>
                                        <div class="titles">
                                            <h5>Purple rain</h5>
                                            <p>Prince & The Revolution</p>
                                        </div>
                                    </div>
                                    <div class="state">
                                        <i class="material-icons">play_arrow</i>
                                    </div>
                                </div>
                                <div class="song-4">
                                    <div class="info">
                                        <div class="track-number ">
                                            <p>5</p>
                                        </div>
                                        <div class="titles">
                                            <h5>Purple rain</h5>
                                            <p>Prince & The Revolution</p>
                                        </div>
                                    </div>
                                    <div class="state">
                                        <i class="material-icons">play_arrow</i>
                                    </div>
                                </div>
                                <div class="song-4">
                                    <div class="info">
                                        <div class="track-number ">
                                            <p>6</p>
                                        </div>
                                        <div class="titles">
                                            <h5>Purple rain</h5>
                                            <p>Prince & The Revolution</p>
                                        </div>
                                    </div>
                                    <div class="state">
                                        <i class="material-icons">play_arrow</i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <footer>
                <div class="bottom-ads">
                    <img src="../../../assets/images/ads-footer.jpg">
                    <img src="../../../assets/images/ads-walmart.jpg">
                </div>
            </footer>
        </div>

    </div>
</template>

<script>
    // var slide = require('../../assets/js/moove.js');
    import HeaderNav from '../../Navigation/HeaderNav.vue';

    export default {
        components:{
            HeaderNav
        },
    }


</script>