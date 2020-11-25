<template>
	<AppLayout>
		<b-colxx xl="10" lg="12" style="margin:auto ">
			<b-card no-body class="mb-4">
				<b-row>
					<b-colxx lg="12" md="12" class="m-lg-4 text-center" style="mrgin-top:50px;">
						<h1>Elder Details for Verification {{id}}</h1>
					</b-colxx>
					<b-colxx lg="6" md="12" class="mb-4">
						<div class="position-absolute card-top-buttons"></div>
						<single-lightbox
							thumb="/assets/img/profiles/1.jpg"
							large="/assets/img/profiles/1.jpg"
							class-name="card-img-top "
							class="m-4"
						/>
					</b-colxx>
					<b-colxx lg="6" md="12" class="mb-4">
						<div class="m-4">
							<p class="text-muted text-small mb-2">Elder Full Name</p>
							<p class="mb-3">{{elder.name}}</p>

							<p class="text-muted text-small mb-2">Elder Address</p>
							<p class="mb-3">{{elder.address}}</p>

							<p class="mb-3">
								<span class="text-muted text-small mb-2">Sex:</span>
								{{elder.sex}}
							</p>
							<p class="mb-3">
								<span class="text-muted text-small mb-2">Phone No:</span>
								{{elder.number}}
							</p>

							<p class="mb-3">
								<span class="text-muted text-small mb-2">Nic No:</span>
								{{elder.nic_id}}
							</p>
							<p class="mb-3">
								<span class="text-muted text-small mb-2">Email:</span>
								{{elder.email}}
							</p>

							<p class="mb-3">
								<span class="text-muted text-small mb-2">Date of Birth:</span>
								{{elder.birth_day}}
							</p>
							<p class="mb-3">
								<span class="text-muted text-small mb-2">Age:</span>
								{{elder.birth_day}} ---> 97
							</p>
						</div>
					</b-colxx>
				</b-row>
				<b-card-body>
					<b-row>
						<b-colxx lg="6" md="12" class="mb-4">
							<p class="mb-3">
								<span class="text-muted text-small mb-2">Local Elders Commity Name:</span>
								{{elder.local_commity_elder_name}}
							</p>
							<p>
								<span class="text-muted text-small mb-2">Local Elders Commity Membership No:</span>
								{{elder.local_commity_elder_id}}
							</p>
							<p class="text-muted text-small mb-2">Nearest Post Office</p>
							<p class="mb-3">{{elder.near_post_office_id}}</p>

							<p class="text-muted text-small mb-2">Lives With Whome</p>
							<p class="mb-3">{{elder.lives_with_whome}}</p>

							<p class="text-muted text-small mb-2">Other Elder Nic</p>
							<p class="mb-3">{{elder.other_elders_nic}}</p>

							<p class="text-muted text-small mb-2">Samurdhi Number</p>
							<p class="mb-3">{{elder.samurdi_no}}</p>

							<p class="text-muted text-small mb-2">Public Aid Number</p>
							<p class="mb-3">{{elder.people_adi_no}}</p>
						</b-colxx>
						<b-colxx lg="6" md="12" class="mb-4">
							<p class="text-muted text-small mb-2">Other Details</p>
							<p class="mb-3">{{elder.other_name_and_description}}</p>

							<p class="text-muted text-small mb-2">Source Of Income</p>
							<p class="mb-3">{{elder.source_of_income}}</p>

							<p class="text-muted text-small mb-2">Monthly Income</p>
							<p class="mb-3">{{elder.income}}</p>
						</b-colxx>
					</b-row>
					<b-colxx xxs="12">
						<b-card class="mb-4" title="Divisional Officer Rewiwe About the Elder">
							<b-form @submit.prevent="onValitadeFormSubmit" class="av-tooltip tooltip-label-right">
								<b-form-group label="Divisional Officer Comment">
									<b-form-textarea
										type="text"
										v-model="$v.div_comment.$model"
										:state="!$v.div_comment.$error"
									/>

									<b-form-invalid-feedback
										v-if="!$v.div_comment.required"
									>Divisional Officer Comment Is reqiured</b-form-invalid-feedback>
									<b-form-invalid-feedback
										v-else-if="!$v.div_comment.minLength || !$v.div_comment.maxLength"
									>The Comment Should be between 10 and 256</b-form-invalid-feedback>
								</b-form-group>
								<b-row>
									<b-colxx lg="6" md="12" class="mb-4 text-center">
										<b-button type="button" variant="primary" @click.prevent="sssss">Aprove</b-button>
									</b-colxx>
									<b-colxx lg="6" md="12" class="mb-4 text-center">
										<b-button type="submit" variant="primary">Disqualify</b-button>
									</b-colxx>
								</b-row>
							</b-form>
						</b-card>
					</b-colxx>
				</b-card-body>
			</b-card>
		</b-colxx>
	</AppLayout>
</template>

<script>
import AppLayout from "../../../layouts/EAppLayout";
import SingleLightbox from "../../../containers/pages/SingleLightbox";
import axios from "axios";

import { validationMixin } from "vuelidate";
const { required, maxLength, minLength } = require("vuelidate/lib/validators");

export default {
	name: "view-application-and-verify",
	components: {
		AppLayout: AppLayout,
		"single-lightbox": SingleLightbox
	},
	data() {
		return {
			elder: {},
			div_comment: "",
			eee: 2
		};
	},
	props: ["id"],
	mixins: [validationMixin],
	validations: {
		div_comment: {
			required,
			maxLength: maxLength(256),
			minLength: minLength(10)
		}
	},
	async created() {
		axios({
			method: "get",
			url: "http://localhost:3000/api/elders/" + this.id
		}).then(result => {
			this.elder = result.data.data;
			console.log(result.data.data);
			// this.aplications = result.data.data;
		});
	},
	methods: {
		onValitadeFormSubmit() {
			this.$v.$touch();
			console.log(this.$v.$invalid + " dis king ");
			if (!this.$v.$invalid) {
				console.log(
					JSON.stringify({
						messsage: this.div_comment
					})
				);
			}
		},
		sssss() {
			this.$v.$touch();
			console.log(this.$v.$invalid + "  ase cking ");
			if (!this.$v.$invalid) {
				console.log(
					JSON.stringify({
						messsage: this.div_comment
					})
				);
			}
		}
	}
};
</script>
<style>
p {
	font-size: 1.4em;
}
</style>
