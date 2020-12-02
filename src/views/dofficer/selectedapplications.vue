<template>
	<div>
		<b-overlay 
		:show="show" 
		spinner-variant="primary"
    spinner-type="grow"
    spinner-small
    rounded="sm"
		>
		<b-modal id="modallg" size="lg" title="Elder Details" hide-footer>
      <elder-details :id="clickedVid" />
    </b-modal>
		<datatable-heading
			:title="$t('menu.selectedapplications')"
			:selectAll="selectAll"
			:isSelectedAll="isSelectedAll"
			:isAnyItemSelected="isAnyItemSelected"
			:keymap="keymap"
			:changePageSize="changePageSize"
			:searchChange="searchChange"
			:filterChange="filterChange"
			:from="from"
			:to="to"
			:total="total"
			:perPage="perPage"
			:garamaDivision="garamaDivision"
		></datatable-heading>
		<b-row>
			<b-colxx xxs="12">
				<vuetable
					ref="vuetable"
					class="table-divided order-with-arrow"
					:api-url="apiBase"
					:http-fetch="getData"
					:per-page="perPage"
					:reactive-api-url="true"
					:query-params="makeQueryParams"
					:fields="fields"
					pagination-path
					:row-class="onRowClass"
					@vuetable:pagination-data="onPaginationData"
					@vuetable:row-clicked="rowClicked"
					@vuetable:cell-rightclicked="rightClicked"
					@vuetable:loading="show=true"
					@vuetable:load-success="show=false"
				>
				<template slot="actions" slot-scope="props">
						<b-form-checkbox :checked="selectedItems.includes(props.rowData.vid)" class="itemCheck mb-0"></b-form-checkbox>
				</template>
				<template slot="actions1" slot-scope="props">
						<b-button class="mb-1" v-b-modal.modallg @click="clickedVid = props.rowData.vid" variant="outline-primary" >{{ $t('elder.view') }}</b-button>
						<b-button class="mb-1"  @click="selectApplication(props.rowData.vid)" variant="outline-danger" >{{ $t('button.remove') }}</b-button>

				</template>
				</vuetable>
				<vuetable-pagination-bootstrap
					class="mt-4"
					ref="pagination"
					@vuetable-pagination:change-page="onChangePage"
				/>
			</b-colxx>
		</b-row>

		<v-contextmenu ref="contextmenu">
			<v-contextmenu-item @click="onContextMenuAction('copy')">
				<i class="simple-icon-docs" />
				<span>Copy</span>
			</v-contextmenu-item>
			<v-contextmenu-item @click="onContextMenuAction('move-to-archive')">
				<i class="simple-icon-drawer" />
				<span>Move to archive</span>
			</v-contextmenu-item>
			<v-contextmenu-item @click="onContextMenuAction('delete')">
				<i class="simple-icon-trash" />
				<span>Delete</span>
			</v-contextmenu-item>
		</v-contextmenu>
		</b-overlay>
	</div>
</template>

<script>
import axios from "axios";
import AppLayout from "../../layouts/EAppLayout";
import Vuetable from "vuetable-2/src/components/Vuetable";
import VuetablePaginationBootstrap from "../../components/Common/VuetablePaginationBootstrap";
import { bUrl } from "../../constants/config";
import DatatableHeading from "../../containers/elder-alowance/datatable/DatatableHeading";
import ElderDetails from "./components/view_elder_application_verify"
import StateButton from "../../components/Common/StateButton";
export default {
	props: ["title"],
	components: {
		AppLayout: AppLayout,
		vuetable: Vuetable,
		"vuetable-pagination-bootstrap": VuetablePaginationBootstrap,
		"datatable-heading": DatatableHeading,
		"elder-details": ElderDetails ,
		"state-button": StateButton
	},
	data() {
		return {
			show: true,
			apiBase: bUrl+"/application/dsappdetails",
			isLoad: false,
			sort: "",
			page: 1,
			perPage: 8,
			search: "",
			filter: "",
			from: 0,
			to: 0,
			total: 0,
			lastPage: 0,
			items: [],
			clickedVid:null,
			selectedItems: [],
			garamaDivision:[],
	
  
		};
	},

	methods: {
		getData(apiUrl,httpOptions) {
			return axios.get(apiUrl,httpOptions);
		},
		makeQueryParams(sortOrder, currentPage, perPage) {
			this.selectedItems = [];
			return sortOrder[0]
				? {
						sort: sortOrder[0]
							? sortOrder[0].field + "|" + sortOrder[0].direction
							: "",
						page: currentPage,
						per_page: this.perPage,
						search: this.search,
						grama_division:this.filter.grama_division
				  }
				: {
						page: currentPage,
						per_page: this.perPage,
						search: this.search,
						grama_division:this.filter.grama_division
				  };
		},
		onRowClass(dataItem, index) {
			if (this.selectedItems.includes(dataItem.vid)) {
				return "selected";
			}
			return "";
		},

		rowClicked(dataItem, event) {
			
			const itemId = dataItem.vid;
			this.selectedItem = itemId ;
			if (event.shiftKey && this.selectedItems.length > 0) {
				let itemsForToggle = this.items;
				var start = this.getIndex(itemId, itemsForToggle, "vid");
				var end = this.getIndex(
					this.selectedItems[this.selectedItems.length - 1],
					itemsForToggle,
					"vid"
				);
				itemsForToggle = itemsForToggle.slice(
					Math.min(start, end),
					Math.max(start, end) + 1
				);
				this.selectedItems.push(
					...itemsForToggle.map(item => {
						return item.vid;
					})
				);
				this.selectedItems = [...new Set(this.selectedItems)];
			} else {
				if (this.selectedItems.includes(itemId)) {
					this.selectedItems = this.selectedItems.filter(x => x !== itemId);
				} else this.selectedItems.push(itemId);
			}
		},
		rightClicked(dataItem, field, event) {
			event.preventDefault();
			if (!this.selectedItems.includes(dataItem.vid)) {
				this.selectedItems = [dataItem.vid];
			}
			this.$refs.contextmenu.show({ top: event.pageY, left: event.pageX });
		},
		onPaginationData(paginationData) {
			this.from = paginationData.from;
			this.to = paginationData.to;
			this.total = paginationData.total;
			this.lastPage = paginationData.last_page;
			this.items = paginationData.data;
			this.$refs.pagination.setPaginationData(paginationData);
		},
		onChangePage(page) {
			this.$refs.vuetable.changePage(page);
		},

		changePageSize(perPage) {
			this.perPage = perPage;
			this.$refs.vuetable.refresh();
		},

		searchChange(val) {
			this.search = val;
			this.$refs.vuetable.refresh();
		},
		filterChange(val) {
			this.filter = val;
			this.$refs.vuetable.refresh();
		},
		selectAll(isToggle) {
			if (this.selectedItems.length >= this.items.length) {
				if (isToggle) this.selectedItems = [];
			} else {
				this.selectedItems = this.items.map(x => x.vid);
			}
		},
		keymap(event) {
			switch (event.srcKey) {
				case "select":
					this.selectAll(false);
					break;
				case "undo":
					this.selectedItems = [];
					break;
			}
		},
		getIndex(value, arr, prop) {
			for (var i = 0; i < arr.length; i++) {
				if (arr[i][prop] === value) {
					return i;
				}
			}
			return -1;
		},

		onContextMenuAction(action) {
			console.log(
				"context menu item clicked - " + action + ": ",
				this.selectedItems
			);
		},


		//custom

		dataProvider() {
      let promise = axios.get( bUrl + '/gramadivision/gramandionly')
			promise.then(result => result.data)
        .then((data) => {
					const items = data.data
					//console.log(items)
          this.garamaDivision=items;
        }).catch(_error => {
          return []
        })
		},
		//select button 
   selectApplication(val) {
		 //console.log("ssss")
		// console.log(val)
			
		// eslint-disable-next-line promise/param-names
		//let req = axios.get( bUrl + '/application/selectapplicaton/'+this.clickedVid)
			let req = axios.patch( bUrl + '/application/removeapplicaton/'+val)
			req.then(result => result.data)
        .then((data) => {
					console.log(data)
					this.$refs.vuetable.refresh();
        }).catch(_error => {
          return []
        })

				
    },
    failButtonClick() {
      // eslint-disable-next-line promise/param-names
      return new Promise((success, fail) => {
        setTimeout(() => {
          // eslint-disable-next-line prefer-promise-reject-errors
          fail("Something is wrong!");
        }, 2000);
      });
    },


	},
	computed: {
		isSelectedAll() {
			return this.selectedItems.length >= this.items.length;
		},
		isAnyItemSelected() {
			return (
				this.selectedItems.length > 0 &&
				this.selectedItems.length < this.items.length
			);
		}
	},
	created(){
		this.dataProvider();
	}
};
</script>
<style>
#successButton {
	margin-bottom:0.25rem !important;
}
</style>





