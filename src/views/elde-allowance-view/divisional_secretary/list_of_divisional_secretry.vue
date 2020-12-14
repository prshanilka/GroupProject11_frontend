<template>
	<AppLayout>
		<b-colxx class="mb-4 text-center" lg="12" xxs="12">
			<h1>List of Divisional Secretry</h1>
	    </b-colxx>
        <b-row>
				<list-with-user-item
					v-for="(item, index) in postoffice"
					:data="item"
					:detail-path="'/division/get_details_divisional_secretry/'+item.divisional_secratary_id"
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
		
		axios.get("/divisionaloffice").then(result => {
			console.log(result.data.data[0]);
			this.postoffice = result.data.data;
		});
  },
 


};
</script>
