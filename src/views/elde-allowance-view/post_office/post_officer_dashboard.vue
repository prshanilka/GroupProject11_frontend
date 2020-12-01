<template>
	<AppLayout>
		<user-card-elder></user-card-elder>
		<b-row>
			<b-colxx lg="4" md="6" sm="6" xxs="12">
      			<b-card class="mb-4 text-center">
					<p class=" text-large text-center text-primary">Year</p>
      			</b-card>
    		</b-colxx>

			<b-colxx lg="4" md="6" sm="6" xxs="12">
      			<b-card class="mb-4 text-center">
					<p class=" text-large text-center text-primary">Month</p>
      			</b-card>
    		</b-colxx>

			<b-colxx lg="4" md="6" sm="6" xxs="12">
      			<b-card class="mb-4 text-center">
					<p class=" text-large text-center text-primary">Check Number</p>
      			</b-card>
    		</b-colxx>
		</b-row>
		<b-row>
			<b-colxx md="6" sm="6" xxs="12">
      			<b-card class="mb-4 text-center">
					<p class=" text-large text-center text-primary">No of Qulified Elders</p>
      			</b-card>
    		</b-colxx>

			<b-colxx md="6" sm="6" xxs="12">
      			<b-card class="mb-4 text-center">
					<p class=" text-large text-center text-primary">No of Elders Got Money</p>
      			</b-card>
    		</b-colxx>
		</b-row>
	</AppLayout>
</template>

<script>

import UserCardElder from "../../../containers/elder/UserCardElder";
import AppLayout from "../../../layouts/EAppLayout";
export default {
	name: "post-officer-dashboard",
  components: {
   "user-card-elder": UserCardElder,
   AppLayout: AppLayout
  },
};

</script>