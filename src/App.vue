<template>
	<div class="h-100">
		<router-view />
		<!-- <color-switcher /> -->
	</div>
</template>

<script>
import ColorSwitcher from "./components/Common/ColorSwitcher";

import { getDirection } from "./utils";

export default {
	components: {
		"color-switcher": ColorSwitcher
	},
	beforeMount() {
		const direction = getDirection();
			document.body.classList.add("ltr");
			document.dir = "ltr";
			document.body.classList.remove("rtl");
		
	}
};
</script>
