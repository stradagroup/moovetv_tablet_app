<template>
    <div>
        <div :class="tabsClass">
            <ul>
                <li :class="[{ 'active': tab.isActive}, tab.tabClass]" v-for="tab in tabs">
                    <a :href="tab.href" @click="selectTab(tab)" class="icon-link">
                        <span v-if="tab.image" class="icon-xsm">
                            <img  :src="tab.image" alt="tab.name" class="icon-size"/>
                        </span>
                        <span class="icon-name">{{ tab.name }}</span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="tabs-details">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Tab.vue",
        props: {
            tabsClass: {default: 'tabs'},
            selected: {default: false}
        },
        data() {
            return {tabs: []};
        },
        created() {
            this.tabs = this.$children;

        },
        methods: {
            selectTab(selectedTab) {
                this.tabs.forEach(tab => {
                    tab.isActive = (tab.name === selectedTab.name);
                });

                if (selectedTab.name === 'All') {
                    this.$emit('fetch-content', 'All');
                } else {
                    this.$emit('fetch-content', {name:selectedTab.name,uuid:selectedTab.uuid});
                }


            }
        }
    }
</script>

<style scoped>
    ul {
        width: 100%;
    }

    li {
        position: relative;
    }
    .all-category .active{
        border: unset;
    }
    a:hover,a:focus,a.active{
        text-decoration: unset!important;
    }
    li.active:after {
        content: "";
        position: absolute;
        bottom: -5px;
        width: 5em;
        height: 4px;
        background: white;
        border-radius: 5px;
        left: 0;
        right: 0;
        margin: auto;
    }
    .icon-size{
        width: 25px;
        height: 25px;

    }
    .icon-link {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .icon-name {
        margin-left: 3px;
        font-weight: bold;
        color: white;
        font-size: .7em;
    }
    .all-category{ background: #000000}

</style>
