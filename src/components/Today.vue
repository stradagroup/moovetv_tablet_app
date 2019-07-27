<template>
    <div>
        <!--<h1>{{ todayDate }}</h1>-->
        <div class="row slctor">
            <div class="form-group">
                <label> </label>
                <select v-model="selectedCountry" @change="getLeague()" class="btn select-country-btn dropdown-toggle">
                    <option value="" selected disabled>Country</option>
                    <option v-for="data in country" :value="data.country_id"> {{ data.country_name }}</option>
                </select>
            </div>
            <div class="form-group">
                <label></label>
                <select v-model="league" @change="getFixture()" class="btn select-country-btn dropdown-toggle">
                    <option value="" selected disabled>League</option>
                    <option v-for="data in leagueData" :value="data.league_id"> {{ data.league_name }}</option>
                </select>
            </div>
        </div>
        <h1 v-if="noFixtures">
            No games today.
        </h1>
        <Loader :loading-text="LoadingText" :showFull=false v-if="loading"/>


        <ul class="list-group" v-else>
            <li v-if="fixture.match_live === 1" class="list-group-item" v-for="fixture in fixtures">
                <div class="col-md-12">
                    <router-link :to="{name: 'singleFixture', params: {fixture: fixture}}">
                        <div class="badge badge-secondary info">
                            LIVE
                        </div>
                        {{ fixture.match_hometeam_name }} - {{ fixture.match_awayteam_name}}
                    </router-link>
                </div>
            </li>

            <li v-else class="list-group-item">
                <div class="row">
                    <div class="col-md-3 ">
                        {{ fixture.match_time }}h
                    </div>
                    <div class="col-md-5">{{ fixture.match_hometeam_name }} - {{ fixture.match_awayteam_name}}</div>
                </div>
            </li>
        </ul>

    </div>
</template>


<script>
    import moment from 'moment'
    import {liveScore} from '../services/liveScore.service'
    import Loader from "../components/Loader/Loader";


    export default {
        data() {
            return {
                fixtures: [],
                noFixtures: false,
                date: new Date(),
                league: '',
                leagueData: [],
                country: [],
                selectedCountry: '',
                loading: false,
            }
        },
        components: {
            Loader
        },
        computed: {
            todayDate() {
                return moment(this.date).format("YYYY-MM-DD")
            }
        },
        methods: {
            async getFixture() {
                this.loading = true;
                await liveScore.fetchFixture({
                    id: this.league,
                    from: this.todayDate,
                    to: this.todayDate
                }).then((res) => {
                    console.log(res);
                    if (res.error) {
                        this.noFixtures = true
                        this.fixtures = []
                    } else {
                        this.loading = false;

                        this.noFixtures = false;
                        this.fixtures = [];
                        this.fixtures.push(...res)
                    }
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
                    console.log(res);
                    this.country = res;
                    this.loading = false;

                }).catch((err) => console.log(err));
            },
        },
        created() {
            this.getCountry()
        }
    }

</script>

<style scoped>
    .list-group-item {
        position: relative;
    }

    .info {
        position: absolute;
        left: 10px;
    }
    .slctor {
        margin-left: 10px;
        margin-top: 20px;
    }
    .form-group {
        margin-right: 5px;
    }

</style>
