<template>
	<AppLayout>
		<b-colxx xl="8" lg="10" md="12" style="margin:auto ">
			<b-card>
				<b-colxx lg="12" md="12" class="m-lg-4 text-center" style="mrgin-top:50px;">
					<h1>Applicant List For verification</h1>
				</b-colxx>
				<list-with-user-item
					v-for="(item, index) in comments"
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
import ListWithUserItem from "../../../components/elders_component/applicantListItem";
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
