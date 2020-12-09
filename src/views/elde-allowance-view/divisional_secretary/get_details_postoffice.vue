<template>
	<AppLayout>
		<b-colxx xl="10" lg="12" style="margin:auto ">
			<b-modal id="modallg" size="xl" title="Update Post Office" hide-footer>
				<elder-details :id="this.id" />
			</b-modal>
			<b-modal id="delete" size="xl" title="Revove  Post Office" hide-footer>
				<div class="text-center">
					<h1>Confirm Delete GramaNiladari</h1>
					<div>
						<b-button
							class="mb-2"
							size="md"
							style="margin-top:20px;"
							variant="outline-warning"
							@click.prevent="deletePost"
						>Confirm Delete</b-button>
					</div>
				</div>
			</b-modal>
			<b-colxx lg="12" md="12" class="m-lg-4 text-center" style="mrgin-top:50px;">
				<h1>Post Office Details</h1>
			</b-colxx>

			<b-card no-body class="mb-4">
				<b-row>
					<b-colxx lg="6" md="12" class="mb-4">
						<div class="position-relative">
							<img src="/assets/img/profiles/post.jpg" class="card-img-top" />
						</div>
					</b-colxx>

					<b-colxx lg="6" md="12" class="mb-4">
						<div class="m-4">
							<p class="mb-2">Postal Code</p>
							<p class="mb-4 text-large text-primary">{{details.post_office_id}}</p>
							<p class="mb-2">Name</p>
							<p class="mb-4 text-large text-danger">{{details.name}}</p>
							<p class="mb-2">Address</p>
							<p class="mb-4 text-large text-danger">{{details.address}}</p>
							<p class="mb-2">Phone Number</p>
							<p class="mb-4 text-large text-danger">{{details.phone_no}}</p>
							<p class="mb-2">Email</p>
							<p class="mb-4 text-large">{{details.email}}</p>
							<p class="mb-2">Bank Account</p>
							<p class="mb-4 text-large">{{details.bank_account_no}}</p>
						</div>
					</b-colxx>
					<b-colxx lg="12" md="12" class="mb-4">
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
import ElderDetails from "../../../containers/elder-alowance/updatePostOffice";

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
			details: {}
		};
	},
	props: ["id"],
	mixins: [validationMixin],
	validations: {},
	async created() {
		axios({
			method: "get",
			url: "/postoffice/" + this.id
		}).then(result => {
			this.details = result.data.data;
			console.log(result.data);
			// this.aplications = result.data.data;
		});
	},
	methods: {
		deletePost() {
			const body = {
				post_office_id: this.id
			};
			axios({
				method: "delete",
				url: "/postoffice",
				data: body
			})
				.then(res => {
					this.offersData = res.data;
					console.log(res);
				})
				.catch(err => {
					console.log(err);
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
