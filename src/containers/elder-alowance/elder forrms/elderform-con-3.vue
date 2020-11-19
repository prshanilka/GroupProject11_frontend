<template>
	<b-row>
		<b-colxx xxs="12">
			<b-card>
				<div class="text-center">
					<h1>{{$t('elder.form')}}</h1>
				</div>
			</b-card>

			<b-card class="mb-4">
				<b-form class="av-tooltip tooltip-label-right">
					<b-form-group :label="$t('elder.smurdi')">
						<b-form-input
							type="text"
							v-model="$v.elder.samurdi_no.$model"
							:state="!$v.elder.samurdi_no.$error"
						/>
						<b-form-invalid-feedback
							v-if="!$v.elder.samurdi_no.minLength || !$v.elder.samurdi_no.maxLength"
						>
							Your Samurdi no must be between 3 and 16
							characters
						</b-form-invalid-feedback>
					</b-form-group>

					<b-form-group :label="$t('elder.aid')">
						<b-form-input
							type="text"
							v-model="$v.elder.people_aid_no.$model"
							:state="!$v.elder.people_aid_no.$error"
						/>
						<b-form-invalid-feedback
							v-if="!$v.elder.people_aid_no.minLength || !$v.elder.people_aid_no.maxLength"
						>
							Your People Aid no must be between 3 and 16
							characters
						</b-form-invalid-feedback>
					</b-form-group>

					<b-form-group :label="$t('elder.other')" class="error-l-100">
						<b-form-input
							type="text"
							v-model="$v.elder.other_no.$model"
							:state="!$v.elder.other_no.$error"
						/>
						<b-form-invalid-feedback v-if="!$v.elder.other_no.minLength || !$v.elder.other_no.maxLength">
							Your Other No must be between 3 and 16
							characters
						</b-form-invalid-feedback>
					</b-form-group>

					<b-form-group label="Agent name(if appointing)" class="error-l-100">
						<b-form-input
							type="text"
							v-model="$v.elder.agent_name.$model"
							:state="!$v.elder.agent_name.$error"
						/>
						<b-form-invalid-feedback
							v-if="!$v.elder.agent_name.minLength || !$v.elder.agent_name.maxLength"
						>
							Your Agent name must be between 6 and 16
							characters
						</b-form-invalid-feedback>
					</b-form-group>

					<b-form-group label="Agent Nic ">
						<b-form-input
							type="text"
							v-model="$v.elder.agent_nic.$model"
							:state="!$v.elder.agent_nic.$error"
						/>
						<b-form-invalid-feedback
							v-if="!$v.elder.agent_nic.minLength || !$v.elder.agent_nic.maxLength"
						>
							Your Agent Nic only 10
							characters
						</b-form-invalid-feedback>
					</b-form-group>

					<b-form-group label="Agent phone no">
						<b-form-input
							type="text"
							v-model="$v.elder.agent_phone_no.$model"
							:state="!$v.elder.agent_phone_no.$error"
						/>
						<b-form-invalid-feedback
							v-if="!$v.elder.agent_phone_no.minLength || !$v.elder.agent_phone_no.maxLength"
						>
							YourAgent phone no only 10
							characters
						</b-form-invalid-feedback>
					</b-form-group>
					<b-form-group label="Agent Address" class="error-l-125">
						<b-form-input
							type="text"
							v-model="$v.elder.agent_address.$model"
							:state="!$v.elder.agent_address.$error"
						/>
						<b-form-invalid-feedback
							v-if="!$v.elder.agent_address.minLength || !$v.elder.agent_address.maxLength"
						>
							Your Agent Address be between 10 and 256
							characters
						</b-form-invalid-feedback>
					</b-form-group>
					<b-form-group label="Agent relationship with Elder" class="error-l-125">
						<b-form-input
							type="text"
							v-model="$v.elder.agent_relationship_with_elder.$model"
							:state="!$v.elder.agent_relationship_with_elder.$error"
						/>
						<b-form-invalid-feedback
							v-if="!$v.elder.agent_relationship_with_elder.minLength || !$v.elder.agent_relationship_with_elder.maxLength"
						>
							Your Agent relationship with Elder must be between 4 and 16
							characters
						</b-form-invalid-feedback>
					</b-form-group>
				</b-form>
			</b-card>
		</b-colxx>
	</b-row>
</template>

<script>
import { validationMixin } from "vuelidate";
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
			name: "",
			email: "",
			emailAgain: "",
			number: "",
			max: "",
			min: "",
			withRegex: "",
			elder: {
				samurdi_no: "",
				people_aid_no: "",
				other_no: "",
				agent_name: "",
				agent_nic: "",
				agent_phone_no: "",
				agent_address: "",
				agent_relationship_with_elder: ""
			}
		};
	},
	mixins: [validationMixin],
	validations: {
		elder: {
			samurdi_no: {
				minLength: minLength(3),
				maxLength: maxLength(16)
			},
			people_aid_no: {
				minLength: minLength(3),
				maxLength: maxLength(16)
			},
			other_no: {
				minLength: minLength(3),
				maxLength: maxLength(16)
			},
			agent_name: {
				minLength: minLength(6),
				maxLength: maxLength(32)
			},
			agent_nic: {
				minLength: minLength(10),
				maxLength: maxLength(10)
			},
			agent_phone_no: {
				numeric,
				minLength: minLength(10),
				maxLength: maxLength(10)
			},
			agent_address: {
				minLength: minLength(10),
				maxLength: maxLength(256)
			},
			agent_relationship_with_elder: {
				minLength: minLength(4),
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
			console.log(this.$v.$invalid + "errere 3");
			console.log(
				JSON.stringify({
					elder: this.elder
				})
			);

			if (!this.$v.$invalid) {
				return {
					valid: this.$v.$invalid,
					elder: this.elder
				};
			} else {
				return {
					valid: this.$v.$invalid
				};
			}
		}
	}
};
</script>
