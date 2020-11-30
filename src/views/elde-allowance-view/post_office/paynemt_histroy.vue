<template>
	<AppLayout>
		<h1>List ot the post office Payment History</h1>
		<b-colxx class="mb-4 text-center" lg="12" xxs="12">
			<h1>Post Offices</h1>
		</b-colxx>
		<b-row>
			<list-with-user-item
				v-for="(item, index) in postpayhistory"
				:data="item"
				:detail-path="'/post/list_of_histrory_elders.vue/'+item.post_office_id+'/'+item.year+'/'+item.month"
				:key="index"
			/>
		</b-row>
	</AppLayout>
</template>




<script>
import AppLayout from "../../../layouts/EAppLayout";
import ListWithUserItem from "../../../components/elders_component/PostPaymentItem";

import axios from "axios";
export default {
	components: {
		AppLayout: AppLayout,
		"list-with-user-item": ListWithUserItem
	},
	data() {
		return {
			postpayhistory: []
		};
	},
	async beforeCreate() {
		axios
			.get("http://localhost:3000/api/postoffice/paymenthistory/11000")
			.then(result => {
				console.log(result.data.data[0]);
				this.postpayhistory = result.data.data;
			});
	},
	computed: {}
};
</script>
