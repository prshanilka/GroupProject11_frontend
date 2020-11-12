<template>
	<EAppLayout>
		<h1>Elder Layout Designing</h1>
		<p>{{$t('user.email')}}</p>
	</EAppLayout>
</template>




<script>
import EAppLayout from "../../../layouts/EAppLayout";

export default {
	name: "elform",
	components: {
		EAppLayout: EAppLayout
	}
};
</script>

<style>
</style>