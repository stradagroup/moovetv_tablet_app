<template>
  <div>
    <h1>
      Leads
      <a
        href="#"
        style="color: rgb(0, 0, 0); text-transform: uppercase; font-size: 14px; font-weight: 400;"
      >MooveMart</a>
    </h1>
    <div id="people">
      <v-client-table :data="tableData" :columns="columns" :options="options"></v-client-table>
      <loading :active.sync="isSubmiting" :color="'#0774BB'" :is-full-page="false"></loading>

    </div>
  </div>
</template>
<script>
import Loading from "vue-loading-overlay";
// Import stylesheet
import "vue-loading-overlay/dist/vue-loading.css";
export default {
    components: { Loading },
  data() {
    return {
      isSubmiting:true,
      columns: ["Action", "Actioned","Actioned ID", "Device Info", "User Phone",'Date'],
      tableData: [],
      options: {
        // see the options API
      }
    };
  },

  created() {
    this.getData();
  },

  methods: {
    getData() {
      let data = this.$cookies.get("user-data")
      this.$api.GET("/lead/"+data.vendor.id, {}).then(response => {
        console.log(response);
        if (response.data) {
          this.tableData = response.data;
          this.isSubmiting= false;
        }
      }).catch(e => {
          this.isSubmiting= false;
        });
    }
  }
};
</script>

<style>
</style>
