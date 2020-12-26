<template>
	<b-colxx xl="10" lg="12" style="margin:auto ">
		<div class="mb-4 mt-4 text-center" v-show="is_submited">
			<h2 class="mb-2">Succes Fully Updated Payments</h2>
			<p>Update Complete</p>
		</div>
		<div v-show="!is_submited">
			<b-row>
				<b-colxx lg="12" md="12" class="m-lg-4 text-center" style="mrgin-top:50px;">
					<h1>Elder Benifisher for Verification  </h1>
				</b-colxx>
				<b-colxx lg="6" md="12" class="mb-4">
					<single-lightbox
						:thumb="img"
						large="/assets/img/profiles/def.png"
						class-name="card-img-top "
						class="m-4"
					/>
					<p class="mb-3 text-xlarge text-primary text-center">{{elder.name}}</p>
					<p class="mb-3 text-center text-danger text-large">{{elder.nic_id}}</p>
				</b-colxx>
				<b-colxx lg="6" md="12" class="mb-4">
					<div class="m-4">
							<h2 class="text-center m-4">Elder Information</h2>

						<p class="mb-2">Elder Address:</p>
						<p class="mb-2">{{elder.address}}</p>

						<p class="mb-2">Sex:</p>
						<p class="mb-2">{{elder.sex}}</p>

						<p class="mb-2">Phone No:</p>
						<p class="mb-2">{{elder.number}}</p>

						<p class="mb-2">Email:</p>
						<p class="mb-2">{{elder.email}}</p>

						<p class="mb-2">Date of Birth:</p>
						<p class="mb-2">{{elder.birth_day}}</p>

						<p class="mb-2">Age:</p>
						<p class="mb-2">{{elder.birth_day}}</p>
					</div>
				</b-colxx>
				<b-colxx  v-if="agent.name" lg="6" md="12" class="mb-4">
					<single-lightbox
						:thumb="agent.pic"
						large="/assets/img/profiles/def.png"
						class-name="card-img-top "
						class="m-4"
					/>
					<p class="mb-3 text-xlarge text-primary text-center">{{agent.name}}</p>
					<p class="mb-3 text-center text-danger text-large">{{agent.nic}}</p>
				</b-colxx>
				<b-colxx  v-if="agent.name" lg="6" md="12" class="mb-4">
							<h2 class="text-center m-4">Guardian Information</h2>

							<p class="text-muted text-small mb-2">Agent Name</p>
							<p class="mb-3">{{agent.name}}</p>

							<p class="text-muted text-small mb-2">NIC</p>
							<p class="mb-3">{{agent.nic}}</p>

							<p class="text-muted text-small mb-2">Agent Address</p>
							<p class="mb-3">{{agent.address}}</p>

							<p class="text-muted text-small mb-2">Agent Phone Number</p>
							<p class="mb-3">{{agent.phone}}</p>

							<p class="text-muted text-small mb-2">Email</p>
							<p class="mb-3">{{agent.email}}</p>

							<p class="text-muted text-small mb-2">Relationship With Elder</p>
							<p class="mb-3">{{agent.relation_with_elder}}</p>
						</b-colxx>
			</b-row>

			<b-row>
				<b-colxx md="12" class="mb-4 text-center">
					<b-button
						type="submit"
						variant="primary"
						@click.prevent="onSubmit"
						class="mt-4"
					>Allowance Paid To Elder</b-button>
					<b-button
						type="submit"
						variant="primary"
						@click.prevent="onPress"
						class="mt-4"
					>Allowance Paid To Gradian</b-button>
				</b-colxx>
			</b-row>
		</div>
	</b-colxx>
</template>

<script>
import AppLayout from "../../../layouts/EAppLayout";
import SingleLightbox from "../../../containers/pages/SingleLightbox";
import axios from "axios";
import {bUrl} from '../../../constants/config'


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
			is_submited: false,
			img:"",
			elder: {},
			agent: {}
		};
	},
	props: ["id", "pay_id"],
	mixins: [validationMixin],
	validations: {},
	async created() {
		axios({
			method: "get",
			url: "/elders/" + this.id
		}).then(result => {
			this.elder = result.data.data;
			console.log(result.data.data);
			// this.aplications = result.data.data;
		});

		axios({
			method: "get",
			url: "/agent/elder/" + this.id
		}).then(result => {
			 
			this.agent = result.data.data;
			this.agent.pic = bUrl+this.agent.pic;
			console.log(result);
			// this.aplications = result.data.data;
		});

		const body = {
				id:this.id,
				role_id:"10"
			}
			axios({
			method: "post",
			url: "/upload/getprofile"  ,
			data:body
		}).then(res => {
			console.log(res.data.data[0].profile);
			this.img = bUrl+res.data.data[0].profile;
		}).catch(cc => {
			console.log(cc);
			this.img = "/assets/img/profiles/def.png"
		});

	},
	methods: {
		onSubmit() {
			const data = {
				payment_id: this.pay_id
			};
			console.log(data);

			console.log(this.pay_id);
			axios({
				method: "post",
				url: "/paymentposttoben/paytoelder",
				data: data
			}).then(result => {
				this.elder = result.data.data;
				console.log(result);
				this.is_submited = !this.is_submited;
				// this.aplications = result.data.data;
			});
		},
		onPress() {
			const data = {
				payment_id: this.pay_id
			};
			console.log(data);

			console.log(this.pay_id);
			axios({
				method: "post",
				url: "/paymentposttoben/paytoagent",
				data: data
			}).then(result => {
				this.elder = result.data.data;
				console.log(result);
				this.is_submited = !this.is_submited;
				// this.aplications = result.data.data;
			});
		}
	}
};
</script>