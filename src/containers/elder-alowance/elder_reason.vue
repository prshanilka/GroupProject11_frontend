<template>
	<b-row>
		<b-colxx xl="8" lg="12" style="margin:auto ">
			<b-card>
				<div class="text-center mb-5">
					<h1>Submit the reson for the not taking the payments</h1>
				</div>
				<b-card class="mb-4 text-center" v-show="!submit_ag">
					<div class="icon-row-item">
						<i class="simple-icon-like text-xlarge" />				
					</div>
					<h2 class="mb-2">Succesfully Submited the Reason</h2>
					<p>payment details updated</p>
				</b-card>

				<b-card class="mb-4" v-show="submit_ag">
					<b-form @submit.prevent="onValitadeFormSubmit" class="av-tooltip tooltip-label-right">
						<b-form-group label="Elder Full Name">
							<b-form-input
								type="text"
								:disabled="true"
								v-model="$v.reason.name.$model"
								:state="!$v.reason.name.$error"
							/>
							<b-form-invalid-feedback v-if="!$v.reason.name.required">{{$t('form.e-name')}}</b-form-invalid-feedback>
							<b-form-invalid-feedback
								v-else-if="!$v.reason.name.minLength || !$v.reason.name.maxLength"
							>{{$t('form.v-name')}}</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group :label="$t('form.nic')">
							<b-form-input
								type="text"
								v-model="$v.reason.nic.$model"
								:state="!$v.reason.nic.$error"
								:disabled="true"
							/>
							<b-form-invalid-feedback v-if="!$v.reason.nic.required">{{$t('form.e-nic')}}</b-form-invalid-feedback>
							<b-form-invalid-feedback
								v-else-if="!$v.reason.nic.minLength || !$v.reason.nic.maxLength"
							>{{$t('form.v-nic')}}</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group label="Year" class="error-l-100">
							<b-form-input
								type="text"
								v-model="$v.reason.year.$model"
								:state="!$v.reason.year.$error"
								:disabled="true"
							/>
							<b-form-invalid-feedback v-if="!$v.reason.year.required">{{$t('form.e-address')}}</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group label="Month">
							<b-form-input
								type="text"
								v-model="$v.reason.month.$model"
								:state="!$v.reason.month.$error"
								:disabled="true"
							/>
							<b-form-invalid-feedback v-if="!$v.reason.month.required">{{$t('form.e-number')}}</b-form-invalid-feedback>
							<b-form-invalid-feedback
								v-else-if="!$v.reason.month.minLength || !$v.reason.month.maxLength"
							>{{$t('form.v-number')}}</b-form-invalid-feedback>
						</b-form-group>
						<b-form-group label="Reason" class="error-l-100">
							<b-form-textarea
								type="text"
								v-model="$v.reason.reason.$model"
								:state="!$v.reason.reason.$error"
							/>
							<b-form-invalid-feedback
								v-if="!$v.reason.reason.required"
							>Pleace Enter Rason for Not Tacking Money</b-form-invalid-feedback>
							<b-form-invalid-feedback
								v-else-if="!$v.reason.reason.minLength || !$v.reason.reason.maxLength"
							>Length should be between 9 and 50</b-form-invalid-feedback>
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
			reason: {
				name: "",
				nic: "",
				year: "",
				month: "",
				reason: ""
			}
		};
	},
	props: ["pay_id"],
	created() {
		axios
			.get(
				"http://localhost:3000/api/elders/eldertopatid/" + this.$props.pay_id
			)
			.then(res => {
				this.reason.name = res.data.data.name;
				this.reason.nic = res.data.data.nic_id;
				this.reason.year = res.data.data.year;
				this.reason.month = res.data.data.month;
				console.log(res.data.data);
			})
			.catch(err => {
				console.log(err);
			});
	},
	mixins: [validationMixin],
	validations: {
		reason: {
			name: {
				required,
				maxLength: maxLength(30),
				minLength: minLength(3)
			},
			nic: {
				required,
				maxLength: maxLength(10),
				minLength: minLength(10)
			},
			year: {
				required
			},
			month: {
				required
			},
			reason: {
				required,
				minLength: minLength(7),
				maxLength: maxLength(50)
			}
		}
	},
	methods: {
		onValitadeFormSubmit() {
			this.$v.$touch();
			console.log(this.$v.$invalid + " Checking ");

			if (!this.$v.$invalid) {
				const body = {
					payment_id: this.$props.pay_id,
					reson_for_not_take_money: this.reason.reason
				};
				axios({
					method: "patch",
					url: "http://localhost:3000/api/paymentposttoben/elderreason",
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
						reason: this.reason
					})
				);
				this.submit_ag = !this.submit_ag;
			}
		}
	}
};
</script>
