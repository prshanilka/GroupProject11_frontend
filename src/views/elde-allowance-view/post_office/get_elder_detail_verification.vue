<template>
	<AppLayout>
		<b-colxx xl="10" lg="12" style="margin:auto ">
			<b-card no-body class="mb-4">
				<b-row>
					<b-colxx lg="12" md="12" class="m-lg-4 text-center" style="mrgin-top:50px;">
						<h1>Elder Benifisher for Verification {{id}}</h1>
					</b-colxx>
					<b-colxx lg="6" md="12" class="mb-4">
						
						<single-lightbox
							thumb="/assets/img/profiles/1.jpg"
							large="/assets/img/profiles/1.jpg"
							class-name="card-img-top "
							class="m-4"
						/>
						<p class="mb-3 text-xlarge text-primary text-center " >{{elder.name}}</p>
						<p class="mb-3 text-center text-danger text-large">{{elder.nic_id}}</p>
					</b-colxx>
					<b-colxx lg="6" md="12" class="mb-4">
						<div class="m-4">
							

							<p class="mb-2">Elder Address:</p>
							<p class="mb-2">{{elder.address}}</p>

							<p class="mb-2">Sex:</p>
							<p class="mb-2 ">{{elder.sex}}</p>

							<p class="mb-2">Phone No:</p>
							<p class="mb-2 ">{{elder.number}}</p>

							<p class="mb-2">Email:</p>
							<p class="mb-2 ">{{elder.email}}</p>

							<p class="mb-2">Date of Birth:</p>
							<p class="mb-2 ">{{elder.birth_day}}</p>

							<p class="mb-2">Age:</p>
							<p class="mb-2 ">{{elder.birth_day}}</p>

						</div>
					</b-colxx>
				</b-row>
				
					
									
				<b-row>
					<b-colxx  md="12" class="mb-4 text-center" >
						<b-button type="submit" class="mb-1" variant="outline-primary">Paid</b-button>
					</b-colxx>
				</b-row>

				
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
	name: "verify_paid_elder",
	components: {
		AppLayout: AppLayout,
		"single-lightbox": SingleLightbox
	},
	data() {
		return {
			elder: {}
		};
	},
	props: ["id"],
	mixins: [validationMixin],
	validations: {
		
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
				const body = {
					gramaniladari_id: "222",
					elder_id: this.id
				};
				axios({
					method: "patch",
					url: "http://localhost:3000/api/verifyelder/gramadisqualify",
					data: body
				})
					.then(res => {
						console.log("Disqualified res");
						console.log(res);
					})
					.catch(err => {
						console.log(err);
					});
				console.log(
					JSON.stringify({
						messsage: "paid"
					})
				);
			}
		}
		
	}
};
</script>
