<template>
    <div class="pageContainer">


        <Loader loading-text="Loading" :showFull=true v-if="loading"/>
        <div class="row ">
            <div class="col-9 newsList">
                <img class="news-poster" :src="news.logo">
                <div class="list">
                    <div class="news" v-for="(data, index) in details" :key="index" @click="gotoNews(data)">
                        <div class="poster">
                            <img :src="data[news.fields.media]"/>
                        </div>

                        <div class="news-info">
                            <div class="title" v-html=" getExcerpt(data[news.fields.title].rendered,80)"></div>
                            <div class="excerpt" v-html="getExcerpt(data[news.fields.excerpt].rendered,180)">

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-3 ad-area">
                <single-ads-component :limit="5" size="100%"
                                      type="static-ads">

                </single-ads-component>
            </div>
            <modal :height="728" :width="980" name="details">
                <div class="news-container" v-if="current">
                    <div class="closer" @click="hide">
                        <i class="fa fa-times-circle"></i>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="title">{{current[news.fields.title].rendered}}</div>
                            <div class="author"> Date: {{current[news.fields.date]}}, By: {{ current[news.fields.author]
                                }}
                            </div>
                            <div class="featured">
                                <img :src="current[news.fields.media]"/>
                            </div>
                            <single-ads-component :limit="2" size="728x90"
                                                  type="static-ads">
                            </single-ads-component>
                            <div class="content" v-html="current[news.fields.content].rendered">
                                {{current[news.fields.content].rendered}}
                            </div>
                            <single-ads-component :limit="2" size="728x90"
                                                  type="static-ads">
                            </single-ads-component>
                        </div>

                    </div>

                </div>
            </modal>
        </div>


    </div>


</template>

<script>
    import SingleAdsComponent from '../../components/SingleAdsComponent';
    import {newsFeed} from "../../services/newsFeed.service";
    import Loader from "../../components/Loader/Loader";
    import VModal from 'vue-js-modal'
    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faTimesCircle


    } from '@fortawesome/free-solid-svg-icons'

    library.add(faTimesCircle);


    export default {
        name: "newsReader",
        props: ['news'],
        components: {
            SingleAdsComponent,
            VModal,
            Loader
        },
        data: function () {
            return {
                loading: true,
                details: null,
                current: null,
                sizex: 600,
                sizey: 600,

            };
        },
        methods: {
            getW() {
                return window.innerWidth + "px";
            },
            getH() {
                return window.innerHeight + "px";
            },
            getExcerpt(str, len) {
                return str.substring(0, len) + "..";
            },
            beforeOpen(event) {
                this.details = event.params;
            },
            gotoNews(data) {
                this.current = data;

                this.$modal.show('details');
                console.log(this.sizex);
                //this.$modal.show('news-details');
            },
            hide() {
                this.$modal.hide('details');
            }

        },
        mounted() {
            this.sizex = window.innerWidth;
            this.sizey = window.innerHeight + 5;
            // if (this.news.length > 0) {

            console.log(this.news);
            // }
        },
        async created() {
            await newsFeed.fetcher(this.news.url).then((res) => {
                console.log(res);
                this.loading = false;
                this.details = res;


            }).catch((err) => console.log(err));
        }
    }

</script>

<style scoped>
    .news {
        display: flex;
        margin: 10px;
        align-items: center;
        transition: all .8s ease-in-out;
    }

    .news-poster {
        position: absolute;
        height: 2em;
        right: 0;
        top: 2px;
    }

    .news-info {
        margin-left: 20px;
        flex-basis: 80%;
    }

    .news-info .excerpt {
        color: #eaeaea;
    }

    .news-info .title {
        font-size: 1.2em;
        color: white;
        font-weight: bold;
    }

    .news .poster {
        width: 130px;
        height: 130px;
        border-radius: 15px;
    }

    .poster img {
        object-fit: cover;
        width: 100%;
        border-radius: 15px;
        height: 100%;
    }

    .newsList {
        position: relative;
        height: 100%;
        padding: 1em 2.5em;
    }

    .newsList .list {
        margin-top: 10px;
        overflow-y: scroll;
        height: 95%;
    }

    ::-webkit-scrollbar {
        width: 0px; /* Remove scrollbar space */
        background: transparent; /* Optional: just make scrollbar invisible */
    }

    /* Optional: show position indicator in red */
    ::-webkit-scrollbar-thumb {
        background: #ffffff;
    }

    .row {
        background: black;
        height: calc(100% - 55px);
        overflow: hidden;
    }

    .news-container {
        padding: 1em 3em;
        height: 100%;
        background: white;

        color: black;
    }
    .news-container .row{
        background: white;
        overflow-y: scroll;
        height: 100%;
    }
    .news-container .title {
        font-size: 2em;
        font-weight: bold;
        line-height: .9em;
        text-transform: capitalize;
    }

    .news-container .featured {
        height: 350px;
        object-fit: cover;
        margin-top: 10px;
    }
    .news-container .content{
        font-size: 1.2em;
        margin-top: 10px;
    }

    .featured img {

        height: 100%;
        object-fit: contain;
    }

    .closer {
        position: absolute;
        right: -1px;
        color: black;
        top: -1px;
        font-size: 4em;
    }

    .v--modal-box {
        left: 0;
    }
</style>
