<template>
	<b-row>
		<b-colxx   lg="12" style="margin:auto ">
			 
				 
				<b-card class="mb-4 text-center" v-show="!submit_ag">
					<div class="icon-row-item">
						<i class="simple-icon-like text-xlarge" />				
					</div>
					<h2 class="mb-2">Notify Elders</h2>
					<p>Notify Elders Process is Succesfull</p>
				</b-card>

				<b-card class="mb-4" v-show="submit_ag">
					<b-form @submit.prevent="onValitadeFormSubmit" class="av-tooltip tooltip-label-right">
						 
 

						<b-form-group label="Message" class="error-l-100">
							<b-form-textarea
								type="text"
								v-model="$v.message.$model"
								:state="!$v.message.$error"
							/>
							<b-form-invalid-feedback v-if="!$v.message.required">{{$t('form.e-address')}}</b-form-invalid-feedback>
							<b-form-invalid-feedback
								v-else-if="!$v.message.minLength || !$v.message.maxLength"
							>{{$t('form.v-address')}}</b-form-invalid-feedback>
						</b-form-group>
 
						<b-button type="submit" variant="primary" class="mt-4">{{ $t('form.submit') }}</b-button>
					</b-form>
				</b-card>
			 
		</b-colxx>
	</b-row>
</template>

<script>
import { validationMixin } from "vuelidate";
import axios from "axios";
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

const upperCase = helpers.regex("upperCase", /^[A-Z]*$/);

export default {
	data() {
		return {
			submit_ag: true,
			message:""
		};
	},
	mixins: [validationMixin],
	validations: {
		
			message: {
				required,
				minLength: minLength(6),
				maxLength: maxLength(256)
			},
		
 
	},
	methods: {
		onValitadeFormSubmit() {
			this.$v.$touch();
			console.log(this.$v.$invalid + " Checking ");
                     
			if (!this.$v.$invalid) {
				const body = {
					message:this.message
				};
				axios({
					method: "post",
					url: "/postoffice/notifyelders",
					data: body
				})
					.then(res => {
						this.offersData = res.data;
						console.log(res);
					})
					.catch(err => {
						console.log(err);
					});

				console.log(body);
				this.submit_ag = !this.submit_ag;
			}
		}
	}
};
</script>
