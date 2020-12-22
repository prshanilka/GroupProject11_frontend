<template>
	<appLayout>
	<eLelderwizad />
	</appLayout>
</template>

<script>
import AppLayout from "../../../layouts/EAppLayout";
import eLelderwizad from "../../../containers/elder-alowance/elder-wizad";

export default {
	name: "elform",
	components: {
		appLayout: AppLayout,
		eLelderwizad: eLelderwizad
	}
};
</script>

<style>
</style>
