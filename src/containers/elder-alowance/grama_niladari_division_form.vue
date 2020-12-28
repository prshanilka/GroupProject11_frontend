<template>
	<b-row>
		<b-colxx xl="8" lg="12" style="margin:auto ">
			<b-card>
				<div class="text-center">
					<h1>Grmma Niladari Division </h1>
				</div>
				<b-card class="mb-4 text-center" v-show="!submit_grmaniladari_div">
					<div class="icon-row-item">
						<i class="simple-icon-like text-xlarge" />
					</div>
					<h2 class="mb-2">{{$t('office.g-succsess')}}</h2>
					<p>{{$t('office.g-register')}}</p>
				</b-card>
				<b-card class="mb-4" v-show="submit_grmaniladari_div">
					<b-form @submit.prevent="onValitadeFormSubmit" class="av-tooltip tooltip-label-right">
						<b-form-group label="District">
							<b-form-select
								v-model="$v.grmaniladari_div.district_id.$model"
								:options="district_option"
								:state="!$v.grmaniladari_div.district_id.$error"
							></b-form-select>
							<b-form-invalid-feedback
								v-if="!$v.grmaniladari_div.district_id.required"
							>Please enter District</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group label="Divisional Secratary Office">
							<b-form-select
								v-model="$v.grmaniladari_div.divisional_id.$model"
								:options="divisional_off_option"
								:state="!$v.grmaniladari_div.divisional_id.$error"
							></b-form-select>
							<b-form-invalid-feedback
								v-if="!$v.grmaniladari_div.divisional_id.required"
							>Please enter Divisional Secratary Office</b-form-invalid-feedback>
						</b-form-group>
						<b-form-group label="Grama Niladari Divisional code">
							<b-form-input
								type="text"
								v-model="$v.grmaniladari_div.grmaniladari_divisional_id.$model"
								:state="!$v.grmaniladari_div.grmaniladari_divisional_id.$error"
							/>
							<b-form-invalid-feedback
								v-if="!$v.grmaniladari_div.grmaniladari_divisional_id.required"
							>Please enter Grama Niladari Divisional code</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group label=" Grama Niladari Divisional Name">
							<b-form-input
								type="text"
								v-model="$v.grmaniladari_div.grmaniladari_div_name.$model"
								:state="!$v.grmaniladari_div.grmaniladari_div_name.$error"
							/>
							<b-form-invalid-feedback
								v-if="!$v.grmaniladari_div.grmaniladari_div_name.required"
							>Please enter your Grama Niladari Divisional Name</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group label="Grama Niladari Divisional Office Address">
							<b-form-textarea
								type="text"
								v-model="$v.grmaniladari_div.office_address.$model"
								:state="!$v.grmaniladari_div.office_address.$error"
							/>
							<b-form-invalid-feedback
								v-if="!$v.grmaniladari_div.office_address.required"
							>Please enter Grama Niladari Divisional Office Address</b-form-invalid-feedback>
							<b-form-invalid-feedback
								v-else-if="!$v.grmaniladari_div.office_address.minLength || !$v.grmaniladari_div.office_address.maxLength"
							>Your Grama Niladari Divisional Office Address must be between 6 and 256 characters</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group label="Grama Niladari Divisional Office Phone No">
							<b-form-input
								type="text"
								v-model="$v.grmaniladari_div.phone_no.$model"
								:state="!$v.grmaniladari_div.phone_no.$error"
							/>
							<b-form-invalid-feedback
								v-if="!$v.grmaniladari_div.phone_no.required"
							>Please enter a Grama Niladari Divisional Office Phone No</b-form-invalid-feedback>
							<b-form-invalid-feedback
								v-else-if="!$v.grmaniladari_div.phone_no.minLength || !$v.grmaniladari_div.phone_no.maxLength"
							>Grama Niladari Divisional Office Phone No must be only 10 Numbers</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group label="Grama Niladari Divisional offfice Email" class="error-l-100">
							<b-form-input
								type="text"
								v-model="$v.grmaniladari_div.email.$model"
								:state="!$v.grmaniladari_div.email.$error"
							/>
							<b-form-invalid-feedback
								v-if="!$v.grmaniladari_div.email.required"
							>Please enter Grama Niladari Divisional email address</b-form-invalid-feedback>
							<b-form-invalid-feedback
								v-else-if="!$v.grmaniladari_div.email.email"
							>Please enter valid email address</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group label="No Of Benifishers elders From Grama Niladari Divisional">
							<b-form-input
								type="text"
								v-model="$v.grmaniladari_div.count_of_benifishers_elders.$model"
								:state="!$v.grmaniladari_div.count_of_benifishers_elders.$error"
							/>
							<b-form-invalid-feedback
								v-if="!$v.grmaniladari_div.count_of_benifishers_elders.required"
							>Please enter NoNo Of Benifishers elders From Division</b-form-invalid-feedback>
							<b-form-invalid-feedback
								v-else-if="!$v.grmaniladari_div.count_of_benifishers_elders.numeric"
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
			submit_grmaniladari_div: true,
			grmaniladari_div: {
				district_id: null,
				divisional_id: null,
				grmaniladari_divisional_id: "",
				grmaniladari_div_name: "",
				office_address: "",
				phone_no: "",
				email: "",
				count_of_benifishers_elders: ""
			},
			district_option: [
				{
					value: null,
					text: "Select an District/කරුණාකර දිස්ත්‍රික්කය තෝරන්න",
					disabled: true
				}
			],
			divisional_off_option: [
				{
					value: null,
					text: "Please select an Division",
					disabled: true
				}
			]
		};
	},
	mixins: [validationMixin],
	validations: {
		grmaniladari_div: {
			district_id: {
				required
			},
			divisional_id: {
				required
			},
			grmaniladari_divisional_id: {
				required
			},
			grmaniladari_div_name: {
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

			count_of_benifishers_elders: {
				required
			}
		}
	},
	created() {
		axios
			.get("/district/selectbox")
			.then(res => {
				console.log(res);
				this.district_option = [...this.district_option, ...res.data.data];
			})
			.catch(err => {
				console.log(err);
			});

		axios
			.get("/divisionaloffice/selectbox")
			.then(res => {
				console.log(res);
				this.divisional_off_option = [
					...this.divisional_off_option,
					...res.data.data
				];
			})
			.catch(err => {
				console.log(err);
			});
	},
	methods: {
		onValitadeFormSubmit() {
			this.$v.$touch();
			console.log(this.$v.$invalid + " Checking ");
			if (!this.$v.$invalid) {
				const body = {
					gramaniladari_division_id: this.grmaniladari_div
						.grmaniladari_divisional_id,
					district_id: this.grmaniladari_div.district_id,

					divisional_secratory_id: this.grmaniladari_div.divisional_id,
					name: this.grmaniladari_div.grmaniladari_div_name,
					address: this.grmaniladari_div.office_address,
					number: this.grmaniladari_div.phone_no,
					email: this.grmaniladari_div.email,
					count_of_benifishers: this.grmaniladari_div
						.count_of_benifishers_elders
				};
				axios({
					method: "post",
					url: "/gramadivision/",
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
						"grmaniladari-division": this.grmaniladari_div
					})
				);
				this.submit_grmaniladari_div = !this.submit_grmaniladari_div;
			}
		}
	}
};
</script>
