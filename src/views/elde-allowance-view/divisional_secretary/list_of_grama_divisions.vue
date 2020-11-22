<template>
	<AppLayout>
		<b-colxx xl="8" lg="10" md="12" style="margin:auto ">
			<b-card>
				<b-colxx lg="12" md="12" class="m-lg-4 text-center" style="mrgin-top:50px;">
					<h1>List Of the Grama Divisions Bentha</h1>
				</b-colxx>
				<div class="m--5 p-5">
					<b-form-group label="Serch by Grama Division Name">
						<b-form-input type="text" v-model="search" />
					</b-form-group>
				</div>
				<list-with-user-item
					v-for="(item, index) in filteredList"
					:data="item"
					detail-path="#"
					:key="index"
				/>
			</b-card>
		</b-colxx>
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
		
		axios.get("http://localhost:3000/api/gramadivision/").then(result => {
			console.log(result.data.data[0]);
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