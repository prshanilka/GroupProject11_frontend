<template>
	<AppLayout>
		<b-modal id="modallg" size="xl" title="Update Post Officer" hide-footer>
			<elder-details :id="id" />
		</b-modal>
		<b-modal id="delete" size="xl" title="Delete Post Officer" hide-footer>
			<div class="text-center">
				<h1>Confirm Delete   Post Officer</h1>
				<div>
					<b-button
						class="mb-2"
						size="md"
						style="margin-top:20px;"
						variant="outline-warning"
						@click.prevent="deletepostOfficer"
					>Confirm Delete</b-button>
				</div>
			</div>
		</b-modal>
		<b-colxx xl="10" lg="12" style="margin:auto ">
			<b-colxx lg="12" md="12" class="m-lg-4 text-center" style="mrgin-top:50px;">
				<h1>Post Officer Details    </h1>
			</b-colxx>

			<b-card no-body class="mb-4">
				<b-row>
					<b-colxx lg="6" md="12" class="mb-4">
						<div class="position-relative">
							<img src="/assets/img/profiles/7.jpg" class="card-img-top" />
						</div>
					</b-colxx>

					<b-colxx lg="6" md="12" class="mb-4">
						<div class="m-4">
							<p class="text-muted text-small mb-2">Post Officer Full Name</p>
							<p class="mb-4 text-large text-primary">{{details.o_name}}</p>
							<p class="text-muted text-small mb-2">Post Officcer Email</p>
							<p class="mb-4 text-large text-danger">{{details.o_email}}</p>
							<p class="text-muted text-small mb-2">Post Officer Phone Number</p>
							<p class="mb-4 text-large text-danger">{{details.o_phone}}</p>
							<p class="text-muted text-small mb-2">Post Officer ID</p>
							<p class="mb-4 text-large">{{details.o_id}}</p>
							<p class="text-muted text-small mb-2">Post Officer Designation</p>
							<p class="mb-4 text-large">{{details.o_designation}}</p>
						</div>
					</b-colxx>
				</b-row>
				<b-card-body>
					<div lg="6" md="12" class="mb-4 text-center">
						<p class="text-muted text-small mb-2">Post Office Code</p>
						<p class="mb-4 text-large">{{details.p_post}}</p>

						<p class="text-muted text-small mb-2">Post Office Name</p>
						<p class="mb-4 text-large">{{details.p_name}}</p>

						<p class="text-muted text-small mb-2">Post Office Address</p>
						<p class="mb-4 text-large">{{details.p_address}}</p>

						<p class="text-muted text-small mb-2">Post Office Email</p>
						<p class="mb-4 text-default">{{details.p_email}}</p>
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
import ElderDetails from "../../../containers/elder-alowance/upadate_post_officer";

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

	async created() {
		axios({
			method: "get",
			url: "/postofficers/officer/byid/" + this.id
		}).then(res => {
			console.log(res);
			this.details = res.data.data;
		});
	},
	methods: {
		deletepostOfficer() {
			console.log("Delete" + this.details.o_id);
			const body = {
				officer_id:this.details.o_id
			}
			axios({
			method: "delete",
			url: "/postofficers/" ,
			data:body
		}).then(res => {
			console.log(res);
			this.details = res.data.data;
			 this.$router.push('/sysadmin/list-of-postofficers');
		});
		}
	}
};
</script>
<style>
p {
	font-size: 1.4em;
}
</style>
