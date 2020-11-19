<template>
	<AppLayout>
		<ajentForm />
	</AppLayout>
</template>




<script>
import AppLayout from "../../../layouts/EAppLayout";
import ajentForm from "../../../containers/elder-alowance/agent form";

export default {
	name: "elform",
	components: {
		AppLayout: AppLayout,
		ajentForm: ajentForm
	}
};
</script>

<style>
</style>