<template>
	<b-row>
		<b-colxx xl="8" lg="12" style="margin:auto ">
			<b-card>
				<div class="text-center">
					<h1>District Office Form</h1>
				</div>
				<b-card class="mb-4 text-center" v-show="!submit_dis">
					<div class="icon-row-item">
						<i class="simple-icon-like text-xlarge" />				
					</div>
					<h2 class="mb-2">You SuccecFully Added The District Office</h2>
					<p>District office is registerd Now</p>
				</b-card>
				<b-card class="mb-4" v-show="submit_dis">
					<b-form @submit.prevent="onValitadeFormSubmit" class="av-tooltip tooltip-label-right">
						<b-form-group label="District Id">
							<b-form-input
								type="text"
								v-model="$v.dis_off.district_id.$model"
								:state="!$v.dis_off.district_id.$error"
							/>
							<b-form-invalid-feedback v-if="!$v.dis_off.district_id.required">{{$t('form.e-divisional')}}</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group label="District Name" class="error-l-100">
							<b-form-input
								type="text"
								v-model="$v.dis_off.district_name.$model"
								:state="!$v.dis_off.district_name.$error"
							/>
							<b-form-invalid-feedback v-if="!$v.dis_off.district_name.required">{{$t('office.d-e-name')}}</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group label="District Office Address">
							<b-form-textarea
								type="text"
								v-model="$v.dis_off.office_address.$model"
								:state="!$v.dis_off.office_address.$error"
							/>
							<b-form-invalid-feedback
								v-if="!$v.dis_off.office_address.required"
							>{{$t('office.e-address')}}</b-form-invalid-feedback>
							<b-form-invalid-feedback
								v-else-if="!$v.dis_off.office_address.minLength || !$v.dis_off.office_address.maxLength"
							>{{$t('office.v-address')}}</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group label="Phone Number">
							<b-form-input
								type="text"
								v-model="$v.dis_off.phone_no.$model"
								:state="!$v.dis_off.phone_no.$error"
							/>
							<b-form-invalid-feedback v-if="!$v.dis_off.phone_no.required">{{$t('office.e-number')}}</b-form-invalid-feedback>
							<b-form-invalid-feedback
								v-else-if="!$v.dis_off.phone_no.minLength || !$v.dis_off.phone_no.maxLength"
							>{{$t('office.v-number')}}</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group label="Email" class="error-l-100">
							<b-form-input
								type="text"
								v-model="$v.dis_off.email.$model"
								:state="!$v.dis_off.email.$error"
							/>
							<b-form-invalid-feedback v-if="!$v.dis_off.email.required">{{$t('office.e-mail')}}</b-form-invalid-feedback>
							<b-form-invalid-feedback v-else-if="!$v.dis_off.email.email">{{$t('office.v-mail')}}</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group label="Bank Account No">
							<b-form-input
								type="text"
								v-model="$v.dis_off.bank_account.$model"
								:state="!$v.dis_off.bank_account.$error"
							/>
							<b-form-invalid-feedback
								v-if="!$v.dis_off.bank_account.required"
							>Please enter a Divisional Office BAnk Account No</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group label="No Of Benifishers ">
							<b-form-input
								type="text"
								v-model="$v.dis_off.count_of_benifishers_elders.$model"
								:state="!$v.dis_off.count_of_benifishers_elders.$error"
							/>
							<b-form-invalid-feedback
								v-if="!$v.dis_off.count_of_benifishers_elders.required"
							>Please enter NoNo Of Benifishers elders From Division</b-form-invalid-feedback>
							<b-form-invalid-feedback
								v-else-if="!$v.dis_off.count_of_benifishers_elders.numeric"
							>Please enter Numeric Value</b-form-invalid-feedback>
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
			submit_dis: true,
			dis_off: {
				district_id: "",
				district_name: "",
				office_address: "",
				phone_no: "",
				email: "",
				bank_account: "",
				count_of_benifishers_elders: ""
			}

			// name: "",
			// email: "",
			// emailAgain: "",
			// number: "",
			// max: "",
			// min: "",
			// withRegex: ""
		};
	},
	mixins: [validationMixin],
	validations: {
		dis_off: {
			district_id: {
				required
			},
			district_name: {
				required
			},
			office_address: {
				required,
				minLength: minLength(6),
				maxLength: maxLength(256)
			},
			phone_no: {
				required,
				minLength: minLength(10),
				maxLength: maxLength(10)
			},
			email: {
				required,
				email
			},
			bank_account: {
				required
			},
			count_of_benifishers_elders: {
				required
			}
		}

		// name: {
		// 	required,
		// 	maxLength: maxLength(16),
		// 	minLength: minLength(2),
		// 	alpha
		// },
		// email: {
		// 	required,
		// 	email
		// },
		// emailAgain: {
		// 	required,
		// 	email,
		// 	sameAsEmail: sameAs("email")
		// },
		// number: {
		// 	required,
		// 	numeric
		// },
		// max: {
		// 	required,
		// 	numeric,
		// 	maxValue: maxValue(5)
		// },
		// min: {
		// 	required,
		// 	numeric,
		// 	minValue: minValue(5)
		// },
		// withRegex: {
		// 	required,
		// 	upperCase
		// }
	},
	methods: {
		onValitadeFormSubmit() {
			this.$v.$touch();
			console.log(this.$v.$invalid + " Checking ");
			if (!this.$v.$invalid) {
				const body = {
					district_id: this.dis_off.district_id,
					district_name: this.dis_off.district_name,
					office_address: this.dis_off.office_address,
					phone_no: this.dis_off.phone_no,
					email: this.dis_off.email,
					bank_account: this.dis_off.bank_account,
					count_of_benifishers_elders: this.dis_off.count_of_benifishers_elders
				};
				axios({
					method: "post",
					url: "http://localhost:3000/api/district/",
					data: body
				})
					.then(res => {
						this.offersData = res.data;
						console.log(res);
					})
					.catch(err => {
						console.log(err);
					});

				this.submit_dis = !this.submit_dis;
				console.log(
					JSON.stringify({
						"div-office": this.dis_off
					})
				);
			}
		}
	}
};
</script>
