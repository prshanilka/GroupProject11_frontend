<template>
	<AppLayout>
  
				<b-colxx lg="12" md="12" class="m-lg-4 text-center" style="mrgin-top:50px;">
					<h1>Payment History</h1>
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
import ListWithUserItem from "../../../components/elders_component/DivisionHistory";
import axios from "axios";


export default {
	name: "list-elders",
	components: {
		AppLayout: AppLayout,
		"list-with-user-item": ListWithUserItem,
		
	},
	data() {
		return {
			history: []
		};
	},
	async beforeCreate() {
		
		axios.get("/paymentdivoff").then(result => {
			console.log(result.data.data[0]);
			this.history = result.data.data;
		});
  },
  computed: {
		filteredList() {
			return this.history.filter(pay => {
				return pay.name.toLowerCase();
			});
		}
	}
};
</script>
