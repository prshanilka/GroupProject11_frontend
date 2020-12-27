<template>
	<b-row>
		<b-colxx xxs="12">
			<div class="text-center">
				<h1>{{$t('elder.form')}}</h1>
			</div>

			<b-card class="mb-4">
				<div v-show="!elder.available" class="text-center">
					<div class="text-center">
						<h1>Later You can Assign Guardian</h1>
						<p>If You Want To Assign Now Click the Now Button If Not Click The Next Button</p>
					</div>
					<div>
						<b-button
							variant="primary"
							size="md"
							:class=" {'btn-multiple-state btn-shadow': true} "
							@click.prevent="clickNow"
						>Now</b-button>
					</div>
				</div>
				<div v-show="elder.available">
					<b-form class="av-tooltip tooltip-label-right">
						<b-form-group label="Guardian name" class="error-l-100">
							<b-form-input
								type="text"
								v-model="$v.elder.agent_name.$model"
								:state="!$v.elder.agent_name.$error"
							/>
							<b-form-invalid-feedback v-if="!$v.elder.agent_name.required">Pleace Enter the Guardian Name</b-form-invalid-feedback>
							<b-form-invalid-feedback
								v-else-if="!$v.elder.agent_name.minLength || !$v.elder.agent_name.maxLength"
							>
								Your Guardian name must be between 6 and 16
								characters
							</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group label="Guardian Nic ">
							<b-form-input
								type="text"
								v-model="$v.elder.agent_nic.$model"
								:state="!$v.elder.agent_nic.$error"
							/>
							<b-form-invalid-feedback v-if="!$v.elder.agent_nic.required">Pleace Enter the Guardian NIC No</b-form-invalid-feedback>
							<b-form-invalid-feedback
								v-else-if="!$v.elder.agent_nic.minLength || !$v.elder.agent_nic.maxLength"
							>
								Your Guardian Nic only 10
								characters
							</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group :label="$t('agent.photo')">
						<b-input-group  >
              				  <b-form-file   @change="onFileChange"  :placeholder="$t('input-groups.choose-file')"></b-form-file>
            			</b-input-group>
						</b-form-group>


						<b-form-group label="Guardian phone no">
							<b-form-input
								type="text"
								v-model="$v.elder.agent_phone_no.$model"
								:state="!$v.elder.agent_phone_no.$error"
							/>
							<b-form-invalid-feedback
								v-if="!$v.elder.agent_phone_no.required"
							>Pleace Enter the Guardian Phone No</b-form-invalid-feedback>

							<b-form-invalid-feedback
								v-else-if="!$v.elder.agent_phone_no.numeric"
							>Guardian Phone No Should contains only Numeric</b-form-invalid-feedback>
							<b-form-invalid-feedback
								v-else-if="!$v.elder.agent_phone_no.minLength || !$v.elder.agent_phone_no.maxLength"
							>
								Your Guardian phone no only 10
								characters
							</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group label="Agent Email" class="error-l-100">
							<b-form-input
								type="text"
								v-model="$v.elder.agent_email.$model"
								:state="!$v.elder.agent_email.$error"
							/>
							<b-form-invalid-feedback v-if="!$v.elder.agent_email.required">{{$t('form.e-mail')}}</b-form-invalid-feedback>
							<b-form-invalid-feedback v-else-if="!$v.elder.agent_email.email">{{$t('form.v-mail')}}</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group label="Guardian Address" class="error-l-125">
							<b-form-textarea
								type="text"
								v-model="$v.elder.agent_address.$model"
								:state="!$v.elder.agent_address.$error"
							/>
							<b-form-invalid-feedback
								v-if="!$v.elder.agent_address.required"
							>Pleace Enter the Guardian Address</b-form-invalid-feedback>
							<b-form-invalid-feedback
								v-else-if="!$v.elder.agent_address.minLength || !$v.elder.agent_address.maxLength"
							>
								Your Guardian Address be between 10 and 256
								characters
							</b-form-invalid-feedback>
						</b-form-group>
						<b-form-group label="Guardian relationship with Elder" class="error-l-125">
							<b-form-input
								type="text"
								v-model="$v.elder.agent_relationship_with_elder.$model"
								:state="!$v.elder.agent_relationship_with_elder.$error"
							/>
							<b-form-invalid-feedback
								v-if="!$v.elder.agent_relationship_with_elder.required"
							>Pleace Enter the Guardian NIC No</b-form-invalid-feedback>
							<b-form-invalid-feedback
								v-else-if="!$v.elder.agent_relationship_with_elder.minLength || !$v.elder.agent_relationship_with_elder.maxLength"
							>
								Your Guardian relationship with Elder must be between 4 and 16
								characters
							</b-form-invalid-feedback>
						</b-form-group>
					</b-form>
				</div>
			</b-card>
		</b-colxx>
	</b-row>
</template>

<script>
import axios from 'axios'
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
				available: false,
				agent_name: "",
				pic:"",
				agent_nic: "",
				agent_phone_no: "",
				agent_email: "",
				agent_address: "",
				agent_relationship_with_elder: ""
			}
		};
	},
	mixins: [validationMixin],
	validations: {
		elder: {
			agent_name: {
				required,
				minLength: minLength(6),
				maxLength: maxLength(32)
			},
			agent_nic: {
				required,
				minLength: minLength(10),
				maxLength: maxLength(10)
			},
			agent_phone_no: {
				required,
				numeric,
				minLength: minLength(10),
				maxLength: maxLength(10)
			},
			agent_email: {
				required,
				email
			},
			agent_address: {
				required,
				minLength: minLength(10),
				maxLength: maxLength(256)
			},
			agent_relationship_with_elder: {
				required,
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
		clickNow() {
			this.elder.available = !this.elder.available;
		},

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
				if (!this.elder.available) {
					return {
						valid: false,
						elder: this.elder
					};
				}
				return {
					valid: this.$v.$invalid
				};
			}
		},
			onFileChange(e){
			   const selectedFile = e.target.files[0]; // accessing file
				  this.file = selectedFile;
				  console.log(this.file);
				  const formData = new FormData();
      				formData.append("file", this.file);  // appending file

     // sending file to the backend
      axios
        .post("/upload/guardianpic", formData)
        .then(res => {
		  console.log(res.data.path);
		  this.elder.pic=res.data.path;

        })
        .catch(err => {
          console.log(err);
        });
		}
	}
};
</script>
