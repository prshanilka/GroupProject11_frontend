<template>
	<app-layout>
        <b-row>
            <b-colxx xxs="12">
            <b-card class="mb-4" :title="$t('forms.changepassword')">
                        <b-form @submit.prevent="onValitadeFormSubmit" >
                        <b-form-group label="Current Password" class="error-l-125">
                            <b-form-input type="password" v-model="$v.cpassword.$model" :state="!$v.cpassword.$error" />
                            <b-form-invalid-feedback v-if="!$v.password.required">Password cannot be empty</b-form-invalid-feedback>
                        </b-form-group>
                        <b-form-group label="New Password" class="error-l-125">
                            <b-form-input type="password" v-model="$v.password.$model" :state="!$v.password.$error" />
                            <b-form-invalid-feedback v-if="!$v.password.required">Password cannot be empty</b-form-invalid-feedback>
                            <b-form-invalid-feedback v-if="!$v.password.minLength">Password Must Have 6 Characters </b-form-invalid-feedback>
                        </b-form-group>

                        <b-form-group label="New Password Again" class="error-l-125">
                            <b-form-input type="password" v-model="$v.passwordAgain.$model" :state="!$v.passwordAgain.$error" />
                            <b-form-invalid-feedback v-if="!$v.passwordAgain.sameAsPassword">Your inputs does not match</b-form-invalid-feedback>
                        </b-form-group>
                        <b-button type="submit" variant="primary" class="mt-4">{{ $t('user.change') }}</b-button>
                </b-form>
            </b-card>
            </b-colxx>
        </b-row>    
    </app-layout>
</template>
<script>
import AppLayout from "../../layouts/EAppLayout";
import axios from "axios";
import { bUrl } from "../../constants/config";
import {
    validationMixin
} from "vuelidate";

const {
    required,
    maxLength,
    minLength,
    alpha,
    email,
    sameAs,
    numeric,
    maxValue,
    minValue,
    helpers
} = require("vuelidate/lib/validators");
const validUser = helpers.regex('upperCase', /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/)

export default {
    components: {
		"app-layout": AppLayout
	},
	data() {
		return {

            cpassword: "",
            password: '',
            passwordAgain: '',
		};
	},
    mixins: [validationMixin],
    validations: {
        cpassword: {
            required,
        },
        password: {
            required,
            minLength: minLength(6),
        },
        passwordAgain: {
            required,
            sameAsPassword: sameAs('password')
        },

    },
	methods: {
        onValitadeFormSubmit() {
        this.$v.$touch();
        console.log(this.$v.$anyError);
        if (!this.$v.$anyError) {

            console.log(this.password+" "+this.cpassword);


            let promise = axios.post(bUrl + '/users/changepass',      {
            cpassword: this.cpassword,
            password: this.password

            })
            promise.then(result => result.data)
            .then((data) => {
                
                if(data.success==1){    
                    this.$notify("success", "Password Changed", data.message, {
					duration: 3000,
					permanent: false
                });
				this.$router.push("/user/login");
                }
                else{
                    this.$notify("error", "Error Password Change", data.message, {
                        duration: 3000,
                        permanent: false
                    });

                }
            }).catch(_error => {
            this.items= []
            })






                    
        }
        },
        		logout() {
			this.signOut().then(() => {
				this.$router.push("/user/login");
			});
		},
	}
};
</script>
