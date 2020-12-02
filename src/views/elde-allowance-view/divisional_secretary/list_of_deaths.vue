<template>
	<AppLayout>
  
				<b-colxx lg="12" md="12" class="m-lg-4 text-center" style="mrgin-top:50px;">
					<h1>List of Informed Deaths</h1>
				</b-colxx>
      
        <b-row>
				<list-with-user-item
					v-for="(item, index) in filteredList"
					:data="item"
					detail-path="#"
					:key="index"
				/>
        </b-row>
		
	</AppLayout>
</template>

<script>
import AppLayout from "../../../layouts/EAppLayout";
import ListWithUserItem from "../../../components/elders_component/DeathList";
import axios from "axios";


export default {
	name: "list-deaths",
	components: {
		AppLayout: AppLayout,
		"list-with-user-item": ListWithUserItem,
		
	},
	data() {
		return {
			dead_elder: []
		};
	},
	async beforeCreate() {
		
		axios.get("http://localhost:3000/api/deadcomplain/deaths/").then(result => {
			console.log(result.data.data[0]);
			this.dead_elder = result.data.data;
		});
  },
  computed: {
		filteredList() {
			return this.dead_elder.filter(dead => {
				return dead.ename.toLowerCase();
			});
		}
	}
};
</script>
