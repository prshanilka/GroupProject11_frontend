<template>
		<div>
      <b-card class="mb-2" :title="$t('elder.divisionalofiicerver')">
        <b-table responsive :items="items" :fields="fields"  >
        </b-table>		
      </b-card>	
			<b-card>
				<b-button variant="success" @click="approve">Approve</b-button>
				 <!-- <b-button variant="danger">Reject</b-button> -->
			</b-card>	

		</div>

</template>

<script>
import axios from "axios";
import { bUrl } from "../../../constants/config";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
export default {
	name: "marks",
	  components: {
    "v-select": vSelect
  },
	data() {
		return {

		  fields: [
				{key: 'criteria', label: 'Details'},
				{key: 'marks', label: 'Marks Out Of 10'}
				],
				items:[],
		}
	},
	props: ["dat"],
	methods:{
		approve(){
			let promise = axios.get(bUrl + '/application/verifydhead/'+this.dat.vid)
      promise
        .then(result => result.data)
        .then((data) => {
						this.$emit('event')
        }).catch(_error => {
					console.log(error)
        })
		}
	},
	computed: {

    },
	async created() {
			let promise = axios.get(bUrl + '/marks/getmarks/'+this.dat.vid)
	
      promise
        .then(result => result.data)
        .then((data) => {
          const items = data.data
				 this.items=items;
        }).catch(_error => {
         this.items= []
        })
	},

	
};
</script>

