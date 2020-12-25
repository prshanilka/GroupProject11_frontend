 
 
 <template>
	<AppLayout>
		<b-modal id="modallg" size="xl" title="Elder Details" hide-footer>
			<elder-details :id="clickedid" :pay_id="pay_id" />
		</b-modal>
		<div>
			<h1>{{title}}</h1>
			<datatable-heading
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
						<template v-if="!bshow" slot="actions1" slot-scope="props">
							<b-button
								class="mb-1"
								v-b-modal.modallg
								@click="() =>showw(props)"
								variant="outline-primary"
							>Pay</b-button>
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
import ElderDetails from "./get_elder_detail_verification";
export default {
	props: ["title"],
	components: {
		name: "post-officer-eldesr-payment",
		AppLayout: AppLayout,
		vuetable: Vuetable,
		"vuetable-pagination-bootstrap": VuetablePaginationBootstrap,
		"datatable-heading": DatatableHeading,
		"elder-details": ElderDetails
	},
	data() {
		return {
			title: null,
			bshow: null,
			clickedid: null,
			m_name: null,
			p_name: null,
			pay_id: null,
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
			pay_info: [],

			fields: [
				{
					name: "id",
					sortField: "payment_id",
					title: "payment_id",
					titleClass: "",
					dataClass: "list-item-heading",
					width: "5%"
				},
				{
					name: "elder_id",
					sortField: "elder_id",
					title: "elder_id",
					titleClass: "",
					dataClass: "text-muted",
					width: "12%"
				},
				{
					name: "name",
					sortField: "name",
					title: "name",
					titleClass: "",
					dataClass: "text-muted",
					width: "12%"
				},
				{
					name: "money_amount",
					sortField: "money_amount",
					title: "money_amount",
					titleClass: "",
					dataClass: "text-muted",
					width: "15%"
				},
				{
					name: "ajent_available",
					sortField: "ajent_available",
					title: "ajent_available",
					titleClass: "",
					dataClass: "text-muted",
					width: "10%"
				},

				{
					name: "nic_id",
					sortField: "nic_id",
					title: "nic_id",
					titleClass: "",
					dataClass: "text-muted",
					width: "15%"
				},

				{
					name: "number",
					sortField: "number",
					title: "number",
					titleClass: "",
					dataClass: "text-muted",
					width: "15%"
				},
				{
					name: "is_taken_money",
					sortField: "is_taken_money",
					title: "revive",
					titleClass: "",
					dataClass: "text-muted",
					width: "5%"
				},
				{
					name: "__slot:actions1",
					title: "",
					titleClass: "center aligned text-right",
					dataClass: "center aligned text-right",
					width: "15%"
				}
			]
		};
	},
	props: ["post_off", "year", "month"],
	methods: {
		exportPDF() {
			var vm = this;
			var columns = [
				{ title: "Pay Id", dataKey: "id" },
				{ title: "Elder Reg", dataKey: "elder_id" },
				{ title: "Elder Name", dataKey: "name" },
				{ title: "Amount", dataKey: "money_amount" },
				{ title: "Signature" }
				// { title: "Signature", dataKey: n }
				// { title: "Total", dataKey: "total_amount" }
			];
			var doc = new jsPDF("p", "pt");
			doc.setFontSize("15");
			doc.text("Social Servives Departmant - Gampaha D.S.D ", 150, 70);
			doc.text(
				"Over 70 Monthly Allowance " + this.year + "  " + this.m_name,
				170,
				90
			);
			doc.text("Post Office :", 40, 120);
			doc.text(" " + this.post_off + " " + this.p_name, 120, 120);
			doc.text(" Head  ", 120, 160);
			doc.autoTable(columns, vm.pay_info, {
				margin: { top: 200 }
			});
			doc.setFontSize("12");
			doc.text(
				"I certify that above allowance contained on ................. sheat and totalling  ....................................\nonly Rupees are authorized  in Registrer of Allowance and are due for payment",
				40,
				600
			);

			doc.text("Prepared By", 80, 640);
			doc.text("Checked By", 320, 640);
			doc.text("2020.03", 80, 680);
			doc.text("Divisional Secretory", 320, 680);
			doc.text(
				"I certify that above allwance totalling Rupees ............................................................have been paid to \nthe person named or to their authorized Guardian whose authorities are atached and that allwance \ntotalling Rs...................................... have not been paid   ",
				40,
				720
			);
			doc.text("Date", 80, 780);
			doc.text("Postmaster", 320, 780);
			doc.save(this.title + ".pdf");
		},

		getData() {
			return axios
				.get(
					"/paymentposttoben/post/" +
						this.post_off +
						"/" +
						this.year +
						"/" +
						this.month
				)
				.then(res => {
					console.log(res);
					this.bshow = res.data.data[0].is_completed;
					this.m_name = res.data.data[0].m_name;
					this.p_name = res.data.data[0].post;
					console.log(this.m_name);
					(this.title =
						"The Year  " +
						this.year +
						" " +
						this.m_name +
						" Payment Info  " +
						res.data.data[0].post +
						"(" +
						this.post_off +
						")"),
						(this.pay_info = res.data.data);
					return res;
				});
		},
		showw(pp) {
			this.clickedid = pp.rowData.elder_id;
			this.pay_id = pp.rowData.id;
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



 


 