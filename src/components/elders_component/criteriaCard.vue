<template>
  <b-colxx  lg="12" xxs="12">
    <b-card class="mb-4 text-center">
				<b-card class="mb-4 text-center" v-show="!submit_ag">
					<div class="icon-row-item">
						<i class="simple-icon-like text-xlarge" />				
					</div>
					<h2 class="mb-2">{{$t('agent.form-success')}}</h2>
					<p>{{$t('agent.form-register')}}</p>
				</b-card>

				<b-card class="mb-4" v-show="submit_ag">
					<b-form @submit.prevent="onValitadeFormSubmit" class="av-tooltip tooltip-label-right">
						<b-form-group>
							<b-form-input type="text" v-model="$v.criteria.$model" :state="!$v.criteria.$error" />
							<b-form-invalid-feedback v-if="!$v.criteria.required">Please Enter Criteria</b-form-invalid-feedback>
						</b-form-group>
						<b-button type="submit" variant="primary" class="mt-4">{{ $t('form.submit') }}</b-button>
					</b-form>
				</b-card>
			</b-card>
	</b-colxx>
</template>

<script>
import { validationMixin } from "vuelidate";
import axios from "axios";
const {
	required,
} = require("vuelidate/lib/validators");

export default {
	props: ["data"],
	data() {
		return {
			submit_ag: true,
			criteria: "",
		};
	},
	mixins: [validationMixin],
	validations: {
		criteria: {
			required,
		}
	},
	methods: {
		onValitadeFormSubmit() {
			this.$v.$touch();
			console.log(this.$v.$invalid + " Checking ");
			
			if (!this.$v.$invalid) {
				const body = {
					criteria: this.criteria,
				};
				console.log(body);
				axios({
					method: "post",
					url: "/marks/",
					data: body,
				})
					.then(res => {
						this.offersData = res.data;
						console.log(res);
					})
					.catch(err => {
						console.log(err);
					});

				console.log(
					JSON.stringify({
						criteria: this.criteria
					})
				);
				this.submit_ag = !this.submit_ag;
			};
		}
	},
};
</script>

