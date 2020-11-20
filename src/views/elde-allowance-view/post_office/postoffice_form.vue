<template>
	<AppLayout>
		<PostOffice />
	</AppLayout>
</template>

<script>
import AppLayout from "../../../layouts/EAppLayout";
import postoffice from "../../../containers/elder-alowance/postoffice";

export default {
	name: "elform",
	components: {
		AppLayout: AppLayout,
		PostOffice: postoffice
	}
};
</script>

<style>
</style>
