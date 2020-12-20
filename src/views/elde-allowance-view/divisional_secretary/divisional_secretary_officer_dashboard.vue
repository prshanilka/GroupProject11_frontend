<template>
	<AppLayout>
		
	</AppLayout>
</template>




<script>
import AppLayout from "../../../layouts/EAppLayout";
import axios from "axios";

export default {
	components: {
		AppLayout: AppLayout
	},
	data() {
		return {
			div_office: [],
		}
	},
	async beforeCreate() {
		axios
			.get("/divisionaloffice/office")
			.then(result => {
				console.log(result.data.data);
        		this.div_office = result.data;
			});
  },
};
</script>
