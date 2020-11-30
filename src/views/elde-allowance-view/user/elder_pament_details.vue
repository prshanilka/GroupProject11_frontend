<template>
	<div>
		<b-colxx class="mb-4 text-center" lg="12" xxs="12">
			<h1>This is for Elder Payment History detail List</h1>
		</b-colxx>
		<b-row>
			<list-with-user-item
				v-for="(item, index) in postpayhistory"
				:data="item"
				:detail-path="'/post/list_of_histrory_elders.vue/'+item.post_office_id+'/'+item.year+'/'+item.month"
				:key="index"
			/>
		</b-row>
	</div>
</template>




<script>
import AppLayout from "../../../layouts/EAppLayout";
import ListWithUserItem from "../../../components/elders_component/ElderhistoryPayItem.vue";

import axios from "axios";
export default {
	components: {
		name: "elder-payment-details",
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
			.get("http://localhost:3000/api/paymentposttoben//elderhistory/11")
			.then(result => {
				console.log(result.data.data[0]);
				this.postpayhistory = result.data.data;
			});
	},
	computed: {}
};
</script>
