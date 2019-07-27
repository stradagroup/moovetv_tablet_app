<template>
    <div class="livetv-bg">
        <div class="livetv-body">
            <!-- <Loader :loading-text="LoadingText" :showFull=false v-if="loading"/> -->

            <div class="row" style="background: #000000;">
                <div class="col-md-9 h-100">
                    <div class="select-one">
                        <div class="select-country">
                            <div class="dropdown">
                                <div style="color: white" v-if="loading"><i class="fa fa-spinner slow-spin"></i>
                                    Loading Channels
                                </div>
                                <!-- <button type="button" class="btn select-country-btn dropdown-toggle" data-toggle="dropdown">Select Country</button> -->
                                <select @change="listChannelByCountry()" class="btn select-country-btn dropdown-toggle"
                                        v-model="selectedCountry">
                                    <option disabled selected value="">Select Country</option>
                                    <option :value="country.country" v-bind:key="index"
                                            v-for="(country, index) in loadCountry">
                                        {{country.country}}
                                    </option>
                                </select>
                            </div>
                        </div>

                        <div class="select-station" v-if="channelData.length>0">
                            <div class="dropdown">
                                <!-- <button type="button" class="btn select-country-btn dropdown-toggle" data-toggle="dropdown">Select Station</button> -->
                                <select @change="selectChannel()" class="btn select-country-btn dropdown-toggle"
                                        v-model="selectedChannel">
                                    <option disabled selected value="">Select Station</option>
                                    <option :value="listStation.uuid" v-bind:key="index"
                                            v-for="(listStation, index) in channelData">
                                        {{listStation.title}}
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="livetv-player">

                        <master-player :src="src" class="livetv-img"/>
                        <!-- <img src="../../assets/images/news-bg.jpg" class="livetv-img"> -->
                    </div>
                    <div class="ads-area">
                        <div class="live-channels">
                            <div class="livetv-stations">
                                <carousel :per-page="3" :paginationEnabled="false" :autoplay="true" :loop="true" :autoplayTimeout="5000">
                                    <slide class="livetv-stations-img" v-for="(listImage, index) in popular" v-bind:key="index">
                                        <img :src="listImage.thumb_square" @click="selectImg(listImage.uuid)">
                                    </slide>
                                </carousel>
                                <carousel :autoplay="true" :nav="false">
                                    <template slot="prev"><span class="prev">prev</span></template>
                                    <template slot="next"><span class="next">next</span></template>
                                </carousel>
                            </div>

                        </div>
                    </div>


                </div>
                <div class="col-md-3">
                    <ads-component :limit="1" size="100%" style="height: 90%;width: 95%"
                                   type="static-ads"></ads-component>
                    <div class="ads-area" style="    position: absolute; bottom: 146px;">
                        <single-ads-component type="static-ads" size="970x90" :limit="3"
                                              style="height: 100%;width: 100%"></single-ads-component>
                    </div>
                </div>
            </div>
            <div class="col-md-7">

        </div>
        </div>
    </div>

</template>

<script>
    import HeaderNav from '../Navigation/HeaderNav.vue';
    import SingleAdsComponent from '../../components/SingleAdsComponent.vue';
    import AdsComponent from '../../components/AdsComponent.vue';
    import { Carousel, Slide } from 'vue-carousel';
    import {loadLiveTvChannel} from '../../services/LiveTv.service';
    import MasterPlayer from '../../components/MasterPlayer';
    import Loader from '../../components/Loader/Loader'
    import {library} from '@fortawesome/fontawesome-svg-core'
    import {faSpinner} from '@fortawesome/free-solid-svg-icons'

    library.add(faSpinner);

    export default {
        components: {
            HeaderNav,
            AdsComponent,
            SingleAdsComponent,
            Carousel,
            Loader,
            MasterPlayer,
            Slide
        },
        data() {
            return {
                popular: [],
                loading: true,
                LoadingText: "Loading",
                channelData: [],
                loadCountry: [],
                channelByCountry: [],
                selected: '',
                loadingChannel: false,
                country: '',
                selectedCountry: '',
                selectedPopular: '',
                selectedChannel: '',
                channel: {},
                src: '',
                show: false,
                videoOptions: {
                    autoplay: true,
                    aspectRatio: '4:3',
                    controls: true,
                    sources: [
                        {
                            src: "",
                            type: "video/mp4"
                        }
                    ]
                }

            }

        },
        computed: {},

        created() {
            //this.listChannel();
            this.fetchCountry();
            this.listChannelByPopular();
        },
        methods: {

            selectImg(uuid){
                this.selectedPopular = uuid;
                this.selectPopular()
            },

            selectPopular() {
                let find = this.popular.find(x => x.uuid === this.selectedPopular);
                this.src = find.url;
            },


            listChannel() {
                let that = this;
                loadLiveTvChannel.liveTvChannel().then((res) => {
                    // that.loading = false

                    that.channelData = res;
                    that.videoOptions.sources[0].src = res.url;
                    that.src = res[0].url;
                    console.log(that.src);
                }).catch((err) => console.log(err));

            },

            fetchCountry() {
                let that = this;

                this.loading = true,
                    loadLiveTvChannel.fetchAvailableCountry().then((response) => {
                        this.loading = false;
                        that.loadCountry = response;
                    }).catch((err) => {
                        console.log(err)
                    })


            },

            listChannelByCountry() {
                let that = this;
                this.loading = true;
                this.channelData = [];
                loadLiveTvChannel.fetchChannelByCountry(that.selectedCountry).then((response) => {
                    this.loading = false;
                    that.channelData = response;

                }).catch((err) => {
                    console.log(err)
                })
            },
            selectChannel() {
                let find = this.channelData.find(x => x.uuid === this.selectedChannel);
                this.src = find.url;
            },

            listChannelByPopular() {
                let that = this;
                this.loading = true;
                this.popular = [];
                loadLiveTvChannel.fetchChannelByPopular(that.selectedCountry).then((response) => {
                    this.loading = false;
                    console.log(response);
                    that.popular = response;

                }).catch((err) => {
                    console.log(err)
                })
            },


        }

    }
</script>

<style scoped>
    .owl-item .active {
        width: 165px !important;
    }

    .select-one {
        margin-top: 10px;
        justify-content: flex-start;
        margin-bottom: 10px;
    }

    .h-100 {
        height: 100vh !important;
    }

    .livetv-body {
        height: 100vh;
        overflow: hidden;

    }

    .livetv-player {
        height: auto;
        position: relative;
    }

    .ads-area {
        height: 25vh;
        width: 100%;
    }

    .select-country-btn {
        padding: 15px 10px;
    }

    .slow-spin {
        -webkit-animation: fa-spin 4s infinite linear;
        animation: fa-spin 4s infinite linear;
    }

    .select-station {
        margin-left: 10px;
    }
</style>
