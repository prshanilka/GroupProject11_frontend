<template>
	<AppLayout>

		<h1>List ot the post officers in a perticular division</h1>
		<b-colxx class="mb-4 text-center" lg="12" xxs="12">
			<h1>Post Offices</h1>
	    </b-colxx>
        <b-row>
				<list-with-user-item
					v-for="(item, index) in filteredList"
					:data="item"
					:detail-path="'/post/get_details_postoffice/'+item.post_office_id"
					:key="index"
				/>
        </b-row>


	</AppLayout>
</template>




<script>
import AppLayout from "../../../layouts/EAppLayout";
import ListWithUserItem from "../../../components/elders_component/PostOfficeList";

import axios from "axios";
export default {
	components: {

		AppLayout: AppLayout,
		"list-with-user-item": ListWithUserItem
	},
	data() {
		return {
			postoffice: []
		};
	},
	async beforeCreate() {
		
		axios.get("http://localhost:3000/api/postoffice/").then(result => {
			console.log(result.data.data[0]);
			this.postoffice = result.data.data;
		});
  },
  computed: {
		filteredList() {
			return this.postoffice.filter(postoff => {
				return postoff.post_office_id.toLowerCase();
			});
		}
	}


};
</script>
