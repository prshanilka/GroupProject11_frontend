<template>
	<AppLayout>
        <b-colxx xl="12" lg="10" style="margin:auto ">
            <b-modal id="modallg" size="md" title="ADD CRITERIA" hide-footer>
					<add/>
		    </b-modal>
            <b-row>
                <b-colxx xl="12" lg="10" class="text-center">
		            <h1 class="text-center">Criterias</h1>
                </b-colxx>
            </b-row>
            <b-row>
				<list-with-user-item
					v-for="(item, index) in filteredList"
					:data="item"
					detailPath="#"
					:key="index"
				/>
		    </b-row>
            <b-row>
                <b-colxx xl="12" lg="10" class="text-center text-primary">
		            <b-button
									class="mb-2"
                                    v-b-modal.modallg
									size="xl"
									variant="outline-success"
								>ADD CRITERIA</b-button>
                </b-colxx>
            </b-row>
        </b-colxx>
	</AppLayout>
</template>




<script>
import AppLayout from "../../../layouts/EAppLayout";
import axios from "axios";
import ListWithUserItem from "../../../components/elders_component/criteriaList";
import Add from "../../../components/elders_component/criteriaCard";

export default {
	components: {
        AppLayout: AppLayout,
        "list-with-user-item": ListWithUserItem,
        add: Add
    },
    data(){
        return {
            criteria: []
        };
    },
    async beforeCreate() {
		
		axios.get("/marks/criteria/").then(result => {
			console.log(result.data.data[0]);
            this.criteria = result.data.data;
            
        });
    },
    computed: {
		filteredList() {
			return this.criteria.filter(crit => {
				return crit.criteria.toLowerCase();
			});
		}
    },
};
</script>
