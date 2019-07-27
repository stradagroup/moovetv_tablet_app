<template>
    <div class="pageContainer">
        <Loader loading-text="Loading" :showFull=true v-if="loading"/>
        <div class="row ">
            <div class="col-9 newsList">
                <img class="news-poster" :src="news.logo">
                <div class="news" v-for="(data, index) in details" :key="index">
                    <div class="poster">
                        <img  :src="data[news.fields.media]"/>
                    </div>

                    <div class="news-info">
                        <div class="title" v-html=" getExcerpt(data[news.fields.title].rendered,30)"></div>
                        <div class="excerpt" v-html="getExcerpt(data[news.fields.excerpt].rendered,180)">

                        </div>
                    </div>
                </div>
            </div>
            <div class="col-3 ad-area">
                <single-ads-component :limit="5" size="100%"
                                      type="static-ads">

                </single-ads-component>
            </div>
        </div>

    </div>


</template>

<script>
    import SingleAdsComponent from '../../components/SingleAdsComponent';
    import {newsFeed} from "../../services/newsFeed.service";
    import Loader from "../../components/Loader/Loader";

    export default {
        name: "newsReader",
        props: ['news'],
        components: {
            SingleAdsComponent,
            Loader
        },
        data: function () {
            return {
                loading: true,
                details: [],

            };
        },
        methods: {
            getExcerpt(str,len) {
                return str.substring(len)+"..";
            }
        },
        mounted() {
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
        transition: all .8s ease-in-out;
    }

    .news-poster {
        position: absolute;
        width: 4em;
        right: 0;
        top: 2px;
    }

    .news-info {
        margin-left: 10px;
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
        border-radius: 20px;


    }
    .poster img{
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    .newsList {
        overflow-y: scroll;
        height: 100%;
        padding: 1em 2.5em;
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
</style>
