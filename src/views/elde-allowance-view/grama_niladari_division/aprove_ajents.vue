 
 
 

<template>
	<AppLayout>
		<b-colxx xl="10" lg="12" style="margin:auto ">
			<b-card no-body class="mb-4">
				<b-row>
					<b-colxx lg="12" md="12" class="m-lg-4 text-center" style="mrgin-top:50px;">
						<h1>Aprove Agents submited By The Elders</h1>
					</b-colxx>
					<b-colxx lg="6" md="12" class="mb-4">
						<div class="position-absolute card-top-buttons"></div>
						<single-lightbox
							thumb="../assets/img/profiles/1.jpg"
							large="../assets/img/profiles/1.jpg"
							class-name="card-img-top "
							class="m-4"
						/>
					</b-colxx>
					<b-colxx lg="6" md="12" class="mb-4">
						<div class="m-4">
							<h2 class="text-center m-4">Elder Details</h2>
							<p class="text-muted text-small mb-2">Elder Full Name</p>
							<p class="mb-3">Sahan Lakshitha</p>

							<p class="text-muted text-small mb-2">Elder Address</p>
							<p class="mb-3">49A /149 hansagiri road, 5th lane Gampaha</p>

							<p class="mb-3">
								<span class="text-muted text-small mb-2">Sex:</span> Male
							</p>
							<p class="mb-3">
								<span class="text-muted text-small mb-2">Phone No:</span> 0713327794
							</p>

							<p class="mb-3">
								<span class="text-muted text-small mb-2">Nic No:</span> 970983325V
							</p>
							<p class="mb-3">
								<span class="text-muted text-small mb-2">Email:</span> sahanbcsrh@gmail.com
							</p>

							<p class="mb-3">
								<span class="text-muted text-small mb-2">Date of Birth:</span> 1997-04-07
							</p>
							<p class="mb-3">
								<span class="text-muted text-small mb-2">Age:</span> 97
							</p>
						</div>
					</b-colxx>
				</b-row>
				<b-card-body>
					<b-row>
						<b-colxx lg="6" md="12" class="mb-4">
							<div class="position-absolute card-top-buttons"></div>
							<single-lightbox
								thumb="../assets/img/profiles/2.jpg"
								large="../assets/img/profiles/2.jpg"
								class-name="card-img-top "
								class="m-4"
							/>
						</b-colxx>
						<b-colxx lg="6" md="12" class="mb-4">
							<h2 class="text-center m-4">Agent Information</h2>

							<p class="text-muted text-small mb-2">Agent Name</p>
							<p class="mb-3">Sada probooooo</p>

							<p class="text-muted text-small mb-2">Agent NIC</p>
							<p class="mb-3">834356355V</p>

							<p class="text-muted text-small mb-2">Agent Address</p>
							<p class="mb-3">49A /149 ,hansgiri Road ,5th Lane Gampaha</p>

							<p class="text-muted text-small mb-2">Agent Phone Number</p>
							<p class="mb-3">0332227443</p>

							<p class="text-muted text-small mb-2">Email</p>
							<p class="mb-3">sada@gmail.com</p>

							<p class="text-muted text-small mb-2">Relationship With Elder</p>
							<p class="mb-3">Sister</p>
						</b-colxx>
					</b-row>
					<b-colxx xxs="12">
						<b-card class="mb-4" title="Grama Niladari Rewiwe About the Elders Agent">
							<b-form class="av-tooltip tooltip-label-right">
								<b-form-group label="Grama Niladari Comment">
									<b-form-textarea
										type="text"
										v-model="$v.grama_comment.$model"
										:state="!$v.grama_comment.$error"
									/>

									<b-form-invalid-feedback
										v-if="!$v.grama_comment.required"
									>Grama Niladari Comment Is reqiured</b-form-invalid-feedback>
									<b-form-invalid-feedback
										v-else-if="!$v.grama_comment.minLength || !$v.grama_comment.maxLength"
									>The Comment Should be between 10 and 256</b-form-invalid-feedback>
								</b-form-group>
								<b-row>
									<b-colxx lg="6" md="6" class="mb-4 text-center">
										<b-button type="button" variant="primary" @click.prevent="sssss">Aprove Agent</b-button>
									</b-colxx>
									<b-colxx lg="6" md="6" class="mb-4 text-center">
										<b-button
											type="button"
											variant="primary"
											@click.prevent="onValitadeFormSubmit"
										>Disqualify Agent</b-button>
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

import { validationMixin } from "vuelidate";
const { required, maxLength, minLength } = require("vuelidate/lib/validators");

export default {
	name: "aprove-agents",
	components: {
		AppLayout: AppLayout,
		"single-lightbox": SingleLightbox
	},
	data() {
		return {
			grama_comment: "	"
		};
	},
	mixins: [validationMixin],
	validations: {
		grama_comment: {
			required,
			maxLength: maxLength(256),
			minLength: minLength(10)
		}
	},
	methods: {
		onValitadeFormSubmit() {
			this.$v.$touch();
			console.log(this.$v.$invalid + " dis king ");
			if (!this.$v.$invalid) {
				console.log(
					JSON.stringify({
						messsage: this.grama_comment
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
						messsage: this.grama_comment
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
