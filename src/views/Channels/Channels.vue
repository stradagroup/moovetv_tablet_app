<template>


    <div class="channels-bg">

        <div class="top--bar">
            <div class="row">
                <div class="col-9">
                    <Loader :loading-text="LoadingText" :showFull=false v-if="loading"/>
                    <div class="current-channel-icon">
                        <div></div>
                        <div class="current-channel-bg-color">
                            <img :src=this.contentTypes.image class="current-channel" v-if="!loading"/>
                        </div>
                    </div>
                    <carousel :autoplay="true" :autoplayTimeout="5000"
                              :loop="true"
                              :paginationEnabled="false"
                              :per-page="1">
                        <slide :key="index" class="feat" v-for="(slide, index) in contentTypes.featured">


                            <div class="overlay-blur"
                                 v-bind:style="{ backgroundImage: 'url(' + slide.thumbnail + ')' }"></div>
                            <div class="movies-section text-white">
                                <div class="fl-auto">
                                    <img :src="slide.thumbnail" alt="MooveTV" class="movies-preview">
                                </div>
                                <div class="fl-auto" style="margin-left: 30px;">
                                    <h1>{{slide.name}}</h1>
                                    <p class="line-clamp">{{truncate(slide.description)}}</p>
                                    <div class="watch-more">
                                        <router-link :to="{name:getRoute(slide),params:{uuid:slide.uuid}}">
                                            <button class="watch-now-btn2">{{itemContext(slide)}} Now</button>
                                        </router-link>

                                    </div>
                                </div>

                            </div>


                        </slide>
                    </carousel>


                </div>
                <div class="col-3 oh">
                    <single-ads-component :limit="5" size="100%" style="height: 90%;width: 95%"
                                   type="static-ads"></single-ads-component>
                </div>
            </div>


        </div>
        <div class="bottom--bar black-bg">

            <div class="black-bg" v-if="contentLoaded">

                <tabs @fetch-content="fetchContent" tabsClass="all-category" v-if="!contentTypes.default">

                    <tab :selected="true" image="/img/movies-sm.d826f4fb.svg" name="All" tabClass="all-movies">
                        <div class="" id="channels">

                            <!--<Loader :loading-text="LoadingText" :showFull=false v-if="trending.length === 0"/>-->

                            <div class="content-list-container">
                                <ContentList :key="trend.uuid" :ref="trend.uuid" :trend="trend"
                                             @contentDetails="contentDetails" v-for="trend in trending"></ContentList>

                            </div>
                            <!--<content-details v-if="show" :detail="detail"></content-details>-->
                        </div>
                    </tab>


                    <tab :image="getIcon(data.content_type_name)" :key="data.uuid" :name="data.content_type_name"
                         :paginationEnabled="false"
                         :uuid="data.uuid" tabClass="all-movies"
                         v-for="data in contentTypes.data">
                        <!--<Loader :loading-text="LoadingText" :showFull=false v-if="trending.length === 0"/>-->
                        <div class="content-list-container">
                            <ContentList :key="trend.uuid" :trend="trend"
                                         @contentDetails="contentDetails"
                                         v-for="trend in getMyData(data.content_type_name)"></ContentList>

                        </div>


                    </tab>
                </tabs>
                <div class="content-list-container" v-if="contentTypes.default">

                    <ContentList :key="trend.uuid" :trend="trend"
                                 @contentDetails="contentDetails"
                                 v-for="trend in trending"></ContentList>

                </div>
            </div>
        </div>
        <modal :height="sizey" :width="sizex" @before-open="getSize" name="details">
            <detail-component :item="item" @close="closeModal()"></detail-component>
        </modal>
    </div>


</template>

<script>
    // var slide = require('../../assets/js/moove.js');
    import {loadContent} from '../../services/loadContent.service'
    import Loader from "../../components/Loader/Loader";
    import {swiper, swiperSlide} from 'vue-awesome-swiper';
    import {Carousel} from 'vue-carousel';
    import Tabs from "../../components/Tab/Tabs";
    import Tab from "../../components/Tab/Tab";
    import ContentList from "../../components/CarouselList";
    import ContentDetails from '../../components/ContentDetails';
    import detailComponent from '../../components/detailComponent';
    import AdsComponent from '../../components/AdsComponent';
    import SingleAdsComponent from '../../components/SingleAdsComponent';
    import {library} from '@fortawesome/fontawesome-svg-core'
    import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
    import VModal from 'vue-js-modal'
    // import {Tabs, Tab} from 'vue-tabs-component';
    library.add(faArrowLeft);
    export default {
        components: {
            Loader,
            swiper,
            swiperSlide,
            SingleAdsComponent,
            Tab,
            Tabs,
            VModal,
            Carousel,
            ContentList,
            detailComponent,
            ContentDetails
        },
        props: ['channelID'],
        mounted() {
            console.log(this.channelID)
        },
        data: function () {
            return {
                loading: true,
                LoadingText: "Loading",
                contentTypes: {},
                allContents: [],
                contentData: [],
                trending: [],
                selected: 'all',
                center: 0,
                item: {},
                sizex: 600,
                sizey: 600,
                show: false,
                contentLoaded: false,
                mapping: {
                    "movies": "moviePlayer",
                    "music": "musicPlayer",
                    "ebooks": "ebookReader",
                    "skits": "moviePlayer",
                }
            };
        },
        computed: {},
        async created() {
            // alert('oo');
            this.sizex = window.innerWidth;
            this.sizey = window.innerHeight + 5;
            let that = this;
            await loadContent.fetchDetails({uuid: this.channelID}).then((res) => {
                console.log(res);
                that.loading = false;
                that.contentTypes = res;

                that.contentTypes.data.forEach(async (content) => {
                    await this.fetcher(that.contentTypes.uuid, content.uuid, (res) => {
                        //console.log(res);
                        that.contentData[`${content.content_type_name}`] = res;
                        that.contentLoaded = true;
                        //console.log(that.contentData[`${content.content_type_name}`])
                    });
                    // console.log(this.contentData);
                    if (that.contentTypes.default) {
                        //just a single element
                        this.trending = that.contentData[`${content.content_type_name}`]
                        // console.table(that.contentData);
                    }
                });


                if (!that.contentTypes.default) {
                    this.fetcher(that.contentTypes.uuid, 'all', (res) => {
                        //console.log(res);
                        that.contentData['all'] = res;
                        this.trending = this.contentData['all']
                    });
                }


                // this.fetchContent('All');
            }).catch((err) => console.log(err));


        },
        methods: {
            getRoute(item) {
               // debugger;
                return this.mapping[item.type.toString().toLowerCase()];
            },
            itemContext(item) {
                let it = item.type.toString().toLowerCase();

                if (it === "movies" || it === "music" || it === "audio books" || it === "skits") {
                    return "Play";
                } else if (it === "ebooks") {
                    return "Read";
                } else {
                    return "Read";
                }

            },
            truncate(str) {
                if (!str) return;
                return str.length > 120 ? str.substring(0, 120) + "...." : str;
            },
            getIcon(type) {
                console.log(type);
                if (type === 'Movies') {
                    return 'https://res.cloudinary.com/avatechng/image/upload/v1562166202/video-icon.svg';
                } else if (type === 'Audio Books') {
                    return 'https://res.cloudinary.com/avatechng/image/upload/v1562166535/Group_3_Copy_4.png';
                } else if (type === 'eBooks') {
                    return 'https://res.cloudinary.com/avatechng/image/upload/v1562166239/ebook-icon.svg';
                } else if (type === 'Music') {
                    return 'https://res.cloudinary.com/avatechng/image/upload/v1562166924/Combined_Shape.png';
                }
            },

            getSize() {

            },
            getMyData(nn) {
                console.log(nn);
                //console.log(this.contentTypes);
                return this.contentData[`${nn}`]

            },
            closeModal() {
                this.$modal.hide('details');
            },
            contentDetails(data) {

                // let rf = this.$refs[`${data.uuid}`][0].$el;
                // let detail = this.$refs;
                this.item = data;
                this.$modal.show('details');


            },

            async fetcher(uuid, type, cb) {
                let payload;
                if (type === 'all') {
                    payload = {uuid: uuid, type: 'all'}
                } else {
                    payload = {uuid: uuid, type: type};
                }
                await loadContent.fetchContent(payload).then((res) => {

                    return cb(res);

                }).catch((err) => console.log(err));
            },
            isAvailable(obj, XY) {
                let keys = Object.keys(obj);
                return XY.filter(function (e) {
                    return keys.every(function (k) {
                        return e.available && e.hasOwnProperty(k) && obj[k] == e[k]
                    })
                })
            },
            async fetchContent({name}) {

                // this.trending= this.contentData[`${name}`]
                console.log(name);
                if (!name) {
                    return this.contentData['all'];
                }
                return this.contentData[`${name}`]


            }
        },
    }

</script>
<style scoped>
    .channels-bg {
        margin-top: 50px;
        overflow: hidden;
        height: 100vh;
    }

    .top--bar {
        width: 100%;
        height: 48vh;
        overflow: hidden;
        z-index: 10;
        margin-top:4em;
        position: fixed;
        top: 0;
        background: black;
    }

    .all-movies {
        transition: .5s ease-in-out all;
    }

    .top--bar .row {
        height: 100%;
        position: relative;
    }

    .all-movies a {
        text-decoration: none;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    /*.VueCarousel{*/
    /*height: 100%;*/
    /*}*/
    .movies-overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        background: black;

    }

    .movies-preview {
        height: 250px;
        width: 220px;
        margin-left: 10px;
        object-fit: cover;
        border-radius: 5px;
    }

    .movies-section {
        height: 100%;
        position: relative;
        width: 95%;
        margin-top: -2em;
        align-items: center;
        justify-content: flex-start;
        display: flex;
        flex-direction: row;
        padding: 15px;
        z-index: 1;
    }

    .movies-section h1 {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 1.6em;
    }

    .fl-6 {
        display: flex;
        flex-basis: 60%;
    }

    .fl-4 {
        display: flex;
        flex-basis: 40%;
    }

    /*.VueCarousel-inner, .VueCarousel-wrapper{*/
    /*height: 100%!important;*/
    /*}*/
    /*.VueCarousel-slide{*/
    /*position: relative;*/
    /*height: auto;*/
    /*}*/
    .feat {
        align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        width: 95%;
        margin: auto;
        height: 400px;
        position: relative;

    }

    .fl-auto {
        /*flex: 1;flex-grow: ;*/
    }

    .black-bg {
        background: black;
        height: 100%;
    }

    .overlay-blur {
        filter: blur(5px);
        -webkit-filter: blur(5px);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        filter: blur(5px);
        -webkit-filter: blur(5px);
        background-color: black;
        position: absolute;
        width: 100%;
        height: 375px;
        box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.8);

    }

    .bg-image {
        /* The image used */

        /* Add the blur effect */

        /* Full height */
        height: 100%;

        /* Center and scale the image nicely */
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .container-fluid {
        background: black;
    }

    .content-list-container {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .current-channel {
        max-width: 80px;
        max-height: 30px;

    }

    .current-channel-icon {
        display: flex;
        justify-content: space-between;
    }

    .current-channel-bg-color {
        width: 90px;
        background: #ffffff;
        position: absolute;
        z-index: 10;
        right: 8px;
        top: 1px;
        border-radius: 5px;
        text-align: center;
        padding: 5px;
    }

    #modal-container.four {
        z-index: 0;
        transform: scale(1);
    }

    #modal-container.four .modal-background {
        background: rgba(0, 0, 0, 0.7);
    }

    #modal-container.four .modal-background .modal {
        animation: blowUpModal 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
    }

    #modal-container.four + .content {
        z-index: 1;
        animation: blowUpContent 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
    }

    #modal-container.four.out .modal-background .modal {
        animation: blowUpModalTwo 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
    }

    #modal-container.four.out + .content {
        animation: blowUpContentTwo 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
    }

    .bottom--bar {
        z-index: 5;
        position: fixed;
        bottom: 0;
        height: 40vh;
        width: 100%;

    }

    .bottom--bar .tab-details {
        overflow-y: scroll;
    }
</style>
