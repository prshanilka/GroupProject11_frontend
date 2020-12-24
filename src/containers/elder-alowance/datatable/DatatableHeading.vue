<template>
	<b-row>


		<b-colxx xxs="12">
			<h1>{{ title }}</h1>

			<div class="top-right-button-container">

			</div>
			<b-form>

      </b-form>
			<!-- <piaf-breadcrumb /> -->
			<div class="mb-2 mt-2">
				<b-button variant="empty" class="pt-0 pl-0 d-inline-block d-md-none" v-b-toggle.displayOptions>
					{{ $t('pages.display-options') }}
					<i class="simple-icon-arrow-down align-middle" />
				</b-button>
				<b-collapse id="displayOptions" class="d-md-block">
					  <b-colxx xxs="8" md="2">
              <b-form-group :label="$t('application.gramaniladharidivision')">
                <v-select v-model="filter.grama_division" :options="garamaDivision" @input="filterChange(filter)" />
              </b-form-group>
            </b-colxx>

				</b-collapse>
			</div>
			<div class="separator mb-5" />
		</b-colxx>
	</b-row>

</template>
<script>
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import { bUrl } from '../../../constants/config'
export default {
	components: {
    "v-select": vSelect
  },
	props: [
		"title",
		"selectAll",
		"isSelectedAll",
		"isAnyItemSelected",
		"keymap",
		"changePageSize",
		"searchChange",
		"filterChange",
		"from",
		"to",
		"total",
		"perPage",
		"garamaDivision",
	],
	data() {
		return {

			filter:{},
			sortOptions: [
				{
					column: "title",
					label: "Product Name"
				},
				{
					column: "category",
					label: "Category"
				},
				{
					column: "status",
					label: "Status"
				}
			],
			pageSizes: [12]
		};

	},
	watch: {
  selectData: function (newVal) {
    this.filterChange(filter)
	},

}
};
</script>
