<template>
<div>
        <div class="container-fluid bg-black nav-bar-dark fixed">
        <nav class="navbar navbar-expand-lg px-0">
            <router-link to="./" class="navbar-brand"><img class="logo" src="../assets/images/moovetv-logo1.svg" alt="logo"></router-link>
            <button class="navbar-toggler text-dark" data-toggle="collapse" data-target="#navbarSupportedContent">
                <span class="fa fa-bars text-white"></span>
            </button>

            <div class="collapse navbar-collapse bg-menu" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto menu orange menu-color">
                    <li class="nav-item ">
                        <router-link to="./" class="nav-link" ><img src="../assets/images/home-icon.svg" class="nav-icons"> Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="./" class="nav-link " ><img src="../assets/images/moovepay-icon.svg" class="nav-icons"> MooveMart</router-link>
                    </li>
                    <li class="nav-item ">
                        <router-link to="./" class="nav-link" ><img src="../assets/images/tv-icon.svg" class="nav-icons"> Live TV</router-link>
                    </li>
                    <li class="nav-item " v-on:click='logout'>
                        <router-link to="./" class="nav-link" > Logout</router-link>
                    </li>
                     <li class="nav-item ">
                        <div  class="nav-link" id="">
                            <div class="menu2" >
                                <input type="text" name="text" placeholder="Search" class="enter-search">
                                <button class="send-search">Search</button>
                            </div>
                            <!--<img src="../assets/images/search-icon.svg" class="nav-icons">-->
                        </div>

                    </li>
                    
                </ul>
            </div>
        </nav>
    </div>
    
     </div>
</template>

<script>
export default {
 name:'NavBarVendor',

 methods:{

    logout(){
        localStorage.setItem('vendor-jwt','');
        this.$router.push('/')
    }
}

};


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >

</style>
