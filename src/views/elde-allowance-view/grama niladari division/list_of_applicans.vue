<template>
	<AppLayout>
		<h1>List of the application submiteded to the grama Niladari</h1>

		<b-card title="Applicant List For verification">
			<list-with-user-item
				v-for="(item, index) in comments"
				:data="item"
				detail-path="#"
				:key="index"
			/>
			<LogList />
		</b-card>
	</AppLayout>
</template>

<script>
import AppLayout from "../../../layouts/EAppLayout";
import ListWithUserItem from "../../../components/elders component/applicantListItem";
import LogList from "../../../components/Listing/LogList";
import { comments } from "../../../data/comments";

export default {
	name: "list-elders",
	components: {
		AppLayout: AppLayout,
		"list-with-user-item": ListWithUserItem,
		LogList: LogList
	},
	data() {
		return {
			comments
		};
	}
};
</script>

<style>
</style>
