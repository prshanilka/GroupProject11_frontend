<template>
	<AppLayout>
		<b-colxx lg="12" md="12" class="m-lg-4 text-center" style="mrgin-top:50px;">
			<h1>Payment By Months In {{year}}</h1>
		</b-colxx>

		<b-row>
			<list-with-user-item
				v-for="(item, index) in history"
				:data="item"
				:detail-path="'/division/list_of_pay_to_post_year_months/'+item.year+'/'+item.month_id"
				:key="index"
			/>
		</b-row>
	</AppLayout>
</template>

<script>
import AppLayout from "../../../layouts/EAppLayout";
import ListWithUserItem from "../../../components/elders_component/payMonth";
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
	props: ["year"],
	created() {
		axios({
			method: "get",
			url: "http://localhost:3000/api/paymentdivoff/month-by-years/2020"
		}).then(result => {
			console.log(result.data.data[0]);
			this.history = result.data.data;
		});
	}
};
</script>
