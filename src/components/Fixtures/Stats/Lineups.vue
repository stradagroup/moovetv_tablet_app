<!--lineups (both team formations with lineups,subs,coach)-->
<template>
  <div>
    <div class="row">
      <div class="col-sm-4">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Full Name</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="player in startHomeLine">
              <th scope="row">{{player.lineup_number}}</th>
              <td>{{player.lineup_player}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-sm-4  offset-sm-4">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Full Name</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="player in startAwayLine">
              <th scope="row">{{player.lineup_number}}</th>
              <td>{{player.lineup_player}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        fixture: this.$route.params.fixture,
        startHomeLine: this.$route.params.fixture.lineup.home.starting_lineups,
        startAwayLine: this.$route.params.fixture.lineup.away.starting_lineups,
        homeCoach: this.$route.params.fixture.lineup.home.coach,
        awayCoach: this.$route.params.fixture.lineup.away.coach,
      }
    }
  }

</script>
