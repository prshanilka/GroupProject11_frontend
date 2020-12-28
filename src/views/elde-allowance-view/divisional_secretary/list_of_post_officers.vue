<template>
	<AppLayout>
		<b-colxx lg="12" md="12" class="m-lg-4 text-center" style="mrgin-top:50px;">
			<h1>Post Officers</h1>
		</b-colxx>

		<b-row>
			<list-with-user-item
				v-for="(item, index) in post_officer"
				:data="item"
				:detail-path="'/post/post-officer-details/'+item.o_id"
				:key="index"
			/>
		</b-row>
	</AppLayout>
</template>

<script>
import AppLayout from "../../../layouts/EAppLayout";
import ListWithUserItem from "../../../components/elders_component/PostOfficerList";
import axios from "axios";

export default {
	name: "list-elders",
	components: {
		AppLayout: AppLayout,
		"list-with-user-item": ListWithUserItem
	},
	data() {
		return {
			post_officer: []
		};
	},
	async beforeCreate() {
		axios.get("/postofficers/getpostofficer/").then(result => {
			console.log(result);
			this.post_officer = result.data.data;
		});
	}
};
</script>
