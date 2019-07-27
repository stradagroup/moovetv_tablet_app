<template>
    <div class="menu2">

        <div class="show-dropdown" >
            <div class="row">
                <div class="col-md-3">
                    <img :src="detail.thumbnail" class="current-view-img2">
                </div>
                <div class="col-md-6">
                    <div class="text-white">
                        <h5>{{ detail.name }}</h5>
                        <div class="duration">
                            <p>2018</p>
                            <p>1h 38min</p>
                        </div>

                        <div class="text-description mt-3">
                            <p>{{ detail.description }}.</p>
                            <div class="mt-3">
                                <p><b>Staring:</b> Taiwo Obileye, Joke Silva, Falz</p>
                                <p><b>Genres:</b> {{ detail.genre }}</p>
                            </div>
                        </div>
                        <div class="mt-4"></div>
                        <div class="watch-more">
                            <router-link :to="{name:'movies',params:{movieID:detail.uuid}}" class="watch-now-btn2" v-if="detail.type === 'Movies'">Watch Now</router-link>
                            <button class="more-info-btn">More Info</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div>
                        <img src="../assets/images/tecno_mobile_banner.jpg" class="ads-banner-bg-img2">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ContentDetails",
        props: {
            detail: Object,
        },
        methods: {
            goto(){

            }
        }
    }
</script>

<style scoped>

</style>
