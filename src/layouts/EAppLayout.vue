<template>
	<div id="app-container" :class="getMenuType">
		<etopnav />
		<esidebar />
		<main>
			<div class="container-fluid">
				<slot></slot>
			</div>
		</main>
		<efooter-component />
	</div>
</template>

<script>
import ESidebar from "../containers/navs/Elder_allowance/ESidebar";
import ETopnav from "../containers/navs/Elder_allowance/ETopnav";
import EFooter from "../containers/navs/Elder_allowance/EFooter";
import { mapGetters } from "vuex";

export default {
	components: {
		etopnav: ETopnav,
		esidebar: ESidebar,
		"efooter-component": EFooter
	},
	data() {
		return {
			show: false
		};
	},
	computed: {
		...mapGetters(["getMenuType"])
	},
	mounted() {
		setTimeout(() => {
			document.body.classList.add("default-transition");
		}, 100);
	}
};
</script>
