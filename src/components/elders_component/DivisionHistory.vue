<template>
	<b-colxx md="6" sm="6" lg="4" xxs="12">
    <b-card class="mb-4 text-center">
			<div class="icon-row-item">
					<i class="iconsminds-wallet text-xlarge" />				
			</div>
			
			<h1>The {{data.year}} of {{data.month}} Payments Details</h1>
            <h2>Payment Id: {{data.payment_id}}</h2>
            <h3>Post Office: {{ data.name }}</h3>
            <h3>Check No: {{ data.check_no }}</h3>
            <p class="mb-1">Send Date: {{ data.send_date }}</p>
            <p class="mb-1">Completed Date: {{ data.completed_date }}</p>			
            <p class="mb-1">Total Amount: {{ data.sent_amount_to_post_office }}</p>
            <p class="mb-1">No of Qualified Elders: {{ data.no_qualified_elders }}</p>
            <p class="mb-1">No of Elders got money: {{ data.no_of_elders_got_money }}</p>
            <h1 v-if="data.is_completed=='0'" class=" text-danger">Not Completed</h1>
            <h1 v-if="data.is_completed=='1'" class=" text-success">Completed</h1>
		</b-card>
	</b-colxx>
</template>

<script>
export default {
	props: ["data"]
};
</script>