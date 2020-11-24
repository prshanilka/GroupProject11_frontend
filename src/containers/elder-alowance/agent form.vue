<template>
	<b-row>
		<b-colxx xl="8" lg="12" style="margin:auto ">
			<b-card>
				<div class="text-center">
					<h1>{{$t('agent.form')}}</h1>
				</div>
				<b-card class="mb-4 text-center" v-show="!submit_ag">
					<h2 class="mb-2">{{$t('agent.form-success')}}</h2>
					<p>{{$t('agent.form-register')}}</p>
				</b-card>

				<b-card class="mb-4" v-show="submit_ag">
					<b-form @submit.prevent="onValitadeFormSubmit" class="av-tooltip tooltip-label-right">
						<b-form-group :label="$t('agent.name')">
							<b-form-input type="text" v-model="$v.agent.name.$model" :state="!$v.agent.name.$error" />
							<b-form-invalid-feedback v-if="!$v.agent.name.required">{{$t('form.e-name')}}</b-form-invalid-feedback>
							<b-form-invalid-feedback
								v-else-if="!$v.agent.name.minLength || !$v.agent.name.maxLength"
							>{{$t('form.v-name')}}</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group :label="$t('form.nic')">
							<b-form-input type="text" v-model="$v.agent.nic.$model" :state="!$v.agent.nic.$error" />
							<b-form-invalid-feedback v-if="!$v.agent.nic.required">{{$t('form.e-nic')}}</b-form-invalid-feedback>
							<b-form-invalid-feedback
								v-else-if="!$v.agent.nic.minLength || !$v.agent.nic.maxLength"
							>{{$t('form.v-nic')}}</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group :label="$t('form.address')" class="error-l-100">
							<b-form-textarea
								type="text"
								v-model="$v.agent.address.$model"
								:state="!$v.agent.address.$error"
							/>
							<b-form-invalid-feedback v-if="!$v.agent.address.required">{{$t('form.e-address')}}</b-form-invalid-feedback>
							<b-form-invalid-feedback
								v-else-if="!$v.agent.address.minLength || !$v.agent.address.maxLength"
							>{{$t('form.v-address')}}</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group :label="$t('form.number')">
							<b-form-input type="text" v-model="$v.agent.phone.$model" :state="!$v.agent.phone.$error" />
							<b-form-invalid-feedback v-if="!$v.agent.phone.required">{{$t('form.e-number')}}</b-form-invalid-feedback>
							<b-form-invalid-feedback
								v-else-if="!$v.agent.phone.minLength || !$v.agent.phone.maxLength"
							>{{$t('form.v-number')}}</b-form-invalid-feedback>
						</b-form-group>
						<b-form-group :label="$t('form.email')" class="error-l-100">
							<b-form-input type="text" v-model="$v.agent.email.$model" :state="!$v.agent.email.$error" />
							<b-form-invalid-feedback v-if="!$v.agent.email.required">{{$t('form.e-mail')}}</b-form-invalid-feedback>
							<b-form-invalid-feedback v-else-if="!$v.agent.email.email">{{$t('form.v-mail')}}</b-form-invalid-feedback>
						</b-form-group>
						<b-form-group :label="$t('agent.relation')">
							<b-form-input
								type="text"
								v-model="$v.agent.relationship_with_elder.$model"
								:state="!$v.agent.relationship_with_elder.$error"
							/>
							<b-form-invalid-feedback
								v-if="!$v.agent.relationship_with_elder.required"
							>{{$t('agent.e-relation')}}</b-form-invalid-feedback>
							<!-- <b-form-invalid-feedback

v-else-if="!$v.agent.relationship_with_elder.minLength || !$v.agent.relationship_with_elder.maxLength"

							>Your Agent Address must be only 10 numbers</b-form-invalid-feedback>-->
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
			agent: {
				name: "",
				nic: "",
				address: "",
				phone: "",
				email: "",
				relationship_with_elder: ""
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
		agent: {
			name: {
				required,
				maxLength: maxLength(16),
				minLength: minLength(2)
			},
			nic: {
				required,
				maxLength: maxLength(10),
				minLength: minLength(10)
			},
			address: {
				required,
				minLength: minLength(6),
				maxLength: maxLength(256)
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
			relationship_with_elder: {
				required,
				minLength: minLength(3),
				maxLength: maxLength(16)
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
					elder_id: "11",
					name: this.agent.name,
					nic: this.agent.nic,
					address: this.agent.address,
					phone: this.agent.phone,
					email: this.agent.email,
					relation_with_elder: this.agent.relationship_with_elder
				};
				axios({
					method: "post",
					url: "http://localhost:3000/api/agent",
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
						agent: this.agent
					})
				);
				this.submit_ag = !this.submit_ag;
			}
		}
	}
};
</script>
