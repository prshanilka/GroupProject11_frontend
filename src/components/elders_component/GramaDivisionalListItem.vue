<template>
	<b-colxx md="6" sm="6" lg="4" xxs="12">
    <b-card class="mb-4 text-center">
			<div class="icon-row-item">
					<i class="iconsminds-office text-xlarge" />				
			</div>
			
			<h1 class="text-danger">{{data.name}}</h1>
			
			<p>Address - {{data.address}}</p>
													
			<p>Email - {{data.email}}</p>
			<p>Phone Number - {{data.number}}</p>

			<b-colxx>
				<b-button class="mb-2" size="md" style="margin-top:20px;" variant="outline-primary" :to="detailPath">View Details</b-button>
			</b-colxx>
			
		</b-card>
	</b-colxx>
</template>

<script>
export default {
	props: ["data", "detailPath"]
};
</script>
