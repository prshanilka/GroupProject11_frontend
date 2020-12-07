<template>
	<b-row>
		<b-colxx xl="12" lg="12" style="margin:auto ">
			<b-card>
				<div class="text-center">
					<h1>Update Post Officer </h1>
				</div>
				<b-card class="mb-4 text-center" v-show="!submit_ag">
					<div class="icon-row-item">
						<i class="simple-icon-like text-xlarge" />
					</div>
					<h2 class="mb-2">{{$t('officer.form-success')}}</h2>
					<p>{{$t('officer.form-register')}}</p>
				</b-card>
				<b-card class="mb-4" v-show="submit_ag">
					<b-form @submit.prevent="onValitadeFormSubmit" class="av-tooltip tooltip-label-right">
						<b-form-group :label="$t('officer.id')">
							<b-form-input
								type="text"
								v-model="$v.postoffice_officer.officer_id.$model"
								:state="!$v.postoffice_officer.officer_id.$error"
							/>
							<b-form-invalid-feedback
								v-if="!$v.postoffice_officer.officer_id.required"
							>{{$t('officer.e-id')}}</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group :label="$t('officer.name')">
							<b-form-input
								type="text"
								v-model="$v.postoffice_officer.name.$model"
								:state="!$v.postoffice_officer.name.$error"
							/>
							<b-form-invalid-feedback v-if="!$v.postoffice_officer.name.required">{{$t('form.e-name')}}</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group :label="$t('form.nic')">
							<b-form-input
								type="text"
								v-model="$v.postoffice_officer.nic.$model"
								:state="!$v.postoffice_officer.nic.$error"
							/>
							<b-form-invalid-feedback v-if="!$v.postoffice_officer.nic.required">{{$t('form.e-nic')}}</b-form-invalid-feedback>
							<b-form-invalid-feedback
								v-else-if="!$v.postoffice_officer.nic.minLength || !$v.postoffice_officer.nic.maxLength"
							>{{$t('form.v-nic')}}</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group :label="$t('form.number')">
							<b-form-input
								type="text"
								v-model="$v.postoffice_officer.phone.$model"
								:state="!$v.postoffice_officer.phone.$error"
							/>
							<b-form-invalid-feedback v-if="!$v.postoffice_officer.phone.required">{{$t('form.e-number')}}</b-form-invalid-feedback>
							<b-form-invalid-feedback
								v-else-if="!$v.postoffice_officer.phone.minLength || !$v.postoffice_officer.phone.maxLength"
							>{{$t('form.v-number')}}</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group :label="$t('form.email')" class="error-l-100">
							<b-form-input
								type="text"
								v-model="$v.postoffice_officer.email.$model"
								:state="!$v.postoffice_officer.email.$error"
							/>
							<b-form-invalid-feedback v-if="!$v.postoffice_officer.email.required">{{$t('form.e-mail')}}</b-form-invalid-feedback>
							<b-form-invalid-feedback v-else-if="!$v.postoffice_officer.email.email">{{$t('form.v-mail')}}</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group :label="$t('form.district')">
							<b-form-select
								v-model="$v.postoffice_officer.district_id.$model"
								:options="district_option"
								:state="!$v.postoffice_officer.district_id.$error"
							></b-form-select>
							<b-form-invalid-feedback
								v-if="!$v.postoffice_officer.district_id.required"
							>{{$t('form.e-district')}}</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group :label="$t('form.divisional')">
							<b-form-select
								v-model="$v.postoffice_officer.divisional_id.$model"
								:options="divisional_off_option"
								:state="!$v.postoffice_officer.divisional_id.$error"
							></b-form-select>
							<b-form-invalid-feedback
								v-if="!$v.postoffice_officer.divisional_id.required"
							>{{$t('form.e-divisional')}}</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group :label="$t('form.post')">
							<b-form-select
								v-model="$v.postoffice_officer.post_office_id.$model"
								:options="post_off_option"
								:state="!$v.postoffice_officer.post_office_id.$error"
							/>
							<b-form-invalid-feedback
								v-if="!$v.postoffice_officer.post_office_id.required"
							>{{$t('form.e-post')}}</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group :label="$t('officer.type')">
							<b-form-input
								type="text"
								v-model="$v.postoffice_officer.type.$model"
								:state="!$v.postoffice_officer.type.$error"
							/>
							<b-form-invalid-feedback v-if="!$v.postoffice_officer.type.required">{{$t('officer.e-type')}}</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group :label="$t('officer.designation')">
							<b-form-input
								type="text"
								v-model="$v.postoffice_officer.designation.$model"
								:state="!$v.postoffice_officer.designation.$error"
							/>
							<b-form-invalid-feedback
								v-if="!$v.postoffice_officer.designation.required"
							>{{$t('officer.e-designation')}}</b-form-invalid-feedback>
						</b-form-group>

						<b-button type="submit" variant="primary" class="mt-4"> Update</b-button>
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
			postoffice_officer: {
				officer_id: "",
				name: "",
				nic: "",
				phone: "",
				email: "",
				district_id: null,
				divisional_id: null,
				post_office_id: null,
				type: "",
				designation: ""
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
					text:
						"Select an Division Secretary Office/කරුණාකර ප්‍රාදේශීය ලේකම් කාර්යාලය තෝරන්න",
					disabled: true
				}
			],
			post_off_option: [
				{
					value: null,
					text:
						"Select Nearest Post Office/කරුණාකර ළඟම ඇති තැපැල් කාර්යාලය තෝරන්න",
					disabled: true
				}
			]
		};
	},
	mixins: [validationMixin],
	validations: {
		postoffice_officer: {
			officer_id: {
				required
			},
			name: {
				required
			},
			nic: {
				required,
				minLength: minLength(10),
				maxLength: maxLength(10)
			},
			phone: {
				required,
				minLength: minLength(10),
				maxLength: maxLength(10)
			},
			email: {
				required,
				email
			},
			district_id: {
				required
			},
			divisional_id: {
				required
			},
			post_office_id: {
				required
			},
			type: {
				required
			},
			designation: {
				required
			}
		}
	},
	props: ["id"],
	created() {
		axios
			.get("/district/selectbox")
			.then(res => {
				// console.log(res);
				this.district_option = [...this.district_option, ...res.data.data];
			})
			.catch(err => {
				console.log(err);
			});

		axios
			.get("/divisionaloffice/selectbox")
			.then(res => {
				// console.log(res);
				this.divisional_off_option = [
					...this.divisional_off_option,
					...res.data.data
				];
			})
			.catch(err => {
				console.log(err);
			});

		axios
			.get("/postoffice/selectbox")
			.then(res => {
				// console.log(res);
				this.post_off_option = [...this.post_off_option, ...res.data.data];
			})
			.catch(err => {
				console.log(err);
			});
		axios({
			method: "get",
			url: "/postofficers/officer/byid/" + this.id
		}).then(result => {
			console.log(result.data);

			this.postoffice_officer.officer_id = result.data.data.o_id;
			this.postoffice_officer.name = result.data.data.o_name;
			this.postoffice_officer.nic = result.data.data.o_nic;
			this.postoffice_officer.phone = result.data.data.o_phone;
			this.postoffice_officer.email = result.data.data.o_email;
			this.postoffice_officer.district_id = result.data.data.o_district;
			this.postoffice_officer.divisional_id = result.data.data.o_division;
			this.postoffice_officer.post_office_id = result.data.data.p_post;
			this.postoffice_officer.type = result.data.data.o_type;
			this.postoffice_officer.designation = result.data.data.o_designation;
		});
	},
	methods: {
		onValitadeFormSubmit() {
			this.$v.$touch();
			console.log(this.$v.$invalid + " Checking ");
			if (!this.$v.$invalid) {
				this.submit_ag = !this.submit_ag;
				const officer = {
					officer_id: this.postoffice_officer.officer_id,
					nic_no: this.postoffice_officer.nic,
					name: this.postoffice_officer.name,
					email: this.postoffice_officer.email,
					phone: this.postoffice_officer.phone
				};
				const postofficer = {
					officer_id: this.postoffice_officer.officer_id,
					post_office_id: this.postoffice_officer.post_office_id,
					district_id: this.postoffice_officer.district_id,
					division: this.postoffice_officer.divisional_id,
					type: this.postoffice_officer.type,
					designation: this.postoffice_officer.designation
				};
				const body = {
					officer,
					postofficer
				};
				axios({
					method: "patch",
					url: "/postofficers/updatepostofficer",
					data: body
				}).then(res => {
					console.log(res);
					console.log(
						JSON.stringify({
							postoffice_officer: this.postoffice_officer
						})
					);
				});
			}
		}
	}
};
</script>
