<template>
	<AppLayout>
		<divi-sec-off-form />
	</AppLayout>
</template>




<script>
import AppLayout from "../../../layouts/AppLayout";
import divi_sec_off_form from "../../../containers/elder-alowance/divisional secretary office form";

export default {
	name: "elform",
	components: {
		AppLayout: AppLayout,
		"divi-sec-off-form": divi_sec_off_form
	}
};
</script>

<style>
</style>