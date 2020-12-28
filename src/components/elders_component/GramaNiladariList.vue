<template>
        <b-colxx xxs="12" xs="6" lg="4">
        <router-link tag="a" :to="detailPath">
          <b-card class="mb-4" no-body>
            <div class="position-relative">
              <img :src="img" class="card-img-top" />
            </div>
            <b-card-body>
              <h6 class="lead text-large text-center">{{ data.oname }}</h6>
              <p class="card-text text-center  mb-0 font-weight-semibold">{{ data.phone }}</p>
              <p class="card-text text-center  mb-0 font-weight-semibold">{{ data.email }}</p>
              <p class="card-text text-center  text-md">{{ data.dname }}</p>
            </b-card-body>
          </b-card>
        </router-link>
        </b-colxx>
</template>
<script>
import axios from "axios";

import {bUrl} from '../../constants/config'

export default {
  props: ["data", "detailPath"],
  
	data() {
		return {
			img: ""
		};
	},
	async created() {
		
		const body = {
				id:this.data.grmaniladari_officer_id,
				role_id:"40"
			}
			axios({
			method: "post",
			url: "/upload/getprofile"  ,
			data:body
		}).then(res => {
			console.log(res.data.data[0].profile);
			this.img = bUrl+res.data.data[0].profile;
		}).catch(cc => {
			console.log(cc);
			this.img = "/assets/img/profiles/def.png"
		});
	}
}
</script>


