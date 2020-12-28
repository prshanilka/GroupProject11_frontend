<template>
	<AppLayout>
  
				<b-colxx lg="12" md="12" class="m-lg-4 text-center" style="mrgin-top:50px;">

					<h1>Grama Niladari Details</h1>

				</b-colxx>
      
        <b-row>
				<list-with-user-item
					v-for="(item, index) in filteredList"
					:data="item"
					:detail-path="'/grama/gramaniladai-officer-details/'+item.gramaniladari_division_id"
					:key="index"
				/>
        </b-row>
		
	</AppLayout>
</template>

<script>
import AppLayout from "../../../layouts/EAppLayout";
import ListWithUserItem from "../../../components/elders_component/GramaNiladariList";
import axios from "axios";


export default {
	name: "list-elders",
	components: {
		AppLayout: AppLayout,
		"list-with-user-item": ListWithUserItem,
		
	},
	data() {
		return {
			grama_niladari: []
		};
	},
	async beforeCreate() {
		
		axios.get("/gramaniladariofficer/topost/").then(result => {
			console.log(result.data.data[0]);
			this.grama_niladari = result.data.data;
		});
  },
  computed: {
		filteredList() {
			return this.grama_niladari.filter(gramDiv => {
				return gramDiv.grmaniladari_officer_id.toLowerCase();
			});
		}
	}
};
</script>
