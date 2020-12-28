<template>
  <b-row>
    <b-colxx  lg="12" xxs="12">
      <b-card class="mb-4 text-center">
        <h1 class="text-xlarge text-primary">{{ div_office.name }}</h1>   
      </b-card>
    </b-colxx>

    <b-colxx   lg="4" xxs="12">
      <b-card class="mb-4 text-center">
    
        <div class="icon-row-item">
			      <i class="iconsminds-post-office text-xlarge"/>
        </div>
		
            <p class="lead text-center text-success">Post Offices</p>
            <p class="lead text-center text-danger">{{ div_office.post }}</p>  
    </b-card>
  </b-colxx>

  <b-colxx  lg="4" xxs="12">
      <b-card class="mb-4 text-center">
    
        <div class="icon-row-item">
			      <i class="iconsminds-the-white-house text-xlarge"/>
        </div>
		
            <p class="lead text-center text-success">Gramaniladari Divisions</p>
            <p class="lead text-center text-danger">4</p> 
    </b-card>
  </b-colxx>

  <b-colxx  lg="4" xxs="12">
      <b-card class="mb-4 text-center">
    
        <div class="icon-row-item">
			      <i class="iconsminds-male-female text-xlarge"/>
        </div>
            <p class="lead text-center text-success">Benifishers</p>
            <p class="lead text-center text-danger">{{ div_office.count_of_benifishers_elders }}</p>  
    </b-card>
  </b-colxx>

    <b-colxx md="12" sm="12" lg="12" xxs="12">
      <user-card-elder></user-card-elder>
    </b-colxx>
  </b-row>
</template>




<script>
import UserCardElder from "../../../containers/elder-alowance/dofficer/UserCard2";
import AppLayout from "../../../layouts/EAppLayout";
import axios from "axios";

export default {
	components: {
    AppLayout: AppLayout,
    "user-card-elder": UserCardElder,
	},
	data() {
		return {
			div_office: [],
		}
	},
	async beforeCreate() {
		axios
			.get("/divisionaloffice/office")
			.then(result => {
				console.log(result.data.data[0]);
        this.div_office = result.data.data[0];
			});
  },
};
</script>
