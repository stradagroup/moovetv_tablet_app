<template>
    <div class="chanels-bg">
        <HeaderNav/>

        <div class="channels-section">
            <div class="container-fluid">
                <div class="row m-t-3">
                    <div class="col-md-9">
                        <img src="../../../assets/images/redtv-sm.png" class="current-event-icon">
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
                                                <img src="../../../assets/images/radio/maxfm.png" class="current-view-img">
                                            </div>
                                            <div class="col-md-8">
                                                <div class="text-white">
                                                    <h5>MAX FM</h5>
                                                    <div class="duration">
                                                        <p>102.3 FM</p>

                                                    </div>
                                                    <div class="">
                                                        <p>Morning Gist</p>
                                                    </div>

                                                    <div class="text-description mt-3">
                                                        <div class="">
                                                            <h6>Brief</h6>
                                                        </div>
                                                        <p>Davido is an award winning Nigerian Afro - Pop musician, well known as OBO (Omo Baba Olowo)
                                                            who is famous for his debute singles like Dami Duro, Skelewu and so many more</p>

                                                    </div>
                                                    <div class="mt-4"></div>
                                                    <div class="watch-more">
                                                        <router-link to="./Radio/RadioPlayer"><button class="watch-now-btn2">Listen Now</button></router-link>
                                                        <button class="more-info-btn">More Channels</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="carousel-item">
                                        <div class="row">
                                            <div class="col-md-4">
                                                <img src="../../../assets/images/radio/maxfm.png" class="current-view-img">
                                            </div>
                                            <div class="col-md-8">
                                                <div class="text-white">
                                                    <h5>MAX FM</h5>
                                                    <div class="duration">
                                                        <p>102.3 FM</p>

                                                    </div>
                                                    <div class="">
                                                        <p>Morning Gist</p>
                                                    </div>

                                                    <div class="text-description mt-3">
                                                        <div class="">
                                                            <h6>Brief</h6>
                                                        </div>
                                                        <p>Davido is an award winning Nigerian Afro - Pop musician, well known as OBO (Omo Baba Olowo)
                                                            who is famous for his debute singles like Dami Duro, Skelewu and so many more</p>

                                                    </div>
                                                    <div class="mt-4"></div>
                                                    <div class="watch-more">
                                                        <router-link to="./Radio/RadioPlayer"><button class="watch-now-btn2">Listen Now</button></router-link>
                                                        <button class="more-info-btn">More Channels</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="carousel-item">
                                        <div class="row">
                                            <div class="col-md-4">
                                                <img src="../../../assets/images/radio/maxfm.png" class="current-view-img">
                                            </div>
                                            <div class="col-md-8">
                                                <div class="text-white">
                                                    <h5>MAX FM</h5>
                                                    <div class="duration">
                                                        <p>102.3 FM</p>

                                                    </div>
                                                    <div class="">
                                                        <p>Morning Gist</p>
                                                    </div>

                                                    <div class="text-description mt-3">
                                                        <div class="">
                                                            <h6>Brief</h6>
                                                        </div>
                                                        <p>Davido is an award winning Nigerian Afro - Pop musician, well known as OBO (Omo Baba Olowo)
                                                            who is famous for his debute singles like Dami Duro, Skelewu and so many more</p>

                                                    </div>
                                                    <div class="mt-4"></div>
                                                    <div class="watch-more">
                                                        <router-link to="./Radio/RadioPlayer"><button class="watch-now-btn2">Listen Now</button></router-link>
                                                        <button class="more-info-btn">More Channels</button>
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
                        <div class="all-movies"><router-link to="./Music"><span class="icon-xsm"><img src="../../../assets/images/icon-sm/music-white.svg"> </span> Music</router-link></div>
                        <div class="all-movies active"><router-link to="./Radio"><span class="icon-xsm"><img src="../../../assets/images/icon-sm/radio-white.svg"> </span> Radio</router-link></div>
                        <div class="all-movies"><router-link to="./Games"><span class="icon-xsm"><img src="../../../assets/images/icon-sm/games-white.svg"> </span> Games</router-link></div>
                    </div>
                    <div class="" id="movies">
                        <div class="recently-added pt-3">
                            <div class="recently-added-left ">
                                <p class="recently-added2" >Recently Added</p>

                            </div>

                            <div class="explore-all-right ">
                                <p class="explore-all ">Explore All</p>
                            </div>
                        </div>
                        <div class="radio-stations">
                            <div class="mr-2">
                                <img src="../../../assets/images/radio/soundcity.png" alt="" class="radio-pix">
                                <div class="small-icons">
                                    <div class="small-icon">
                                        <img src="../../../assets/images/icon-sm/radio-icon.svg">
                                    </div>
                                    <div class="pt-2">
                                        <img src="../../../assets/images/icon-sm/moovetv-sm.svg">
                                    </div>
                                </div>
                                <p class="movie-title">Chief Daddy</p>
                            </div>
                            <div class="mr-2">
                                <img src="../../../assets/images/radio/maxfm1023.png" alt="" class="radio-pix">
                                <div class="small-icons">
                                    <div class="small-icon">
                                        <img src="../../../assets/images/icon-sm/radio-icon.svg">
                                    </div>
                                    <div class="pt-2">
                                        <img src="../../../assets/images/icon-sm/moovetv-sm.svg">
                                    </div>
                                </div>
                                <p class="movie-title">Remember Me</p>
                            </div>
                            <div class="mr-2">
                                <img src="../../../assets/images/radio/hotfm.png" alt="" class="radio-pix">
                                <div class="small-icons">
                                    <div class="small-icon">
                                        <img src="../../../assets/images/icon-sm/radio-icon.svg">
                                    </div>
                                    <div class="pt-2">
                                        <img src="../../../assets/images/icon-sm/moovetv-sm.svg">
                                    </div>
                                </div>
                                <p class="movie-title">The Design...</p>
                            </div>
                            <div class="mr-2">
                                <img src="../../../assets/images/radio/wazobiafm.png" alt="" class="radio-pix">
                                <div class="small-icons">
                                    <div class="small-icon">
                                        <img src="../../../assets/images/icon-sm/radio-icon.svg">
                                    </div>
                                    <div class="pt-2">
                                        <img src="../../../assets/images/icon-sm/moovetv-sm.svg">
                                    </div>
                                </div>
                                <p class="movie-title">Last Flight...</p>
                            </div>
                            <div class="mr-2">
                                <img src="../../../assets/images/radio/coolfm.png" alt="" class="radio-pix">
                                <div class="small-icons">
                                    <div class="small-icon">
                                        <img src="../../../assets/images/icon-sm/radio-icon.svg">
                                    </div>
                                    <div class="pt-2">
                                        <img src="../../../assets/images/icon-sm/moovetv-sm.svg">
                                    </div>
                                </div>
                                <p class="movie-title">The Subtitle...</p>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="container-fluid pt-3">
                    <div class="recently-added ">
                        <p class="recently-added2">Trending</p>
                        <p class="recently-added3">Explore All</p>
                    </div>
                </div>

            </div>
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