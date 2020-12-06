<template>
	<div>
		<ajentForm />
	</div>
</template>




<script>
import AppLayout from "../../../layouts/EAppLayout";
import ajentForm from "../../../containers/elder-alowance/agent_form";
import axios from "axios";
import { bUrl } from "../../../constants/config";

export default {
	name: "agnt",
	components: {
		AppLayout: AppLayout,
		ajentForm: ajentForm
	}
};
</script>

<style>
</style>