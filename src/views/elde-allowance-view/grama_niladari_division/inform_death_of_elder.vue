<template>
	<AppLayout>
		<h1>To inform about the death of the benifisher</h1>
		<b-colxx xl="8" lg="10" md="12" style="margin:auto ">
			<b-card>
				<b-colxx lg="12" md="12" class="m-lg-4 text-center" style="mrgin-top:50px;">
					<h1>To inform about the death of the benifishe</h1>
				</b-colxx>
				<div class="m--5 p-5">
					<b-form-group label="Serch by Elder Name">
						<b-form-input type="text" v-model="search" />
					</b-form-group>
				</div>
				<list-with-user-item
					v-for="(item, index) in filteredList"
					:data="item"
					detail-path="#"
					:key="index"
				/>
				<LogList />
			</b-card>
		</b-colxx>
	</AppLayout>
</template>

<script>
import AppLayout from "../../../layouts/EAppLayout";
import ListWithUserItem from "../../../components/elders_component/ElderListItem";
import LogList from "../../../components/Listing/LogList";

export default {
	name: "inform death",
	components: {
		AppLayout: AppLayout,
		"list-with-user-item": ListWithUserItem,
		LogList: LogList
	},
	data() {
		return {
			search: "",
			comments: [
				{
					title: "Very informative content, thank you. ",
					detail:
						"Mayra Sibley | Tea Loaf with Fresh Oranges | 17.09.2018 - 04:45",
					thumb: "/assets/img/profiles/l-1.jpg",
					rate: 5,
					key: 0
				},
				{
					title:
						"This article was delightful to read. Please keep them coming.",
					detail:
						"Barbera Castiglia | Cheesecake with Chocolate Cookies | 15.08.2018 - 01:18",
					thumb: "/assets/img/profiles/l-2.jpg",
					rate: 4,
					key: 1
				},
				{
					title: "Your post is bad and you should feel bad.",
					detail: "Bao Hathaway | Homemade Cheesecake | 26.07.2018 - 11:14",
					thumb: "/assets/img/profiles/l-3.jpg",
					rate: 5,
					key: 2
				},
				{
					title: "Very original idea!",
					detail:
						"Lenna Majeed | Tea Loaf with Fresh Oranges | 17.06.2018 - 09:20",
					thumb: "/assets/img/profiles/l-4.jpg",
					rate: 3,
					key: 3
				},
				{
					title:
						"This article was delightful to read. Please keep them coming.",
					detail:
						"Esperanza Lodge | Cheesecake with Fresh Berries | 16.06.2018 - 16:45",
					thumb: "/assets/img/profiles/l-5.jpg",
					rate: 2,
					key: 4
				},
				{
					title: "Nah, did not like it.",
					detail: "24.07.2018 - 15:00",
					thumb: "/assets/img/profiles/l-2.jpg",
					rate: 5,
					key: 5
				},
				{
					title: "Laree Munsch",
					detail:
						"Brynn Bragg | Wedding Cake with Flowers | 12.04.2018 - 12:45",
					thumb: "/assets/img/profiles/l-1.jpg",
					rate: 4,
					key: 6
				}
			]
		};
	},

	computed: {
		filteredList() {
			return this.comments.filter(comm => {
				return comm.title.toLowerCase().includes(this.search.toLowerCase());
			});
		}
	}
};
</script>

<style>
</style>
