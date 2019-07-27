<template>
  <div>
    <div class="row justify-content-md-center">
      <div class="col-xs-6">
        <span class="txt">From:</span>
        <datepicker v-model="fromDate" name="uniquename"></datepicker>
      </div>
      <div class="col-xs-6">
        <span class="txt"> To:</span>
        <datepicker v-model="toDate" name="uniquename"></datepicker>
      </div>
    </div>

    <h1 v-if="noFixtures">No matches found. Please try diffrent date.</h1>
    <Loader :loading-text="LoadingText" :showFull=false v-if="loading"/>

    <ul v-else class="list-group">
      <li v-if="fixture.match_status === 'FT' " class="list-group-item" v-for="fixture in fixtures">
        <div class="row">
          <div class="col-md-5 ">
            <span id="fixtureDate" class="timeDate">{{ fixture.match_date }}</span>
          </div>
            <div class="col-md-7 ">
            <span class="badge badge-secondary info" data-toggle="tooltip" data-placement="top" title="Full Time">
              FT
            </span>
            <router-link :to="{name: 'singleFixture', params: {fixture: fixture}}">
              {{ fixture.match_hometeam_name }} {{ fixture.match_hometeam_score }} - {{ fixture.match_awayteam_score }} {{ fixture.match_awayteam_name }}
            </router-link>
          </div>
        </div>
      </li>

      <li v-else class="list-group-item">
        <div class="row">
          <div class="col-md-5 ">
            <span id="fixtureDate" class="timeDate">{{ fixture.match_date }}</span>
            <span id="fixtureTime" class="timeDate">{{ fixture.match_time }}h</span>

          </div>
          <div class="col-md-7 ">
            {{ fixture.match_hometeam_name }} {{ fixture.match_hometeam_score }} - {{ fixture.match_awayteam_score }} {{ fixture.match_awayteam_name }}
          </div>
        </div>
      </li>

    </ul>
  </div>
</template>


<script>
  import moment from 'moment'
  import Datepicker from 'vuejs-datepicker'
  import {liveScore} from '../../services/liveScore.service'
  import Loader from "../../components/Loader/Loader";



  export default {
    components: {
      Datepicker, Loader
    },
    data() {
      return {
        fixtures: [],
        noFixtures: false,
        fromDate: moment().weekday(-4).format("YYYY-MM-DD"),
        toDate: moment().weekday(10).format("YYYY-MM-DD"),
        league: '',
        leagueData: [],
        country: [],
        selectedCountry: '',
        loading: false,

      }
    },
    computed: {
      fromDateFormated() {
        return moment(this.fromDate).format("YYYY-MM-DD")
      },
      toDateFormated() {
        return moment(this.toDate).format("YYYY-MM-DD")
      }
    },
    methods: {
      async getFixture() {
        this.loading = true;
        await liveScore.fetchFixture({id: this.league, from: this.fromDateFormated, to: this.toDateFormated}).then((res) => {
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
        await liveScore.fetchLeague({id: this.selectedCountry}).then((res) => {
          console.log(res);
          this.leagueData = res;

        }).catch((err) => console.log(err));
      },

      async getCountry() {
        await liveScore.fetchCountry().then((res) => {
          console.log(res);
          this.country = res;

        }).catch((err) => console.log(err));
      },
    },
    created() {
      this.getFixture()
    },
    watch: {
      fromDate() {
        this.getFixture()
      },
      toDate() {
        this.getFixture()
      }
    },

  }

</script>

<style scoped>
  .list-group-item {
    position: relative;
  }

  #fixtureDate {
    position: absolute;
    left: 10px;
  }

  #fixtureTime {
    position: absolute;
    left: 110px;
  }

  .vdp-datepicker {
    display: inline-block;
    margin: 20px 15px 20px 5px;
  }

  .info {
    position: absolute;
    left: 120px;
  }
  .txt{
    font-size: 1.3em;
    color: white;
  }

</style>
