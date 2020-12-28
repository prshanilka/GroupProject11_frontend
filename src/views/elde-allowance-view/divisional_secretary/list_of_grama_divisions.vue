<template>
	<AppLayout>
		
			<b-row>
				<b-colxx lg="12" md="12" class="m-lg-4 text-center" style="mrgin-top:50px;">
					<h1>Grama Divisions</h1>
				</b-colxx>
				<div class="m--5 p-5" >
					<b-form-group label="Serch by Grama Division Name">
						<b-form-input type="text" v-model="search" />
					</b-form-group>
				</div>
			</b-row>
			<b-row>
				<list-with-user-item
					v-for="(item, index) in filteredList"
					:data="item"
					:detailPath="'/grama/gramaniladai-officer-details/'+item.gramaniladari_division_id"
					:key="index"
				/>
			</b-row>
		
	</AppLayout>
</template>



<script>
import AppLayout from "../../../layouts/EAppLayout";
import ListWithUserItem from "../../../components/elders_component/GramaDivisionalListItem";
import { comments } from "../../../data/comments";
import axios from "axios";
export default {
	components: {
		AppLayout: AppLayout,
		"list-with-user-item": ListWithUserItem
	},
	data() {
		return {
			search: "",
			grama_divsions: []
		};
	},
	async beforeCreate() {
		
		axios.get("/gramadivision/").then(result => {
			console.log(result.data);
			this.grama_divsions = result.data.data;
		});
	},
	computed: {
		filteredList() {
			return this.grama_divsions.filter(gramDiv => {
				return gramDiv.name.toLowerCase().includes(this.search.toLowerCase());
			});
		}
	}
};
</script>

<style>
</style>