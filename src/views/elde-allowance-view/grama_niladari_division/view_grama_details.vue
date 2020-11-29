<template>
	<AppLayout>
		<b-colxx xl="10" lg="12" style="margin:auto ">

			<b-colxx lg="12" md="12" class="m-lg-4 text-center" style="mrgin-top:50px;">
				<h1>Grama Division & Grama Niladari Details</h1>
			</b-colxx>

			<b-card no-body class="mb-4">
				<b-row>
					<b-colxx lg="6" md="12" class="mb-4">
						<div class="position-relative">
                            <img src="/assets/img/profiles/4.jpg" class="card-img-top" />
                        </div>
					</b-colxx>
                
					<b-colxx lg="6" md="12" class="mb-4">
						<div class="m-4">
                            <p class="text-muted text-small mb-2">Grama Niladari Full Name</p>
							<p class="mb-4 text-large text-primary">{{details.oname}}</p>
							<p class="text-muted text-small mb-2">Grama Niladari Email</p>
							<p class="mb-4  text-large text-danger">{{details.oemail}}</p>
                            <p class="text-muted text-small mb-2">Grama Niladari Phone Number</p>
                            <p class="mb-4  text-large text-danger">{{details.ophone}}</p>
                            <p class="text-muted text-small mb-2">Grama Niladari Officer ID</p>
                            <p class="mb-4  text-large ">{{details.grmaniladari_officer_id}}</p>
						</div>
					</b-colxx>
				</b-row>
				<b-card-body>
					
						<div lg="6" md="12" class="mb-4 text-center">
                            <p class="text-muted text-small mb-2">Grama Division Name</p>
                            <p class="mb-4 text-large ">{{details.dname}}</p>

                            <p class="text-muted text-small mb-2">Grama Division Address</p>
                            <p class="mb-4 text-large ">{{details.address}}</p>

							<p class="text-muted text-small mb-2">Grama Division Email</p>
							<p class="mb-4  text-default ">{{details.demail}}</p>

                            <p class="text-muted text-small mb-2">Grama Division Phone Number</p>
                            <p class="mb-4  text-default ">{{details.number}}</p>
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

import { validationMixin } from "vuelidate";
const { required, maxLength, minLength } = require("vuelidate/lib/validators");

export default {
	name: "view-details",
	components: {
		AppLayout: AppLayout,
		
	},
	data() {
		return {
			
			details: {},
			
		};
	},
	props: ["id"],
	mixins: [validationMixin],
	validations: {
		
	},
	async created() {
		axios({
			method: "get",
			url: "http://localhost:3000/api/gramaniladariofficer/topost/" + this.id
		}).then(result => {
			this.details = result.data.data;
			console.log(result.data);
			// this.aplications = result.data.data;
		});
	},
	methods: {
    }
};
</script>
<style>
p {
	font-size: 1.4em;
}
</style>
