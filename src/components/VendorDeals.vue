<template>
 
 <div>
    <h1>
       Deals
        <a href="#" style="color: rgb(0, 0, 0); text-transform: uppercase; font-size: 14px; font-weight: 400;">
          MooveMart
        </a></h1> 
     <div id="people">
  <v-client-table :data="tableData" :columns="columns" :options="options">
    <template slot="banner" slot-scope="props">
    <div>
      <a :href="props.row.banner" target="_blank">view</a>
    </div>
  </template>
  <template slot="Status" slot-scope="props">
    <div>
      <span>{{props.row.Status ? 'Active' : 'Inactive'}} </span>
    </div>
  </template>
  <template slot="Action" slot-scope="props">
    <div>
      <button v-on:click="toggleDealStatus(props.row.id)" class="btn " :class="props.row.Status ? 'btn-success' :'btn-danger'" >{{props.row.Status ? 'Disable' : 'Enable'}}</button>
      
    </div>
  </template>
  </v-client-table>
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
        columns: ['ID','Product','Category','Old Price','Discount','banner','Clicks','Likes','Status','Action'],
        tableData: [
        ],
        options: {
        // see the options API
        }
        }
    },

    created(){
       
      this.getData();
    },


    methods:{

      toggleDealStatus(id){
        this.$api.GET('/vendor/deals/update/status', {})
        .then(response => {
           console.log(response)
           
        }).catch(e => {
          this.isSubmiting= false;
        });
        
      },
      getData(){
        
        this.$api.POST('/vendor/deals', {})
        .then(response => {
            this.tableData = response.data;
            this.isSubmiting= false;
        }).catch(e => {
          this.isSubmiting= false;
        });
        
      }
    }
      }
</script>

<style>

</style>
