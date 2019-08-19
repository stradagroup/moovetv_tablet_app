<template>
    <div class="detail-card" v-on:click="details()">
        <div class="detail_container">
            <img class="detail-card__image" :src="trend.thumbnail">
            <div class="foot">
                <div class="small-icon">
                    <img :src="getIcon(trend.type)">
                </div>
                <div class="pt-2 ">
                    <img class="branded" src="../assets/images/icon-sm/moovetv-sm.svg">
                </div>

            </div>
        </div>
        <p class="detail-card__title">{{ truncate(trend.name) }}</p>

    </div>
</template>

<script>
    import carousel from 'vue-owl-carousel';
    import ContentDetails from '../components/ContentDetails';

    export default {
        name: "CarouselList",
        components: {
            carousel, ContentDetails
        },
        props: {
            trend: Object,
        },
        data: function () {
            return {
                show: false,
            };
        },
        methods: {
            truncate(str) {
                return str.length > 30 ? str.substring(0, 20) + ".." : str;
            },
            details() {
                this.$emit('contentDetails', this.trend);
            },
            getIcon(type) {
                if (type === 'Movies') {
                    return 'https://res.cloudinary.com/avatechng/image/upload/v1562166202/video-icon.svg';
                } else if (type === 'Audio Books') {
                    return 'https://res.cloudinary.com/avatechng/image/upload/v1562166535/Group_3_Copy_4.png';
                } else if (type === 'eBooks') {
                    return 'https://res.cloudinary.com/avatechng/image/upload/v1562166239/ebook-icon.svg';
                } else if (type === 'Music') {
                    return 'https://res.cloudinary.com/avatechng/image/upload/v1562166924/Combined_Shape.png';
                }  else if (type === 'Podcast') {
                    return 'https://res.cloudinary.com/avatechng/image/upload/v1562166924/Combined_Shape.png';
                }
            }
        }
    }
</script>

<style scoped>

    .detail-card {
        position: relative;
        height: 9.5em;
        width: 8.5em;
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        margin-bottom: 2em;
        margin-right: 20px;
    }

    .detail-card__image {
        height: 100%;
        width: 100%;
        border-radius: 10px;
        object-fit: cover;
    }

    .detail-card__title {
        margin-top: 5px;
        color: white;
        font-size: .6em;
        font-weight: normal;
        white-space: nowrap;

    }

    .small-icon {
        margin-right: 0;
    }
    .small-icon img{
        width: 1em!important;
    }

    .foot {
        width: 100%;
        display: flex;
        justify-content: space-between;
        position: absolute;
        bottom: 0px;
        border-bottom-left-radius: inherit;
        border-bottom-right-radius: inherit;
    }

    .branded {
        width: 2em;
    }

    .tmb {
        height: 200px;
    }

    .detail_container {
        height: 100%;
        position: relative;
    }
</style>
