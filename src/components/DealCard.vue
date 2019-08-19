<template>
  
  <div class="card" style="width: 18rem;">
            <div class="cnrflash">
                    <div class="cnrflash-inner">
                        <span class="cnrflash-label">{{discount}}%
                            <br>
                            OFF</span>
                    </div>
                </div>
              <img class="card-img-top" :src="banner" alt="Card image cap" />
       <vue-flip :active-click="activeOnClick" class="simple-test" width="100%" height="200px" style="padding-bottom: 60%;">
              <div class="card-body deal" slot="front">
                <div class="row" style="margin-left:-10%;">
                  <div class="col-md-12">
                    <div class="row">
                      <div class="col-md-2">
                        <img :src="logo" />
                      </div>
                      <div class="col-md-6">
                        <p class="card-text" style="font-size: 0.7vw;">{{name}}</p>
                      </div>

                      <div class="col-md-1">
                        <i class="fa fa-share-alt" @click="setLead('Deal',3,id,vendorId, $event)"></i>
                      </div>
                      <div class="col-md-1">
                        <i class="fa fa-download" aria-hidden="true" @click="setLead('Deal',4,id,vendorId, $event)"></i>
                      </div>
                      <div class="col-md-1">
                        <i
                          class="fa fa-heart"
                          @click="setLead('Deal',2,id,vendorId, $event)"
                        ></i>
                      </div>
                      <div class="col-md-12">
                        <br />
                        <h1 style="font-size:15px;">{{product}}</h1>
                      </div>

                      <div class="col-md-12">
                        <div class="row">
                          <div class="col-md-9">
                            <span>₦{{Math.ceil(oldAmount-((discount/100)*oldAmount)).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}}</span>

                            <span
                              style="font-size: 12px;text-decoration: line-through;"
                            >₦{{oldAmount.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}}</span>
                          </div>
                          <div class="col-md-3">
                           

                            <small style="font-size: 0.7vw;">+{{Math.round(10*quantity)/10}}</small>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-md-12">
                            <br />
                            <button
                              class="ghost-btn"
                              style=" width: 100%; margin-left:2%"
                              @click="setLead('Deal',5,id,vendorId)"
                            >Buy Now</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          <div class="card-body deal" slot="back">
                <div class="row" style="margin-left:-10%;">
                  <div class="col-md-12">
                   <p class="card-text text-center" style="font-size:15px;font-weight:bolder;">{{name}}</p>
                  </div>
<br>
                   <div class="col-md-12" style="font-size:15px;">
                   <p > <i class="fas fa-phone fa-2x" style="font-weight: 900;font-size: 1.5vw;"> 080 1234 5678</i></p> 
                   <p > <i class="fab fa-instagram fa-2x" style="font-weight: 900;font-size: 1.5vw;"> @{{name}}</i></p>        
                  
                   <p > <i class="fab fa-facebook fa-2x" style="font-weight: 900;font-size: 1.5vw;"> {{name}}</i></p> 

                   
                  </div>
                </div>
              </div>
               
        </vue-flip>

            </div>
          
</template>

<script>
import VueFlip from 'vue-flip'

export default {
      
  name: "StoreCard",
components: {'vue-flip': VueFlip},
 props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    product: {
      type: String,
      required: true,
    },
    banner: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    }
    ,
    vendorId: {
      type: Number,
      required: true,
    }
    ,
    discount: {
      type: Number,
      required: true,
    },
     oldAmount: {
      type: Number,
      required: true,
    },
    
     quantity: {
      type: String,
      required: true,
    },

  },
  data(){
      return {
        
      activeOnClick: true
      }
  },
  methods: {
   doNothing (evt) {
          evt.stopPropagation()
        },
    setLead(model, action, id, vendor_id,evt) {

      if(action != '5'){
      evt.stopPropagation()

      }
      let device_info = this.getDeviceInfo();
      this.$api.POST("/lead", {
          vendor_id: vendor_id,
          action_id: action,
          model: model,
          model_id: id,
          device_info: device_info,
          user_phone: "+234..."
        })
        .then(response => {
          console.log(response.data);
        })
        .catch(e => {
          console.log(e.response.data);
        });
    },
    getDeviceInfo(){
      console.log(this.$device);
      let device_info ='*';
      if(this.$device.mobile){
         device_info = 'Mobile ';
      }
      if(this.$device.ios){
         device_info += 'IOS ';
      }
      else if(this.$device.android){
        device_info += 'Andriod ';
      }
      if(this.$device.iphone){
         device_info += 'Iphone ';
      }
      if(this.$device.ipad){
         device_info += 'Ipad ';
      }
      

      return device_info;
    },
  },


  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
</style>
