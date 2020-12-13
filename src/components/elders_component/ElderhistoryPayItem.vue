<template>
	<b-colxx md="6" sm="6" lg="4" xxs="12">
		<b-card class="mb-4 text-center">
			<div class="icon-row-item mb-5">
				<i class="simple-icon-user text-xlarge" />
			</div>
			<h1>The {{data.year}} {{data.m_name }} payments</h1>
			<p class="lead text-center">Payment Id:{{ data.payment_id }}</p>

			<h3 class="lead text-center">Amount :{{ data.money_amount}}</h3>

			<h3>Preson Got money : {{data.person_got_money}}</h3>
			<p class="text-center">Date and Time:{{ data.date_and_time_got_money }}</p>

			<div v-show="!show">
				<div v-show="data.reason">
					<div v-show="!data.is_taken_money">
						<p style="color:green">{{data.reson_for_not_take_money}}</p>
					</div>
				</div>
			</div>
			<div v-show="show">
				<b-colxx>
					<router-link tag="a" :to="detailPath">
						<b-button
							class="mb-2"
							size="md"
							style="margin-top:20px;"
							variant="primary"
						>Submit reason for not Taking the money</b-button>
					</router-link>
				</b-colxx>
			</div>
			<div v-show="!show" class="mt-5 mb-5 pb-1">
				<div v-show="!data.reason">
					<div v-show="!data.is_taken_money">
						<p style="color:blue">Take Your money From Nearest Post Office</p>
					</div>
				</div>
			</div>
		</b-card>
	</b-colxx>
</template>
<script>
import axios from "axios";
export default {
	props: ["data", "detailPath"],
	data() {
		return {
			show: false
		};
	},
	created() {
		if (this.$props.data.is_completed) {
			if (this.$props.data.is_taken_money) {
				this.show = false;
			} else {
				if (this.$props.data.reason) {
					this.show = false;
				} else {
					this.show = true;
				}
			}
			// this.$props.data.is_completed && !this.$props.data.is_taken_money;
		} else {
			this.show = false;
		}
	}
};
</script>