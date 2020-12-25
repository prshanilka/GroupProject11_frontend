<template>
	<b-row>
		<b-colxx xxs="12" class="align-self-center">
			<div class="text-center">
				<h1> Update {{$t('elder.form')}}</h1>
			</div>

			<b-card class="mb-4">
				<b-form class="av-tooltip tooltip-label-right">
					<b-form-group :label="$t('elder.id')">
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
					<b-form-group :label="$t('elder.r-name')">
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

					<b-form-group :label="$t('elder.r-number')">
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

					<b-form-group :label="$t('elder.live')" class="error-l-100">
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

					<b-form-group :label="$t('elder.other')">
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

					<b-form-group :label="$t('elder.income')">
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
					<b-form-group :label="$t('elder.m-income')" class="error-l-125">
						<b-form-input
							type="text"
							v-model="$v.elder.monthly_income.$model"
							:state="!$v.elder.monthly_income.$error"
						/>
						<b-form-invalid-feedback
							v-if="!$v.elder.monthly_income.required"
						>Please enter your Monthly Income</b-form-invalid-feedback>
						<b-form-invalid-feedback v-else-if="!$v.elder.monthly_income.numeric">{{$t('form.n-number')}}</b-form-invalid-feedback>
					</b-form-group>

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
				</b-form>
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
				lives_with: "",
				other_elder_nic: "",
				other_names_and_details: "",
				source_of_income: "",
				monthly_income: "",
				samurdi_no: "",
				people_aid_no: "",
				other_no: ""
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
			},
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
	mounted(){
		 console.log("SSS");
		axios
			.get("/elders/elder_detail")
			.then(res => {
				 console.log(res.data.data);
				this.elder.elder_id=res.data.data.elders_reg_id;
				this.elder.elder_committe_name=res.data.data.local_commity_elder_name;
				this.elder.comm_membership_no=res.data.data.local_commity_elder_id;
				this.elder.lives_with=res.data.data.lives_with_whome;
				this.elder.other_elder_nic=res.data.data.other_elders_nic;
				this.elder.other_names_and_details=res.data.data.other_name_and_description;
				this.elder.source_of_income=res.data.data.source_of_income;
				this.elder.monthly_income=res.data.data.income;
				this.elder.samurdi_no=res.data.data.samurdi_no;
				this.elder.people_aid_no=res.data.data.people_adi_no;
				this.elder.other_n=res.data.data.other_elders_name;
			})
			.catch(err => {
				console.log(err);
			});
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
