<template>
   <div class="row ">
            
            <div class="col-md-12 py-5 border">
                <h4 class="pb-4">Create Your deal</h4>
                <form id="addDeal" @submit.prevent="CreateDeal" >
                    <div class="form-row">
                       
                        <div class="form-group col-md-6">
                          <label for="tentacles">Product Name:</label>
                <input id="Product Name" v-model="product_name"  name="product_name" class="form-control" type="text" required>
                        </div>
                        <div class="form-group col-md-6">
                          <label for="tentacles">Discount (%):</label>
                          <input type="number" v-model="discount" name="discount" class="form-control" min="1" max="100" placeholder="Discount" required> 
                        </div>
                      </div>
                    <div class="form-row">
                       
                        <div class="form-group col-md-6">
                          <label for="tentacles">Product Original Amount:</label>
                <input id="" name="amount_old"  v-model="amount_old" class="form-control" type="text" required>
                        </div>
                        <div class="form-group col-md-6">
                          <label for="tentacles">Product Banner:</label>
                          <input type="file" @change="onFileChange($event)" ref="banner" class="form-control"   required> 
                        </div>
                      </div>

                  <div class="form-row">
                       
                        <div class="form-group col-md-6">
                          <label for="tentacles">Product Url:</label>
                        <input id="" v-model="url" class="form-control" type="text" required>
                        </div>
                        <div class="form-group col-md-6">
                          <label for="tentacles">Quantity Available:</label>
                          <input type="number"  v-model="quantity"  class="form-control"  placeholder="Discount" required> 
                        </div>

                  </div>
                   <div class="form-row">
                       <div class="form-group col-md-4">
                          <label for="tentacles">Product Category:</label>
                       <select class="form-control" v-model="category_id">
                          <option value="" Selected>Select Category</option>
                        <option v-bind:key="category.id" v-for="category in categories" :value="category.id">{{category.name}}</option>
                      </select>
                        </div>
                  </div>


                    <div class="form-row">
                        <button type="submit" class="btn btn-danger">Submit</button>
                    </div>
                </form>
            </div>
        </div>
</template>
<script>

export default {
    data() {
      
      return {
          categories:[],
          category_id:"",
          product_name:'',
          category_id:null,
          discount:null,
          amount_old:null,
          banner:null,
          url:null,
          quantity:null
      }
    
    },

    mounted(){
      this.getCategories();
    },
    methods:{

      getCategories(){
        this.$api.GET('/categories')
                .then(response => {
                  console.log(response.data);
                 this.categories = response.data;
                  
                })
                .catch(error => {
                  this.$toastr.error(error.response.data.message, {});
                  console.log(error.response);
                 });
      },
        CreateDeal(event){
          
          this.$api.POST('/deals', {
          product:this.product_name,
          category_id:this.category_id,
          discount:this.discount,
          amount_old:this.amount_old,
          banner:this.banner,
          url:this.url,
          quantity:this.quantity})
          .then(response => {
              console.log(response);
              this.$toastr.success(response.message, {});
              event.target.reset();
          }).catch(error => {
            this.$toastr.error(error.response.data.message, {});
            console.log(error.response);
        });
        
        },
        onFileChange(e) {
          var files = e.target.files || e.dataTransfer.files;
          if (!files.length)
            return;
          this.createImage(files[0]);
      },
      createImage(file) {
        var image = new Image();
        var reader = new FileReader();

        reader.onload = (e) => {
          this.banner = e.target.result;
        };
        reader.readAsDataURL(file);
      },
    }
}
</script>

<style>

</style>
