<template>


    <modal width="360px" height="auto" name="login-modal" :clickToClose="this.$route.meta.layout != 'vendor'">
        <div class="container" style="color:#626262">
            <p class="text-left" style="margin-top:5%"></p>
            <i class="fa fa-arrow-left" style="right: 90%;position: absolute;" v-if="step==2" v-on:click="Back"></i><img
                class="logo" src="../assets/images/moovemart.png" alt="logo" style="margin-left:25%">
            <br><br><br>
            <loading :active.sync="isSubmiting" :color="'#0774BB'" :is-full-page="false"></loading>

            <transition name="fade" mode="out-in">

                <form @submit.prevent="Register" v-if="step == 1">

                    <p class="text-center">
                        <small>Login to your dashboard</small>
                    </p>
                    <br>


                    <div class="form-group">
                        <vue-tel-input v-model="phone" defaultCountry="ng" :required="true"></vue-tel-input>
                        <span class="error" v-if="phone_error"> <small> {{phone_error}}</small></span>
                    </div> <!-- form-group end.// -->

                    <div class="form-group">
                        <br>
                        <button type="submit" style="text-transform: capitalize;" class="btn btn-primary btn-block">
                            Continue
                        </button>
                    </div> <!-- form-group// -->
                </form>


                <form @submit.prevent="Verify" v-if="step == 2">
                    <p class="text-center"> Input your verification code</p><br>
                    <div class="form-group">
                        <input type="tel" class="form-control" placeholder="Code" v-model="code" required>
                        <small style="color:#0774BB; margin-left: 35%;cursor: pointer;" v-on:click="Resend"> Resend
                            code
                        </small>
                        <span class="error" v-if="code_error"> <small> Invald Code! </small></span>
                    </div> <!-- form-group end.// -->


                    <div class="form-group">
                        <button type="submit" style="text-transform: capitalize;" class="btn btn-primary btn-block">
                            Continue
                        </button>
                    </div> <!-- form-group// -->
                </form>

            </transition>
            <p class="text-center">
                <small style="font-size:50%"> Copyright 2019 MooveTv All Rights reserved</small>
            </p>
        </div>
    </modal>
</template>
<script>

    import Loading from 'vue-loading-overlay';
    import axios from 'axios';
    import 'vue-tel-input/dist/vue-tel-input.css';
    import VueTelInput from 'vue-tel-input';
    import router from '../router';

    export default {
        components: {
            Loading, VueTelInput
        },
        data() {
            return {

                isSubmiting: false,
                isLoading: false,
                phone: "",
                token: "",
                code: '',
                phone_error: null,
                code_error: null,
                step: 1
            }
        },

        mounted() {

            this.$Bus.$on("login", function (payLoad) {

                this.$modal.show('login-modal');
            });

        },
        methods: {
            Back() {
                this.step = 1;
            },
            Resend() {
                this.isSubmiting = true;
                console.log(this.isSubmiting);
                this.$api.POST('/users/code/send', {
                    email: this.email,
                    phone: this.phone
                })
                    .then(response => {
                        this.isSubmiting = false;
                        console.log(response);
                        this.$toastr.success(response.message, {});

                    })
                    .catch(e => {
                        this.isSubmiting = false;
                        if (e.response.error) {

                            let error = e.response.error;
                            if (typeof error != 'object') {
                                this.$toastr.error(error, {});

                            }

                        }
                        console.log(e.response);
                    });

            },
            Register() {

                this.phone_error = null;
                this.phone = this.phone.replace(/\s/g, "");
                this.isSubmiting = true;
                this.$api.POST('/users/code/send', {

                    phone: this.phone,

                })
                    .then(response => {
                        this.isSubmiting = false;
                        console.log(response);
                        this.step = 2;
                    })
                    .catch(e => {
                        this.isSubmiting = false;

                        if (e.response.error) {
                            let error = e.response.error;

                            if (error.phone) {
                                this.phone_error = error.phone[0];
                            }
                            if (typeof error != 'object') {
                                this.$toastr.error(error, {});
                            }


                        }
                        console.log(e.response);
                    });
            },


            Verify() {
                this.code_error = null;
                this.isSubmiting = true;
                this.$api.POST('/users/auth', {
                    email: this.email,
                    phone: this.phone,
                    code: this.code,
                })
                    .then(response => {
                        this.isSubmiting = false;
                        console.log(response);
                        this.token = response.token;
                        localStorage.setItem('vendor', response.data.name)
                        localStorage.setItem('vendor-jwt', response.token)
                        if (this.$route.path == '/') {
                            this.$router.push('/dashboard')
                        }
                        else {
                            this.$router.go()
                        }

                    })
                    .catch(e => {

                        this.isSubmiting = false;
                        if (e.response.data.error) {
                            let error = e.response.data.error;
                            if (error.code) {
                                this.code_error = error.code[0];
                            }

                            if (typeof error != 'object') {
                                this.$toastr.error(error, {});
                            }


                        }
                        console.log(e.response);
                    });
            }


        }
    }
</script>
