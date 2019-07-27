<template>
  <div>
    <h1>{{ fixture.match_hometeam_name }} {{ fixture.match_hometeam_score }} : {{ fixture.match_awayteam_score }} {{ fixture.match_awayteam_name }}</h1>

    <div class="btn-group" role="group">
      <router-link :to="{name: 'singleFixture', params:{fixture:fixture}}" tag="button" class="btn btn-secondary">Lineups</router-link>
      <router-link :to="{name: 'stats', params:{fixture:fixture}}" tag="button" class="btn btn-secondary">Match stats</router-link>
      <router-link :to="{name: 'goalscorers', params:{fixture:fixture}}" tag="button" class="btn btn-secondary">Goalscorers</router-link>
    </div>
    
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>


  </div>
</template>


<script>
  export default {
    data() {
      return {
        fixture: this.$route.params.fixture
      }
    }
  }

</script>


<style scoped>
  /* slide-animation */

  .slide-enter-active {
    animation: slide-in 250ms ease-out forwards;
  }

  .slide-leave-active {
    animation: slide-out 250ms ease-out forwards;
  }

  @keyframes slide-in {
    from {
      transform: translateX(200px);
      opacity: 0
    }

    to {
      transform: translateX(0);
      opacity: 1
    }
  }

  @keyframes slide-out {
    from {
      transform: translateX(0);
      opacity: 1;
    }

    to {
      transform: translateX(-200px);
      opacity: 0;
    }
  }
</style>