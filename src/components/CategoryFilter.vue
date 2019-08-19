 <template>
  <div class="col-md-12">
    <div class="stores-section">
      <div class="row">
        <div class="col-md-2">
          <div
            class="category-text"
            v-bind:class="{ underline: currentCategory == 'All',selected: currentCategory == 'All'}"
            @click="setCategory('All')"
          >
            All {{view}}
            <i class="fa fa-angle-down"></i>
          </div>
        </div>

        <div
          class="col-md-2"
          v-bind:key="category.id"
          v-for="category in categories"
          v-if="category.id < 5 "
        >
          <div
            class="category-text"
            v-bind:class="{ underline: currentCategory == category.name,selected: currentCategory == category.name}"
            @click="setCategory(category.name)"
          >
            <img
              src="../assets/images/fashion-icon.png"
              width="13%"
              v-if="currentCategory != category.name"
            />
            <img
              src="../assets/images/fashion-icon-active.png"
              width="13%"
              v-if="currentCategory == category.name"
            />
            {{category.name}}
          </div>
        </div>

        <div class="col-md-2">
          <div class="category-text">
            <div class="dropdown-more">
              <span class="more-label">
                More
                <i class="fa fa-angle-down"></i>
              </span>
              <div class="dropdown-content">
                <a
                  class="category-text"
                  style="color:black !important;"
                  v-bind:class="{ underline: currentCategory == category.name,selected: currentCategory == category.name}"
                  @click="setCategory(category.name)"
                  v-bind:key="category.id"
                  v-for="category in categories"
                  v-if="category.id >= 5 "
                >{{category.name}}</a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-2">
          <div class="category-text"></div>
        </div>

        <div class="col-md-12">
          <div class="underline-short" style="margin-top:5%; margin-bottom:2%;">Top Selection</div>
        </div>
        <transition-group
          class="row item-group"
          name="category"
          mode="out-in"
          v-if="view=='Stores'"
        >
          <div
            class="col-3"
            style="max-width:100%; margin-bottom:5%;"
            v-bind:key="store.id"
            v-for="store in stores"
            v-if="currentCategory === store.Category || currentCategory === 'All' && not_seen(store.vendor_id)"
          >
            <StoreCard :banner="store.banner" :logo="store.logo" :url="store.url" :description="store.description" :name="store.Name" />
    
          </div>
        </transition-group>

        <transition-group
          class="row item-group"
          name="category"
          mode="out-in"
          v-if="view=='Deals'"
        >
          <div
            class="col-md-3"
            style="max-width:100%; margin-bottom:5%;"
            v-bind:key="deal.id"
            v-for="deal in deals"
            v-if="currentCategory === deal.category || currentCategory === 'All'"
          >

          <DealCard :id="deal.id" :banner="deal.banner" :logo="deal.store_logo" :url="deal.url"  :name="deal.store" :product="deal.product" :discount="deal.discount" :oldAmount="deal.amount_old" :quantity="deal.quantity"  :vendorId="deal.vendor_id" />
    
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>
<script>
import VueFlip from 'vue-flip'
import axios from "axios";
import StoreCard from './StoreCard.vue';
import DealCard from './DealCard.vue';
export default {
  components: {'vue-flip': VueFlip,StoreCard,DealCard},
  props: {
    view: {
      type: String,
      required: true,
      default: "Stores"
    },
    categories: {
      type: Array,
      required: true,
      default: []
    },
    stores: {
      type: Array,
      required: true,
      default: []
    },
    deals: {
      type: Array,
      required: true,
      default: []
    },
    storesSet: {
      type: Set,
      required: true,
      default: new Set()
    }
  },
  data() {
    return {
      currentCategory: "All"
    };
  },
  mounted() {},
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
    not_seen(vendor_id) {
      if (this.storesSet.has(vendor_id)) {
        return false;
      }
      this.storesSet.add(vendor_id);
      return true;
    },
    setCategory(selected) {
      if (selected == "All") {
        this.storesSet.clear();
      }
      
      this.currentCategory = selected;
    }
  }
};
</script>
<style>
</style>