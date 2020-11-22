<template>
	<div>
		<ul :class="`nav nav-tabs ${navClass}`">
			<li
				:class="{'nav-item':true,'step-doing': tab.isActive, 'step-done':tab.isDone }"
				v-for="(tab,tabIndex) in tabs"
				v-bind:key="tab.name"
			>
				<div v-if="tab.type!='done'">
					<a
						:class="{
                'nav-link':true,
                'disabled':topNavDisabled
            }"
						href="#"
						@click.prevent="clickedTab(tabIndex)"
					>
						<span>{{tab.name}}</span>
						<small>{{tab.desc}}</small>
					</a>
				</div>
			</li>
		</ul>
		<slot></slot>
		<div :class="`wizard-buttons ${navClass}`" v-if="!(lastStepEnd && isCompleted)">
			<button
				type="button"
				class="mr-1 btn btn-primary"
				:disabled="!currentActive > 0"
				@click="previousTab()"
			>{{$t('wizard.prev')}}</button>
			<button
				type="button"
				class="btn btn-primary"
				:disabled="currentActive > totalTabs - 1"
				@click="nextTab()"
			>{{$t('wizard.next')}}</button>
		</div>
	</div>
</template>

<script>
import axios from "axios";

export default {
	name: "form-wizard",
	props: {
		navClass: {
			default: "justify-content-center"
		},
		lastStepEnd: {
			default: false
		},
		topNavDisabled: {
			default: true
		},
		withValidate: {
			default: false
		},
		done: {
			type: Function,
			default: () => {
				console.log("called done!");
			}
		},
		elder: {
			default: ""
		}
	},
	data() {
		return {
			tabs: [],
			currentActive: 0,
			totalTabs: 0,
			isCompleted: false,
			elderdetails: Array(3)
		};
	},

	created() {
		this.tabs = this.$children;
	},
	mounted() {
		this.totalTabs = this.tabs.filter(x => x.type != "done").length;
	},
	methods: {
		tabStatusFix() {
			this.tabs.forEach((tab, tabIndex) => {
				let isDone = tab.isDone;
				if (!isDone) {
					isDone = this.currentActive > tabIndex;
				}
				tab.isDone = isDone;
				tab.isActive = false;
			});
		},
		clickedTab(tabIndex) {
			if (!this.topNavDisabled) {
				if (!(this.lastStepEnd && this.isCompleted)) {
					this.currentActive = tabIndex;
					this.tabStatusFix();
					this.tabs[this.currentActive].isActive = true;
				}
			}
		},
		previousTab() {
			this.currentActive--;
			this.tabStatusFix();
			this.tabs[this.currentActive].isActive = true;
		},

		nextTab() {
			let valid = true;
			if (this.withValidate) {
				valid = this.tabs[this.currentActive].validate();
				if (valid) this.tabs[this.currentActive].submit();
			}

			// console.log(
			// 	this.tabs[this.currentActive].$children[0].$children[0].elder.name
			// );
			var reply = this.tabs[
				this.currentActive
			].$children[0].$children[0].onValitadeFormSubmit();
			valid = reply.valid;
			var el = reply.elder;
			// console.log(el);

			this.elderdetails[this.currentActive] = el;
			console.log(valid + "  pear");

			if (!valid) {
				this.currentActive++;
				this.tabStatusFix();
				if (this.currentActive >= this.totalTabs) {
					this.isCompleted = true;
					const doneTab = this.tabs.find(x => x.type == "done");
					if (doneTab) {
						doneTab.isActive = true;
					} else this.tabs[this.currentActive - 1].isActive = true;
					this.finishedBusiness();
				} else this.tabs[this.currentActive].isActive = true;
			}
		},
		finishedBusiness() {
			console.log(this.elderdetails);
			const body = {
				district_id: this.elderdetails[0].district,
				divisional_secratory_id: this.elderdetails[0].divisional_off,
				gramaniladari_division_id: this.elderdetails[0].grama_niladari_div,
				near_post_office_id: this.elderdetails[0].nearest_post_office,
				name: this.elderdetails[0].name,
				sex: this.elderdetails[0].sex,
				email: this.elderdetails[0].email,
				address: this.elderdetails[0].address,
				birth_day: this.elderdetails[0].birth_day,
				number: this.elderdetails[0].phone_no,
				nic_id: this.elderdetails[0].nic_no,
				elders_reg_id: this.elderdetails[1].elder_id,
				local_commity_elder_name: this.elderdetails[1].elder_committe_name,
				local_commity_elder_id: this.elderdetails[1].comm_membership_no,
				lives_with_whome: this.elderdetails[1].lives_with,
				other_elders_name: this.elderdetails[1].other_names_and_details,
				other_elders_nic: this.elderdetails[1].other_elder_nic,
				elders_member_no: this.elderdetails[1].elder_id,
				other_name_and_description: this.elderdetails[1]
					.other_names_and_details,
				source_of_income: this.elderdetails[1].source_of_income,
				income: this.elderdetails[1].monthly_income,
				samurdi_no: this.elderdetails[1].samurdi_no,
				people_adi_no: this.elderdetails[1].people_aid_no
			};

			const ajent = {
				elder_id: "11",
				name: this.elderdetails[2].agent_name,
				nic: this.elderdetails[2].agent_nic,
				address: this.elderdetails[2].agent_address,
				phone: this.elderdetails[2].agent_phone_no,
				email: this.elderdetails[2].agent_email,
				relation_with_elder: this.elderdetails[2].agent_relationship_with_elder
			};

			axios({
				method: "post",
				url: "http://localhost:3000/api/elders/",
				data: body
			})
				.then(res => {
					if (this.elderdetails[2].available) {
						axios({
							method: "post",
							url: "http://localhost:3000/api/agent",
							data: ajent
						})
							.then(result => {
								console.log(result);
							})
							.catch(err => {
								console.log(err);
							});
					}

					this.offersData = res.data;
					console.log(res);
					this.done();
				})
				.catch(err => {
					console.log(err);
				});

			// console.log(this.nameNow);
		}
	}
};
</script>
