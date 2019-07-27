<template>
    <div v-show="isActive">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Tab",
        props: {
            name: {required: true},
            image: {required: false},
            uuid: {required: false},
            selected: {default: false},
            tabClass: {required: false},
        },
        data() {
            return {
                isActive: false
            };
        },

        computed: {
            href() {
                return '#' + this.name.toLowerCase().replace(/ /g, '-');
            }
        },

        mounted() {
            this.isActive = this.selected;
        },
        methods: {
            fetchContent(item) {
                this.$emit('interface', item)
            }
        }
    }
</script>

<style scoped>


</style>
