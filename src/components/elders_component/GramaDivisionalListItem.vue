<template>
	<div class="border-bottom">
		<b-row>
			<b-colxx lg="1" md="12" class="mb-1 text-center">
				<router-link tag="a" :to="detailPath">
					<i class="iconsminds-column text-xlarge" />
				</router-link>
			</b-colxx>
			<b-colxx lg="8" md="12" class="mb-1 text-center">
				<div class="pl-3 pr-2" style="margin-top:20px;">
					<router-link tag="a" :to="detailPath">
						<p class="font-weight-medium mb-0">View The Grama Division details</p>
						<b-row>
							<b-colxx lg="6" md="12" class="mb-2 text-center">
								<p>Gamapaha | adress - {{data.address}}</p>
								<p>name : {{data.name}}</p>
							</b-colxx>
							<b-colxx lg="6" md="12" class="mb-2 text-center">
								<p>email: {{data.email}}</p>
								<p>Phone No :{{data.number}}</p>
							</b-colxx>
						</b-row>
					</router-link>
				</div>
			</b-colxx>
			<b-colxx lg="3" md="12" class="mb-3 text-center">
				<b-button class="mb-2" size="xs" style="margin-top:20px;" variant="primary">View Details</b-button>
			</b-colxx>
		</b-row>
	</div>
</template>

<script>
export default {
	props: ["data", "detailPath"]
};
</script>
