<template>
	<b-colxx md="6" sm="6" lg="4" xxs="12">
		<b-card style="min-height:500px"  class="mb-4 text-center">
			<router-link tag="a" :to="detailPath">
				<div class="icon-row-item">
					<i class="iconsminds-dollar-sign-2 text-xlarge" />
				</div>
				<h1>{{data.m_name }} of {{data.year}}</h1>
				<p class="lead text-center">Payment Id:{{ data.payment_id }}</p>
				<p class="lead text-center">Check No:{{ data.check_no }}</p>
				
				<h3>Received To PostOffice :Rs.{{data.sent_amount_to_post_office}}</h3>
				
				<p class="card-text font-weight-semibold mb-1">Qualified Elders :{{ data.no_qualified_elders }}</p>
				<p
					class="card-text font-weight-semibold mb-1"
				>No of Elders Ricieved Money :{{ data.no_of_elders_got_money }}</p>
				<p
					class="card-text font-weight-semibold mb-0"
				>Returned Money :Rs.{{ data.elders_dose_not_resive_total_money }}</p>
			</router-link>
			<div v-show="!data.is_completed">
				<b-colxx>
					<b-button
						class="mb-2"
						size="md"
						style="margin-top:20px;"
						@click.prevent="end( data.payment_id )"
						variant="primary"
					>End The Payments</b-button>
				</b-colxx>
			</div>
		</b-card>
	</b-colxx>
</template>
<script>
import axios from "axios";
export default {
	props: ["data", "detailPath"],

	methods: {
		end(val) {
			const data = {
				divisional_payment_id: val
			};
			axios({
				method: "patch",
				url: "/postoffice/endpostpayment",
				data: data
			}).then(result => {
				console.log(result);

				// this.aplications = result.data.data;
			});
			setTimeout(() => {
					this.$router.go(0); 
				}, 40);
		}
	}
};
</script>