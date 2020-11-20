<template>
	<AppLayout>
		<Grmaniladari-officers />
	</AppLayout>
</template>

<script>
import AppLayout from "../../../layouts/EAppLayout";
import grmaniladari_officers from "../../../containers/elder-alowance/grama_niladari_officer";

export default {
	name: "elform",
	components: {
		AppLayout: AppLayout,
		"Grmaniladari-officers": grmaniladari_officers
	}
};
</script>

<style>
</style>
