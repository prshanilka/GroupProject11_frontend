<template>
	<AppLayout>
		<b-modal id="modallg" size="xl" title="Update GramaNiladari" hide-footer>
			<elder-details :off_id="off_id" />
		</b-modal>
		<b-modal id="delete" size="xl" title="Revove GramaNiladari" hide-footer>
			<div class="text-center">
				<h1>Confirm Delete GramaNiladari</h1>
				<div>
					<b-button
						class="mb-2"
						size="md"
						style="margin-top:20px;"
						variant="outline-warning"
						@click.prevent="deleteGramaOff"
					>Confirm Delete</b-button>
				</div>
			</div>
		</b-modal>
		<b-colxx xl="10" lg="12" style="margin:auto ">
			<b-colxx lg="12" md="12" class="m-lg-4 text-center" style="mrgin-top:50px;">
				<h1>Grama Division & Grama Niladari Details</h1>
			</b-colxx>

			<b-card no-body class="mb-4">
				<b-row>
					<b-colxx lg="6" md="12" class="mb-4">
						<div class="position-relative">
							<img src="/assets/img/profiles/def.png" class="card-img-top" height="450px"   />
						</div>
					</b-colxx>

					<b-colxx lg="6" md="12" class="mb-4">
						<div class="m-4">
							<p class="text-muted text-small mb-2">Grama Niladari Full Name</p>
							<p class="mb-4 text-large text-primary">{{details.oname}}</p>
							<p class="text-muted text-small mb-2">Grama Niladari Email</p>
							<p class="mb-4 text-large text-danger">{{details.oemail}}</p>
							<p class="text-muted text-small mb-2">Grama Niladari Phone Number</p>
							<p class="mb-4 text-large text-danger">{{details.ophone}}</p>
							<p class="text-muted text-small mb-2">Grama Niladari Officer ID</p>
							<p class="mb-4 text-large">{{details.grmaniladari_officer_id}}</p>
						</div>
					</b-colxx>
				</b-row>
				<b-card-body>
					<div lg="6" md="12" class="mb-4 text-center">
						<p class="text-muted text-small mb-2">Grama Division Name</p>
						<p class="mb-4 text-large">{{details.dname}}</p>

						<p class="text-muted text-small mb-2">Grama Division Address</p>
						<p class="mb-4 text-large">{{details.address}}</p>

						<p class="text-muted text-small mb-2">Grama Division Email</p>
						<p class="mb-4 text-default">{{details.demail}}</p>

						<p class="text-muted text-small mb-2">Grama Division Phone Number</p>
						<p class="mb-4 text-default">{{details.number}}</p>
					</div>
					<div class="text-center">
						<b-button
							class="mb-2"
							size="md"
							style="margin-top:20px;"
							v-b-modal.modallg
							variant="outline-primary"
						>Update</b-button>
						<b-button
							class="mb-2"
							size="md"
							style="margin-top:20px;"
							v-b-modal.delete
							variant="outline-warning"
						>Delete</b-button>
					</div>
				</b-card-body>
			</b-card>
		</b-colxx>
	</AppLayout>
</template>

<script>
import AppLayout from "../../../layouts/EAppLayout";
import SingleLightbox from "../../../containers/pages/SingleLightbox";
import axios from "axios";
import ElderDetails from "../../../containers/elder-alowance/update_grma_niladari_form";

import { validationMixin } from "vuelidate";
const { required, maxLength, minLength } = require("vuelidate/lib/validators");

export default {
	name: "view-details",
	components: {
		AppLayout: AppLayout,
		"elder-details": ElderDetails
	},
	data() {
		return {
			details: {},
			off_id: null
		};
	},
	props: ["id"],
	mixins: [validationMixin],
	validations: {},
	async created() {
		axios({
			method: "get",
			url: "/gramaniladariofficer/topost/" + this.id
		}).then(result => {
			this.details = result.data.data;
			console.log(result.data);
			// this.aplications = result.data.data;
			this.off_id = this.id;
		});
	},
	methods: {
		deleteGramaOff() {
			console.log("Delete" + this.details.grmaniladari_officer_id);
		}
	}
};
</script>
<style>
p {
	font-size: 1.4em;
}
</style>
