<template>
	<AppLayout>
		 <serch-form/>
	</AppLayout>
</template>




<script>
import AppLayout from "../../../layouts/EAppLayout";
import serch_form from "../../../containers/elder-alowance/serch_form"
 

export default {
	components: {
		AppLayout: AppLayout,
		"serch-form":serch_form
 
	}
};
</script>

<style>
</style>