<template>
	<b-row>
		<b-colxx xl="12" style="margin:auto ">
				
				<b-card class="mb-4 text-center" v-show="!submit_ag">
					<div class="icon-row-item">
						<i class="simple-icon-like text-xlarge" />				
					</div>
					<h2 class="mb-2">Succesfully Informed the Reason</h2>
					<p>Inform Deatails are Submitted Now</p>
				</b-card>
				<b-card class="mb-4" v-show="submit_ag">
					<b-form @submit.prevent="onValitadeFormSubmit" class="av-tooltip tooltip-label-right">
					
						<b-form-group label="Elder Full Name">
							<b-form-input
								type="text"
								v-model="$v.dead_elder.name.$model"
								:disabled="true"
							/>
						</b-form-group>

						<b-form-group label="Nic">
							<b-form-input
								type="text"
								v-model="$v.dead_elder.nic.$model"
								:disabled="true"
							/>
						</b-form-group>

						<b-form-group label="Birth Day">
							<b-form-input
								type="text"
								v-model="$v.dead_elder.bday.$model"
								:disabled="true"
							/>
						</b-form-group>

						<b-form-group label="Sex">
							<b-form-input
								type="text"
								v-model="$v.dead_elder.sex.$model"
								:disabled="true"
							/>
						</b-form-group>						

						<b-form-group label="Death Certificate Number">
							<b-form-input
								type="text"
								v-model="$v.dead_elder.dc_no.$model"
								:state="!$v.dead_elder.dc_no.$error"
							/>
							<b-form-invalid-feedback v-if="!$v.dead_elder.dc_no.required">Please Enter Death Certificate Number</b-form-invalid-feedback>
						</b-form-group>

						<b-form-group label="Death Reason">
							<b-form-input
								type="text"
								v-model="$v.dead_elder.reason.$model"
								:state="!$v.dead_elder.reason.$error"
							/>
							<b-form-invalid-feedback v-if="!$v.dead_elder.reason.required">Please Enter Reason</b-form-invalid-feedback>
							
						</b-form-group>	

						<b-form-group label="Date of Death" class="error-l-125">
						<b-colxx xxs="12" xl="6" class="mb-4">
							<b-card>
								<b-form>
									<b-row class="mb-0">
										<b-colxx xxs="12">
											<b-form-group>
												<datepicker
													v-model="$v.dead_elder.death_day.$model"
													:state="!$v.dead_elder.death_day.$error"
													:inline="true"
													:bootstrap-styling="true"
													class="embeded"
												></datepicker>
												<b-form-invalid-feedback v-if="!$v.dead_elder.death_day.required">Please enter Date of Death</b-form-invalid-feedback>
											</b-form-group>
										</b-colxx>
									</b-row>
								</b-form>
							</b-card>
						</b-colxx>
					</b-form-group>					

						<b-button type="submit" variant="primary" class="mt-4">{{ $t('form.submit') }}</b-button>
					</b-form>
				</b-card>
		</b-colxx>
	</b-row>
</template>

<script>
import AppLayout from "../../../layouts/EAppLayout";
import { validationMixin } from "vuelidate";
import axios from "axios";
import Datepicker from "vuejs-datepicker";
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
		AppLayout: AppLayout,
		datepicker: Datepicker
	},
	data() {
		return {
			submit_ag: true,
			deadElder: {},
			dead_elder: {
				name: "",
				nic: "",
				sex: "",
				bday: "",
				dc_no: "",
				reason: "",
				death_day: "1997-11-07"
			}
			
		};
	},
	props: ["id"],
	async created() {
		axios({
			method: "get",
			url: "/elders/" + this.id
		}).then(result => {
			this.deadElder = result.data.data,
			this.dead_elder.name = result.data.data.name;
			this.dead_elder.nic = result.data.data.nic_id;
			this.dead_elder.sex = result.data.data.sex;
			this.dead_elder.bday = result.data.data.birth_day;
			console.log(result.data.data);
		});
	},
	mixins: [validationMixin],
	validations: {
		dead_elder: {
			
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
			dc_no: {
				required
			},
			reason: {
				required
			},
			death_day: {
				required
			}
		}
	},
	
	methods: {
		onValitadeFormSubmit() {
			this.$v.$touch();
			console.log(this.deadElder);
			console.log(this.$v.$invalid + " Checking ");
			if (!this.$v.$invalid) {
				const body = {
					elder_id: this.deadElder.elder_id,
        			gramaniladari_division_id: this.deadElder.gramaniladari_division_id,
        			divisional_secratory_id: this.deadElder.divisional_secratory_id,
        			death_certificate_no: this.dead_elder.dc_no,
        			death_reason: this.dead_elder.reason,
        			death_date: this.dead_elder.death_day
				}; 
				axios({
					method: "post",
					url: "/deadcomplain/informdeath",
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
						dead_elder: this.dead_elder
					})
				);

				this.submit_ag = !this.submit_ag;
			}
		}
	}
};
</script>
