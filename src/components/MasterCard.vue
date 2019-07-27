<template>

    <div class="grid-item">
        <BigCard v-if="!item.default" :item="item" ></BigCard>
        <SmallCard v-if="item.default" :item="item"></SmallCard>
    </div>
</template>

<script>
    import SmallCard from "./SmallCard";
    import BigCard from "./BigCard";

    export default {
        name: "MasterCard",
        components: {SmallCard, BigCard},
        props:["item","index"],
        methods:{
            getClass(){
                return "grid-item grid-item-"+this.index
            }
        }
    }
</script>

<style scoped>

</style>
