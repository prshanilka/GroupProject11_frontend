<template>
	<AppLayout>
		<Pay_post_office />
	</AppLayout>
</template>




<script>
import AppLayout from "../../../layouts/EAppLayout";
import pay_post_office from "../../../containers/elder-alowance/pay_post_office_form";

export default {
	name: "payform",
	components: {
		AppLayout: AppLayout,
		Pay_post_office: pay_post_office
	}
};
</script>
