<template>
    <div class="details-view">
        <div class="closer" v-on:click="close()">
            <i class="fa fa-times-circle"></i>
        </div>
        <div class="feat">

            <div class="overlay-blur"
                 v-bind:style="{ backgroundImage: 'url(' + item.thumbnail + ')' }"></div>
            <div class="movies-section text-white">
                <div class="fl-auto">
                    <img :src="item.thumbnail" class="movies-preview" alt="MooveTV">
                </div>
                <div class="fl-auto" style="margin-left: 30px;">
                    <h1>{{item.name}}</h1>
                    <p>{{truncate(item.description,50)}}</p>
                    <div class="watch-more">
                        <router-link :to="{name:getRoute,params:{uuid:item.uuid}}">
                            <button class="watch-now-btn2">
                                <font-awesome-icon icon="user"/>
                                {{itemContext}} Now
                            </button>
                        </router-link>

                    </div>
                </div>

            </div>
        </div>
        <div class="ad-area">
            <single-ads-component :single="true" type="static-ads" size="970x90" :limit="1"
                                  style="height: 100%;width: 100%"></single-ads-component>
        </div>


    </div>
</template>

<script>
    import SingleAdsComponent from '../components/SingleAdsComponent';
    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faTimesCircle
    } from '@fortawesome/free-solid-svg-icons'

    library.add(faTimesCircle );


    export default {
        components: {
            SingleAdsComponent,
        },
        name: "detailComponent",
        props: {
            item: Object,

        },
        data() {
            return {
                mapping: {
                    "skits": "moviePlayer",
                    "movies": "moviePlayer",
                    "music": "musicPlayer",
                    "ebooks": "ebookReader",
                    "podcast": "musicPlayer",
                }
            }
        },
        computed: {
            getRoute() {
                return this.mapping[this.item.type.toString().toLowerCase()];
            },
            itemContext() {
                let it = this.item.type.toString().toLowerCase();

                if (it === "movies" || it === "music" || it === "audio books" || it === "podcast" || it === "skits") {
                    return "Play";
                }
                else if (it === "ebooks") {
                    return "Read";
                }
                else {
                    return "Read";
                }

            }
        },
        created() {
            console.log(this.item.type);
            // JQuery('.details-view').css({position: 'absolute', top: this.center});
        },
        methods: {

            close() {
                this.$emit('close');
            }
        }
    }
</script>

<style scoped>
    .feat {
        height: 100%;
        display: flex;
        align-items: center;

    }

    .closer {
        position: absolute;
        right: 30px;
        top: 30px;
        color: white;
        text-align: center;

        font-size: 5em;
        font-weight: bold;

        z-index: 1000;
        border-radius: 50%;


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
        height: 100%;
        box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.8);

    }

    .movies-section {
        display: flex;
        padding: 30px;
        align-items: center;
    }

    .ad-area {
        position: absolute;
        bottom: 0;
        width: 100%;

    }

    .details-view {
        /*position: fixed;*/
        width: 100%;
        height: 100%;
        /*margin: auto;*/
        /*z-index: 100000;*/
        /*display: flex;*/
        /*justify-content: center;*/
        /*align-items: center;*/
        background: black;
    }

    .movies-preview {
        width: 15em;
        height:20em;
        border-radius: 10px;
        object-fit: cover;
    }

    .movies-section h1 {
        font-size: 3em;
    }

    .movies-section p {
        font-size: 1.2em;
        line-height: 1.5em;
    }

    .watch-now-btn2 {
        font-size: 1.2em;
        font-weight: bold;
    }
    .movies-section{
        /*padding-top: 15em;*/
margin-top: -8em;
        z-index: 4;

    }
    .movies-section h1{

        font-weight: 700;
    }

    .v--modal {
        background: black !important;
    }

    .details {
        /*width: 90%;*/
        /*height: 700px;*/
    }
</style>
