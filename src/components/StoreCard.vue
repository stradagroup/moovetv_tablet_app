<template>

  <div class="card" style="width: 18rem;">
    <img class="card-img-top" :src="banner" alt="Card image cap" />
    <div class="card-body">
      <div class="row" style="margin-left:-10%;">
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-3">
              <img :src="logo" width="30px" height="23px"/>
            </div>
            <div class="col-md-9">
              <p class="card-text" style="font-size: 0.7vw;">{{name}}</p>
            </div>

            <div class="col-md-12">
              <br />
              <p style="font-size:12px;">{{description | truncate(50, '...')}}</p>
            </div>
          </div>
        </div>

        <div class="col-md-4 visit-store">
          <br />
          <button class="ghost-btn" @click="ViewStore(url)">Visit Store</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "StoreCard",

        props: {
            logo: {
                type: String,
                required: true,
            },
            banner: {
                type: String,
                required: true,
            },
            name: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: true,
            },
            url: {
                type: String,
                required: true,
            }
        },
        methods: {
            ViewStore (url){
                alert(url);
            },
        },



    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
</style>
