<template>
    <div class="chanels-bg">
        <HeaderNav/>

        <div class="channels-section">
            <div class="container-fluid">
                <div class="row m-t-3">
                    <div class="col-md-9">
                        <img src="../../../assets/images/icon-sm/ebooks-icon.png" class="current-event-icon">
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
                                                <img src="../../../assets/images/ebooks/awaken-the-giant.png" class="current-view-img">
                                            </div>
                                            <div class="col-md-8">
                                                <div class="text-white">
                                                    <h5>AWAKEN THE GIANT</h5>
                                                    <div class="duration">
                                                        <p>2018</p>
                                                        <p>1h 38min</p>
                                                    </div>

                                                    <div class="text-description mt-3">
                                                        <p>When a wealthy patriarch unexpectedly, drop dead, his money-crazed family, friends and staff scramble for his billionare fortune.</p>
                                                        <div class="mt-3">
                                                            <p><b>Staring:</b> Taiwo Obileye, Joke Silva, Falz</p>
                                                            <p><b>Genres:</b> Africa movies, Nollywood movies, Comedies</p>
                                                        </div>
                                                    </div>
                                                    <div class="mt-4"></div>
                                                    <div class="watch-more">
                                                        <router-link to="./Music/MusicPlayer"><button class="watch-now-btn2">Read Now</button></router-link>
                                                        <button class="more-info-btn">More Ebooks</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="carousel-item">
                                        <div class="row">
                                            <div class="col-md-4">
                                                <img src="../../../assets/images/ebooks/awaken-the-giant.png" class="current-view-img">
                                            </div>
                                            <div class="col-md-8">
                                                <div class="text-white">
                                                    <h5>AWAKEN THE GIANT</h5>
                                                    <div class="duration">
                                                        <p>2018</p>
                                                        <p>1h 38min</p>
                                                    </div>

                                                    <div class="text-description mt-3">
                                                        <p>When a wealthy patriarch unexpectedly, drop dead, his money-crazed family, friends and staff scramble for his billionare fortune.</p>
                                                        <div class="mt-3">
                                                            <p><b>Staring:</b> Taiwo Obileye, Joke Silva, Falz</p>
                                                            <p><b>Genres:</b> Africa movies, Nollywood movies, Comedies</p>
                                                        </div>
                                                    </div>
                                                    <div class="mt-4"></div>
                                                    <div class="watch-more">
                                                        <router-link to="./Music/MusicPlayer"><button class="watch-now-btn2">Read Now</button></router-link>
                                                        <button class="more-info-btn">More Ebooks</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="carousel-item">
                                        <div class="row">
                                            <div class="col-md-4">
                                                <img src="../../../assets/images/ebooks/awaken-the-giant.png" class="current-view-img">
                                            </div>
                                            <div class="col-md-8">
                                                <div class="text-white">
                                                    <h5>AWAKEN THE GIANT</h5>
                                                    <div class="duration">
                                                        <p>2018</p>
                                                        <p>1h 38min</p>
                                                    </div>

                                                    <div class="text-description mt-3">
                                                        <p>When a wealthy patriarch unexpectedly, drop dead, his money-crazed family, friends and staff scramble for his billionare fortune.</p>
                                                        <div class="mt-3">
                                                            <p><b>Staring:</b> Taiwo Obileye, Joke Silva, Falz</p>
                                                            <p><b>Genres:</b> Africa movies, Nollywood movies, Comedies</p>
                                                        </div>
                                                    </div>
                                                    <div class="mt-4"></div>
                                                    <div class="watch-more">
                                                        <router-link to="./Music/MusicPlayer"><button class="watch-now-btn2">Read Now</button></router-link>
                                                        <button class="more-info-btn">More Ebooks</button>
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
                        <div class="all-movies active"><router-link to="./Ebooks"><span class="icon-xsm"><img src="../../../assets/images/icon-sm/ebook-white.svg"> </span> Ebooks</router-link></div>
                        <div class="all-movies"><router-link to="./Music"><span class="icon-xsm"><img src="../../../assets/images/icon-sm/music-white.svg"> </span> Music</router-link></div>
                        <div class="all-movies"><router-link to="./Radio"><span class="icon-xsm"><img src="../../../assets/images/icon-sm/radio-white.svg"> </span> Radio</router-link></div>
                        <div class="all-movies"><router-link to="./Games"><span class="icon-xsm"><img src="../../../assets/images/icon-sm/games-white.svg"> </span> Games</router-link></div>
                    </div>
                    <div class="" id="movies">
                        <div class="recently-added pt-3">
                            <div class="recently-added-left ">
                                <p class="recently-added2" >Recently Added</p>
                                <div class="recently-added-subtitle">
                                    <p class="recently-added-sub">Authors</p>
                                    <p class="recently-added-sub">Genres</p>
                                    <p class="recently-added-sub">Favourite</p>
                                </div>
                            </div>

                            <div class="explore-all-right ">
                                <p class="explore-all ">Explore All</p>
                            </div>
                        </div>
                        <carousel>
                            <div class="mr-2">
                                <img src="../../../assets/images/ebooks/uncover-your-potential.png" alt="">
                                <div class="small-icons">
                                    <div class="small-icon">
                                        <img src="../../../assets/images/icon-sm/ebook-icon.svg">
                                    </div>
                                    <div class="pt-2">
                                        <img src="../../../assets/images/icon-sm/moovetv-sm.svg">
                                    </div>
                                </div>
                                <p class="movie-title">Chief Daddy</p>
                            </div>
                            <div class="mr-2">
                                <img src="../../../assets/images/ebooks/releasing-your-potential.png" alt="">
                                <div class="small-icons">
                                    <div class="small-icon">
                                        <img src="../../../assets/images/icon-sm/ebook-icon.svg">
                                    </div>
                                    <div class="pt-2">
                                        <img src="../../../assets/images/icon-sm/moovetv-sm.svg">
                                    </div>
                                </div>
                                <p class="movie-title">Remember Me</p>
                            </div>
                            <div class="mr-2">
                                <img src="../../../assets/images/ebooks/releasing-your-potential.png" alt="">
                                <div class="small-icons">
                                    <div class="small-icon">
                                        <img src="../../../assets/images/icon-sm/ebook-icon.svg">
                                    </div>
                                    <div class="pt-2">
                                        <img src="../../../assets/images/icon-sm/moovetv-sm.svg">
                                    </div>
                                </div>
                                <p class="movie-title">The Inlaws...</p>
                            </div>
                            <div class="mr-2">
                                <img src="../../../assets/images/ebooks/releasing-your-potential.png" alt="">
                                <div class="small-icons">
                                    <div class="small-icon">
                                        <img src="../../../assets/images/icon-sm/ebook-icon.svg">
                                    </div>
                                    <div class="pt-2">
                                        <img src="../../../assets/images/icon-sm/moovetv-sm.svg">
                                    </div>
                                </div>
                                <p class="movie-title">Last Flight...</p>
                            </div>
                            <div class="mr-2">
                                <img src="../../../assets/images/ebooks/releasing-your-potential.png" alt="">
                                <div class="small-icons">
                                    <div class="small-icon">
                                        <img src="../../../assets/images/icon-sm/ebook-icon.svg">
                                    </div>
                                    <div class="pt-2">
                                        <img src="../../../assets/images/icon-sm/moovetv-sm.svg">
                                    </div>
                                </div>
                                <p class="movie-title">The Subtitle...</p>
                            </div>

                        </carousel>
                    </div>
                </div>

                <div class="container-fluid pt-3">
                    <div class="recently-added ">
                        <p class="recently-added2">Trending</p>
                        <p class="recently-added3">Explore All</p>
                    </div>
                    <carousel>
                    <div class="mr-2">
                        <img src="../../../assets/images/ebooks/uncover-your-potential.png" alt="">
                        <div class="small-icons">
                            <div class="small-icon">
                                <img src="../../../assets/images/icon-sm/ebook-icon.svg">
                            </div>
                            <div class="pt-2">
                                <img src="../../../assets/images/icon-sm/moovetv-sm.svg">
                            </div>
                        </div>
                        <p class="movie-title">Chief Daddy</p>
                    </div>
                    <div class="mr-2">
                        <img src="../../../assets/images/ebooks/releasing-your-potential.png" alt="">
                        <div class="small-icons">
                            <div class="small-icon">
                                <img src="../../../assets/images/icon-sm/ebook-icon.svg">
                            </div>
                            <div class="pt-2">
                                <img src="../../../assets/images/icon-sm/moovetv-sm.svg">
                            </div>
                        </div>
                        <p class="movie-title">Remember Me</p>
                    </div>
                    <div class="mr-2">
                        <img src="../../../assets/images/ebooks/releasing-your-potential.png" alt="">
                        <div class="small-icons">
                            <div class="small-icon">
                                <img src="../../../assets/images/icon-sm/ebook-icon.svg">
                            </div>
                            <div class="pt-2">
                                <img src="../../../assets/images/icon-sm/moovetv-sm.svg">
                            </div>
                        </div>
                        <p class="movie-title">The Inlaws...</p>
                    </div>
                    <div class="mr-2">
                        <img src="../../../assets/images/ebooks/releasing-your-potential.png" alt="">
                        <div class="small-icons">
                            <div class="small-icon">
                                <img src="../../../assets/images/icon-sm/ebook-icon.svg">
                            </div>
                            <div class="pt-2">
                                <img src="../../../assets/images/icon-sm/moovetv-sm.svg">
                            </div>
                        </div>
                        <p class="movie-title">Last Flight...</p>
                    </div>
                    <div class="mr-2">
                        <img src="../../../assets/images/ebooks/releasing-your-potential.png" alt="">
                        <div class="small-icons">
                            <div class="small-icon">
                                <img src="../../../assets/images/icon-sm/ebook-icon.svg">
                            </div>
                            <div class="pt-2">
                                <img src="../../../assets/images/icon-sm/moovetv-sm.svg">
                            </div>
                        </div>
                        <p class="movie-title">The Subtitle...</p>
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