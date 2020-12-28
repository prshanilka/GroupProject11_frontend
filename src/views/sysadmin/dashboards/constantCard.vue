<template>
  <b-colxx  lg="12" xxs="12">
				<b-card class="mb-4 text-center" v-show="!submit_ag">
					<div class="icon-row-item">
						<i class="simple-icon-like text-xlarge" />				
					</div>
					<h2 class="mb-2">Constant Update Success</h2>
				</b-card>

				<b-card class="mb-4" v-show="submit_ag">
					<b-form @submit.prevent="onValitadeFormSubmit" class="av-tooltip tooltip-label-right">
						<b-form-group>
							<b-form-input type="text" v-model="$v.constant.$model" :state="!$v.constant.$error" />
							<b-form-invalid-feedback v-if="!$v.constant.required">Please Enter Constant</b-form-invalid-feedback>
						</b-form-group>
						<b-button type="submit" variant="primary" class="mt-4">{{ $t('form.submit') }}</b-button>
					</b-form>
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
	props: ["id"],
	data() {
		return {
			submit_ag: true,
			constant: "",
		};
	},
	mixins: [validationMixin],
	validations: {
		constant: {
			required,
		}
	},
	methods: {
		onValitadeFormSubmit() {
			this.$v.$touch();
			console.log(this.$v.$invalid + " Checking ");
			
			if (!this.$v.$invalid) {
				const body = {
					value: this.constant,
					name: this.id
				};
				axios({
					method: "patch",
					url: "/divisionaloffice/cons/",
					data: body,
				})
					.then(res => {
						this.offersData = res.data;
						console.log(res);
					})
					.catch(err => {
						console.log(err);
					});

				setTimeout(() => {
					this.$router.go(0); 
				}, 100);
				console.log(
					JSON.stringify({
						body: this.body
					})
				);
				this.submit_ag = !this.submit_ag;
			};
		}
	},
};
</script>

