<template>
	<AppLayout>
		<divi-sec-off-form />
	</AppLayout>
</template>




<script>
import AppLayout from "../../../layouts/EAppLayout";
import divi_sec_off_form from "../../../containers/elder-alowance/divisional_secretary_office_form";

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