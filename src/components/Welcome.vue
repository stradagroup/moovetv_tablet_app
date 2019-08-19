<template>
    <div id="welcome" >

        <loading :active.sync="pageLoading" :color="'#0774BB'"  :background-color="'black'"  :opacity="1":is-full-page="fullPage"></loading>
        <loading :active.sync="isLoading" :color="'#0774BB'"   :is-full-page="fullPage"></loading>

        <div class="row">
            <div class="col-9">
                <div style=" width: auto; height:530px !important; bottom:0px;" class="slider-bg">

                    <div class="row">

                        <div class="col-md-12">

                        </div>
                        <div class="col-md-12">




                            <div class="slider" style="margin-top:1.5%;">

                                <div class="row" style=" width:820px;" >

                                    <div class="col-md-2" style="padding-right:0px; width:auto;" >

                                        <div v-on:click="changeView('Stores')" id="rcorners1" style="text-align:center; border-top-right-radius: 0% !important;
    border-bottom-right-radius: 0% !important;border-bottom-left-radius: 0% !important;    cursor: pointer;" >
                                            <img src='images/moovem1.svg'  style="
    margin-top: -20%;
    margin-left: -10%;
"/>
                                        </div></div>

                                    <div class="col-md-2" style="margin-left: -18px; width:auto;"  >
                                        <div v-on:click="changeView('Deals')"  id="rcorners1" style="cursor: pointer;text-align:center; background:red;color:white; font-weight:bolder;border-top-left-radius: 0% !important;
    border-bottom-left-radius: 0% !important;border-bottom-right-radius: 0% !important;">
                                            <p style="margin-top:-5%"> <img src='../assets/images/percentage.svg' class="flash" style="width:31%; margin-left:-5%;margin-right:5%;color:white"/>DEALS</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6"  >

                                    </div>
                                    <div class="col-md-2" style="width:auto;"   >
                                        <div v-on:click='$eventHub.$emit("createstore")' id="rcorners1" class="create-store-corner" style="width:180px;cursor: pointer;text-align:center; background:#0774BB;color:white; font-weight:bolder;border-bottom-left-radius: 0% !important;
border-bottom-right-radius: 0% !important;">
                                            <p style="margin-top:-5%"><img src="images/create-icon.png" style="margin-right: 4%; cursor: pointer;"> Create Mart</p>
                                        </div>
                                    </div>

                                </div>




                                <carousel  :data="data" indicator-type="disc" :autoplay="true" :controls="false"></carousel>


                            </div>
                        </div></div>


                </div>
            </div>
            <div class="col-md-3">
                <div class="left-ad">


                    <transition name="fade">
                        <ads-component :limit="10" size="300x600" style="height: 525px;"
                                       type="static-ads"></ads-component>
                    </transition>

                </div>
            </div>

            <CategoryFilter :storesSet="storesSet" :categories="categories" :stores="stores" :deals="deals" :view="view"> </CategoryFilter>


            <div class="col-md-12">
                <div class="mid-ad">
                    <ads-component :limit="10" size="934x200" type="static-ads"></ads-component>
                </div>
            </div>
            <div class="col-md-12 new-group">
                <div class="new-section">
                    <div class="row">

                        <div class="col-md-12">
                            <div class="underline-short" style="margin-top:5%; margin-bottom:2%;">
                                New for you
                            </div>

                        </div>


                        <div class="col-3" style=" margin-bottom:5%;" v-bind:key="store.id" v-for="store in newStores" >
                            <StoreCard :banner="store.banner" :logo="store.logo" :url="store.url" :description="store.description" :name="store.name" />

                        </div>


                    </div>
                </div>
            </div>



        </div>

        <CreateStoreModal :categories="categories"></CreateStoreModal>

    </div>

</template>
<script>
    import axios from "axios";
    import Loading from "vue-loading-overlay";
    // Import stylesheet
    import "vue-loading-overlay/dist/vue-loading.css";
    import router from "../router";
    import CreateStoreModal from "./CreateStoreModal.vue";
    import CategoryFilter from "./CategoryFilter.vue";
    import AdsComponent from './AdsComponent.vue';
    import StoreCard from './StoreCard.vue';
    export default {
        components: { Loading, CreateStoreModal, CategoryFilter,AdsComponent,StoreCard },
        data() {
            return {
                left_ad: "images/5.png",
                left_ads: [5, 6, 7, 8],
                currentCategory: "All",
                storesSet: new Set(),
                categories: [],
                isSubmiting: false,
                isLoading: false,
                pageLoading: true,
                fullPage: true,
                view: "Stores",
                newStores:[],
                data: [
                    " <div class='add-slide'> <div class='contain'> <img src='images/blur-bg.jpg' width='1200rem' height='525rem' />   <div class='centered'> <div id='rcorners2' style='text-align:center'><span style='margin-top:5%'> <img src='images/moovem2.svg'  style='margin-top:50%'/></span>  </div>  </div>  <div class='create-right'><h3> MooveMart</h3><p> E-commerce</p><p>Your All in one store</p> <p>MooveMart is an affiliate platform for e-commerce business. The platform redirects to the merchant website for consumers to interact directly and planning.</p> <button  v-on:click='" +
                    '$eventHub.$emit("createstore")' +
                    "' class='create-btn '> <img src='images/create-icon.png' style='margin-right:4%;    cursor: pointer;' />Create Mart</button> </div>    </div></div>",
                    '<div class="example-slide"><div class="contain"> <img src="images/1.png" width="100%"  height="525rem"  /> <div class="centered"></div> </div></div>',
                    '<div class="example-slide"><div class="contain"> <img src="images/2.png" width="100%"  height="525rem"  /> <div class="centered"></div> </div></div>',
                    '<div class="example-slide"><div class="contain"> <img src="images/3.png" width="100%"  height="525rem"  /> <div class="centered"></div> </div></div>',
                    '<div class="example-slide"><div class="contain"> <img src="images/4.png" width="100%"  height="525rem"  /> <div class="centered"></div> </div></div>'
                ],

                stores: [],
                deals: []
            };
        },

        mounted() {
            /*  this.$api.GET('/api/categories', {})
            .then(response => {
              console.log(11);
               console.log(response);
            })*/

            this.getCategories();
            this.getStores();
            this.getNew();
            this.getDeals();

        },
        created() {
            setInterval(this.changeAd, 5000);
        },
        methods: {

            changeView(view) {
                if (view != this.view) {
                    this.isLoading = true;
                    setTimeout(() => {
                        this.isLoading = false;
                        this.currentCategory = "All";
                        this.view = view;
                        this.storesSet.clear();
                    }, 2000);
                }
            },
            getCategories() {

                this.$api.GET("/categories")
                    .then(response => {
                        console.log(response.data);
                        this.categories = response.data;
                    })
                    .catch(e => {
                        if (e.response.data.error) {
                            let error = e.response.data.error;
                            if (typeof error != "object") {
                                //this.$toastr.error(error, {});
                            }
                        }
                        console.log(e);
                    });
            },

            getStores() {
                this.$api.GET("/vendor/verified")
                    .then(response => {
                        console.log(response.data);
                        this.stores = response.data;
                        this.pageLoading = false;

                    })
                    .catch(e => {
                        if (e.response.data.error) {
                            let error = e.response.data.error;
                            if (typeof error != "object") {
                                //this.$toastr.error(error, {});
                            }
                        }
                        console.log(e.response);
                    });
            },
            getNew() {
                this.$api.GET("/vendor/latest")
                    .then(response => {
                        console.log(response.data);
                        this.newStores = response.data;

                    })
                    .catch(e => {
                        if (e.response.data.error) {
                            let error = e.response.data.error;
                            if (typeof error != "object") {
                                //this.$toastr.error(error, {});
                            }
                        }
                        console.log(e.response);
                    });
            },

            getDeals() {
                this.$api.GET("/deals")
                    .then(response => {
                        console.log(response.data);
                        this.deals = response.data;
                    })
                    .catch(e => {
                        if (e.response.data.error) {
                            let error = e.response.data.error;
                            if (typeof error != "object") {
                                //this.$toastr.error(error, {});
                            }
                        }
                        console.log(e.response);
                    });
            }
        }
    };
</script>


<style >
    @import "../assets/css/moove.css";
    @import "../assets/css/mart.css";
</style>
