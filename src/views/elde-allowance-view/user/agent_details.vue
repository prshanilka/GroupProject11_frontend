<template>
	 
	<b-colxx xl="10" lg="12" style="margin:auto ">
		<b-modal id="modallg" size="xl" title="Guardian Details" hide-footer>
					<elder-details :id="clickedid"/>
		</b-modal>
		<b-colxx lg="12" md="12" class="m-lg-4 text-center" style="mrgin-top:50px;">
			<h1>Guardian Information</h1>
		</b-colxx>

		<b-card no-body class="mb-4 text-center" >
			<div xl="10" lg="12" class="m-lg-4 text-center mb-4" style="mrgin-top:50px;">
				<img :src="agent.pic" class="card-img" />
			</div>
			
			<b-row>
			<b-colxx lg="12" md="12" class="m-lg-4 text-center" style="mrgin-top:50px;">
						<p class="mb-4 text-primary text-center text-xlarge">{{agent.name}}</p>
						<p class="mb-4 text-large">{{agent.address}}</p>

						<p class="mb-4 text-large">
							{{agent.phone}}
						</p>

						<p class="mb-4 text-large">
							{{agent.nic}}
						</p>
						<p class="mb-4 text-large">
							{{agent.email}}
						</p>
						<template>
					  <b-button
					  				v-if="agent.name"
									class="mb-2"
									size="xl"
									v-b-modal.modallg
									@click="clickedid = agent.elder_id"
									variant="outline-danger"
								>Change Guardian </b-button>
								<b-button
					  				v-if="!agent.name"
									class="mb-2"
									size="xl"
									v-b-modal.modallg
									@click="clickedid = agent.elder_id"
									variant="outline-danger"
								>Add Guardian </b-button>
						</template>
			</b-colxx>			
			</b-row>
			
		</b-card>
	</b-colxx>
	 
</template>

<script>
import AppLayout from "../../../layouts/EAppLayout";
import SingleLightbox from "../../../containers/pages/SingleLightbox";
import axios from "axios";
import ElderDetails from "../../../containers/elder-alowance/agent_formModallg";
import { validationMixin } from "vuelidate";
const { required, maxLength, minLength } = require("vuelidate/lib/validators");
import  {bUrl} from '../../../constants/config';

export default {
	name: "view-application-and-verify",
	components: {
		AppLayout: AppLayout,
		"single-lightbox": SingleLightbox,
		"elder-details": ElderDetails,
	},
	data() {
		return {
			clickedid: null,
			agent: []
		};
	},
	async beforeCreate() {
		axios
			.get("/agent/qulify/")
			.then(result => {
				console.log(result.data.data);
				this.agent = result.data.data;
				this.agent.pic = bUrl + this.agent.pic;
			});
	}
};
</script>
<style>
p {
	font-size: 1.4em;
}
</style>
