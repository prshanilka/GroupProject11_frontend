<template>
	<app-layout>
		<router-view />
	</app-layout>
</template>

<script>

import AppLayout from "../../layouts/EAppLayout";

export default {
	components: {
		"app-layout": AppLayout
	}
};
</script>
