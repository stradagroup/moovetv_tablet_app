<template>
    <div class="">
        <div class="row align-content-center justify-content-start slctor">
            <div class="form-group">
                <label>Country</label>
                <select v-model="selectedCountry" @change="getLeague()"
                        class="btn select-country-btn dropdown-toggle">
                    <option value="" selected disabled>Select Country</option>
                    <option v-for="data in country" :value="data.country_id"> {{ data.country_name }}</option>
                </select>
            </div>

            <div class="form-group" v-if="selectedCountry">
                <label>League</label>
                <select v-model="league" @change="getStandings()"
                        class="btn select-country-btn dropdown-toggle">
                    <option value="" selected disabled>Select League</option>
                    <option v-for="data in leagueData" :value="data.league_id"> {{ data.league_name }}</option>
                </select>

            </div>
        </div>
        <Loader :loading-text="LoadingText" :showFull=false v-if="loading"/>
        <div class="table-responsive-sm">
            <table class="table table-light ">
                <thead>
                <tr class="tb-title">
                    <th scope="col" data-toggle="tooltip" data-placement="top" >#</th>
                    <th scope="col" data-toggle="tooltip" data-placement="top" >Teams</th>
                    <th scope="col" data-toggle="tooltip" data-placement="top" >GP</th>
                    <th scope="col" data-toggle="tooltip" data-placement="top">D</th>
                    <th scope="col" data-toggle="tooltip" data-placement="top" >L</th>
                    <th scope="col" data-toggle="tooltip" data-placement="top" >GF</th>
                    <th scope="col" data-toggle="tooltip" data-placement="top" >GA</th>
                    <th scope="col" data-toggle="tooltip" data-placement="top" >PTS</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="team in teams">
                    <th scope="row">{{ team.overall_league_position }}</th>
                    <th>{{ team.team_name }}</th>
                    <td>{{ team.overall_league_payed}}</td>
                    <td>{{ team.overall_league_W}}</td>
                    <td>{{ team.overall_league_D }}</td>
                    <td>{{ team.overall_league_L }}</td>
                    <td>{{ team.overall_league_GF }}</td>
                    <td>{{ team.overall_league_GA }}</td>
                    <td>{{ team.overall_league_PTS}}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>


<script>
    import {liveScore} from '../services/liveScore.service'
    import Loader from "../components/Loader/Loader";

    export default {
        components: {
            Loader
        },
        data: function () {
            return {
                teams: [],
                league: '',
                leagueData: [],
                country: [],
                selectedCountry: '',
                loading: false,
                LoadingText: ''
            }
        },
        methods: {
            async getStandings() {
                this.loading = true;
                await liveScore.fetchStandings({id: this.league}).then((res) => {
                    this.loading = false;
                    console.log(res);
                    this.teams = res;
                }).catch((err) => console.log(err));
            },

            async getLeague() {
                this.loading = true;
                await liveScore.fetchLeague({id: this.selectedCountry}).then((res) => {
                    this.loading = false;
                    console.log(res);
                    this.leagueData = res;

                }).catch((err) => console.log(err));
            },

            async getCountry() {
                this.loading = true;
                await liveScore.fetchCountry().then((res) => {
                    this.loading = false;
                    console.log(res);
                    this.country = res;

                }).catch((err) => console.log(err));
            },
        },
        created() {
            this.getCountry()
        }
    }

</script>
<style scoped>
    .form-group {
        margin-right: 5px;
    }
    th{
        font-size: 1.3em;
    }

    .slctor {
        margin-left: 10px;
        margin-top: 20px;
    }

    .tb-title {
        background: #007aff;
        font-size: 1em!important;
    }

    .tb-title > th {
        color: white;
    }
    .form-group{
        display: flex;
        flex-direction: column;
    }
    .form-group label{
        color: white;
    }

</style>
