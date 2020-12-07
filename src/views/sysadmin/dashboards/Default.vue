<template>
	<app-layout>
		<b-modal id="modallg" size="md" title="UPDATE CONSTANT" hide-footer>
			<update :id="clickid" />
		</b-modal>
		<b-row>
			<b-colxx md="6" sm="6" lg="4" xxs="12">
				<b-card class="mb-4 text-center">
					<div class="icon-row-item">
						<i class="iconsminds-column text-xlarge" />
					</div>
					<p class="lead text-center text-success">Gramaniladhari Division</p>
					<p class="lead text-center text-danger">13</p>
					<b-button class="mb-2" size="md" style="margin-top:20px;" variant="outline-primary">Update</b-button>
					<b-button class="mb-2" size="md" style="margin-top:20px;" variant="outline-warning">Delete</b-button>
				</b-card>
			</b-colxx>

			<b-colxx md="6" sm="6" lg="4" xxs="12">
				<b-card class="mb-4 text-center">
					<div class="icon-row-item">
						<i class="iconsminds-post-office text-xlarge" />
					</div>

					<p class="lead text-center text-success">Post Offices</p>
					<p class="lead text-center text-danger">10</p>
					<b-button class="mb-2" size="md" style="margin-top:20px;" variant="outline-primary">Update</b-button>
					<b-button class="mb-2" size="md" style="margin-top:20px;" variant="outline-warning">Delete</b-button>
				</b-card>
			</b-colxx>
			<b-colxx md="6" sm="6" lg="4" xxs="12">
				<b-card class="mb-4 text-center">
					<div class="icon-row-item">
						<i class="iconsminds-business-man-woman text-xlarge" />
					</div>
					<p class="lead text-center text-success">Gramaniladhari Officers</p>
					<p class="lead text-center text-danger">35</p>
					<b-button class="mb-2" size="md" style="margin-top:20px;" variant="outline-primary">Update</b-button>
					<b-button class="mb-2" size="md" style="margin-top:20px;" variant="outline-warning">Delete</b-button>
				</b-card>
			</b-colxx>
		</b-row>
		<b-row>
			<b-colxx md="4" sm="6" lg="3" xxs="12">
				<b-card class="mb-4 text-center">
					<div class="icon-row-item">
						<i class="iconsminds-dollar-sign-2 text-xlarge" />
					</div>
					<p class="lead text-center text-success">Total Amount</p>
					<p class="lead text-center text-danger">{{this.tot}}</p>
					<b-button
						class="mb-2"
						size="md"
						style="margin-top:20px;"
						variant="outline-dark"
						v-b-modal.modallg
						@click="clickid= constant.data[0].name"
					>Update</b-button>
				</b-card>
			</b-colxx>
			<b-colxx md="4" sm="6" lg="3" xxs="12">
				<b-card class="mb-4 text-center">
					<div class="icon-row-item">
						<i class="iconsminds-coins text-xlarge" />
					</div>
					<p class="lead text-center text-success">Elder Recieve</p>
					<p class="lead text-center text-danger">{{ this.recive}}</p>
					<b-button
						class="mb-2"
						size="md"
						style="margin-top:20px;"
						variant="outline-dark"
						v-b-modal.modallg
						@click="clickid= constant.data[1].name"
					>Update</b-button>
				</b-card>
			</b-colxx>
			<b-colxx md="4" sm="6" lg="3" xxs="12">
				<b-card class="mb-4 text-center">
					<div class="icon-row-item">
						<i class="iconsminds-financial text-xlarge" />
					</div>
					<p class="lead text-center text-success">For Fund</p>
					<p class="lead text-center text-danger">{{this.fund}}</p>
					<b-button
						class="mb-2"
						size="md"
						style="margin-top:20px;"
						variant="outline-dark"
						v-b-modal.modallg
						@click="clickid= constant.data[2].name"
					>Update</b-button>
				</b-card>
			</b-colxx>
			<b-colxx md="4" sm="6" lg="3" xxs="12">
				<b-card class="mb-4 text-center">
					<div class="icon-row-item">
						<i class="iconsminds-wallet text-xlarge" />
					</div>
					<p class="lead text-center text-success">Bank Account</p>
					<p class="lead text-center text-danger">{{this.bank }}</p>
					<b-button
						class="mb-2"
						size="md"
						style="margin-top:20px;"
						variant="outline-dark"
						v-b-modal.modallg
						@click="clickid= constant.data[3].name"
					>Update</b-button>
				</b-card>
			</b-colxx>
		</b-row>
		<b-row>
			<b-colxx md="12" sm="12" lg="12" xxs="12">
				<user-card-elder></user-card-elder>
			</b-colxx>
		</b-row>
	</app-layout>
</template>

<script>
import UserCardElder from "../../../containers/elder/UserCardElder";
import AppLayout from "../../../layouts/EAppLayout";
import axios from "axios";
import update from "./constantCard";

export default {
	components: {
		"user-card-elder": UserCardElder,
		"app-layout": AppLayout,
		update: update
	},
	data() {
		return {
			constant: [],
			tot: null,
			recive: null,
			bank: null,
			fund: null,
			clickid: null
		};
	},
	async beforeCreate() {
		axios.get("/divisionaloffice/cons").then(result => {
			console.log(result.data.data);

			this.constant = result.data;
			this.tot = result.data.data[0].value;
			this.recive = result.data.data[1].value;
			this.fund = result.data.data[2].value;
			this.bank = result.data.data[3].value;
		});
	}
};
</script>
