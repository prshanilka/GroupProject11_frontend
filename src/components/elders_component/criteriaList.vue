<template>

  <b-colxx md="6" sm="6" lg="3" xxs="12">
    <b-card class="mb-4 text-center">
    		
            <div class="icon-row-item">
			        <i class="iconsminds-pantone text-xlarge"/>
            </div>
            <h1 class="lead text-center text-primary ">{{ data.criteria }}</h1>
			<div>
			<b-button class="mb-2" size="xs" variant="outline-danger" @click.prevent="accept">REMOVE</b-button>
			</div>
    </b-card>
    </b-colxx>

</template>




<script>

import axios from "axios";

export default {
	props: ["data"],
	methods: {
		accept() {
			console.log("Remove Succsess");
			axios({
				method: "patch",
				url: "/marks/"+this.data.criteria_id,
			})
				.then(res => {
					console.log("Accept res");
					console.log(res);
					})
				.catch(err => {
						console.log(err);
				});
			}
		}
};
</script>
