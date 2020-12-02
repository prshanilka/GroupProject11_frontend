<template>
	<div class="border-bottom">
		<b-row>
			<b-colxx lg="2" md="12" class="mb-1">
					<img
						src="/assets/img/profiles/4.jpg"
						class="img-thumbnail border-0 rounded list-thumbnail align-self-center m-2 medium"
					/>
			</b-colxx>
			<b-colxx lg="7" md="12" class="mb-1">
				<div class="pl-3 pr-2" style="margin-top:20px;">
						<p class="text-center text-primary mb-4 text-large">{{ data.name }}</p>
						<p class="text-center text-primary mb-4 text-small">{{ data.address }}</p>
				</div>
			</b-colxx>
			<b-colxx lg="3" md="12" class="mb-1">
				<b-button class="mb-2" size="xs" style="margin-top:20px;" variant="outline-warning" :to="detailPath">Send Complain</b-button>
			</b-colxx>
		</b-row>
	</div>
</template>

<script>
export default {
	props: ["data", "detailPath"]
};
</script>
