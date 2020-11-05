<template>
	<b-row>
		<b-colxx xxs="12" class="align-self-center">
			<div class="text-center">
				<h1>Elder Form</h1>
			</div>

			<b-card class="mb-4">
				<b-form class="av-tooltip tooltip-label-right">
					<b-form-group label="Elders Id (if exists) ">
						<b-form-input
							type="text"
							v-model="$v.elder.elder_id.$model"
							:state="!$v.elder.elder_id.$error"
						/>
						<b-form-invalid-feedback v-if="!$v.elder.elder_id.minLength || !$v.elder.elder_id.maxLength">
							Your Elders Id must be between 2 and 16
							characters
						</b-form-invalid-feedback>
					</b-form-group>
					<b-form-group label="Local elder committe name (if only a member) ">
						<b-form-input
							type="text"
							v-model="$v.elder.elder_committe_name.$model"
							:state="!$v.elder.elder_committe_name.$error"
						/>
						<b-form-invalid-feedback
							v-if="!$v.elder.elder_committe_name.minLength || !$v.elder.elder_committe_name.maxLength"
						>
							Your Local elder committe name must be between 3 and 16
							characters
						</b-form-invalid-feedback>
					</b-form-group>

					<b-form-group label="committe Membership No (if only a member)">
						<b-form-input
							type="text"
							v-model="$v.elder.comm_membership_no.$model"
							:state="!$v.elder.comm_membership_no.$error"
						/>
						<b-form-invalid-feedback
							v-if="!$v.elder.comm_membership_no.minLength || !$v.elder.comm_membership_no.maxLength"
						>
							Your committe Membership No must be between 3 and 16
							characters
						</b-form-invalid-feedback>
					</b-form-group>

					<b-form-group label="Nearest Post Office" class="error-l-100">
						<b-form-input
							type="text"
							v-model="$v.elder.nearest_post_office.$model"
							:state="!$v.elder.nearest_post_office.$error"
						/>
						<b-form-invalid-feedback
							v-if="!$v.elder.nearest_post_office.required"
						>Please enter a Your Source of Income</b-form-invalid-feedback>
						<b-form-invalid-feedback
							v-if="!$v.elder.nearest_post_office.minLength || !$v.elder.nearest_post_office.maxLength"
						>
							Your Nearest Post Office No must be between 3 and 16
							characters
						</b-form-invalid-feedback>
					</b-form-group>

					<b-form-group label="Lives with whome" class="error-l-100">
						<b-form-input
							type="text"
							v-model="$v.elder.lives_with.$model"
							:state="!$v.elder.lives_with.$error"
						/>
						<b-form-invalid-feedback
							v-if="!$v.elder.lives_with.required"
						>Please enter a Lives with whome Details</b-form-invalid-feedback>
					</b-form-group>

					<b-form-group label="Other Elder Nic">
						<b-form-input
							type="text"
							v-model="$v.elder.other_elder_nic.$model"
							:state="!$v.elder.other_elder_nic.$error"
						/>
						<b-form-invalid-feedback
							v-if="!$v.elder.other_elder_nic.minLength || !$v.elder.other_elder_nic.maxLength"
						>
							Your Elder Nic must be 10
							characters
						</b-form-invalid-feedback>
					</b-form-group>

					<b-form-group label="Other Names and details">
						<b-form-textarea
							type="text"
							v-model="$v.elder.other_names_and_details.$model"
							:state="!$v.elder.other_names_and_details.$error"
						/>
						<b-form-invalid-feedback
							v-if="!$v.elder.other_names_and_details.minLength || !$v.elder.other_names_and_details.maxLength"
						>
							Other Names and details No must be between 10 and 256
							characters
						</b-form-invalid-feedback>
					</b-form-group>

					<b-form-group label="Source of Income">
						<b-form-input
							type="text"
							v-model="$v.elder.source_of_income.$model"
							:state="!$v.elder.source_of_income.$error"
						/>
						<b-form-invalid-feedback
							v-if="!$v.elder.source_of_income.required"
						>Please enter a Your Source of Income</b-form-invalid-feedback>
						<b-form-invalid-feedback
							v-else-if="!$v.elder.source_of_income.minLength"
						>PleaceEnter More than 3 characters</b-form-invalid-feedback>
					</b-form-group>
					<b-form-group label="Monthly Income" class="error-l-125">
						<b-form-input
							type="text"
							v-model="$v.elder.monthly_income.$model"
							:state="!$v.elder.monthly_income.$error"
						/>
						<b-form-invalid-feedback
							v-if="!$v.elder.monthly_income.required"
						>Please enter your Monthly Income</b-form-invalid-feedback>
						<b-form-invalid-feedback v-else-if="!$v.elder.monthly_income.numeric">Only Numbers</b-form-invalid-feedback>
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
	// props: {
	// 	elder: {
	// 		default: ""
	// 	}
	// },
	data() {
		return {
			// name: "",
			// email: "",
			// emailAgain: "",
			// number: "",
			// max: "",
			// min: "",
			// withRegex: "",
			elder: {
				elder_id: "",
				elder_committe_name: "",
				comm_membership_no: "",
				nearest_post_office: "",
				lives_with: "",
				other_elder_nic: "",
				other_names_and_details: "",
				source_of_income: "",
				monthly_income: ""
			}
		};
	},
	mixins: [validationMixin],
	validations: {
		elder: {
			elder_id: {
				maxLength: maxLength(16),
				minLength: minLength(2)
			},
			elder_committe_name: {
				maxLength: maxLength(16),
				minLength: minLength(2)
			},
			comm_membership_no: {
				maxLength: maxLength(16),
				minLength: minLength(2)
			},
			nearest_post_office: {
				required,
				maxLength: maxLength(16),
				minLength: minLength(3)
			},
			lives_with: {
				required
			},
			other_elder_nic: {
				maxLength: maxLength(10),
				minLength: minLength(10)
			},
			other_names_and_details: {
				maxLength: maxLength(256),
				minLength: minLength(10)
			},
			source_of_income: {
				required,
				minLength: minLength(3)
			},
			monthly_income: {
				required,
				numeric
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
			console.log(this.$v.$invalid + "errere 2");
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
	// mounted() {
	// 	console.log(this.elder.name + " tab");
	// }
};
</script>
