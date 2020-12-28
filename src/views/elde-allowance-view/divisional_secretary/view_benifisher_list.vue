<template>
	<AppLayout>
		<div>
			<b-row>
				<h1>Beneficiaries</h1>
				<div class="border-top my-3"></div>
				<hr>
			</b-row>
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

						:row-class="onRowClass"

					>
	
					</vuetable>
	
				</b-colxx>
			</b-row>

		
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
export default {
	props: ["title"],
	components: {
		AppLayout: AppLayout,
		vuetable: Vuetable,
		"vuetable-pagination-bootstrap": VuetablePaginationBootstrap,
		"datatable-heading": DatatableHeading
	},
	data() {
		return {
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
					name: "benifesher_id",

					title: "Beneficiary Id",
					titleClass: "",
					dataClass: "list-item-heading",
					width: "5%"
				},
				{
					name: "elder_id",

					title: "Elder Id",
					titleClass: "",
					dataClass: "text-muted",
					width: "5%"
				},

				{
					name: "name",

					title: "Name",
					titleClass: "",
					dataClass: "text-muted",
					width: "15%"
				},
				{
					name: "address",

					title: "Address",
					titleClass: "",
					dataClass: "text-muted",
					width: "20%"
				},
				{
					name: "number",

					title: "Phone number",
					titleClass: "",
					dataClass: "text-muted",
					width: "10%"
				},
				{
					name: "email",

					title: "Email",
					titleClass: "",
					dataClass: "text-muted",
					width: "10%"
				},

				{
					name: "added_date",
					sortField: "added_date",
					title: "Added Date",
					titleClass: "",
					dataClass: "text-muted",
					width: "20%"
				},
			]
		};
	},

	methods: {
		getData() {
			return axios.get(
				"/divisionaloffice//benifisherlist/G1"
			);
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
			if (this.selectedItems.includes(dataItem.id)) {
				return "selected";
			}
			return "";
		},

		rowClicked(dataItem, event) {
			const itemId = dataItem.id;
			if (event.shiftKey && this.selectedItems.length > 0) {
				let itemsForToggle = this.items;
				var start = this.getIndex(itemId, itemsForToggle, "id");
				var end = this.getIndex(
					this.selectedItems[this.selectedItems.length - 1],
					itemsForToggle,
					"id"
				);
				itemsForToggle = itemsForToggle.slice(
					Math.min(start, end),
					Math.max(start, end) + 1
				);
				this.selectedItems.push(
					...itemsForToggle.map(item => {
						return item.id;
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
			if (!this.selectedItems.includes(dataItem.id)) {
				this.selectedItems = [dataItem.id];
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
				this.selectedItems = this.items.map(x => x.id);
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



 


