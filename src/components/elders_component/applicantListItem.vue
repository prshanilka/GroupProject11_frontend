<template>
	<div class="border-bottom">
		<b-row>
			<b-colxx lg="2" md="12" class="mb-1">
				<router-link tag="a" :to="detailPath">
					<img
						src="/assets/img/profiles/def.png"
						:alt="data.title"
						class="img-thumbnail border-0 rounded-circle list-thumbnail align-self-center m-2 medium"
					/>
				</router-link>
			</b-colxx>
			<b-colxx lg="7" md="12" class="mb-1">
				<div class="ml-5 pl-3 pr-2" style="margin-top:20px;">
					<router-link tag="a" :to="detailPath">
						<p class="font-weight-medium mb-0">View The Elder Application</p>
						<p class="text-muted mb-3 text-small">name : {{data.name}}</p>
						<p class="text-muted mb-0 text-small">Address : {{data.address}}</p>
					</router-link>
				</div>
			</b-colxx>
			<b-colxx lg="3" md="12" class="mb-1">
				<router-link tag="a" :to="detailPath" id="sahan">
					<b-button
						class="mb-2"
						size="xs"
						style="margin-top:20px;"
						variant="primary"
					>View Elder and verify details</b-button>
				</router-link>
			</b-colxx>
		</b-row>
	</div>
</template>

<script>
export default {
	props: ["data", "detailPath"]
};
</script>
