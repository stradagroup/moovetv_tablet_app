 <template>
  <modal width="360px" height="auto" name="create-store-modal">
    <div class="container" style="color:#626262">
      <p class="text-center" style="margin-top:5%">Create Your Mart</p>
      <img class="logo" src="../assets/images/moovemart.png" alt="logo" style="margin-left:25%" />
      <br />
      <br />
      <br />
      <loading :active.sync="isSubmiting" :color="'#0774BB'" :is-full-page="false"></loading>

      <transition name="fade" mode="out-in">
        <form @submit.prevent="Register" v-if="step == 1">
          <p class="text-center">
            <small>Signup to create your Mart</small>
          </p>
          <br />
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="Store name"
              v-model="name"
              required
            />

            <span class="error" v-if="name_error">
              <small>{{name_error}}</small>
            </span>
          </div>
          <!-- form-group end.// -->

          <div class="form-group">
            <vue-tel-input v-model="phone" defaultCountry="ng" :required="true"></vue-tel-input>
            <span class="error" v-if="phone_error">
              <small>{{phone_error}}</small>
            </span>
          </div>
          <!-- form-group end.// -->

          <div class="form-group">
            <input type="email" class="form-control" placeholder="Email" v-model="email" required />
            <span class="error" v-if="email_error">
              <small>{{email_error}}</small>
            </span>
          </div>
          <!-- form-group end.// -->

          <div class="form-group">
            <br />
            <button
              type="submit"
              style="text-transform: capitalize;"
              class="btn btn-primary btn-block"
            >Continue</button>
          </div>
          <!-- form-group// -->
        </form>

        <form @submit.prevent="Verify" v-if="step == 2">
          <p class="text-center">Input your verification code</p>
          <br />
          <div class="form-group">
            <input type="tel" class="form-control" placeholder="Code" v-model="code" required />
            <small
              style="color:#0774BB; margin-left: 35%;cursor: pointer;"
              v-on:click="Resend"
            >Resend code</small>
            <span class="error" v-if="code_error">
              <small>Invald Code!</small>
            </span>
          </div>
          <!-- form-group end.// -->

          <div class="form-group">
            <button
              type="submit"
              style="text-transform: capitalize;"
              class="btn btn-primary btn-block"
            >Continue</button>
          </div>
          <!-- form-group// -->
        </form>

        <form @submit.prevent="UploadLogo($event)" v-if="step == 3">
          <p class="text-center">Kindly upload your store's logo with a transparent background</p>
          <br />
          <div class="form-group">
            <div v-if="!store_image">
              <div class="image-upload" style="margin-left: 10%;">
                <label for="file-input">
                  <img
                    src="../assets/images/banner_upload.png"
                    style="margin-left:2%"
                    v-on:click="$refs.upload_logo.click()"
                    width="260px"
                  />
                </label>
                <input
                  type="file"
                  @change="onFileChange($event,'upload_logo')"
                  ref="upload_logo"
                  name="image"
                  accept="image/*"
                  class="form-control"
                  required
                />
              </div>
            </div>
            <div v-else style="margin-left:20%;width:200px;height:200px">
              <img :src="store_image" width="100%" />
              <button
                style="margin-left:15%;"
                class="btn btn-sm btn-danger"
                @click="removeImage()"
              >Remove logo</button>
            </div>

            <span class="error" v-if="image_error">
              <small>Invald Image!</small>
            </span>
            <br />
            <br />
          </div>
          <!-- form-group end.// -->

          <div class="form-group">
            <button
              type="submit"
              style="text-transform: capitalize;"
              class="btn btn-primary btn-block"
            >Continue</button>
          </div>
          <!-- form-group// -->
        </form>
       


        <form @submit.prevent="MartSelect" v-if="step == 3.1">
          <p class="text-center"></p>
          
          <div class="form-group">
           <div class="row">
            <div class="col-md-6">
            <div id="rcorners1" :class="storeSelected ? 'store-shadow' : ''" v-on:click="toggleSelect('Store')" style="width:150px;cursor: pointer;text-align:center; background:#0774BB;color:white; font-weight:bolder;border-bottom-left-radius: 0% !important;
border-bottom-right-radius: 0% !important;">
 <p style="margin-top:-5%"><img src="images/create-icon.png" style=" cursor: pointer;"> Store</p>
  </div>
            </div>

            <div class="col-md-6">
            <div id="rcorners1" :class="dealSelected ? 'deal-shadow' : ''" v-on:click="toggleSelect('Deal')" style="width: 150px;cursor: pointer;text-align:center; background:red;color:white; font-weight:bolder;border-top-left-radius: 0% !important;
    border-bottom-left-radius: 0% !important;border-bottom-right-radius: 0% !important;">
 <p style="margin-top:-9%"> <img src='../assets/images/percentage.svg' class="" style="width:31%; margin-left:-5%;margin-right:5%;color:white"/>DEALS</p>
  </div>
            </div>

            <div class="col-md-12">
            <small style="color:red" v-if="mart_error">You need to make a selection before you can proceed.</small>
            </div>
           </div>
  
    
          
          </div>
          <!-- form-group end.// -->

          <div class="form-group">
            <button
              type="submit"
              style="text-transform: capitalize;"
              class="btn btn-primary btn-block"
            >Continue</button>
          </div>
          <!-- form-group// -->
        </form>


        <form @submit.prevent="UploadBanner($event)" v-if="step == 3.2">
          <p class="text-center">Kindly upload your store's Banner</p>
          <br />
          <div class="form-group">
            <div v-if="!store_banner">
              <div class="image-upload" style="margin-left: 10%;">
                <label for="file-input">
                  <img
                    src="../assets/images/banner_upload.png"
                    style="margin-left:2%"
                    v-on:click="$refs.upload_banner.click()"
                    width="260px"
                  />
                </label>
                <input
                  type="file"
                  @change="onFileChange($event,'upload_banner')"
                  ref="upload_banner"
                  name="image"
                  accept="image/*"
                  class="form-control"
                  required
                />
              </div>
            </div>
            <div v-else style="margin-left:20%;width:200px;height:200px">
              <img :src="store_banner" width="100%" />
              <button
                style="margin-left:15%;"
                class="btn btn-sm btn-danger"
                @click="removeImage()"
              >Remove banner</button>
            </div>

            <span class="error" v-if="image_error">
              <small>Invald Image!</small>
            </span>
            <br />
            <br />
          </div>
          <!-- form-group end.// -->

          <div class="form-group">
            <button
              type="submit"
              style="text-transform: capitalize;"
              class="btn btn-primary btn-block"
            >Continue</button>
          </div>
          <!-- form-group// -->
        </form>
       

        <form @submit.prevent="CreateStore" v-if="step == 4">
          <p class="text-center">Fill in your store details</p>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="Store Website Url"
              v-model="store_url"
              required
            />
          </div>
          <!-- form-group end.// -->
          <div class="form-group">
            <select
              class="form-control"
              v-model="store_size"
              required
              v-on:change="setMaxCategory()"
            >
              <option value disabled selected>Select Buisness scale</option>
              <option value="1">Small</option>
              <option value="2">Medium</option>
              <option value="3">Large</option>
            </select>

            <small
              v-if="store_size ==='1'||store_size==='2'"
            >You can only choose a max of {{limit}} buisness categories</small>
            <small v-if="store_size ==='3'">You can an unlimited number of buisness categories</small>
          </div>
          <!-- form-group end.// -->

          <div class="form-group">
            <multiselect
              v-model="value"
              tag-placeholder="Add category"
              :max="limit"
              placeholder="Select a buisness category"
              label="name"
              track-by="id"
              :options="categories"
              :multiple="true"
              :taggable="true"
              :disabled="isDisabled"
            ></multiselect>
          </div>

          <div class="form-group">
            <textarea
              class="form-control"
              placeholder="Describe your store here..."
              v-model="description"
              required
            >Describe your store here...</textarea>
          </div>
          <!-- form-group end.// -->

          <div class="form-group">
            <input type="text" class="form-control" :value="'₦'+(amount ? amount:'' )" disabled />
          </div>
          <!-- form-group end.// -->
          <div class="form-group">
            <button type="submit" class="btn btn-primary btn-block">Submit</button>
          </div>
          <!-- form-group// -->
        </form>

        <div v-if="step == 5">
          <div class="form-group rave-btn">
            <Rave
              :is-production="false"
              style-class="btn btn-primary btn-block"
              :email="rave_email"
              :amount="amount"
              :reference="reference"
              :rave-key="raveKey"
              :callback="callback"
              :close="close"
              currency="NGN"
              style="margin-right:5%"
            >
              <i>Proceed to payment</i>
            </Rave>
          </div>
          <!-- form-group// -->
        </div>
      </transition>
      <p class="text-center">
        <small style="font-size:50%">Copyright 2019 MooveTv All Rights reserved</small>
      </p>
    </div>
  </modal>
</template>
<script>
import Rave from "vue-ravepayment";
import Loading from "vue-loading-overlay";
import axios from "axios";
import "vue-tel-input/dist/vue-tel-input.css";
import VueTelInput from "vue-tel-input";
import Multiselect from "vue-multiselect";
import router from "../router";
export default {
  components: {
    Multiselect,
    Loading,
    Rave,
    VueTelInput
  },
  props: {
    categories: {
      type: Array,
      required: true,
      default: []
    }
  },
  data() {
    return {
      storeSelected:false,
      dealSelected:false,
      tx: null,
      isDisabled: true,
      limit: 5,
      isSubmiting: false,
      isLoading: false,
      raveKey: "FLWPUBK_TEST-fc06170899c6888ac63027ed7b183bd1-X",
      amount: null,
      phone: "",
      email: "",
      token: "",
      rave_email: "",
      name: "",
      code: "",
      store_image: "",
      store_banner: "",
      store_size: "",
      store_url: "",
      description: "",
      name_error: null,
      phone_error: null,
      email_error: null,
      code_error: null,
      image_error: null,
      mart_error:false,
      step: 1,
      image_ref:null,
      value: []
    };
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

  mounted() {
    this.$eventHub.$on("createstore", function(payLoad) {
      this.$modal.show("create-store-modal");
    });
  },
  methods: {
    MartSelect(){
      if(!this.storeSelected && !this.dealSelected){
        this.mart_error = true;
        return;
      }

      else if(this.storeSelected){
        this.step = 3.2;
      }
      else{
        this.CreateDeal();
      }
    },

    CreateDeal(){
      this.code_error = null;
      this.setHeader();
      this.isSubmiting = true;
      axios
        .post("http://api.moovemart.moovetv.com/public/api/vendor", {
          has_deal:this.dealSelected,
          logo: this.store_image,
          
        })
        .then(response => {
          this.isSubmiting = false;
          console.log(response.data);
          this.$toastr.success('Redirecting to Login', {});

          setTimeout(() => {
            this.isSubmiting = false;
            this.$Bus.$emit("login");
          }, 2000);
        })
        .catch(e => {
          this.isSubmiting = false;
          if (e.response.data.error) {
            let error = e.response.data.error;

            if (typeof error != "object") {
              this.$toastr.error(error, {});
            }
          }
          console.log(e.response);
        });
    },
    toggleSelect(selected){
        
      if (selected == "Store"){
          this.storeSelected = this.storeSelected ? false : true;
         
      }
      else if (selected == "Deal"){
          this.dealSelected = this.dealSelected ?  false : true;
         
      }
    },
    setMaxCategory() {
      switch (this.store_size) {
        case "1":
          this.limit = 3;
          this.amount = 25000;
          this.isDisabled = false;
          this.value.splice(3, this.value.length);
          break;
        case "2":
          this.limit = 5;
          this.amount = 50000;
          this.isDisabled = false;
          this.value.splice(5, this.value.length);
          break;
        case "3":
          this.limit = 999;
          this.amount = 100000;
          this.isDisabled = false;
          break;

        default:
          this.isDisabled = true;
          break;
      }
    },

    Resend() {
      this.isSubmiting = true;
      console.log(this.isSubmiting);
      axios
        .post("http://api.moovemart.moovetv.com/public/api/users/code/send", { email: this.email, phone: this.phone })
        .then(response => {
          this.isSubmiting = false;
          console.log(response.data);
          this.$toastr.success(response.data.message, {});
        })
        .catch(e => {
          this.isSubmiting = false;
          if (e.response.data.error) {
            let error = e.response.data.error;
            if (typeof error != "object") {
              this.$toastr.error(error, {});
            }
          }
          console.log(e.response);
        });
    },
    onFileChange(e,ref) {
      this.image_ref = ref;
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();

      reader.onload = e => {
        if(this.image_ref == 'upload_logo'){
            this.store_image = e.target.result;
        }
        else if(this.image_ref == 'upload_banner'){
            this.store_banner = e.target.result;
        }
        
      };
      reader.readAsDataURL(file);
    },
    removeImage: function() {
      if(this.image_ref == 'upload_logo'){
            this.store_image = false;
        }
      else if(this.image_ref == 'upload_banner'){
          this.store_banner = false;
      }
      
    },
    Register() {
      this.email_error = null;
      this.phone_error = null;
      this.name_error = null;
      this.phone = this.phone.replace(/\s/g, "");
      this.isSubmiting = true;
      axios
        .post("http://api.moovemart.moovetv.com/public/api/users", {
          email: this.email,
          phone: this.phone,
          name: this.name
        })
        .then(response => {
          this.isSubmiting = false;
          console.log(response.data);
          this.step = 2;
        })
        .catch(e => {
          this.isSubmiting = false;

          if (e.response.data.error) {
            let error = e.response.data.error;
            if (error.email) {
              this.email_error = error.email[0];
            }
            if (error.phone) {
              this.phone_error = error.phone[0];
            }
            if (error.name) {
              this.name_error = error.name[0];
            }
            if (typeof error != "object") {
              this.$toastr.error(error, {});
            }
          }
          console.log(e.response);
        });
    },

    Verify() {
      this.code_error = null;
      this.setHeader();
      this.isSubmiting = true;
      axios
        .post("http://api.moovemart.moovetv.com/public/api/users/verify", {
          email: this.email,
          phone: this.phone,
          code: this.code
        })
        .then(response => {
          this.isSubmiting = false;
          console.log(response.data);
          this.token = response.data.token;
          localStorage.setItem("auth-jwt", response.data.token);
          if (response.data.step != "") {
            this.rave_email = response.data.data.email;
            this.amount = response.data.amount;
            this.step = response.data.step;
          } else {
            this.step = 3;
          }
        })
        .catch(e => {
          this.isSubmiting = false;
          if (e.response.data.error) {
            let error = e.response.data.error;
            if (error.code) {
              this.code_error = error.code[0];
            }

            if (typeof error != "object") {
              this.$toastr.error(error, {});
            }
          }
          console.log(e.response);
        });
    },

    UploadLogo(e) {
      this.step = 3.1
    },
    UploadBanner(){
      this.step = 4
    },
    CreateStore() {
      this.code_error = null;
      //let formdata = new FormData();
      this.setHeader();
      this.isSubmiting = true;
      axios
        .post("http://api.moovemart.moovetv.com/public/api/vendor", {
          logo: this.store_image,
          size: this.store_size,
          description: this.description,
          banner: this.store_banner,
          url: this.store_url,
          categories: this.value,
           has_store:1,
           has_deal:this.dealSelected,
        })
        .then(response => {
          this.isSubmiting = false;
          console.log(response.data);
          this.rave_email = this.email;
          this.step = 5;
        })
        .catch(e => {
          this.isSubmiting = false;
          if (e.response.data.error) {
            let error = e.response.data.error;

            if (error.description) {
              this.description_error = error.description[0];
            }
            if (error.size) {
              this.size_error = error.size[0];
            }
            if (typeof error != "object") {
              this.$toastr.error(error, {});
            }
          }
          console.log(e.response);
        });
    },

    callback: function(response) {
      console.log(response);
      this.tx = response.tx.txRef;
    },
    close: function() {
      this.isSubmiting = true;
      this.setHeader();
      axios
        .post("http://api.moovemart.moovetv.com/public/api/payment/verify", {
          txref: this.tx,
          amount: this.amount
        })
        .then(response => {
          console.log(response.data);
          this.$toastr.success(response.data.message, {});
          this.activateVendor(response.data.data.payment_id);
          
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

    activateVendor(payment_id){
      
      this.setHeader();
      axios
        .post("http://api.moovemart.moovetv.com/public/api/vendor/account/activate", {
          payment_id: payment_id
        })
        .then(response => {
          console.log(response.data);
          this.$toastr.success(response.data.message, {});
           setTimeout(() => {
              this.isSubmiting = false;
              //localStorage.setItem('vendor',response.data.data.name)
              localStorage.setItem('vendor-jwt',response.data.token)
              router.push("dashboard");
            }, 1000);
          
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
    setHeader() {
      let token = localStorage.getItem("auth-jwt");
      axios.defaults.headers.common["Content-Type"] = "application/json";
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    }
  }
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>