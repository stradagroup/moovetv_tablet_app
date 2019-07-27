<template>
  <div>
    <h1 v-if="goalscorers.length == 0">No Goals</h1>

    <ul v-else class="list-group">
      <li class="row" v-for="goalscorer in goalscorers">
        <div class="col-sm-4">
          <span class="homeScorer">{{ goalscorer.home_scorer }}</span>
          <span v-if="goalscorer.home_scorer != '' " class="goalTime">{{ goalscorer.time }}</span>
        </div>
        <div class="col-sm-4">{{ goalscorer.score }}</div>
        <div class="col-sm-4">
          <span v-if="goalscorer.away_scorer != '' " class="goalTime">{{ goalscorer.time }}</span>
          <span class="awayScorer">{{ goalscorer.away_scorer }}</span>
        </div>
      </li>
    </ul>


  </div>
</template>


<script>
  export default {
    data() {
      return {
        goalscorers: this.$route.params.fixture.goalscorer
      }
    }
  }

</script>


<style scoped>
  .homeScorer {
    margin-right: 20px;
  }

  .awayScorer {
    margin-left: 20px;
  }

</style>
