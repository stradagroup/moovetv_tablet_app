<template>
    <div class="pageContainer">
        <Loader loading-text="Loading" :showFull=true v-if="loading"/>
        <div class="row ">
            <div class="col-9 newsList">
                <p v-html="data[fields.fields.content]">
                    {{ data[fields.fields.content] }}
                </p>

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
        name: "newsDetail",
        props: ['data','fields'],
        components: {
            SingleAdsComponent,
            Loader
        },
        data: function () {
            return {
                loading: false,
                details: null,

            };
        },
        methods: {
            getExcerpt(str,len) {
                return str.substring(0,len)+"..";
            },

        },
        mounted() {
            // if (this.news.length > 0) {

           // console.log(this.news);
            // }
        },

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
    .poster img{
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
    .newsList .list{
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
</style>
