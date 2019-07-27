<template>
    <router-link :to="{name:'channels',params:{channelID:item.uuid}}">
        <div class="playtv-category">
            <div class="category-icon-text">
                <img :src="item.image" class="">
                <p v-show="!full"> {{ item.name }}</p>
            </div>
            <div class="drop" align="right ">
                <img src="../assets/images/moovetv-xsm-grey.svg" class="moovetv-xsm ">
            </div>
        </div>
    </router-link>
</template>

<script>
    export default {
        name: "SmallCard",
        props: {
            item: {
                type: Object,
                default: function () {
                    return {
                        name: '',
                        image: "./assets/images/moovetv-xsm.svg"
                    }
                }
            }, full: {
                type: Boolean,
                default: function () {
                    return false;
                }
            },
            mappings:{
                type:Object
            },
        },
        data() {
            return {
                background: ''
            }
        },
        mounted() {
            //console.log(this.item)
        },

        methods: {
            log(e) {
                console.log(e)
            }
        }
    }
</script>

<style scoped>
    .item {
        padding-right: 5px;
        padding-left: 5px;
    }

    .playtv-category {
        height: 95%;
        /*min-width: 230px;*/
        /*min-height:6em;*/
        width: 100%;
        flex-basis: 50%;
        position: relative;
        background-color: #fff;
        border-radius: 10px;
        padding: 15px;
        margin-bottom: 10px;

    }

    .category-icon-text img {
        width: 60px;
        height: 60px;
        object-fit: contain;
    }

    p {
        font-weight: 500;
        letter-spacing: -1px;
        font-size: 1.3em;
        color: #5c5c5c;
        text-transform: capitalize;
    }

    .drop {
        position: absolute;
        bottom: 5px;
        right: 10px;
    }
    .moovetv-xsm{
        width: 3em;
    }

    .category-icon-text {
        display: flex;
        align-items: center;
        height: 80%;
        width: 100%;
        justify-content: space-between;
    }

    .category-icon-text img {
        display: inherit;
        flex: 1;
    }

    .category-icon-text p {
        display: inherit;
        flex: 1;

    }
</style>
