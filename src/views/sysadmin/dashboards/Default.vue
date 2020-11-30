<template>
  <b-row>
    <b-colxx md="6" sm="6" lg="4" xxs="12">
      <b-card class="mb-4 text-center">
        <div class="icon-row-item">
			      <i class="iconsminds-column text-xlarge"/>
        </div>
        <p class="lead text-center text-success">Gramaniladhari Division</p>
        <p class="lead text-center text-danger">13</p> 
        <b-button class="mb-2" size="md" style="margin-top:20px;" variant="outline-primary" >Update</b-button>
        <b-button class="mb-2" size="md" style="margin-top:20px;" variant="outline-warning" >Delete</b-button>     
      </b-card>
    </b-colxx>

    <b-colxx md="6" sm="6" lg="4" xxs="12">
      <b-card class="mb-4 text-center">
    
        <div class="icon-row-item">
			      <i class="iconsminds-post-office text-xlarge"/>
        </div>
		
            <p class="lead text-center text-success">Post Offices</p>
            <p class="lead text-center text-danger">10</p>
            <b-button class="mb-2" size="md" style="margin-top:20px;" variant="outline-primary" >Update</b-button>
        <b-button class="mb-2" size="md" style="margin-top:20px;" variant="outline-warning" >Delete</b-button>  
    </b-card>
  </b-colxx>
  <b-colxx md="6" sm="6" lg="4" xxs="12">
      <b-card class="mb-4 text-center">

          <div class="icon-row-item">
			      <i class="iconsminds-business-man-woman text-xlarge"/>
        </div>
            <p class="lead text-center text-success">Gramaniladhari Officers</p>
            <p class="lead text-center text-danger">35</p> 
            <b-button class="mb-2" size="md" style="margin-top:20px;" variant="outline-primary" >Update</b-button>
        <b-button class="mb-2" size="md" style="margin-top:20px;" variant="outline-warning" >Delete</b-button> 
    </b-card>
  </b-colxx>
  <b-colxx md="12" sm="12" lg="12" xxs="12">
  <user-card-elder></user-card-elder>
  </b-colxx>
  </b-row>
  
</template>

<script>

import UserCardElder from "../../../containers/elder/UserCardElder";

export default {
  components: {
   "user-card-elder": UserCardElder
  },
};
</script>
