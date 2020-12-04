<template>
	<div>
		<reasonForm :pay_id="pay_id" />
	</div>
</template>




<script>
import AppLayout from "../../../layouts/EAppLayout";
import reasonForm from "../../../containers/elder-alowance/elder_reason";

export default {
	name: "elder-payment-reason",
	components: {
		AppLayout: AppLayout,
		reasonForm: reasonForm
	},
	props: ["pay_id"]
};
</script>

<style>
</style>