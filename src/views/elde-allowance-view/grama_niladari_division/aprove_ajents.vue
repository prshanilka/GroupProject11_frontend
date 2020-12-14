<template>
	<AppLayout>
		<div>
			<b-overlay :show="show" spinner-variant="primary" spinner-type="grow" spinner-small rounded="sm">
				<b-modal id="modallg" size="xl" title="Details" hide-footer>
					<elder-details :id="clickedid" :aid="agentid" />
				</b-modal>
				<datatable-heading
					title="List Of Guardian"
					:selectAll="selectAll"
					:isSelectedAll="isSelectedAll"
					:isAnyItemSelected="isAnyItemSelected"
					:keymap="keymap"
					:changePageSize="changePageSize"
					:searchChange="searchChange"
					:from="from"
					:to="to"
					:total="total"
					:perPage="perPage"
				></datatable-heading>
				<b-row>
					<b-colxx xxs="12">
						<vuetable
							ref="vuetable"
							class="table-divided order-with-arrow"
							:http-fetch="getData"
							:api-url="apiBase"
							:query-params="makeQueryParams"
							:per-page="perPage"
							:reactive-api-url="true"
							:fields="fields"
							pagination-path
							:row-class="onRowClass"
							@vuetable:pagination-data="onPaginationData"
							@vuetable:row-clicked="rowClicked"
							@vuetable:cell-rightclicked="rightClicked"
							@vuetable:loading="show=true"
							@vuetable:load-success="show=false"
						>
							<template slot="actions1" slot-scope="props">
								<b-button
									class="mb-2"
									v-b-modal.modallg
									@click="() =>showw(props)"
									size="small"
									variant="outline-danger"
								>View</b-button>
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
	</AppLayout>
</template>

<script>
import axios from "axios";
import AppLayout from "../../../layouts/EAppLayout";
import Vuetable from "vuetable-2/src/components/Vuetable";
import VuetablePaginationBootstrap from "../../../components/Common/VuetablePaginationBootstrap";
import { bUrl } from "../../../constants/config";
import DatatableHeading from "../../../containers/datatable/DatatableHeading";

import ElderDetails from "./verify_ajent";

export default {
	props: ["title"],
	components: {
		name: "post-officer-elder-payment-authenticate-verify",
		AppLayout: AppLayout,
		vuetable: Vuetable,
		"elder-details": ElderDetails,
		"vuetable-pagination-bootstrap": VuetablePaginationBootstrap,
		"datatable-heading": DatatableHeading
	},
	data() {
		return {
			clickedid: null,
			agentid: null,
			show: true,
			apiBase: bUrl + "/elders",
			isLoad: false,
			sort: "",
			page: 1,
			perPage: 8,
			search: "",
			from: 0,
			to: 0,
			total: 0,
			lastPage: 0,
			items: [],
			selectedItems: [],

			fields: [
				{
					name: "elder_id",
					sortField: "elder_id",
					title: "Elder Id",
					titleClass: "",
					dataClass: "text-muted",
					width: "20%"
				},
				{
					name: "ename",
					sortField: "ename",
					title: "Elder Name",
					titleClass: "",
					dataClass: "list-item-heading",
					width: "20%"
				},
				{
					name: "aname",
					sortField: "aname",
					title: "Guardian Name",
					titleClass: "",
					dataClass: "text-muted",
					width: "20%"
				},
				{
					name: "aaddress",
					sortField: "aaddress",
					title: "Address",
					titleClass: "",
					dataClass: "text-muted",
					width: "20%"
				},
				{
					name: "anic",
					sortField: "anic",
					title: "NIC",
					titleClass: "",
					dataClass: "text-muted",
					width: "20%"
				},
				{
					name: "__slot:actions1",
					title: "",
					titleClass: "center aligned text-right",
					dataClass: "center aligned text-right",
					width: "25%"
				}
			]
		};
	},

	methods: {
		getData() {
			return axios.get(
				"/gramadivision/agent"
			);
		},
		showw(pp) {
			this.clickedid = pp.rowData.elder_id;
			this.agentid = pp.rowData.agent_id;
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
						search: this.search
				  }
				: {
						page: currentPage,
						per_page: this.perPage,
						search: this.search
				  };
		},
		onRowClass(dataItem, index) {
			if (this.selectedItems.includes(dataItem.elder_id)) {
				return "selected";
			}
			return "";
		},

		rowClicked(dataItem, event) {
			const itemId = dataItem.elder_id;
			if (event.shiftKey && this.selectedItems.length > 0) {
				let itemsForToggle = this.items;
				var start = this.getIndex(itemId, itemsForToggle, "elder_id");
				var end = this.getIndex(
					this.selectedItems[this.selectedItems.length - 1],
					itemsForToggle,
					"elder_id"
				);
				itemsForToggle = itemsForToggle.slice(
					Math.min(start, end),
					Math.max(start, end) + 1
				);
				this.selectedItems.push(
					...itemsForToggle.map(item => {
						return item.elder_id;
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
			if (!this.selectedItems.includes(dataItem.elder_id)) {
				this.selectedItems = [dataItem.elder_id];
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

		selectAll(isToggle) {
			if (this.selectedItems.length >= this.items.length) {
				if (isToggle) this.selectedItems = [];
			} else {
				this.selectedItems = this.items.map(x => x.elder_id);
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
		}
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
	}
};
</script>



 


 