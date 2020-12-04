<template>
	<b-colxx md="6" sm="6" lg="4" xxs="12">
		<b-card class="mb-4 text-center">
			<div class="icon-row-item">
				<i class="iconsminds-wallet text-xlarge" />
			</div>

			<h1>The {{data.year}} Year Payments</h1>

			<p class="mb-1">Total Amount To Post Office : {{ data.sent_amount_to_post_office }}</p>
			<p class="mb-1">
				Money To National Elders Fund:
				<br />
				{{ data.year_to_fund }}
			</p>
			<p class="mb-1">All the Money: {{ data.year_tot }}</p>
		</b-card>
	</b-colxx>
</template>

<script>
export default {
	props: ["data"]
};
</script>