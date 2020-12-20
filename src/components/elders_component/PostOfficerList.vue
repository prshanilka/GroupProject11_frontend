<template>
	<b-colxx xxs="12" xs="6" lg="4">
		<router-link tag="a" :to="detailPath">
			<b-card class="mb-4" no-body>
				<div class="position-relative">
					<img src="/assets/img/profiles/8.jpg" class="card-img-top" />
				</div>
				<b-card-body>
					<h6 class="lead text-large text-center">{{ data.o_name }}</h6>
					<p class="card-text text-center mb-0 font-weight-semibold">{{ data.o_phone }}</p>
					<p class="card-text text-center mb-0 font-weight-semibold">{{ data.o_email }}</p>
					<p class="card-text text-center text-md">{{ data.p_name }}</p>
					<p class="card-text text-center text-md">{{ data.p_post }}</p>
				</b-card-body>
			</b-card>
		</router-link>
	</b-colxx>
</template>
<script>
export default {
	props: ["data", "detailPath"]
};
</script>


