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
                                                        <router-link to="/Music/MusicPlayer"><button class="watch-now-btn2">Play Now</button></router-link>
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
                                                        <router-link to="/Music/MusicPlayer"><button class="watch-now-btn2">Play Now</button></router-link>
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
                                                        <router-link to="/Music/MusicPlayer"><button class="watch-now-btn2">Play Now</button></router-link>
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
                        <div class="all-movies "><router-link to="/Channels ">All</router-link></div>
                        <!-- onclick="toggle_visibility('movies');" -->
                        <div class="all-movies" ><router-link to="/Movies"> <span class="icon-xsm"><img src="../../../assets/images/icon-sm/movies-sm.svg"> </span> Movies</router-link></div>
                        <div class="all-movies"><router-link to="/Ebooks"><span class="icon-xsm"><img src="../../../assets/images/icon-sm/ebook-white.svg"> </span> Ebooks</router-link></div>
                        <div class="all-movies active"><router-link to="/Music"><span class="icon-xsm"><img src="../../../assets/images/icon-sm/music-white.svg"> </span> Music</router-link></div>
                        <div class="all-movies"><router-link to="/Radio"><span class="icon-xsm"><img src="../../../assets/images/icon-sm/radio-white.svg"> </span> Radio</router-link></div>
                        <div class="all-movies"><router-link to="/Games"><span class="icon-xsm"><img src="../../../assets/images/icon-sm/games-white.svg"> </span> Games</router-link></div>
                    </div>
                    <div class="" id="movies">
                        <div class="recently-added pt-3">
                            <div class="recently-added-left ">
                                <p class="recently-added2" >Recently Added</p>
                                <div class="recently-added-subtitle">
                                    <router-link to="/Music"><p class="recently-added-sub">Artists</p></router-link>
                                    <router-link to="/Music"><p class="recently-added-sub">Album</p></router-link>
                                    <router-link to="/Music/Genres"><p class="recently-added-sub active">Genres</p></router-link>
                                    <router-link to="/Music/Songs"><p class="recently-added-sub">Songs</p></router-link>
                                    <router-link to="/Music"><p class="recently-added-sub">Favourites</p></router-link>
                                </div>
                            </div>

                            <div class="explore-all-right ">
                                <p class="explore-all ">Explore All</p>
                            </div>
                        </div>
                        <div class="radio-stations">
                            <div class="mr-2">
                                <img src="../../../assets/images/music/afropop.svg" alt="" class="radio-pix">

                            </div>
                            <div class="mr-2">
                                <img src="../../../assets/images/music/raggea.svg" alt="" class="radio-pix">

                            </div>
                            <div class="mr-2">
                                <img src="../../../assets/images/music/rnb.svg" alt="" class="radio-pix">

                            </div>
                            <div class="mr-2">
                                <img src="../../../assets/images/music/hiphop.svg" alt="" class="radio-pix">

                            </div>

                        </div>

                        <div class="radio-stations mt-2">
                            <div class="mr-2">
                                <img src="../../../assets/images/music/fuji.svg" alt="" class="radio-pix">

                            </div>
                            <div class="mr-2">
                                <img src="../../../assets/images/music/rock.svg" alt="" class="radio-pix">

                            </div>
                            <div class="mr-2">
                                <img src="../../../assets/images/music/gospel.svg" alt="" class="radio-pix">

                            </div>
                            <div class="mr-2">
                                <img src="../../../assets/images/music/jazz.svg" alt="" class="radio-pix">

                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </div>

    </div>
</template>

<script>
    import HeaderNav from '../../Navigation/HeaderNav.vue';

    export default {
        components:{
            HeaderNav
        },
    }


</script>