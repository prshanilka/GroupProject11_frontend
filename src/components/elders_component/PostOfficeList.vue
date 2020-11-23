<template>
  
  <b-colxx md="6" sm="6" lg="4" xxs="12">
    <b-card class="mb-4 text-center">
    
    
		<router-link tag="a" :to="detailPath">
            <div class="icon-row-item">
			        <i class="iconsminds-post-office text-xlarge"/>
            </div>
            <p class="lead text-center">{{ data.name }}</p>
            <p class="card-text font-weight-semibold mb-0">{{ data.address }}</p>
            <p class="card-text font-weight-semibold mb-0">{{ data.phone_no }}</p>
            <p class="card-text font-weight-semibold mb-0">{{ data.email }}</p>
    </router-link>
    <router-link tag="a" :to="detailPath">
            <b-colxx>
			    <b-button class="mb-2" size="md" style="margin-top:20px;" variant="primary">View Details</b-button>
	        </b-colxx>
        </router-link>
	
    </b-card>
    </b-colxx>
 
</template>
<script>
export default {
  props: ["data", "detailPath"]
}
</script>