<template>
    <div class="body-dark">

        <Loader v-if="loading" :showFull=true :loading-text="LoadingText" :bg-color="dark"/>
        <div class="moove-category grid-layout">
            <template  v-for="(item, index) in list">
                <BigCard class="span-2 " v-bind:class="getIndexClass(index)" v-if="!item.default" :item="item" ></BigCard>
                <SmallCard  v-bind:class="getIndexClass(index)" v-if="item.default" :item="item"></SmallCard>
                <!--<master-card :index="index" :item="item"></master-card>-->
                <!--<div class="row " v-if="(index%2)===0">-->
                    <!--<div class="col" >-->
                       <!--<master-card :item="item"></master-card>-->
                    <!--</div>-->
                <!--</div>-->
            </template>


        </div>
    </div>

</template>

<script>
    import HeaderNav from '../Navigation/HeaderNav.vue';
    import Loader from '../../components/Loader/Loader';
    import {loadCategory} from '../../services/loadCategory.service'
    import BigCard from "../../components/BigCard";
    import SmallCard from "../../components/SmallCard";


    export default {
        components: {
           BigCard,
           SmallCard,
            Loader,
            HeaderNav,

        },
        name: "Home",
        data: function () {
            return {
                loading: true,
                LoadingText: "Please Wait",
                list: [],
                paid: [],
                free: [],
                index: 0,
                mappings: {
                "livescore": "",
                "livetv": "",
                "newsfeeds": "",
            },

                index1: 0,
            }
        },
        async created() {
            let that = this;
            await loadCategory.fetch().then((res) => {
                //debugger;
                console.log(res);
                that.loading = false;
                this.list = res;
                this.list.forEach((data) => {
                    if (data.default === 0) {
                        that.paid.push(data)
                    } else {
                        that.free.push(data)
                    }
                });
                this.paid = this.sortByKey(this.paid, 'position');
                this.free = this.sortByKey(this.free, 'position');
                this.list = this.sortByKey(this.list, 'position');
                //

                //console.warn(this.paid)
                console.warn(this.list)

            }).catch((err) => console.log(err));
            // this.$store.dispatch('loadCategory');
            // this.list = await this.$store.getters.GET_CATEGORY;
            // this.list.forEach((data) => {
            //     if (data.default === 0) {
            //         that.paid.push(data)
            //     } else {
            //         that.free.push(data)
            //     }
            // });
            //
            // this.paid = this.sortByKey(this.paid, 'position');
            // this.free = this.sortByKey(this.free, 'position');
            //
            // console.warn(this.paid)

        },
        computed: {},
        methods: {
            getIndexClass(index){
                return 'grid-item grid-item-'+index;
            },
            getNextPaid(index) {
                this.index = index;
                return this.paid[index];
            },
            getNextFree(index) {
                this.index1 = index;
                return this.free[index];
            },
            categoryList() {
                let list = this.$store.getters.GET_CATEGORY;
                list.forEach((data) => {
                    if (data.default === 0) {
                        this.paid.push(data)
                    } else {
                        this.free.push(data)
                    }
                });

                return this.$store.getters.GET_CATEGORY;

            },
            sortByKey(array, key) {
                return array.sort(function (a, b) {
                    var x = a[key];
                    var y = b[key];
                    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
                });
            },
            splitData() {
                console.log(this.categoryList);
                this.list.map((data, index) => {
                    if (data.default === 0) {
                        this.paid.push(data)
                    } else {
                        this.free.push(data)
                    }
                });

                return Math.round(this.free.length / 5 + this.paid.length / 2);
            },
            log(e) {
                console.log(e)
            }

        }


    }
</script>
<style scoped>
    .moove-category {
        margin-top: 60px;
        width: 100vw;


    }

    .mt-5 {
        margin-top: 4px !important;
    }

    .body-dark {
        height: 100vh;
        overflow: scroll;
        background: #000;
    }

    .play {
        height: 13em;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }

    .play a {
        flex-basis: 50%;
    }

    .col {
        margin: 2px;
        padding: 3px;
    }

    a:hover {
        text-underline: none !important;
    }

    .col-md-9, .col-md-3 {
        /*padding: 0 5px 0 0;*/
        /*margin: unset;*/
        display: flex;
        justify-content: center;
        align-items: center;
        align-self: center;
    }

    .row {
        align-items: center;
        justify-content: center;

        margin: 0;

    }

</style>
