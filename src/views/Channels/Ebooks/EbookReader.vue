<template>
    <div class="video-bg">
        <Loader :loading-text="LoadingText" :showFull=false v-if="loading"/>

        <div class="back-icon">
            <!--            <font-awesome-icon icon="arrow-left"></font-awesome-icon>-->
        </div>
        <div class="row" v-if="!loading">
            <div class="col-2">
                <ads-component :limit="1" :slider="false" size="120x600" style="height: 100%;width: 100%"
                               type="static-ads"></ads-component>
            </div>

            <div class="col-8">
                <reader-component :pdf-source="book" @loaded="readerLoaded"
                                  @pageChanged="loadNewAds"></reader-component>
            </div>

            <div class="col-2">
                <ads-component :limit="1" :slider="false" size="160x600" style="height: 100%;width: 100%"
                               type="static-ads"></ads-component>
            </div>
        </div>
        <modal :height="sizey" :width="sizex" @before-open="" name="pop-up">
            <ads-component :limit="1" @close="closeModal()" :slider="false" size="160x600" style="height: 100%;width: 100%"
                           type="static-ads"></ads-component>
        </modal>
    </div>
</template>

<script>
    import {loadContent} from '../../../services/loadContent.service'
    import Loader from "../../../components/Loader/Loader";
    import AdsComponent from "../../../components/AdsComponent";
    import ReaderComponent from "../../../components/ReaderComponent";

    export default {
        name: "EbookReader",
        components: {
            Loader, AdsComponent, ReaderComponent
        },
        props: ['uuid'],
        data: function () {
            return {
                loading: true,
                LoadingText: "Loading",
                book: '',
                sizex: 600,
                sizey: 600,
            }
        },
        methods: {
            loadBook: async function () {
                await loadContent.fetchContentDetails({uuid: this.uuid}).then((res) => {
                    this.loading = false;
                    this.result = res;
                    this.book = res.url;
                }).catch(() => {
                    this.$router.back();
                });
            },
            readerLoaded() {
                console.log("PDF Loaded Completely")
            },
            loadNewAds(pageData) {
                // TO-DO
                console.log(pageData);
            },
            popup(){
                this.$modal.show('pop-up');
            },
            closeModal() {
                this.$modal.hide('pop-up');
            },

        },
        created() {
            this.loadBook();
            setInterval(() => this.popup(), 300000);
            setTimeout(() => {
                this.popup()
            }, 5000);
        }
    }
</script>

<style scoped>

</style>
