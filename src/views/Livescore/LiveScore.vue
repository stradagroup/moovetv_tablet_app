<template>
    <div class="live_score">
        <tabs  tabsClass="all-category">
            <tab :selected="true" name="Fixtures" tabClass="header">
                <div class="">
                    <Fixture></Fixture>
                </div>
            </tab>
            <tab  name="Today's Match" tabClass="header">
                <div class="">
                    <Today></Today>
                </div>
            </tab>

            <tab  name="Table" tabClass="header">
                <div class="">
                    <TeamTable></TeamTable>
                </div>
            </tab>

        </tabs>
    </div>
</template>

<script>
    import Tabs from "../../components/Tab/Tabs";
    import Tab from "../../components/Tab/Tab";
    import TeamTable from "../../components/TeamTable"
    import Today from "../../components/Today"
    import Fixture from "../../components/Fixtures/Fixtures"

    export default {
        name: "LiveScore",
        components: {
            Tab,
            Tabs,
            TeamTable,
            Today,
            Fixture
        },
        data: function () {
            return {
                teams: []
            }
        },
        methods: {
            getStandings() {
                fetch('https://apifootball.com/api/?action=get_standings&league_id=63&APIkey=51d9ac8fbe11e79e2bcba99d48a61323f5ebf0a30b582607f9318f9d97236b2c')
                    .then(res => res.json())
                    .then(data => {
                        //debugger;
                        this.teams.push(...data)
                    })
            }
        },
        created() {
            this.getStandings()
        },
    }
</script>

<style scoped>
    .live_score {
        margin-top: 50px;
        padding: 10px 15px;
        height: 100%;
        min-height: 800px;
        background: black;
    }

    .header {
        text-decoration: none;
        color: #000000;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

</style>
