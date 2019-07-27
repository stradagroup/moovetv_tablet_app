<template>
    <router-link :to="{name:'newsReader',params:{news:data}}">
        <div class="news-card" v-if="data" v-bind:style="{background:data.background?data.background:'#ffffff'}">
            <img :src="data.logo"/>
        </div>
    </router-link>

</template>

<script>
    export default {
        name: "NewsCard",
        props: {
            data: {
                required: false,
            },
        },
        methods: {
            details() {
                this.$emit('gotoNews', this.data);
            },
        },
        mounted() {

            console.log(this.data);
        }
    }
</script>

<style scoped>
    .news-card {
        width: 13em;
        height: 12em;
        margin-left: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        background: white;
        border-radius: 30px;
    }
    .news-card img{
        width: 12em;

    }


    .sample_container.avatar-card {
        margin: 20px;
        /*min-height: 400px;*/
    }

    /* Card Customizations */

    .avatar-card .e-custom-card {
        position: relative;
        margin-top: 80px;
        overflow: visible;
        border-radius: 15px;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
        transition: 0.2s;
        border-width: 1px;
        padding: 1px;
    }

    .e-custom-card.e-card:hover {
        border-width: 1px;
        padding: 1px;
    }

    .e-custom-card :nth-child(2) .e-card-header-title.name {
        margin-top: 20px;
    }

    .sample_container p.avatar-content {
        line-height: 20px;
        font-family: inherit;
    }

    .avatar-card .e-custom-card .e-card-header {
        text-align: center;
    }

    .avatar-card .e-custom-card .e-avatar {
        font-size: 40px;
        position: absolute;
        top: calc(0% - 1.5em);
        left: calc(50% - 1.5em);
        box-shadow: 0 16px 28px -8px rgba(0, 0, 0, .36), 0 4px 15px 0 rgba(0, 0, 0, .12), 0 8px 10px -5px rgba(0, 0, 0, .2);
    }

    .e-card.e-custom-card :nth-child(3) {
        padding: 12px 0px 20px 0px;
        height: 130px;
    }

    .avatar-card .e-custom-card.e-card .e-card-header .e-card-header-caption .e-card-header-title {
        font-size: 24px;
        font-weight: 500;
        line-height: normal;
        color: rgba(83, 101, 132, 0.65);
        text-shadow: 0 0 0.1px;
    }

    .avatar-card .e-custom-card.e-card .e-card-header .e-card-header-caption .e-card-sub-title {
        font-size: 12px;
        font-weight: 500;
        line-height: normal;
        color: rgba(86, 90, 97, 0.65);
        text-shadow: 0 0 0.1px;
    }

    .avatar-card .e-custom-card.e-card .e-card-content {
        overflow: visible;
        width: auto;
        margin: -5px 20px 0 20px;
        word-spacing: 1px;
    }

    .avatar-card .avatar-content {
        color: rgba(250, 200, 130, 0.6);
        margin: 0 auto;
        text-align: center;
        color: rgb(94, 94, 94);
        border: none;
        padding: 0;
        font-size: 14px;
    }

    .avatar-card .avatar-content {
        margin-bottom: 0;
    }

    .sample_container.avatar-card .name {
        margin-top: 10px;
    }

    .highcontrast .avatar-card .e-custom-card.e-card .avatar-content {
        color: rgba(255, 255, 255, 0.84);
    }

    .highcontrast .avatar-card .e-custom-card.e-card .e-card-header .e-card-header-caption .e-card-sub-title {
        color: rgba(255, 255, 255, 0.45);
    }

    .highcontrast .avatar-card .e-custom-card.e-card .e-card-header .e-card-header-caption .e-card-header-title {
        color: rgba(255, 255, 255, 0.84);
    }
</style>
