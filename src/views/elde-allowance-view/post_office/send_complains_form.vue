<template>

	<b-row>
		<b-colxx xl="12" lg="10" style="margin:auto ">
			<b-card>
				<div class="text-center">
					<h1>Complain Details</h1>
				</div>
				<b-card class="mb-4 text-center" v-show="!submit_ag">
					<div class="icon-row-item">
						<i class="simple-icon-like text-xlarge" />				
					</div>
					<h2 class="mb-2">Succesfully Informed the Complains</h2>
					<p>Complains Deatails are Submitted Now</p>
				</b-card>
				<b-card class="mb-4" v-show="submit_ag">
					<b-form @submit.prevent="onValitadeFormSubmit" class="av-tooltip tooltip-label-right">
					
						<b-form-group label="Elder Full Name">
							<b-form-input
								type="text"
								v-model="$v.com_elder.name.$model"
								:disabled="true"
							/>
						</b-form-group>

						<b-form-group label="Nic">
							<b-form-input
								type="text"
								v-model="$v.com_elder.nic.$model"
								:disabled="true"
							/>
						</b-form-group>

						<b-form-group label="Birth Day">
							<b-form-input
								type="text"
								v-model="$v.com_elder.bday.$model"
								:disabled="true"
							/>
						</b-form-group>

						<b-form-group label="Sex">
							<b-form-input
								type="text"
								v-model="$v.com_elder.sex.$model"
								:disabled="true"
							/>
						</b-form-group>						

						<b-form-group label="Complain">
							<b-form-input
								type="text"
								v-model="$v.com_elder.complain.$model"
								:state="!$v.com_elder.complain.$error"
							/>
							<b-form-invalid-feedback v-if="!$v.com_elder.complain.required">Please Enter Complain</b-form-invalid-feedback>
						</b-form-group>				

						<b-button type="submit" variant="primary" class="mt-4">{{ $t('form.submit') }}</b-button>
					</b-form>
				</b-card>
			</b-card>
		</b-colxx>
	</b-row>

</template>

<script>
import AppLayout from "../../../layouts/EAppLayout";
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
	components: {
		AppLayout: AppLayout
	},
	data() {
		return {
			submit_ag: true,
			comElder: {},
			com_elder: {
				name: "",
				nic: "",
				sex: "",
				bday: "",
				complain: ""
			}
			
		};
	},
	props: ["id"],
	async created() {
		axios({
			method: "get",
			url: "http://localhost:3000/api/elders/" + this.id
		}).then(result => {
			this.comElder = result.data.data,
			this.com_elder.name = result.data.data.name;
			this.com_elder.nic = result.data.data.nic_id;
			this.com_elder.sex = result.data.data.sex;
			this.com_elder.bday = result.data.data.birth_day;
			console.log(result.data.data);
		});
	},
	mixins: [validationMixin],
	validations: {
		com_elder: {
			
			name: {
				required
			},
			nic: {
				required
			},
			sex: {
				required
			},
			bday: {
				required
			},
			complain: {
				required
			}
		}
	},
	
	methods: {
		onValitadeFormSubmit() {
			this.$v.$touch();
			console.log(this.$v.$invalid + " Checking ");
			if (!this.$v.$invalid) {
				const body = {
					elder_id: this.comElder.elder_id,
        			post_office_id: this.comElder.near_post_office_id,
        			complain: this.com_elder.complain
				}; 
				axios({
					method: "post",
					url: "http://localhost:3000/api/deadcomplain/sendpostcomplain",
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
						com_elder: this.com_elder
					})
				);

				this.submit_ag = !this.submit_ag;
			}
		}
	}
};
</script>
