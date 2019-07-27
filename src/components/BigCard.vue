<template>
    <router-link :to="{name:'channels',params:{channelID:item.uuid}}">
        <transition name="slide-fade">
            <div class="redtv " :style="{background:item.colour}">
                <img :src="item.image" class="redtv-icon-white">
                <div class="redtv-title">
                    <p v-html="item.description"></p>
                </div>
                <div class="drop" align="right"><img src="../assets/images/moovetv-xsm.svg" class=""></div>
            </div>
        </transition>

    </router-link>
</template>

<script>
    export default {
        name: "BigCard",
        props: {
            item: {
                type: Object,
                default: function () {
                    return {
                        name: '',
                        image: "../assets/images/moove-logo-sm.svg"
                    }
                }
            }
        },
        data() {
            return {
                cssProps: {
                    background: this.item.colour
                }
            }
        },
        methods: {
            hexToRgb: function (hex) {
                var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                return result ? {
                    r: parseInt(result[1], 16),
                    g: parseInt(result[2], 16),
                    b: parseInt(result[3], 16)
                } : null;
            },
            generateColor: function (color) {
                let rgb = this.hexToRgb(color);
                if (rgb) {
                    rgb = `${rgb.r},${rgb.g},${rgb.b}`;
                }
                else {
                    rgb = "0,0,0"
                }
                console.log(rgb);

                let str = `linear-gradient(to bottom,  rgba(${rgb},0.65) 0%,rgba(0,0,0,0) 100%); `;
                // console.log(str);

                return str;

            },
            log(e) {
                console.log(e)
            }
        },
        mounted() {
            console.log(this.item.colour);

        }

    }
</script>

<style scoped>

    .redtv {
        position: relative;
        min-height: 13em;
        margin-bottom: 5px;
        /*margin: 5px;*/
    }

    .redtv-icon-white {
        width: 4em;
        height: auto;
    }


    a {
        text-decoration: unset;
    }

    .redtv img {
        /*max-width: 400px;*/
    }

    .redtv-title p {
        font-size: 1.1em;
        letter-spacing: -1px;
        line-height: 1.2em;
        text-transform: capitalize;
        margin-bottom: 0;
        color: #fff;
        font-weight: 500;
    }

    .drop {
        position: absolute;
        bottom: 15px;
        right: 10px;
    }

    .slide-fade-enter-active {
        transition: all .3s ease;
    }

    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */
    {
        transform: translateX(10px);
        opacity: 0;
    }
</style>
