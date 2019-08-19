<template>
    <div class="container-fluid bg-black nav-bar-dark fixed-top">
        <nav class="navbar navbar-expand-lg px-0">
            <router-link to="/home" class="navbar-brand"><img class="logo" src="../../assets/images/moovetv-logo1.svg" alt="logo"></router-link>
            <button class="navbar-toggler text-dark" data-toggle="collapse" data-target="#navbarSupportedContent">
                <span class="fa fa-bars text-white"></span>
            </button>

            <div class="collapse navbar-collapse bg-menu" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto menu orange menu-color">
                    <li class="nav-item ">
                        <router-link to="/home" class="nav-link" ><img src="../../assets/images/home-icon.svg" class="nav-icons"> Home</router-link>
                    </li>
                    <li class="nav-item ">
                        <router-link to="LiveTv" class="nav-link" ><img src="../../assets/images/livetv-icon.svg" class="nav-icons"> LiveTV</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link to="/mart" class="nav-link " ><img src="../../assets/images/moovepay-icon.svg" class="nav-icons"> MooveMart</router-link>
                    </li>
                    <!--<li class="nav-item ">-->
                        <!--<router-link to="/Livetv" class="nav-link" ><img src="../../assets/images/tv-icon.svg" class="nav-icons"> Live TV</router-link>-->
                    <!--</li>-->
                    <!--<li class="nav-item ">-->
                        <!--<router-link to="./Login" class="nav-link" >Login</router-link>-->
                    <!--</li>-->
                    <li class="nav-item show-search-icon">
                        <div  class="nav-link " id="show"></div>
                            <div class="menu2" style="display: none;">
                                <input type="text" name="text" placeholder="Search" class="enter-search">
                                <button class="send-search">Search</button>
                            </div>
                            <img src="../../assets/images/search-icon.svg" class="nav-icons">
                    </li>
                    <!--<li class="nav-item ">-->
                        <!--&lt;!&ndash; <a class="nav-link" href=""> &ndash;&gt;-->
                        <!--<div class="dropdown">-->
                            <!--<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown"></button>-->
                            <!--<div class="dropdown-menu">-->
                                <!--<router-link to="./Login" class="dropdown-item">Login</router-link>-->
                                <!--&lt;!&ndash;<a class="dropdown-item" href="#">Link</a>&ndash;&gt;-->
                                <!--&lt;!&ndash;<a class="dropdown-item" href="#">Link</a>&ndash;&gt;-->
                            <!--</div>-->
                        <!--</div>-->
                        <!--&lt;!&ndash; </a> &ndash;&gt;-->
                    <!--</li>-->
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>

    export default {
       mounted(){
           $(document).ready(function(){
               $('#show').click(function() {
                   $('.menu2').toggle("slide");
               });
           });
       } ,
    }
</script>
<style scoped>
    .logo {
        display: block;
        float: left;
        text-decoration: none;
        width: 120px;
    }
    .show-search-icon{
        display: flex;
    }
    .btn{
        line-height: 0.7;
    }
    button{
        margin-right: 1em;
    }
</style>
