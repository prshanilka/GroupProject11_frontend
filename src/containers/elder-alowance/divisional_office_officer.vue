<template>
	<b-row>
		<b-colxx xl="8" lg="12" style="margin:auto ">
			<b-card>
				<div class="text-center">
					<h1>{{$t('officer.d-form')}}</h1>
				</div>
				<br />
				<br />
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
								v-model="$v.div_sec_off_officer.officer_id.$model"
								:state="!$v.div_sec_off_officer.officer_id.$error"
							/>
							<b-form-invalid-feedback
								v-if="!$v.div_sec_off_officer.officer_id.required"
							>{{$t('officer.e-id')}}</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group :label="$t('officer.name')">
							<b-form-input
								type="text"
								v-model="$v.div_sec_off_officer.name.$model"
								:state="!$v.div_sec_off_officer.name.$error"
							/>
							<b-form-invalid-feedback v-if="!$v.div_sec_off_officer.name.required">{{$t('form.e-name')}}</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group :label="$t('user.username')">
							<b-form-input
								type="text"
								v-model="$v.div_sec_off_officer.uname.$model"
								:state="!$v.div_sec_off_officer.uname.$error"
							/>
							<b-form-invalid-feedback v-if="!$v.div_sec_off_officer.uname.required">{{$t('user.e-uname')}}</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group :label="$t('user.password')">
							<b-form-input
								type="text"
								v-model="$v.div_sec_off_officer.pword.$model"
								:state="!$v.div_sec_off_officer.pword.$error"
							/>
							<b-form-invalid-feedback v-if="!$v.div_sec_off_officer.pword.required">{{$t('user.e-pass')}}</b-form-invalid-feedback>
							<b-form-invalid-feedback
								v-else-if="!$v.div_sec_off_officer.pword.minLength"
							>{{$t('user.v-pass')}}</b-form-invalid-feedback>
						</b-form-group>

						
						<b-form-group :label="$t('form.photo')">
							<b-input-group :label="$t('input-groups.upload')" class="mb-3">
              					  <b-form-file   @change="onFileChange"    :placeholder="$t('input-groups.choose-file')"></b-form-file>
            				</b-input-group>
	 					</b-form-group>

						<b-form-group :label="$t('form.nic')">
							<b-form-input
								type="text"
								v-model="$v.div_sec_off_officer.nic.$model"
								:state="!$v.div_sec_off_officer.nic.$error"
							/>
							
							<b-form-invalid-feedback v-if="!$v.div_sec_off_officer.nic.required">{{$t('form.e-nic')}}</b-form-invalid-feedback>
							<b-form-invalid-feedback v-if="!$v.div_sec_off_officer.nic.validnic">{{$t('form.e-valid')}}</b-form-invalid-feedback>
							<b-form-invalid-feedback
								v-else-if="!$v.div_sec_off_officer.nic.minLength || !$v.div_sec_off_officer.nic.maxLength"
							>{{$t('form.v-nic')}}</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group :label="$t('form.number')">
							<b-form-input
								type="text"
								v-model="$v.div_sec_off_officer.phone.$model"
								:state="!$v.div_sec_off_officer.phone.$error"
							/>
							<b-form-invalid-feedback
								v-if="!$v.div_sec_off_officer.phone.required"
							>{{$t('form.e-number')}}</b-form-invalid-feedback>
							<b-form-invalid-feedback v-else-if="!$v.div_sec_off_officer.phone.validphone">{{$t('form.vaid-no')}}</b-form-invalid-feedback>
							<b-form-invalid-feedback
								v-else-if="!$v.div_sec_off_officer.phone.minLength || !$v.div_sec_off_officer.phone.maxLength"
							>{{$t('form.v-number')}}</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group :label="$t('form.email')" class="error-l-100">
							<b-form-input
								type="text"
								v-model="$v.div_sec_off_officer.email.$model"
								:state="!$v.div_sec_off_officer.email.$error"
							/>
							<b-form-invalid-feedback v-if="!$v.div_sec_off_officer.email.required">{{$t('form.e-mail')}}</b-form-invalid-feedback>
							<b-form-invalid-feedback
								v-else-if="!$v.div_sec_off_officer.email.email"
							>{{$t('form.v-mail')}}</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group :label="$t('form.divisional')">
							<b-form-select
								type="text"
								v-model="$v.div_sec_off_officer.divisional_id.$model"
								:options="divisional_off_option"
								:state="!$v.div_sec_off_officer.divisional_id.$error"
							/>
							<b-form-invalid-feedback
								v-if="!$v.div_sec_off_officer.divisional_id.required"
							>{{$t('form.e-divisional')}}</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group :label="$t('officer.designation')">
							<b-form-input
								type="text"
								v-model="$v.div_sec_off_officer.designation.$model"
								:state="!$v.div_sec_off_officer.designation.$error"
							></b-form-input>
							<b-form-invalid-feedback
								v-if="!$v.div_sec_off_officer.designation.required"
							>{{$t('officer.e-designation')}}</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group :label="$t('officer.role')">
							<b-form-select
								type="text"
								v-model="$v.div_sec_off_officer.role.$model"
								:options="role_option"
								:state="!$v.div_sec_off_officer.role.$error"
							/>
							<b-form-invalid-feedback
								v-if="!$v.div_sec_off_officer.role.required"
							>{{$t('officer.e-role')}}</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group :label="$t('officer.type')">
							<b-form-input
								type="text"
								v-model="$v.div_sec_off_officer.type.$model"
								:state="!$v.div_sec_off_officer.type.$error"
							></b-form-input>
							<b-form-invalid-feedback
								v-if="!$v.div_sec_off_officer.type.required"
							>{{$t('officer.e-type')}}</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group :label="$t('officer.area')">
							<b-form-input
								type="text"
								v-model="$v.div_sec_off_officer.area.$model"
								:state="!$v.div_sec_off_officer.area.$error"
							></b-form-input>
							<b-form-invalid-feedback
								v-if="!$v.div_sec_off_officer.area.required"
							>{{$t('officer.e-area')}}</b-form-invalid-feedback>
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

const validnic =  helpers.regex("upperCase", /^(?:19|20)?\d{2}(?:[0-35-8]\d\d(?<!(?:000|500|36[7-9]|3[7-9]\d|86[7-9]|8[7-9]\d)))\d{4}(?:[vVxX])$/);
const validphone = helpers.regex("upperCase", /^(?:0|94|\+94|0094)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|91)(0|2|3|4|5|7|9)|7(0|1|2|5|6|7|8)\d)\d{6}$/);


export default {
	data() {
		return {
			submit_ag: true,
			div_sec_off_officer: {
				officer_id: "",
				name: "",
				uname: "",
				pword: "",
				img:"",
				nic: "",
				phone: "",
				email: "",
				divisional_id: null,
				designation: "",
            	role: null,
           		type: "",
            	area: ""
			},
			divisional_off_option: [
				{
					value: null,
					text:"Select an Division Secretary Office/කරුණාකර ප්‍රාදේශීය ලේකම් කාර්යාලය තෝරන්න",
					disabled: true
				}
			],
			role_option: [
				{
					value: null,
					text:"Select an Officer Role",
					disabled: true
				},
				{
					value: 26,
					text:"Divisional Head"
				},
				{
					value: 24,
					text:"Divisional Officer"
				},
				{
					value: 20,
					text:"Field Officer"
				}
			]
		};
	},
	mixins: [validationMixin],
	validations: {
		div_sec_off_officer: {
			officer_id: {
				required
			},
			name: {
				required
			},
			uname: {
				required
			},
			pword: {
				required,
				minLength: minLength(10),
			},
			nic: {
				required,
				validnic,
				minLength: minLength(10),
				maxLength: maxLength(10)
			},
			phone: {
				required,
				validphone,
				minLength: minLength(10),
				maxLength: maxLength(10)
			},
			email: {
				required,
				email
			},
			divisional_id: {
				required
			},
			designation: {
				required
			},
            role: {
				required
			},
           	type: {
				required
			},
            area: {
				required
			}
		}
	},
	created() {
		axios
			.get("/divisionaloffice/selectbox")
			.then(res => {
				console.log(res);
				this.divisional_off_option = [...this.divisional_off_option, ...res.data.data];
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
				const DivOfficer = {
					officer_id: this.div_sec_off_officer.officer_id,
            		divisional_secratary_id: this.div_sec_off_officer.divisional_id,
            		designation: this.div_sec_off_officer.designation,
            		role: this.div_sec_off_officer.role,
           			type: this.div_sec_off_officer.type,
            		area: this.div_sec_off_officer.area
				};
				const Officer = {
					officer_id: this.div_sec_off_officer.officer_id,
            		nic_no: this.div_sec_off_officer.nic,
            		name: this.div_sec_off_officer.name,
            		email: this.div_sec_off_officer.email,
            		phone: this.div_sec_off_officer.phone
				};
				const User = {
					officer_id: this.div_sec_off_officer.officer_id,
					uname: this.div_sec_off_officer.uname,
					pword: this.div_sec_off_officer.pword,
					email: this.div_sec_off_officer.email,
					role: this.div_sec_off_officer.role,
					profile:this.div_sec_off_officer.img
				};
				const body = {
					DivOfficer,
					Officer,
					User
				};
				axios({
					method: "post",
					url: "/divisionalofficers",
					data: body
				})
					.then( res => {
						this.offersData = res.data;
						console.log(res);
					})
					.catch(err => {
						console.log(err);
					})

				console.log(
					JSON.stringify({
						div_sec_off_officer: this.div_sec_off_officer
					})
				);
				this.submit_ag = !this.submit_ag;
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
        .post("/upload/profile", formData)
        .then(res => {
		  console.log(res.data.path);
		  this.div_sec_off_officer.img=res.data.path;

        })
        .catch(err => {
          console.log(err);
        });
		}
		
	}
};
</script>
