<template>
    <iframe :width="getW" :height="getH" :src="src" frameborder="0" ></iframe>
</template>

<script>
    export default {
        name: "newsReader",
        props:['src'],
        computed:{
            getW(){
               return window.innerWidth
            },
            getH(){
                return window.innerHeight
            }
        }
    }
</script>

<style scoped>

</style>
