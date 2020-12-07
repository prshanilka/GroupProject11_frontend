<template>
	<AppLayout>
		<b-colxx xl="12" lg="12" style="margin:auto ">
			<b-row>
				<b-colxx xl="10" lg="12" class="text-center" style="margin:auto ">
					<h1 class="text-xlarge " >{{division.dname}}</h1>
				</b-colxx>
			</b-row>
			<b-row>
				<b-colxx lg="4" xs="12" class="text-center" style="margin:auto ">
					<b-card class="mb-4 text-center">
						<div class="icon-row-item mb-3">
							<i class="iconsminds-the-white-house text-xlarge" />				
						</div>
						<h2 class="mb-2 text-md">District Id</h2>
						<p class="text-large text-danger">{{division.district_id}}</p>
					</b-card>
				</b-colxx>
				<b-colxx lg="4" xs="12" class="text-center" style="margin:auto ">
					<b-card class="mb-4 text-center">
						<div class="icon-row-item mb-3">
							<i class="iconsminds-city-hall text-xlarge" />				
						</div>
						<h2 class="mb-2 text-md">Divisional Secratary ID</h2>
						<p class="text-large text-danger">{{division.divisional_secratary_id}}</p>
					</b-card>
				</b-colxx>
				<b-colxx lg="4" xs="12" class="text-center" style="margin:auto ">
					<b-card class="mb-4 text-center">
						<div class="icon-row-item mb-3">
							<i class="simple-icon-home text-xlarge" />				
						</div>
						<h2 class="mb-2 text-md">Gramaniladari Division ID</h2>
						<p class="text-large text-danger">{{division.gramaniladari_division_id}}</p>
					</b-card>
				</b-colxx>
			</b-row>
			<b-row>
				<b-colxx lg="12" xs="12" class="text-center" style="margin:auto ">
					<b-card class="mb-4 text-center">
						<h2 class="mb-4 text-large text-primary">Count Of Benifishers In My Division</h2>
						<p class="text-xlarge text-danger">{{bcount.count}}</p>
					</b-card>
				</b-colxx>
			</b-row>
			<b-row>
				<b-colxx lg="12" xs="12" class="text-center" style="margin:auto ">
					<UserCardElder></UserCardElder>
				</b-colxx>
			</b-row>
		</b-colxx>
	</AppLayout>
</template>

<script>
import AppLayout from "../../../layouts/EAppLayout";
import axios from "axios";
import UserCardElder from "../../../containers/elder/UserCardElder";

export default {
	name: "grama-niladari-dashboard",
	components: {
		AppLayout: AppLayout,
		UserCardElder: UserCardElder
	},
	data() {
		return {
			division: [],
			bcount: "",
		}
	},
	async beforeCreate() {
		axios
			.get("/gramaniladariofficer/div")
			.then(result => {
				console.log(result.data.data);
        		this.division = result.data.data;
			});
		axios
			.get("/gramadivision/count")
			.then(result => {
				console.log(result.data.data[0]);
        		this.bcount = result.data.data[0];
			});
	},
};
</script>

<style>
</style>
