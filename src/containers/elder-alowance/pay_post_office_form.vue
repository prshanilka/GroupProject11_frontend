<template>
	<b-row>
		<b-colxx xl="8" lg="12" style="margin:auto ">
			<b-card>
				<div class="text-center">
					<h1>Payment Details</h1>
				</div>
				<b-card class="mb-4 text-center" v-show="!submit_pay">
					<h2 class="mb-2">You SuccecFully Added The Payment Details</h2>
					<p>Payment Details are Submitted Now</p>
				</b-card>
				<b-card class="mb-4" v-show="submit_pay">
					<b-form @submit.prevent="onValitadeFormSubmit" class="av-tooltip tooltip-label-right">
						<b-form-group label="District Id">
							<b-form-select
								v-model="$v.pay_details.district_id.$model"
								:options="district_option"
								:state="!$v.pay_details.district_id.$error"
							></b-form-select>
							<b-form-invalid-feedback
								v-if="!$v.pay_details.district_id.required"
							>{{$t('form.e-divisional')}}</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group label="Divisional Id" class="error-l-100">
							<b-form-select
								v-model="$v.pay_details.divisional_id.$model"
								:options="divisional_off_option"
								:state="!$v.pay_details.divisional_id.$error"
							></b-form-select>
							<b-form-invalid-feedback
								v-if="!$v.pay_details.divisional_id.required"
							>{{$t('office.d-e-name')}}</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group label="Post Office Id">
							<b-form-input
								type="text"
								v-model="$v.pay_details.post_office_id.$model"
								:state="!$v.pay_details.post_office_id.$error"
							/>
							<b-form-invalid-feedback
								v-if="!$v.pay_details.post_office_id.required"
							>Please Enter Post Office Id</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group label="Check Number">
							<b-form-input
								type="text"
								v-model="$v.pay_details.check_no.$model"
								:state="!$v.pay_details.check_no.$error"
							/>
							<b-form-invalid-feedback v-if="!$v.pay_details.check_no.required">Please Enter Check Number</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group label="Date">
							<b-form-input
								type="text"
								v-model="$v.pay_details.date.$model"
								:state="!$v.pay_details.date.$error"
							/>
							<b-form-invalid-feedback v-if="!$v.pay_details.date.required">Please Enter Date</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group label="Total Amount">
							<b-form-input
								type="text"
								v-model="$v.pay_details.total_money_amount.$model"
								:state="!$v.pay_details.total_money_amount.$error"
							/>
							<b-form-invalid-feedback
								v-if="!$v.pay_details.total_money_amount.required"
							>Please Enter Total Amount of Money</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group label="Credited Accont Number">
							<b-form-input
								type="text"
								v-model="$v.pay_details.credite_account_no.$model"
								:state="!$v.pay_details.credite_account_no.$error"
							/>
							<b-form-invalid-feedback
								v-if="!$v.pay_details.credite_account_no.required"
							>Please Enter Credited Account Number</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group label="Debited Accont Number">
							<b-form-input
								type="text"
								v-model="$v.pay_details.debited_account_no.$model"
								:state="!$v.pay_details.debited_account_no.$error"
							/>
							<b-form-invalid-feedback
								v-if="!$v.pay_details.debited_account_no.required"
							>Please Enter Debited Accont Number</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group label="Year">
							<b-form-input
								type="text"
								v-model="$v.pay_details.year.$model"
								:state="!$v.pay_details.year.$error"
							/>
							<b-form-invalid-feedback v-if="!$v.pay_details.year.required">Please Enter Year</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group label="Month">
							<b-form-select
								:options="month_option"
								v-model="$v.pay_details.month.$model"
								:state="!$v.pay_details.month.$error"
							/>
							<b-form-invalid-feedback v-if="!$v.pay_details.month.required">Please Enter Month</b-form-invalid-feedback>
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
			submit_pay: true,
			pay_details: {
				district_id: null,
				divisional_id: null,
				post_office_id: "",
				check_no: "",
				date: "",
				total_money_amount: "",
				credite_account_no: "",
				debited_account_no: "",
				sent_date: new Date(),
				year: "",
				month: null
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
			],
			month_option: [
				{
					value: null,
					text: "Please select an Month",
					disabled: true
				},
				{
					value: 1,
					text: "January"
				},
				{
					value: 2,
					text: "February"
				},
				{
					value: 3,
					text: "March"
				},
				{
					value: 4,
					text: "April"
				}
			]
		};
	},
	mixins: [validationMixin],
	validations: {
		pay_details: {
			district_id: {
				required
			},
			divisional_id: {
				required
			},
			post_office_id: {
				required
			},
			check_no: {
				required
			},
			date: {
				required
			},
			total_money_amount: {
				required
			},
			credite_account_no: {
				required
			},
			debited_account_no: {
				required
			},
			year: {
				required
			},
			month: {
				required
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

		axios
			.get("http://localhost:3000/api/divisionaloffice/selectbox")
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
			console.log(this.pay_details);

			console.log(this.$v.$invalid + " Checking ");
			if (!this.$v.$invalid) {
				const body = {
					// district_id: this.pay_details.district_id,
					// divisional_id: this.pay_details.divisional_id,
					// post_office_id: this.pay_details.post_office_id,
					// check_no: this.pay_details.check_no,
					// date: this.pay_details.date,
					// total_money_amount: this.pay_details.total_money_amount,
					// credite_account_no: this.pay_details.credite_account_no,
					// debited_account_no: this.pay_details.debited_account_no,
					// year: this.pay_details.year,
					// month: this.pay_details.month
					district_id: this.pay_details.district_id,
					divisional_id: this.pay_details.divisional_id,
					post_office_id: this.pay_details.post_office_id,
					check_no: this.pay_details.check_no,
					date: this.pay_details.date,

					total_money_amount: this.pay_details.total_money_amount,
					credite_account_no: this.pay_details.credite_account_no,
					debited_account_no: this.pay_details.debited_account_no,
					amount_of_money_debited_to_centrel_bank:
						this.pay_details.total_money_amount * 0.05,
					sent_amount_to_post_office:
						this.pay_details.total_money_amount * 0.95,

					centrel_bank_acount_no: "121121",
					year: this.pay_details.year,
					month: this.pay_details.month,
					send_date: this.pay_details.sent_date,
					divisional_payment_id: ""
				};
				axios({
					method: "post",
					url: "http://localhost:3000/api/paymentdivoff",
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
						pay_details: this.pay_details
					})
				);

				this.submit_pay = !this.submit_pay;
			}
		}
	}
};
</script>
