 
 
 <template>
	<AppLayout>
		<div>
			<datatable-heading
				:title="title"
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
					>
						<template slot="actions" slot-scope="props">
							<b-button class="mb-1" @click="showList(props)" variant="outline-primary">View List</b-button>
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
		</div>
		<b-button variant="primary" class="mt-4" @click="exportPDF">Print Report</b-button>
	</AppLayout>
</template>

<script>
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";
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
			mm: "",
			title: "",
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
			records: [],

			fields: [
				{
					name: "payment_id",
					sortField: "payment_id",
					title: "PAy Id",
					titleClass: "",
					dataClass: "list-item-heading",
					width: "5%"
				},
				{
					name: "post_office_id",
					sortField: "post_office_id",
					title: "Post Code",
					titleClass: "",
					dataClass: "list-item-heading",
					width: "5%"
				},
				{
					name: "name",
					sortField: "name",
					title: "Name",
					titleClass: "",
					dataClass: "list-item-heading",
					width: "20%"
				},
				{
					name: "address",
					sortField: "Address",
					title: "address",
					titleClass: "",
					dataClass: "text-muted",
					width: "10%"
				},
				{
					name: "bank_account_no",
					sortField: "bank_account_no",
					title: "bank_account_no",
					titleClass: "",
					dataClass: "text-muted",
					width: "10%"
				},

				{
					name: "year",
					sortField: "year",
					title: "Year",
					titleClass: "",
					dataClass: "text-muted",
					width: "10%"
				},
				{
					name: "m_name",
					sortField: "m_name",
					title: "Month",
					titleClass: "",
					dataClass: "text-muted",
					width: "10%"
				},
				{
					name: "total_money_amount",
					sortField: "total_money_amount",
					title: "Money Amount",
					titleClass: "",
					dataClass: "text-muted",
					width: "15%"
				},
				{
					name: "__slot:actions",
					title: "",
					titleClass: "center aligned text-right",
					dataClass: "center aligned text-right",
					width: "20%"
				}
			]
		};
	},
	props: ["year", "month"],
	created() {
		axios({
			method: "get",
			url: "/paymentdivoff/topostbyyearmaonth/" + this.year + "/" + this.month
		}).then(res => {
			this.mm = res.data.data[0].m_name;
			this.title =
				" Elder Payments To the Post Officer " + this.year + "  " + this.mm;
		});
	},
	methods: {
		exportPDF() {
			var vm = this;
			var columns = [
				{ title: "Div Pay Id", dataKey: "payment_id" },
				{ title: "Post Code", dataKey: "post_office_id" },
				{ title: "Name", dataKey: "name" },
				{ title: "Address", dataKey: "address" },
				{ title: "Bank Account", dataKey: "bank_account_no" },
				{ title: "Total", dataKey: "total_money_amount" },
				{ title: "Monthly To Fund", dataKey: "year_to_fund" },
				{ title: "Elder Payment Count", dataKey: "pay_count" },
				{ title: "Paid To Elders", dataKey: "elder_got" },
				{ title: "Again Return to Div", dataKey: "not_recive" }
			];
			var doc = new jsPDF("p", "pt");
			doc.setFontSize("15");
			doc.text(this.title, 120, 90);
			doc.text("Over 70 Monthly Allowance ", 180, 60);
			// doc.text("Post Office :", 40, 120);
			// doc.text(" " + this.post_off + " " + this.p_name, 120, 120);
			// doc.text(" Head  ", 120, 160);
			doc.autoTable(columns, vm.records, {
				margin: { top: 200 }
			});
			// doc.setFontSize("12");
			// doc.text(
			// 	"I certify that above allowance contained on ................. sheat and totalling  ....................................\nonly Rupees are authorized  in Registrer of Allowance and are due for payment",
			// 	40,
			// 	600
			// );

			// doc.text("Prepared By", 80, 640);
			// doc.text("Checked By", 320, 640);
			// doc.text("2020.03", 80, 680);
			// doc.text("Divisional Secretory", 320, 680);
			// doc.text(
			// 	"I certify that above allwance totalling Rupees ............................................................have been paid to \nthe person named or to their authorized Guardian whose authorities are atached and that allwance \ntotalling Rs...................................... have not been paid   ",
			// 	40,
			// 	720
			// );
			// doc.text("Date", 80, 780);
			// doc.text("Postmaster", 320, 780);
			doc.save("pay year" + ".pdf");
		},
		showList(props) {
			console.log(props);
			const uu =
				"/division/list-paybenifisher-by-pay_id/" + props.rowData.payment_id;

			this.$router.push(uu);
		},
		getData() {
			return axios({
				method: "get",
				url: "/paymentdivoff/topostbyyearmaonth/" + this.year + "/" + this.month
			}).then(res => {
				console.log(res);
				this.mm = res.data.data[0].m_name;
				this.records = res.data.data;
				return res;
			});
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
			if (this.selectedItems.includes(dataItem.payment_id)) {
				return "selected";
			}
			return "";
		},

		rowClicked(dataItem, event) {
			const itemId = dataItem.payment_id;
			if (event.shiftKey && this.selectedItems.length > 0) {
				let itemsForToggle = this.items;
				var start = this.getIndex(itemId, itemsForToggle, "payment_id");
				var end = this.getIndex(
					this.selectedItems[this.selectedItems.length - 1],
					itemsForToggle,
					"payment_id"
				);
				itemsForToggle = itemsForToggle.slice(
					Math.min(start, end),
					Math.max(start, end) + 1
				);
				this.selectedItems.push(
					...itemsForToggle.map(item => {
						return item.payment_id;
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
			if (!this.selectedItems.includes(dataItem.payment_id)) {
				this.selectedItems = [dataItem.payment_id];
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
				this.selectedItems = this.items.map(x => x.payment_id);
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



 


 