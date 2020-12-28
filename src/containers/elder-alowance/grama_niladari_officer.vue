<template>
	<b-row>
		<b-colxx xl="8" lg="12" style="margin:auto ">
			<b-card>
				<div class="text-center">
					<h1>{{$t('officer.g-form')}}</h1>
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
								v-model="$v.gramaniladari_officer.officer_id.$model"
								:state="!$v.gramaniladari_officer.officer_id.$error"
							/>
							<b-form-invalid-feedback
								v-if="!$v.gramaniladari_officer.officer_id.required"
							>{{$t('officer.e-id')}}</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group :label="$t('officer.name')">
							<b-form-input
								type="text"
								v-model="$v.gramaniladari_officer.name.$model"
								:state="!$v.gramaniladari_officer.name.$error"
							/>
							<b-form-invalid-feedback v-if="!$v.gramaniladari_officer.name.required">{{$t('form.e-name')}}</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group :label="$t('user.username')">
							<b-form-input
								type="text"
								v-model="$v.gramaniladari_officer.uname.$model"
								:state="!$v.gramaniladari_officer.uname.$error"
							/>
							<b-form-invalid-feedback v-if="!$v.gramaniladari_officer.uname.required">{{$t('user.e-uname')}}</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group :label="$t('user.password')">
							<b-form-input
								type="text"
								v-model="$v.gramaniladari_officer.pword.$model"
								:state="!$v.gramaniladari_officer.pword.$error"
							/>
							<b-form-invalid-feedback v-if="!$v.gramaniladari_officer.pword.required">{{$t('user.e-pass')}}</b-form-invalid-feedback>
							<b-form-invalid-feedback
								v-else-if="!$v.gramaniladari_officer.pword.minLength"
							>{{$t('user.v-pass')}}</b-form-invalid-feedback>
						</b-form-group>


						<b-form-group :label="$t('form.photo')">
							<b-input-group :label="$t('input-groups.upload')" class="mb-3">
              					  <b-form-file   @change="onFileChange"  :placeholder="$t('input-groups.choose-file')"></b-form-file>
            				</b-input-group>
	 					</b-form-group>


						<b-form-group :label="$t('form.nic')">
							<b-form-input
								type="text"
								v-model="$v.gramaniladari_officer.nic.$model"
								:state="!$v.gramaniladari_officer.nic.$error"
							/>
							<b-form-invalid-feedback v-if="!$v.gramaniladari_officer.nic.required">{{$t('form.e-nic')}}</b-form-invalid-feedback>
							<b-form-invalid-feedback v-if="!$v.gramaniladari_officer.nic.validnic">{{$t('form.e-valid')}}</b-form-invalid-feedback>
							<b-form-invalid-feedback
								v-else-if="!$v.gramaniladari_officer.nic.minLength || !$v.gramaniladari_officer.nic.maxLength"
							>{{$t('form.v-nic')}}</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group :label="$t('form.number')">
							<b-form-input
								type="text"
								v-model="$v.gramaniladari_officer.phone.$model"
								:state="!$v.gramaniladari_officer.phone.$error"
							/>
							<b-form-invalid-feedback
								v-if="!$v.gramaniladari_officer.phone.required"
							>{{$t('form.e-number')}}</b-form-invalid-feedback>
							<b-form-invalid-feedback v-else-if="!$v.gramaniladari_officer.phone.validphone">{{$t('form.vaid-no')}}</b-form-invalid-feedback>
							<b-form-invalid-feedback
								v-else-if="!$v.gramaniladari_officer.phone.minLength || !$v.gramaniladari_officer.phone.maxLength"
							>{{$t('form.v-number')}}</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group :label="$t('form.email')" class="error-l-100">
							<b-form-input
								type="text"
								v-model="$v.gramaniladari_officer.email.$model"
								:state="!$v.gramaniladari_officer.email.$error"
							/>
							<b-form-invalid-feedback
								v-if="!$v.gramaniladari_officer.email.required"
							>{{$t('form.e-mail')}}</b-form-invalid-feedback>
							<b-form-invalid-feedback
								v-else-if="!$v.gramaniladari_officer.email.email"
							>{{$t('form.v-mail')}}</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group :label="$t('form.district')">
							<b-form-select
								v-model="$v.gramaniladari_officer.district_id.$model"
								:options="district_option"
								:state="!$v.gramaniladari_officer.district_id.$error"
							></b-form-select>
							<b-form-invalid-feedback
								v-if="!$v.gramaniladari_officer.district_id.required"
							>{{$t('form.e-district')}}</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group :label="$t('form.divisional')">
							<b-form-select
								type="text"
								v-model="$v.gramaniladari_officer.divisional_id.$model"
								:options="divisional_off_option"
								:state="!$v.gramaniladari_officer.divisional_id.$error"
							/>
							<b-form-invalid-feedback
								v-if="!$v.gramaniladari_officer.divisional_id.required"
							>{{$t('form.e-divisional')}}</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group :label="$t('form.gramaniladari-division')">
							<b-form-select
								type="text"
								v-model="$v.gramaniladari_officer.gramaniladari_division_id.$model"
								:options="gramaniladari_division_option"
								:state="!$v.gramaniladari_officer.gramaniladari_division_id.$error"
							/>
							<b-form-invalid-feedback
								v-if="!$v.gramaniladari_officer.gramaniladari_division_id.required"
							>{{$t('form.e-grama')}}</b-form-invalid-feedback>
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
			gramaniladari_officer: {
				officer_id: "",
				name: "",
				uname: "",
				pword: "",
				img:"",
				nic: "",
				phone: "",
				email: "",
				district_id: null,
				divisional_id: null,
				gramaniladari_division_id: null,
				role: 40
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
			gramaniladari_division_option: [
				{
					value: null,
					text:
						"Select Grama Niladari Division/කරුණාකර ග්‍රාම නිළධාරී කොඨ්ඨාෂ‍ය තෝරන්න",
					disabled: true
				}
			]
		};
	},
	mixins: [validationMixin],
	validations: {
		gramaniladari_officer: {
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
			district_id: {
				required
			},
			divisional_id: {
				required
			},
			gramaniladari_division_id: {
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
		axios
			.get("/gramadivision//selectofficer")
			.then(res => {
				console.log(res);
				this.gramaniladari_division_option = [
					...this.gramaniladari_division_option,
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
				const Officer = {
					officer_id: this.gramaniladari_officer.officer_id,
					nic_no: this.gramaniladari_officer.nic,
					name: this.gramaniladari_officer.name,
					phone: this.gramaniladari_officer.phone,
					email: this.gramaniladari_officer.email
				};
				const GramaOfficer = {
					gramaniladari_division_id: this.gramaniladari_officer
						.gramaniladari_division_id,
					grmaniladari_officer_id: this.gramaniladari_officer.officer_id,
					district_id: this.gramaniladari_officer.district_id,
					divisional_secratary_id: this.gramaniladari_officer.divisional_id
				};
				const User = {
					officer_id: this.gramaniladari_officer.officer_id,
					uname: this.gramaniladari_officer.uname,
					pword: this.gramaniladari_officer.pword,
					email: this.gramaniladari_officer.email,
					role: this.gramaniladari_officer.role,
					profile:this.gramaniladari_officer.img
				};
				const body = {
					Officer,
					GramaOfficer,
					User
				};
				axios({
					method: "post",
					url: "/gramaniladariofficer/gramaofficer",
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
						gramaniladari_officer: this.gramaniladari_officer
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
		  this.gramaniladari_officer.img=res.data.path;

        })
        .catch(err => {
          console.log(err);
        });
		}
	}
};
</script>
