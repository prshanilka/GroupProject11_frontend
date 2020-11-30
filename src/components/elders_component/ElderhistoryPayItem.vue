<template>
	<b-colxx md="6" sm="6" lg="4" xxs="12">
		<b-card class="mb-4 text-center">
			<router-link tag="a" :to="detailPath">
				<div class="icon-row-item mb-5">
					<i class="simple-icon-user text-xlarge" />
				</div>
				<h1>The {{data.year}} {{data.month}} payments</h1>
				<p class="lead text-center">Payment Id:{{ data.payment_id }}</p>

				<h3 class="lead text-center">Amount :{{ data.money_amount}}</h3>
				<h3>Preson Got money : {{data.person_got_money}}</h3>
				<p class="text-center">Date and Time:{{ data.date_and_time_got_money }}</p>
			</router-link>
			<div v-show="show">
				<b-colxx>
					<b-button
						class="mb-2"
						size="md"
						style="margin-top:20px;"
						@click.prevent="end( data.payment_id )"
						variant="primary"
					>Submit reason for not Taking the money</b-button>
				</b-colxx>
			</div>
			<div v-show="!show" class="mt-5 mb-5 pb-1">
				<div v-show="!data.is_taken_money">
					<p style="color:blue">Take Your money From Nearest Post Office</p>
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
		this.show =
			this.$props.data.is_completed && !this.$props.data.is_taken_money;
		console.log(this.show);
	},
	methods: {
		end(val) {
			const data = {
				divisional_payment_id: val
			};
			axios({
				method: "patch",
				url: "http://localhost:3000/api/postoffice/endpostpayment",
				data: data
			}).then(result => {
				console.log(result);

				// this.aplications = result.data.data;
			});
		}
	}
};
</script>