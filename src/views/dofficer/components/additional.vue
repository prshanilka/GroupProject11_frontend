<template>
		<div>
      <b-card class="mb-2" title="Additional Details by Grama nildhari" v-if="info!=null">
        <p v-text="info"></p>
      </b-card>	
		</div>

</template>

<script>
import axios from "axios";
import { bUrl } from "../../../constants/config";


export default {
	name: "aditional",
	props: ["dat"],
	data() {
		return {
				info:null
		}
	},
	async created() {
			let promise = axios.get(bUrl + '/application/gramanildharicomment/'+this.dat.vid)
      return promise
        .then(result => result.data)
        .then((data) => {
          const items = data.message
				 this.info=items;
				 console.log(this.items);
        }).catch(_error => {
         this.items= []
        })
	},

	
};
</script>

