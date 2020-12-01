<template>
	<div>
		<ajentForm />
	</div>
</template>




<script>
import AppLayout from "../../../layouts/EAppLayout";
import ajentForm from "../../../containers/elder-alowance/agent_form";

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