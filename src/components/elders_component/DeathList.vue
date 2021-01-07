<template>
  
  <b-colxx md="6" sm="6" lg="4" xxs="12">
    <b-card class="mb-4 text-center">
    		
            <div class="icon-row-item">
			        <i class="iconsminds-close text-xlarge"/>
            </div>
            <h1 class="lead text-center text-primary ">{{ data.ename }}</h1>
            <h2 class="card-text font-weight-semibold mb-2">{{ data.gname }}</h2>
            <p class="card-text font-weight-semibold mb-2">Death Certificate No : {{ data.death_certificate_no }}</p>
            <p class="card-text font-weight-semibold mb-2">Death Reason : {{ data.death_reason }}</p>
            <p class="card-text font-weight-semibold mb-2">Death Date : {{ data.death_date }}</p>
            <p class="card-text font-weight-semibold mb-2">Death Date : {{ data.elder_id }}</p>
            <b-colxx>
								<b-button class="mb-2" size="md" style="margin-top:20px;" type="button" variant="outline-danger" @click.prevent="accept">Remove From Benifisher List</b-button>
					  </b-colxx>
	
    </b-card>
    </b-colxx>
 
</template>
<script>
import axios from "axios";

export default {
  props: ["data"],
  methods: {
		accept() {
        const body = 
				axios({
					method: "patch",
					url: "http://0/api/deadcomplain/"+this.data.elder_id,
				})
					.then(res => {
						console.log("Accept res");
						console.log(res);
					})
					.catch(err => {
						console.log(err);
					});
				console.log(
					JSON.stringify({
						messsage: this.data.elder_id
					})
				);
			}
	}
}
</script>