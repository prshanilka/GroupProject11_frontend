<template>
	<AppLayout>
		<b-colxx lg="12" md="12" class="m-lg-4 text-center" style="mrgin-top:50px;">
			<h1>Payment By Years</h1>
		</b-colxx>

		<b-row>
			<list-with-user-item v-for="(item, index) in history" :data="item" detail-path="#" :key="index" />
		</b-row>
	</AppLayout>
</template>

<script>
import AppLayout from "../../../layouts/EAppLayout";
import ListWithUserItem from "../../../components/elders_component/PayYears";
import axios from "axios";

export default {
	name: "list-elders",
	components: {
		AppLayout: AppLayout,
		"list-with-user-item": ListWithUserItem
	},
	data() {
		return {
			history: []
		};
	},
	async beforeCreate() {
		axios.get("http://localhost:3000/api/paymentdivoff/years").then(result => {
			console.log(result.data.data[0]);
			this.history = result.data.data;
		});
	}
};
</script>
