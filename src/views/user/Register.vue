<template>
	<b-row class="h-100">
		<b-colxx xxs="12" md="10" class="mx-auto my-auto">
			<b-card class="auth-card" no-body>
				<div class="position-relative image-side">
					<p class="text-white h2">{{ $t('dashboards.magic-is-in-the-details') }}</p>
					<p class="white mb-0">
						Please use this form to register.
						<br />If you are a member, please
						<router-link tag="a" to="/user/login" class="white">login</router-link>.
					</p>
				</div>
				<div class="form-side">
					<router-link tag="a" to="/">
						<span class="logo-single" />
					</router-link>
					<h6 class="mb-4">{{ $t('user.register')}}</h6>
		<!-- <b-form @submit.prevent="formSubmit">
						<label class="form-group has-float-label mb-4">
							<input type="text" class="form-control" v-model="fullname" />
							<span>{{ $t('user.fullname') }}</span>
						</label>
						<label class="form-group has-float-label mb-4">
							<input type="email" class="form-control" v-model="email" />
							<span>{{ $t('user.email') }}</span>
						</label>
						<label class="form-group has-float-label mb-4">
							<input type="password" class="form-control" v-model="password" />
							<span>{{ $t('user.password') }}</span>
						</label>
						<div class="d-flex justify-content-end align-items-center">
							<b-button
								type="submit"
								variant="primary"
								size="lg"
								class="btn-shadow"
							>{{ $t('user.register-button')}}</b-button>
						</div>
					</b-form> -->


				<b-form @submit.prevent="onValitadeFormSubmit" class="av-tooltip tooltip-label-right">
                <b-form-group :label="$t('user.username')">
                    <b-form-input type="text" v-model="$v.userName.$model" :state="!$v.userName.$error" />
                    <b-form-invalid-feedback v-if="!$v.userName.required">Please enter your name</b-form-invalid-feedback>
                    <b-form-invalid-feedback v-else-if="!$v.userName.minLength || !$v.userName.maxLength">Your User name must be between 4 and 8 characters</b-form-invalid-feedback>
                    <b-form-invalid-feedback v-else-if="!$v.userName.isUnique">Alredy exists</b-form-invalid-feedback>
                    <b-form-invalid-feedback v-else-if="!$v.userName.validUser">Enter A-Z a-z 1-9 with no spaces </b-form-invalid-feedback>
                </b-form-group>

                <b-form-group :label="$t('forms.email')">
                    <b-form-input type="text" v-model="$v.email.$model" :state="!$v.email.$error" />
                    <b-form-invalid-feedback v-if="!$v.email.required">Please enter your email address</b-form-invalid-feedback>
                    <b-form-invalid-feedback v-else-if="!$v.email.email">Please enter a valid email address</b-form-invalid-feedback>
                </b-form-group>



                <b-form-group label="Password" class="error-l-125">
                    <b-form-input type="password" v-model="$v.password.$model" :state="!$v.password.$error" />
                    <b-form-invalid-feedback v-if="!$v.password.required">Password cannot be empty</b-form-invalid-feedback>
                    <b-form-invalid-feedback v-if="!$v.password.minLength">Password Must Have 6 Characters </b-form-invalid-feedback>
                </b-form-group>

                <b-form-group label="Password Again" class="error-l-125">
                    <b-form-input type="password" v-model="$v.passwordAgain.$model" :state="!$v.passwordAgain.$error" />
                    <b-form-invalid-feedback v-if="!$v.passwordAgain.sameAsPassword">Your inputs does not match</b-form-invalid-feedback>
                </b-form-group>



                <b-button type="submit" variant="primary" class="mt-4">{{ $t('user.register-button') }}</b-button>
          </b-form>


















				</div>
			</b-card>
		</b-colxx>
	</b-row>
</template>
<script>
import axios from "axios";
import { adminRoot,bUrl } from "../../constants/config";
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
	data() {
		return {
            userName: "",
            email: "",
            password: '',
            passwordAgain: '',
		};
	},
    mixins: [validationMixin],
    validations: {
        userName: {
            required,
            maxLength: maxLength(8),
            minLength: minLength(2),
            alpha,
            validUser,
            async isUnique (value) {
                const requestOptions = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({"user_name":value})
                };  
                    if (value === '') return true
                    return new Promise((resolve, reject) => {

                      fetch(bUrl+"/users/checkusername",requestOptions)
                        .then(response => response.json())
                        .then(data => (resolve(data.data)))    
                        .catch(error => {
                            console.log(error)
                            reject(error)
                        });
                    })  
                }
        },

        email: {
            required,
            email
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

        const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userName: this.userName,email: this.email,password: this.password})
        };  
    
        fetch(bUrl+"/users/elderreg",requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.$notify("success", "successfully ", "Registerd", {
					duration: 3000,
					permanent: false
				});
                this.$router.push("/user/login")
            })    
            .catch(error => {
                console.log(error)
            });









                
      }
    }
	}
};
</script>
