<template>
    <div class="chanels-bg">
        <Loader v-if="loading" :showFull=true loading-text="Logging in..."/>
        <div class="login-container">
            <form @submit.prevent="Login">
                <div class="text-center">
                    <div class="mb-2">
                        <img alt="Ads Icon" src="../../assets/images/moovetv-logo1.svg" class="ad-icon">
                    </div>
                    <h5 class="login-text text-white mb-3">Login to MooveTV</h5>
                    <div class="form-group">
                        <input type="email" class="form-input" name="email" v-model="email" id="email"
                               placeholder="Email">
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-input" name="password" v-model="password"
                               id="password" placeholder="Password ***">
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn-login btn-block">Login</button>
                    </div>

                </div>
            </form>
        </div>

    </div>
</template>

<script>

    import Loader from "../../components/Loader/Loader";
    import {mapActions} from "vuex";
    import router from "../../router";

    export default {
        components: {Loader},
        computed: {
            currentPage() {
                // console.log(this.$route.name);
                return this.$route.name;
            }
        },
        data: function () {
            return {
                email: "",
                password: "",
                loading: false
            };
        },
        methods: {
            ...mapActions({loginUser: 'LOGIN'}),
            async Login() {
                let that = this;
                this.loading = true;
                await this.loginUser({
                    email: this.email,
                    password: this.password
                }).then(function () {
                    that.$toastr.success("Login Successful!", {timeOut: 5000});
                    router.push({name: 'landing'});
                }).catch((error) => {
                    this.$toastr.error(error.message, "Login Failed!", {timeOut: 5000});
                    this.loading = false;
                });
                this.loading = false;
            }
        }
    }

</script>
<style scoped>
    button {
        margin: unset;
    }

    .chanels-bg {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .btn-login {
        padding: 15px 10px;
        border-radius: 5px;
        margin-top: 5px;
    }

    .form-input {
        color: white;
    }

    .login-container {
        width: 25em;
        padding: 2em;
        border-radius: 15px;
        height: auto;
        background: black;
    }
</style>
