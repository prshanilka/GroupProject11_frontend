<template>
	<AppLayout>
		<grama-niladari-division-form />
	</AppLayout>
</template>




<script>
import AppLayout from "../../../layouts/AppLayout";
import grama_niladari_division_form from "../../../containers/elder-alowance/grama_niladari_division_form";

export default {
	name: "elform",
	components: {
		AppLayout: AppLayout,
		"grama-niladari-division-form": grama_niladari_division_form
	}
};
</script>

<style>
</style>