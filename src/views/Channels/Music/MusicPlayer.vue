<template>
    <div class="chanels-bg">

        <div class="nav-back" @click="goBack">
            <i class="fa fa-arrow-circle-left"></i>
        </div>
        <div class="music-area">
            <music-player :uuid="uuid" :songs="songs"></music-player>
        </div>
        <div class="ads-area">
            <single-ads-component :slider="false" type="static-ads" size="970x90" :limit="3"
                                  style="height: 100%;width: 100%"></single-ads-component>
        </div>


    </div>
</template>

<script>
    // var slide = require('../../assets/js/moove.js');

    import MusicPlayer from '../../../components/MusicPlayer';
    import {loadContent} from '../../../services/loadContent.service'
    import {library} from '@fortawesome/fontawesome-svg-core';
    import SingleAdsComponent from '../../../components/SingleAdsComponent';
    import {faChevronCircleLeft, faArrowCircleLeft} from '@fortawesome/free-solid-svg-icons'

    library.add(faChevronCircleLeft, faArrowCircleLeft);
    export default {
        components: {
            MusicPlayer, SingleAdsComponent
        },
        data: function () {
            return {
                loading: true,
                songs: []

            };
        },
        props: ['uuid'],
        async created() {
            let that = this;


            await loadContent.fetchContentDetails({uuid: this.uuid}).then((res) => {
                console.log(res);
                let song = {
                    title: res.name,
                    poster: res.thumbnail,
                    url: res.url,
                    uuid: res.uuid
                };

                that.songs.push(song);
                if(res.sub_contents){
                    res.sub_contents.forEach((one)=>{
                        that.songs.push({
                            title: one.name,
                            poster: one.thumbnail,
                            url: one.url,
                            uuid: one.uuid
                        })
                    })
                }
                that.loading = false;
               // this.loadOthers(res.categoryUuid)

            }).catch((err) => console.log(err));
        },
        methods: {
            async loadOthers(catID) {
                console.log(catID);
                // await loadContent.fetchContent({uuid: catID, type: "Music"}).then((res) => {
                //
                //    console.log(res)
                //
                // }).catch((err) => console.log(err));
            }
        }
    }


</script>
<style scoped>
    .chanels-bg {
        position: relative;
        height: 100vh;
    }

    .music-area {
        position: absolute;
        top: 0;
        height: 85%;
        width: 100%;
        background: blue;
    }

    .ads-area {
        position: absolute;
        bottom: 0;
        height: 15%;
        width: 100%;

    }
</style>
