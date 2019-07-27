<!--stats(goals, cards, subs)-->
<template>
  <div>
    <ul v-if="statistics" class="list-group">
      <li class="list-group-item" v-for="stats in statistics">
        <span class="homeStats">{{ stats.home }}</span>
        <span class="typeStats"><strong>{{ stats.type }}</strong></span>
        <span class="awayStats">{{ stats.away }} </span>
      </li>
    </ul>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        fixture: this.$route.params.fixture,
        statistics: this.$route.params.fixture.statistics,
        goalscorers: this.$route.params.fixture.goalscorer
      }
    }
  }

</script>

<style scoped>
  .typeStats {
    margin: 20px 20px;
  }

</style>
