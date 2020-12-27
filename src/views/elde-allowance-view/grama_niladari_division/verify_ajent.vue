<template>
		<b-colxx xl="10" lg="12" style="margin:auto ">

			<b-card class="mb-4 text-center" v-show="!submit_ag">
					<div class="icon-row-item">
						<i class="simple-icon-like text-xlarge" />				
					</div>
					<h2 class="mb-2">{{$t('office.p-succsess')}}</h2>
					<p>{{$t('office.p-register')}}</p>
			</b-card>

			<b-card no-body class="mb-4" v-show="submit_ag">
				<b-row>
					<b-colxx lg="6" md="12" class="mb-4">
						<div class="position-absolute card-top-buttons"></div>
						<single-lightbox
							:thumb="img"
							:large="img"
							class-name="card-img-top "
							class="m-4"
						/>
					</b-colxx>
					<b-colxx lg="6" md="12" class="mb-4">
						<div class="m-4">
							<h2 class="text-center m-4">Elder Details</h2>
							<p class="text-muted text-small mb-2">Elder Full Name</p>
							<p class="mb-3">{{elder.name}}</p>

							<p class="text-muted text-small mb-2">Elder Address</p>
							<p class="mb-3">{{elder.address}}</p>

							<p class="mb-3">
								<span class="text-muted text-small mb-2">Sex:</span>{{elder.sex}}
							</p>
							<p class="mb-3">
								<span class="text-muted text-small mb-2">Phone No:</span> {{elder.number}}
							</p>

							<p class="mb-3">
								<span class="text-muted text-small mb-2">Nic No:</span> {{elder.nic_id}}
							</p>
							<p class="mb-3">
								<span class="text-muted text-small mb-2">Email:</span> {{elder.email}}
							</p>

							<p class="mb-3">
								<span class="text-muted text-small mb-2">Date of Birth:</span> {{elder.birth_day}}
							</p>
						</div>
					</b-colxx>
				</b-row>
				<b-card-body>
					<b-row>
						<b-colxx lg="6" md="12" class="mb-4">
							<div class="position-absolute card-top-buttons"></div>
							<single-lightbox
								:thumb="agent.pic"
								:large="agent.pic"
								class-name="card-img-top "
								class="m-4"
							/>
						</b-colxx>
						<b-colxx lg="6" md="12" class="mb-4">
							<h2 class="text-center m-4">Guardian Information</h2>

							<p class="text-muted text-small mb-2">Guardian Name</p>
							<p class="mb-3">{{agent.name}}</p>

							<p class="text-muted text-small mb-2">NIC</p>
							<p class="mb-3">{{agent.nic}}</p>

							<p class="text-muted text-small mb-2">Guardian Address</p>
							<p class="mb-3">{{agent.address}}</p>

							<p class="text-muted text-small mb-2">Guardian Phone Number</p>
							<p class="mb-3">{{agent.phone}}</p>

							<p class="text-muted text-small mb-2">Guardian Email</p>
							<p class="mb-3">{{agent.email}}</p>

							<p class="text-muted text-small mb-2">Relationship With Elder</p>
							<p class="mb-3">{{agent.relation_with_elder}}</p>
						</b-colxx>
					</b-row>
					<b-colxx xxs="12">
						<b-card class="mb-4" title="Grama Niladari Rewiwe About the Elders Guardian">
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
										<b-button type="button" variant="primary" @click.prevent="sssss">Aprove Guardian</b-button>
									</b-colxx>
									<b-colxx lg="6" md="6" class="mb-4 text-center">
										<b-button
											type="button"
											variant="primary"
											@click.prevent="onValitadeFormSubmit"
										>Disqualify Guardian</b-button>
									</b-colxx>
								</b-row>
							</b-form>
						</b-card>
					</b-colxx>
				</b-card-body>
			</b-card>
		</b-colxx>
</template>

<script>

import SingleLightbox from "../../../containers/pages/SingleLightbox";
import axios from "axios";
import { validationMixin } from "vuelidate";
const { required, maxLength, minLength } = require("vuelidate/lib/validators");
import  {bUrl} from '../../../constants/config';
export default {
	name: "aprove-Guardian",
	components: {
		"single-lightbox": SingleLightbox
	},
	data() {
		return {
			submit_ag: true,
			img:"",
			grama_comment: "",
			agent: [],
			elder: []
		};
	},
	props: ["id","aid"],
	async created() {
		axios({
			method: "get",
			url: "/elders/" + this.id
		}).then(result => {
			this.elder = result.data.data,
			console.log(this.id);
			console.log(result.data.data)
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
			// console.log(res.data.data[0].profile);
			this.img = bUrl+res.data.data[0].profile;
			 
		}).catch(cc => {
			console.log(cc);
			this.img = "/assets/img/profiles/def.png"
		});
		axios({
			method: "get",
			url: "/agent/aid/" + this.aid
		}).then(result => {
			this.agent = result.data.data,
			this.agent.pic = bUrl + this.agent.pic;
			// console.log(this.aid);
			// console.log(result.data.data)
		});
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
			const body = {
        		gramaniladari_verify_comment: this.grama_comment,
				agent_id: this.aid
			};
			if (!this.$v.$invalid) {
				axios({
					method: "patch",
					url: "/agent/disq",
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
						messsage: this.body
					})
				);
				this.submit_ag = !this.submit_ag;
			}
		},
		sssss() {
			this.$v.$touch();
			console.log(this.$v.$invalid + "  ase cking ");
			const body = {
				elder_id: this.id,
        		gramaniladari_verify_comment: this.grama_comment,
				agent_id: this.aid
			};
			if (!this.$v.$invalid) {
				axios({
					method: "patch",
					url: "/agent/",
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
						messsage: this.body
					})
				);
				this.submit_ag = !this.submit_ag;
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
