<template>
    <div class="news_feed">
        <Loader loading-text="Loading" :showFull=true v-if="loading"/>
        <news-card v-for="(data, index) in partners" :key="data.id" :data="data" :field="data.field" ></news-card>


        <!--<tabs  tabsClass="all-category">-->
        <!--<tab :selected="true" name="Punch" tabClass="header">-->
            <!--<div class="">-->
                <!--<Punch></Punch>-->
            <!--</div>-->
        <!--</tab>-->
        <!--<tab  name="SekereNews" tabClass="header">-->
            <!--<div class="">-->
                <!--<Sekere></Sekere>-->
            <!--</div>-->
        <!--</tab>-->

    <!--</tabs>-->
    </div>

</template>

<script>

    import {newsFeed} from "../../services/newsFeed.service";
    import NewsCard from "../../components/NewsCard";
    import Loader from "../../components/Loader/Loader";

    export default {
        name: "ListSource",
        components:{newsFeed,NewsCard,Loader},
        data(){
            return {
                loading: true,
                LoadingText: "Loading",
                show: false,
                content: [],
                partners: [],
            };
        },
        async created() {

            let that = this;
            await newsFeed.fetchNews().then((res) => {
                console.log(res);
                 that.loading = false;
                that.partners = res;

                // this.fetchContent('All');
            }).catch((err) => console.log(err));
        },

    }
</script>

<style scoped>
    .news_feed {
        margin-top: 54px;
        padding: 10px 15px;
        height: 100%;
        display: flex;

        min-height: 800px;
    }
    .header {
        text-decoration: none;
        color: #000000;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
    .all-category{ background: #000000}

</style>
