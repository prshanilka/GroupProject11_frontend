<template>
	<AppLayout>
		<b-row>
			<b-colxx lg="4" md="6" sm="6" xxs="12">
				<b-card class="mb-4 text-center">
					<div class="icon-row-item">
						<i class="iconsminds-calendar-4 text-xlarge" />
					</div>
					<p class="text-large text-center text-primary">Year</p>
					<p class="text-large text-center text-danger">{{ details.year }}</p>
				</b-card>
			</b-colxx>

			<b-colxx lg="4" md="6" sm="6" xxs="12">
				<b-card class="mb-4 text-center">
					<div class="icon-row-item">
						<i class="iconsminds-calendar-4 text-xlarge" />
					</div>
					<p class="text-large text-center text-primary">Month</p>
					<p class="text-large text-center text-danger">{{ details.month }}</p>
				</b-card>
			</b-colxx>

			<b-colxx lg="4" md="6" sm="6" xxs="12">
				<b-card class="mb-4 text-center">
					<div class="icon-row-item">
						<i class="iconsminds-newspaper text-xlarge" />
					</div>
					<p class="text-large text-center text-primary">Payment Id</p>
					<p class="text-large text-center text-danger">{{ details.payment_id }}</p>
				</b-card>
			</b-colxx>
		</b-row>

		<b-row>
		<b-colxx lg="12"  xxs="12">
				<b-card class="mb-4 text-center">
					<div class="icon-row-item">
						<i class="iconsminds-newspaper text-xlarge" />
					</div>
					<p class="text-large text-center text-primary">Check Number</p>
					<p class="text-large text-center text-danger">{{ details.check_no }}</p>
				</b-card>
		</b-colxx>
		</b-row>

		<b-row>
			<b-colxx md="6" sm="6" xxs="12">
				<b-card class="mb-4 text-center">
					<div class="icon-row-item">
						<i class="iconsminds-conference text-xlarge" />
					</div>
					<p class="text-large text-center text-primary">No of Qualified Elders</p>
					<p class="text-large text-center text-success">{{ details.no_qualified_elders }}</p>
				</b-card>
			</b-colxx>

			<b-colxx md="6" sm="6" xxs="12">
				<b-card class="mb-4 text-center">
					<div class="icon-row-item">
						<i class="iconsminds-conference text-xlarge" />
					</div>
					<p class="text-large text-center text-primary">No of Elders Received Money</p>
					<p class="text-large text-center text-warning">{{ count }}</p>
				</b-card>
			</b-colxx>
		</b-row>
	</AppLayout>
</template>

<script>
import axios from "axios";
import UserCardElder from "../../../containers/elder/UserCardElder";
import AppLayout from "../../../layouts/EAppLayout";
export default {
	name: "post-officer-dashboard",
	components: {
		"user-card-elder": UserCardElder,
		AppLayout: AppLayout
	},
	data() {
		return {
			details: "",
			count: ""
		};
	},
	async beforeCreate() {
		axios.get("/paymentdivoff/max").then(result => {
			console.log(result.data.data[0]);
			this.details = result.data.data[0];

			axios
				.get(
					"/paymentposttoben/count/" +
						this.details.payment_id
				)
				.then(result => {
					console.log(result.data.data[0]);
					console.log(result.data.data[0]);

					this.count = result.data.data[0].count;
				});
		});
	}
};
</script>