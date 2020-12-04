<template>
	<AppLayout>
		<b-colxx xl="8" lg="10" md="12" style="margin:auto ">
			<b-card>
				<b-colxx lg="12" md="12" class="m-lg-4 text-center" style="mrgin-top:50px;">
					<h1>Applicant List For verification</h1>
				</b-colxx>
				<list-with-user-item
					v-for="(item, index) in applications"
					:data="item"
					:detail-path="'/grama/view-elder-application-verify/'+item.elder_id "
					:key="index"
				/>
				<LogList />
			</b-card>
		</b-colxx>
	</AppLayout>
</template>

<script>
import AppLayout from "../../../layouts/EAppLayout";
import ListWithUserItem from "../../../components/elders_component/applicantListItem";
import LogList from "../../../components/Listing/LogList";

import axios from "axios";
export default {
	name: "list-elders",
	components: {
		AppLayout: AppLayout,
		"list-with-user-item": ListWithUserItem,
		LogList: LogList
	},
	data() {
		return {
			applications: []
		};
	},
	async beforeCreate() {
		axios({
			method: "get",
			url: "/gramadivision/verifylist"
		}).then(result => {
			this.applications = result.data.data;
			console.log(result);
			// this.aplications = result.data.data;
		});
	}
};
</script>

<style>
</style>
