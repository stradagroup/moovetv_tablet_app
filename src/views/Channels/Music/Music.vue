<template>
    <div class="chanels-bg">
        <HeaderNav/>

        <div class="channels-section">
            <div class="container-fluid">
                <div class="row m-t-3">
                    <div class="col-md-9">
                        <img src="../../../assets/images/icon-sm/music-icon-white.svg" class="current-event-icon">
                        <div class="blur-bg">
                            <div id="demo" class="carousel slide" data-ride="carousel">
                                <ul class="carousel-indicators">
                                    <!-- <li data-target="#demo" data-slide-to="0" class="active"></li>
                                    <li data-target="#demo" data-slide-to="1"></li>
                                    <li data-target="#demo" data-slide-to="2"></li> -->
                                </ul>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <div class="row">
                                            <div class="col-md-4">
                                                <img src="../../../assets/images/music/davido-assurance.png" class="current-view-img">
                                            </div>
                                            <div class="col-md-8">
                                                <div class="text-white">
                                                    <h5>DAVIDO - ASSURANCE</h5>
                                                    <div class="duration">
                                                        <p>2018</p>
                                                        <p>3.8min</p>
                                                    </div>

                                                    <div class="text-description mt-3">
                                                        <p>When a wealthy patriarch unexpectedly, drop dead, his money-crazed family, friends and staff scramble for his billionare fortune.</p>
                                                        <div class="mt-3">
                                                            <p><b>Artist:</b> Davido</p>
                                                            <p><b>Genres:</b> HIP HOP</p>
                                                        </div>
                                                    </div>
                                                    <div class="mt-4"></div>
                                                    <div class="watch-more">
                                                        <router-link to="./Music/MusicPlayer"><button class="watch-now-btn2">Play Now</button></router-link>
                                                        <button class="more-info-btn"><i class="fas fa-random"></i> Shuffle</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="carousel-item">
                                        <div class="row">
                                            <div class="col-md-4">
                                                <img src="../../../assets/images/music/davido-assurance.png" class="current-view-img">
                                            </div>
                                            <div class="col-md-8">
                                                <div class="text-white">
                                                    <h5>DAVIDO - ASSURANCE</h5>
                                                    <div class="duration">
                                                        <p>2018</p>
                                                        <p>3.8min</p>
                                                    </div>

                                                    <div class="text-description mt-3">
                                                        <p>When a wealthy patriarch unexpectedly, drop dead, his money-crazed family, friends and staff scramble for his billionare fortune.</p>
                                                        <div class="mt-3">
                                                            <p><b>Artist:</b> Davido</p>
                                                            <p><b>Genres:</b> HIP HOP</p>
                                                        </div>
                                                    </div>
                                                    <div class="mt-4"></div>
                                                    <div class="watch-more">
                                                        <router-link to="./Music/MusicPlayer"><button class="watch-now-btn2">Play Now</button></router-link>
                                                        <button class="more-info-btn"><i class="fas fa-random"></i> Shuffle</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="carousel-item">
                                        <div class="row">
                                            <div class="col-md-4">
                                                <img src="../../../assets/images/music/davido-assurance.png" class="current-view-img">
                                            </div>
                                            <div class="col-md-8">
                                                <div class="text-white">
                                                    <h5>DAVIDO - ASSURANCE</h5>
                                                    <div class="duration">
                                                        <p>2018</p>
                                                        <p>3.8min</p>
                                                    </div>

                                                    <div class="text-description mt-3">
                                                        <p>When a wealthy patriarch unexpectedly, drop dead, his money-crazed family, friends and staff scramble for his billionare fortune.</p>
                                                        <div class="mt-3">
                                                            <p><b>Artist:</b> Davido</p>
                                                            <p><b>Genres:</b> HIP HOP</p>
                                                        </div>
                                                    </div>
                                                    <div class="mt-4"></div>
                                                    <div class="watch-more">
                                                        <router-link to="./Music/MusicPlayer"><button class="watch-now-btn2">Play Now</button></router-link>
                                                        <button class="more-info-btn"><i class="fas fa-random"></i> Shuffle</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div>
                            <img src="../../../assets/images/tecno-chrismas-banner.jpg" class="ads-banner-bg-img">
                        </div>
                    </div>
                </div>
            </div>

            <div class="dark-bg">
                <div class="container-fluid pt-3">
                    <div class="all-category">
                        <div class="all-movies "><router-link to="../Channels ">All</router-link></div>
                        <!-- onclick="toggle_visibility('movies');" -->
                        <div class="all-movies" ><router-link to="./Movies"> <span class="icon-xsm"><img src="../../../assets/images/icon-sm/movies-sm.svg"> </span> Movies</router-link></div>
                        <div class="all-movies"><router-link to="./Ebooks"><span class="icon-xsm"><img src="../../../assets/images/icon-sm/ebook-white.svg"> </span> Ebooks</router-link></div>
                        <div class="all-movies active"><router-link to="./Music"><span class="icon-xsm"><img src="../../../assets/images/icon-sm/music-white.svg"> </span> Music</router-link></div>
                        <div class="all-movies"><router-link to="./Radio"><span class="icon-xsm"><img src="../../../assets/images/icon-sm/radio-white.svg"> </span> Radio</router-link></div>
                        <div class="all-movies"><router-link to="./Games"><span class="icon-xsm"><img src="../../../assets/images/icon-sm/games-white.svg"> </span> Games</router-link></div>
                    </div>
                    <div class="" id="movies">
                        <div class="recently-added pt-3">
                            <div class="recently-added-left ">
                                <p class="recently-added2" >Recently Added</p>
                                <div class="recently-added-subtitle">
                                    <router-link to="./Music"><p class="recently-added-sub">Artists</p></router-link>
                                    <router-link to="./Music"><p class="recently-added-sub">Album</p></router-link>
                                    <router-link to="./Music/Genres"><p class="recently-added-sub">Genres</p></router-link>
                                    <router-link to="./Music"><p class="recently-added-sub">Songs</p></router-link>
                                    <router-link to="./Music"><p class="recently-added-sub">Favourites</p></router-link>
                                </div>
                            </div>

                            <div class="explore-all-right ">
                                <p class="explore-all ">Explore All</p>
                            </div>
                        </div>
                        <carousel >
                            <div class="mr-2">
                                <img src="../../../assets/images/music/falz-27.png" alt="">
                                <div class="small-icons">
                                    <div class="small-icon">
                                        <img src="../../../assets/images/icon-sm/song-icon.svg">
                                    </div>
                                    <div class="pt-2">
                                        <img src="../../../assets/images/icon-sm/moovetv-sm.svg">
                                    </div>
                                </div>
                                <p class="movie-title">Chief Daddy</p>
                            </div>
                            <div class="mr-2">
                                <img src="../../../assets/images/music/wizkid-soco.png" alt="">
                                <div class="small-icons">
                                    <div class="small-icon">
                                        <img src="../../../assets/images/icon-sm/song-icon.svg">
                                    </div>
                                    <div class="pt-2">
                                        <img src="../../../assets/images/icon-sm/moovetv-sm.svg">
                                    </div>
                                </div>
                                <p class="movie-title">Remember Me</p>
                            </div>
                            <div class="mr-2">
                                <img src="../../../assets/images/music/phyno-nwa2.png" alt="">
                                <div class="small-icons">
                                    <div class="small-icon">
                                        <img src="../../../assets/images/icon-sm/song-icon.svg">
                                    </div>
                                    <div class="pt-2">
                                        <img src="../../../assets/images/icon-sm/moovetv-sm.svg">
                                    </div>
                                </div>
                                <p class="movie-title">The Inlaws...</p>
                            </div>
                            <div class="mr-2">
                                <img src="../../../assets/images/music/davido-assuranc.png" alt="">
                                <div class="small-icons">
                                    <div class="small-icon">
                                        <img src="../../../assets/images/icon-sm/song-icon.svg">
                                    </div>
                                    <div class="pt-2">
                                        <img src="../../../assets/images/icon-sm/moovetv-sm.svg">
                                    </div>
                                </div>
                                <p class="movie-title">Last Flight...</p>
                            </div>
                            <div class="mr-2">
                                <img src="../../../assets/images/music/falz-chemistry.png" alt="">
                                <div class="small-icons">
                                    <div class="small-icon">
                                        <img src="../../../assets/images/icon-sm/song-icon.svg">
                                    </div>
                                    <div class="pt-2">
                                        <img src="../../../assets/images/icon-sm/moovetv-sm.svg">
                                    </div>
                                </div>
                                <p class="movie-title">30 Days in Atlanta...</p>
                            </div>

                        </carousel>
                    </div>
                </div>

                <div class="container-fluid pt-3">
                    <div class="recently-added ">
                        <p class="recently-added2">Trending</p>
                        <p class="recently-added3">Explore All</p>
                    </div>
                    <carousel >
                        <div class="mr-2">
                            <img src="../../../assets/images/music/falz-27.png" alt="">
                            <div class="small-icons">
                                <div class="small-icon">
                                    <img src="../../../assets/images/icon-sm/song-icon.svg">
                                </div>
                                <div class="pt-2">
                                    <img src="../../../assets/images/icon-sm/moovetv-sm.svg">
                                </div>
                            </div>
                            <p class="movie-title">Chief Daddy</p>
                        </div>
                        <div class="mr-2">
                            <img src="../../../assets/images/music/wizkid-soco.png" alt="">
                            <div class="small-icons">
                                <div class="small-icon">
                                    <img src="../../../assets/images/icon-sm/song-icon.svg">
                                </div>
                                <div class="pt-2">
                                    <img src="../../../assets/images/icon-sm/moovetv-sm.svg">
                                </div>
                            </div>
                            <p class="movie-title">Remember Me</p>
                        </div>
                        <div class="mr-2">
                            <img src="../../../assets/images/music/phyno-nwa2.png" alt="">
                            <div class="small-icons">
                                <div class="small-icon">
                                    <img src="../../../assets/images/icon-sm/song-icon.svg">
                                </div>
                                <div class="pt-2">
                                    <img src="../../../assets/images/icon-sm/moovetv-sm.svg">
                                </div>
                            </div>
                            <p class="movie-title">The Inlaws...</p>
                        </div>
                        <div class="mr-2">
                            <img src="../../../assets/images/music/davido-assuranc.png" alt="">
                            <div class="small-icons">
                                <div class="small-icon">
                                    <img src="../../../assets/images/icon-sm/song-icon.svg">
                                </div>
                                <div class="pt-2">
                                    <img src="../../../assets/images/icon-sm/moovetv-sm.svg">
                                </div>
                            </div>
                            <p class="movie-title">Last Flight...</p>
                        </div>
                        <div class="mr-2">
                            <img src="../../../assets/images/music/falz-chemistry.png" alt="">
                            <div class="small-icons">
                                <div class="small-icon">
                                    <img src="../../../assets/images/icon-sm/song-icon.svg">
                                </div>
                                <div class="pt-2">
                                    <img src="../../../assets/images/icon-sm/moovetv-sm.svg">
                                </div>
                            </div>
                            <p class="movie-title">30 Days in Atlanta...</p>
                        </div>

                    </carousel>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
    // var slide = require('../../assets/js/moove.js');
    import HeaderNav from '../../Navigation/HeaderNav.vue';
    import carousel from 'vue-owl-carousel'

    export default {
        components:{
            HeaderNav,
            carousel
        },
    }


</script>