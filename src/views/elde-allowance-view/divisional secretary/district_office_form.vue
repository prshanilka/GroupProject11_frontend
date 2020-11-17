<template>
	<AppLayout>
		<dis-off-form />
	</AppLayout>
</template>




<script>
import AppLayout from "../../../layouts/EAppLayout";
import dis_off_form from "../../../containers/elder-alowance/district_office_form";

export default {
	name: "elform",
	components: {
		AppLayout: AppLayout,
		"dis-off-form": dis_off_form
	}
};
</script>

<style>
</style>