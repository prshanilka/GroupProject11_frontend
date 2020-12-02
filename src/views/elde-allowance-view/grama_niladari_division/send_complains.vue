<template>
	<AppLayout>
		<b-colxx xl="8" lg="10" md="12" style="margin:auto ">
			<b-card>
				<b-colxx lg="12" md="12" class="m-lg-4 text-center" style="mrgin-top:50px;">
					<h1>Send Complains</h1>
				</b-colxx>
				<div class="m--5 p-5">
					<b-form-group label="Serch by Elder Name">
						<b-form-input type="text" v-model="search" />
					</b-form-group>
				</div>
				<list-with-user-item
					v-for="(item, index) in filteredList"
					:data="item"
					:detail-path="'/grama/send_complains/'+item.elder_id"
					:key="index"
				/>
				<LogList />
			</b-card>
		</b-colxx>
	</AppLayout>
</template>

<script>
import AppLayout from "../../../layouts/EAppLayout";
import ListWithUserItem from "../../../components/elders_component/complain_list.vue";
import axios from "axios";

export default {
	name: "send complains",
	components: {
		AppLayout: AppLayout,
		"list-with-user-item": ListWithUserItem,
	},
	
	data() {
		return {
			search: "",
			benifishers: []
		};
	},
	async beforeCreate() {
		
		axios.get("http://localhost:3000/api/gramadivision/benifisherlist/280").then(result => {
			console.log(result.data);
			this.benifishers = result.data.data;
		});
	},
	computed: {
		filteredList() {
			return this.benifishers.filter(benn => {
				return benn.name.toLowerCase().includes(this.search.toLowerCase());
			});
		}
	}
};
</script>


