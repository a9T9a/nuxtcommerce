<template>
    <div>
        <b-navbar toggleable="sm" type="light" variant="light">
            
            <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

            <b-navbar-brand>E-Commerce</b-navbar-brand>

            <b-navbar type="light" variant="light">
                <b-nav-form>
                    <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                    <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                </b-nav-form>
            </b-navbar>

            <b-navbar-nav v-if="!this.$store.state.email" class="ml-auto">
                <b-nav-item @click="$bvModal.show('bv-modal-example')">Login</b-nav-item>
            </b-navbar-nav>

            <b-dropdown v-else :text="this.$store.state.email" variant="outline-dark" size="sm" right class="m-2 ml-auto">
                <b-dropdown-item href="#">Action</b-dropdown-item>
                <b-dropdown-item href="#">Another Action</b-dropdown-item>
                <b-dropdown-item @click="userLogout">Log Out</b-dropdown-item>
            </b-dropdown>

            <div>
                <b-modal id="bv-modal-example" hide-footer>
                    <template #modal-title>
                        Login
                        <!--Using <code>$bvModal</code> Methods-->
                    </template>
                    <div class="d-block text-center">
                        <div>
                            <b-tabs content-class="mt-3" align="center">
                                <b-tab title="Sign In" active>
                                      <div>

                                        <b-form-group
                                        id="fieldset-1"
                                        description="Let us know your email."
                                        label="Enter your email"
                                        label-for="input-1"
                                        >
                                            <b-form-input id="input-1" v-model="email" type="email" trim></b-form-input>
                                        </b-form-group>

                                        <b-form-group
                                        id="fieldset-2"
                                        description="Let us know your password."
                                        label="Enter your password"
                                        label-for="input-2"
                                        >
                                            <b-form-input id="input-2" v-model="password"  type="password" trim></b-form-input>
                                        </b-form-group>

                                        <b-button variant="outline-primary" @click="userSignin" >Sign In</b-button>
                                        
                                    </div>
                                </b-tab>
                                <b-tab title="Sign Up">
                                      <div>

                                        <b-form-group
                                        id="fieldset-3"
                                        label="Email"
                                        label-for="input-3"
                                        class="float=left"
                                        >
                                            <b-form-input id="input-3" v-model="email" type="email" trim></b-form-input>
                                        </b-form-group>

                                        <b-form-group
                                        id="fieldset-4"
                                        label="Name"
                                        label-for="input-4"
                                        class="float=left"
                                        >
                                            <b-form-input id="input-4" v-model="name" trim></b-form-input>
                                        </b-form-group>

                                        <b-form-group
                                        id="fieldset-5"
                                        label="Phone"
                                        label-for="input-5"
                                        class="float=left"
                                        >
                                            <b-form-input id="input-5" v-model="phone" trim></b-form-input>
                                        </b-form-group>

                                        <b-form-group
                                        id="fieldset-6"
                                        label="Address"
                                        label-for="input-6"
                                        class="float=left"
                                        >
                                            <b-form-textarea id="input-6" v-model="address" rows="3" max-rows="5"></b-form-textarea>
                                        </b-form-group>

                                        <b-form-group
                                        id="fieldset-7"
                                        label="Password"
                                        label-for="input-7"
                                        class="float=left"
                                        >
                                            <b-form-input id="input-7" v-model="password" type="password" trim></b-form-input>
                                        </b-form-group>

                                        <b-button variant="outline-primary" @click="userSignup">Sign Up</b-button>

                                    </div>
                                </b-tab>
                            </b-tabs>
                        </div>
                    </div>
                    <!--<b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')">Close Me</b-button>-->
                </b-modal>
            </div>

        </b-navbar>
    </div>
</template>

<script>

    import Cookie from "js-cookie"

    export default {
        
        data() {
            return {
                name:null,
                email:null,
                password:null,
                phone:null,
                address:null,
            }
        },

        methods: {

            async userSignin(){
                try {
                    
                    let userData = {
                        email : this.email,
                        password : this.password
                    }

                    let result = await this.$axios.$post("http://localhost:8080/api/authentication/signin", userData)
                    console.log(result)

                    if(result){
                        Cookie.set("access_token",result.token)
                        this.$store.commit("setUser",{
                            name: result.user.name,
                            email: result.user.email
                        })
                        this.$bvModal.hide('bv-modal-example')
                    }

                } catch (error) {
                    console.log(error)
                }
            },

            async userSignup(){
                
                try {
                    let userData={
                        name:this.name,
                        email:this.email,
                        password:this.password,
                        phone:this.phone,
                        address:this.address,
                    }
    
                    let result = await this.$axios.$post("http://localhost:8080/api/authentication/signup", userData)
                    console.log(result)
                    
                    if(result.success){
                        Cookie.set("access_token",result.token)
                        this.$store.commit("setUser",{name:this.name,email:this.email})
                        this.$bvModal.hide('bv-modal-example')
                    }


                } catch (error) {
                    console.log(error.response.data)
                }
            },

            async userLogout(){
                Cookie.remove("access_token")
                this.$store.commit("deleteUser")
            }
        },

    }
</script>

<style scoped>

</style>