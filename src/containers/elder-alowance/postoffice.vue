<template>
	<b-row>
		<b-colxx xl="8" lg="12" style="margin:auto ">
			<b-card>
				<div class="text-center">
					<h1>{{$t('office.p-form')}}</h1>
				</div>
				<b-card class="mb-4 text-center" v-show="!submit_ag">
					<h2 class="mb-2">{{$t('office.p-succsess')}}</h2>
					<p>{{$t('office.p-register')}}</p>
				</b-card>
				<b-card class="mb-4" v-show="submit_ag">
					<b-form @submit.prevent="onValitadeFormSubmit" class="av-tooltip tooltip-label-right">
						<b-form-group :label="$t('form.district')">
							<b-form-select
								v-model="$v.postoffice.district.$model"
								:options="district_option"
								:state="!$v.postoffice.district.$error"
							></b-form-select>
							<b-form-invalid-feedback v-if="!$v.postoffice.district.required">{{$t('form.e-district')}}</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group :label="$t('form.divisional')">
							<b-form-select
								v-model="$v.postoffice.divisional_off.$model"
								:options="divisional_off_option"
								:state="!$v.postoffice.divisional_off.$error"
							></b-form-select>
							<b-form-invalid-feedback
								v-if="!$v.postoffice.divisional_off.required"
							>{{$t('form.e-divisional')}}</b-form-invalid-feedback>
						</b-form-group>
						<b-form-group label="Postal Code">
							<b-form-input
								type="text"
								v-model="$v.postoffice.post_office_id.$model"
								:state="!$v.postoffice.post_office_id.$error"
							/>
							<b-form-invalid-feedback
								v-if="!$v.postoffice.post_office_id.required"
							>Please enter Postal Code</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group label="Post Office Name">
							<b-form-input
								type="text"
								v-model="$v.postoffice.name.$model"
								:state="!$v.postoffice.name.$error"
							/>
							<b-form-invalid-feedback v-if="!$v.postoffice.name.required">Please enter Post Office Name</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group label="Address">
							<b-form-textarea
								type="text"
								v-model="$v.postoffice.address.$model"
								:state="!$v.postoffice.address.$error"
							/>
							<b-form-invalid-feedback v-if="!$v.postoffice.address.required">Please enter your address</b-form-invalid-feedback>
							<b-form-invalid-feedback
								v-else-if="!$v.postoffice.address.minLength || !$v.postoffice.address.maxLength"
							>Your Address must be between 10 and 256 characters</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group label="Phone Number">
							<b-form-input
								type="text"
								v-model="$v.postoffice.phone.$model"
								:state="!$v.postoffice.phone.$error"
							/>
							<b-form-invalid-feedback v-if="!$v.postoffice.phone.required">Please enter a number</b-form-invalid-feedback>
							<b-form-invalid-feedback
								v-else-if="!$v.postoffice.phone.minLength || !$v.postoffice.phone.maxLength"
							>Phone number must be only 10 numbers</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group label="Bank Account Number">
							<b-form-input
								type="text"
								v-model="$v.postoffice.bank_account_no.$model"
								:state="!$v.postoffice.bank_account_no.$error"
							/>
							<b-form-invalid-feedback
								v-if="!$v.postoffice.bank_account_no.required"
							>Please bank account number</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group label="E-mail " class="error-l-100">
							<b-form-input
								type="text"
								v-model="$v.postoffice.email.$model"
								:state="!$v.postoffice.email.$error"
							/>
							<b-form-invalid-feedback v-if="!$v.postoffice.email.required">Please enter your email address</b-form-invalid-feedback>
							<b-form-invalid-feedback
								v-else-if="!$v.postoffice.email.email"
							>Please enter valid email address</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group label="Number of Officers">
							<b-form-input
								type="text"
								v-model="$v.postoffice.num_of_officers.$model"
								:state="!$v.postoffice.num_of_officers.$error"
							/>

							<b-form-invalid-feedback
								v-if="!$v.postoffice.num_of_officers.required"
							>Please enter number of Officers</b-form-invalid-feedback>
							<b-form-invalid-feedback
								v-if="!$v.postoffice.num_of_officers.numeric"
							>Please enter number of Officers should be numeric value</b-form-invalid-feedback>
						</b-form-group>

						<b-button type="submit" variant="primary" class="mt-4">{{ $t('form.submit') }}</b-button>
					</b-form>
				</b-card>
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
			postoffice: {
				district: null,
				divisional_off: null,
				post_office_id: "",
				name: "",
				address: "",
				phone: "",
				bank_account_no: "",
				email: "",
				num_of_officers: ""
			},
			district_option: [
				{
					value: null,
					text: "Please select an District",
					disabled: true
				}
			],
			divisional_off_option: [
				{
					value: null,
					text: "Please select an Division",
					disabled: true
				},
				{
					value: "0",
					text: "Gampaha Town"
				},
				{
					value: "1",
					text: "Henagama"
				},
				{
					value: "2",
					text: "Kiridiwala"
				},
				{
					value: "3",
					text: "kadawatha",
					disabled: true
				}
			]
		};
	},
	mixins: [validationMixin],
	validations: {
		postoffice: {
			district: {
				required
			},
			divisional_off: {
				required
			},
			post_office_id: {
				required
			},
			name: {
				required
			},
			address: {
				required,
				maxLength: maxLength(256),
				minLength: minLength(10)
			},
			phone: {
				required,
				minLength: minLength(10),
				maxLength: maxLength(10)
			},
			bank_account_no: {
				required
			},
			email: {
				required,
				email
			},
			num_of_officers: {
				required,
				numeric
			}
		}
	},
	created() {
		axios
			.get("http://localhost:3000/api/district/selectbox")
			.then(res => {
				console.log(res);
				this.district_option = [...this.district_option, ...res.data.data];
			})
			.catch(err => {
				console.log(err);
			});
	},

	methods: {
		onValitadeFormSubmit() {
			this.$v.$touch();
			console.log(this.$v.$invalid + " Checking ");
			const body = {
				post_office_id: this.postoffice.post_office_id,
				district_id: this.postoffice.district,
				divisional_id: this.postoffice.divisional_off,
				name: this.postoffice.name,
				address: this.postoffice.address,
				phone_no: this.postoffice.phone,
				bank_account_no: this.postoffice.bank_account_no,
				email: this.postoffice.email,
				num_of_offices: this.postoffice.num_of_officers
			};
			console.log(body);

			if (!this.$v.$invalid) {
				axios({
					method: "post",
					url: "http://localhost:3000/api/postoffice",
					data: body
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
						postoffice: this.postoffice
					})
				);
				this.submit_ag = !this.submit_ag;
			}
		}
	}
};
</script>
