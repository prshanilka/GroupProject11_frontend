<template>
	<div>
		<h1>MAP</h1>
		<center>
			<div style="margin: 0px auto">
				<h1>your cordinates</h1>
				<p>{{ cordnates.lat }} Latitude , {{ cordnates.lng }} langtitude</p>

				<h1>Map cordinates</h1>
				<p>{{ mapcordnates.lat }} Latitude , {{ mapcordnates.lng }} langtitude</p>
				<GmapMap
					:center="{ lat: 7.082, lng: 80.019 }"
					:zoom="17"
					style="width:640px; height:360px;"
					ref="mapref"
				>
					<GmapMarker :position="{ lat: 7.082, lng: 80.019 }" />
				</GmapMap>
			</div>
		</center>
	</div>
</template>

<script>
import AppLayout from "../../../layouts/EAppLayout";

export default {
	name: "elform",
	components: {
		AppLayout: AppLayout
	},
	data() {
		return {
			map: null,
			cordnates: {
				lat: 0,
				lng: 0
			}
		};
	},
	created() {
		this.$getLocation({})
			.then(cordnates => {
				this.cordnates = cordnates;
			})
			.catch(err => {
				alert(err);
			});
	},
	mounted() {
		this.$refs.mapref.$mapPromise.then(map => this.map);
	},
	computed: {
		mapcordnates() {
			if (!this.map) {
				return {
					lat: 0,
					lng: 0
				};
			} else {
				return {
					lat: this.map.getCenter().lat(),
					lng: this.map.getCenter().lng()
				};
			}
		}
	}
};
</script>

<style></style>
