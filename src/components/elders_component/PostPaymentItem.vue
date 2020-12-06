<template>
	<b-colxx md="6" sm="6" lg="4" xxs="12">
		<b-card class="mb-4 text-center">
			<router-link tag="a" :to="detailPath">
				<div class="icon-row-item">
					<i class="iconsminds-dollar-sign-2 text-xlarge" />
				</div>
				<h1>The {{data.year}} {{data.m_name }} payments</h1>
				<p class="lead text-center">Payment Id:{{ data.payment_id }}</p>
				<p class="lead text-center">Check No:{{ data.check_no }}</p>
				<h3>Total To Div {{ data.total_money_amount}}</h3>
				<h3>Total To PostOffice{{data.sent_amount_to_post_office}}</h3>
				<h3>Centerl BAnk {{data.amount_of_money_debited_to_centrel_bank}}</h3>
				<p class="card-text font-weight-semibold mb-0">Qualified Eldes :{{ data.no_qualified_elders }}</p>
				<p
					class="card-text font-weight-semibold mb-0"
				>No OF Eldes got money{{ data.no_of_elders_got_money }}</p>
				<p
					class="card-text font-weight-semibold mb-0"
				>Retuned Money {{ data.elders_dose_not_resive_total_money }}</p>
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
		}
	}
};
</script>