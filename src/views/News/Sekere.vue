<template>
    <div>
        <Loader :loading-text="LoadingText" :showFull=false v-if="loading"/>
        <span v-for="data in content" :key="data.id">
             <NewsCard :data="data" @gotoNews="gotoNews(data)"></NewsCard>
        </span>

        <modal name="news-details" @before-open="beforeOpen" :height="800" :width="700">
            <div class="container" v-if="details" style="margin-top: 20px; overflow-y: scroll; height:790px;">
                <div class="row">
                    <div class="col-md-12">
                        <p>
                            <b>{{ details.title.rendered }}</b>
                        </p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <div class="e-card-sub-title">Date: {{ details.x_date }},    By: {{ details.x_author }}<br></div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <img :src="details.x_featured_media" width="100%" height="200px" >
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <p v-html="details.content.rendered">
                            {{ details.content.rendered }}
                        </p>
                    </div>
                </div>

            </div>
        </modal>

    </div>
</template>

<script>
    import Loader from "../../components/Loader/Loader";
    import NewsCard from "../../components/NewsCard";
    import {newsFeed} from "../../services/newsFeed.service";

    export default {
        name: "Sekere",
        components: {
            NewsCard,
            Loader
        },
        data: function () {
            return {
                loading: true,
                LoadingText: "Loading",
                show: false,
                content: [],
                details: '',
            };
        },

        async created() {

            let that = this;
            await newsFeed.fetchSekere().then((res) => {
                console.log(res);
                that.loading = false;
                that.content = res;

                // this.fetchContent('All');
            }).catch((err) => console.log(err));
        },
        methods: {
            beforeOpen (event) {
                this.details = event.params;
            },
            gotoNews(data){
                console.log(data)
                this.$modal.show('news-details', data);
            },
            hide () {
                this.$modal.hide('news-details');
            }
        },
    }
</script>

<style scoped>

</style>
