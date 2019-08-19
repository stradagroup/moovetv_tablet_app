<template>
 
 <div>
 <loading :active.sync="isSubmiting" :color="'#0774BB'" :is-full-page="false"></loading>

    <h1>
       Subscription
        <a href="#" style="color: rgb(0, 0, 0); text-transform: uppercase; font-size: 14px; font-weight: 400;">
          MooveMart 
        </a> </h1> 
        
     <div id="people">
     <p style="color:green;" v-if="!subscribed" >You currently have no active subscription.</p><button class="send-search pull-right" >View Subscription History</button>
 <div class="row subscriptions">
        <div class="col-xs-12 col-md-3">
            <div class="panel panel-primary">
                <div class="panel-heading">
                    <h3 class="panel-title">
                        Weekly</h3>
                </div>
                <div class="panel-body">
                    <div class="the-price">
                        <h1>
                            ₦1000<span class="subscript">/wk</span></h1>
                       
                    </div>
                    <table class="table">
                        <tr>
                            <td>
                                Unlimited Deals
                            </td>
                        </tr>
                        
                    </table>
                </div>
                <div class="panel-footer">
                <div v-on:click="setPlan(1)">
                    <Rave  :is-production="false" styleClass="btn btn-success"  :email="rave_email" :amount="1000" :reference="reference" :rave-key="raveKey" :callback="callback" :close="close" currency="NGN" style="margin-right:5%" >               <i>Suscribe</i>             </Rave>
                   </div>
                    </div>
            </div>
        </div>
        <div class="col-xs-12 col-md-3">
            <div class="panel panel-success">
                
                <div class="panel-heading">
                    <h3 class="panel-title">
                        Monthly</h3>
                </div>
                <div class="panel-body">
                    <div class="the-price">
                        <h1>
                            ₦2000<span class="subscript">/mo</span></h1>
                       
                    </div>
                    <table class="table">
                        <tr>
                            <td>
                               Unlimited Deals
                            </td>
                        </tr>
                       
                    </table>
                </div>
                <div class="panel-footer">
                <div v-on:click="setPlan(2)">
                    <Rave   :is-production="false" styleClass="btn btn-success"  :email="rave_email" :amount="2000" :reference="reference" :rave-key="raveKey" :callback="callback" :close="close" currency="NGN" style="margin-right:5%" >               <i>Suscribe</i>             </Rave>
                  </div>
                   </div>
            </div>
        </div>
        <div class="col-xs-12 col-md-3">
            <div class="panel panel-info">
                <div class="panel-heading">
                    <h3 class="panel-title">
                        Quaterly</h3>
                </div>
                <div class="panel-body">
                    <div class="the-price">
                        <h1>
                            ₦3000<span class="subscript">/qt</span></h1>
                        
                    </div>
                    <table class="table">
                        <tr>
                            <td>
                                Unlimited Deals
                            </td>
                        </tr>
                        
                    </table>
                </div>
                <div class="panel-footer">
                <div v-on:click="setPlan(3)">
                    <Rave  :is-production="false" styleClass="btn btn-success"  :email="rave_email" :amount="3000" :reference="reference" :rave-key="raveKey" :callback="callback" :close="close" currency="NGN" style="margin-right:5%" >               <i>Suscribe</i>             </Rave> </div>
                </div>
            </div>
        </div>
    </div>
</div>
 </div>
</template>
<script>
import Loading from "vue-loading-overlay";
import Rave from "vue-ravepayment";
export default {
    components: {
    Rave,
    Loading
  },
  computed: {
    reference() {
      let text = "";
      let possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    }
  },
    data() {
      
      return {
        subscribed :true,
        isSubmiting:false,
        raveKey: "FLWPUBK_TEST-fc06170899c6888ac63027ed7b183bd1-X",
        rave_email: '',
        tx:null,
        amount:null,
        columns: ['ID','Product','Category','Old Price','Discount','banner','Clicks','Likes','Status','Action'],
        plans: [
        ],
        plan_id:null,
        vendor_id:null,
        options: {
        // see the options API
        }
        }
    },

    created(){
       
      this.getData();
    },


    methods:{
      setPlan(id){
         
          this.amount = this.plans[id-1].price;
          this.plan_id = id;
      },
      getData(){
        
        this.$api.GET('subscription/plans', {})
        .then(response => {
            this.plans = response.data;
            
        });

        let data= this.$cookies.get("user-data");
        this.rave_email = data.user.email;
        this.vendor_id = data.vendor.id;
        this.subscribed = data.subscription_status
      },
      suscribeVendor(payment_id){
          this.$api.POST("/subscription", {
            payment_id: payment_id,
            plan_id: this.plan_id,
            vendor_id: this.vendor_id,
            })
            .then(response => {
            console.log(response);
            this.$toastr.success(response.message, {});
            this.subscribed = true;
            this.isSubmiting = false;
            })
            .catch(e => {
            this.isSubmiting = false;
            if (e.response.data.error) {
                let error = e.response.data.error;
                this.$toastr.error(error, {});
            }
            console.log(e.response);
            });

      },
        callback: function(response) {
        console.log(response);
        this.tx = response.tx.txRef;
        },
        close: function() {
        
        if(this.tx){
        this.isSubmiting = true;
        this.$api.POST("/payment/verify", {
            txref: this.tx,
            amount: this.amount
            })
            .then(response => {
            console.log(response);
            this.$toastr.success(response.message, {});
            this.suscribeVendor(response.data.payment_id);
            
            })
            .catch(e => {
            this.isSubmiting = false;
            if (e.response.error) {
                let error = e.response.error;
                this.$toastr.error(error, {});
            }
            console.log(e.response);
            });

        }
        
        }
    }
}
</script>

<style >
.subscriptions{
margin-top:5%;

}
.panel
{
    text-align: center;
}
.panel:hover { box-shadow: 0 1px 5px rgba(0, 0, 0, 0.4), 0 1px 5px rgba(130, 130, 130, 0.35); }
.panel-body
{
    padding: 0px;
    text-align: center;
}

.the-price
{
    background-color: rgba(220,220,220,.17);
    box-shadow: 0 1px 0 #dcdcdc, inset 0 1px 0 #fff;
    padding: 20px;
    margin: 0;
}

.the-price h1
{
    line-height: 1em;
    padding: 0;
    margin: 0;
}

.subscript
{
    font-size: 25px;
}

</style>
