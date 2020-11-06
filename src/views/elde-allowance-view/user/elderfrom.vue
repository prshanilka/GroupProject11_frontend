<template>
	<AppLayout>
		<eLelderwizad />
	</AppLayout>
</template>




<script>
import AppLayout from "../../../layouts/AppLayout";
import eLelderwizad from "../../../containers/elder-alowance/elder-wizad";

export default {
	name: "elform",
	components: {
		AppLayout: AppLayout,
		eLelderwizad: eLelderwizad
	}
};
</script>

<style>
</style>