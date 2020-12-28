<template>
		<div>
			<b-form @submit.prevent="onValitadeFormSubmit">
      <b-card class="mb-2" title="Marks">
        <b-table responsive :items="items" :fields="fields"  >

					<template #cell(criteria_id)="data">{{ data.item.criteria_id }}</template>

					<template #cell(criteria)="data">{{ data.item.criteria }}</template>

					<template #cell(marks)="data"  >
                <v-select v-model="data.item.marks" :options="selectData" :rules="[(v) => !!v || 'Must select before submit']" required />
      		</template>




        </b-table>		
      </b-card>
				<b-button type="submit" >Submit</b-button>	
			</b-form>
											
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
				{key: 'criteria_id', label: 'ID'},
				{key: 'criteria', label: 'Details'},
				{key: 'marks', label: 'Marks Out Of 10'}
				],
				selectData: [1,2,3,4,5,6,7,8,9,10],
				items:[],
		}
	},
	props: ["dat"],
	methods:{
		onValitadeFormSubmit(){
			
			axios({
				method: 'post',
				url: bUrl+'/application/applicationreview',
				data:{
					vid:this.dat.vid,
					data:this.items
					}
			}).then((response) => {
				console.log(response)
				if(response.data.success==1){
					this.$emit('event')
				}

			}, (error) => {
				console.log(error);
			});
		}
	},
	computed: {

    },
	async created() {
let promise = axios.get(bUrl + '/marks/criteria')
      return promise
        .then(result => result.data)
        .then((data) => {
          const items = data.data
				 this.items=items;
				 console.log(this.items);
        }).catch(_error => {
         this.items= []
        })
	},

	
};
</script>

