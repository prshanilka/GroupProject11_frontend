<template>
	<b-colxx   md="6" sm="6" lg="4" xxs="12">
		<b-card style="min-height:430px" class="mb-4 text-center">
			<div class="icon-row-item mb-5">
				<i class="iconsminds-dollar-sign-2 text-xlarge" />
			</div>
			<h1> {{data.m_name }}  {{data.year}}  </h1>
			<p class="lead text-center">Payment Id:{{ data.payment_id }}</p>

			<h3 class="lead text-center">Amount :{{ data.money_amount}}</h3>

			<h3 v-if="data.person_got_money" >Received By : {{data.person_got_money}}</h3>
			<h3 v-if="data.date_and_time_got_money" class="text-center">Date :{{ data.date_and_time_got_money.split("T", 1)[0] }}</h3>

			<div v-show="!show">
				<div v-show="data.reason">
					<div v-show="!data.is_taken_money">
						<h2 style="color:green">{{data.reson_for_not_take_money}}</h2>
					</div>
				</div>
			</div>
			<div v-show="show">
				<b-colxx>
					<router-link tag="a" :to="detailPath">
						 <b-colxx xxs="12" class="text-center">
                          <b-alert show variant="danger" >Payment Returned </b-alert>
                          </b-colxx>
						<b-button
							class="mb-2"
							size="md"
							style="margin-top:20px;"
							variant="danger"
						> Submit Reasons?</b-button>
					</router-link>
				</b-colxx>
			</div>
			<div v-show="!show" class="mt-5 mb-5 pb-1">
				<div v-show="!data.reason">
					<div v-show="!data.is_taken_money">
						<h2 style="color:blue">Take Your money From Nearest Post Office</h2>
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
 