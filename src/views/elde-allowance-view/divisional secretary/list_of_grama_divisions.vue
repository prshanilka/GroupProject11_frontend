<template>
	<AppLayout>
		<h1>This is the List Of the grama divisions</h1>
		<b-row>
    		<b-colxx xxs="12">
      
     			<b-row class="icon-cards-row mb-3">

        		<b-colxx xxs="6" sm="4" md="3" lg="2">
    				<icon-card title="Gampaha North" icon="iconsminds-home-1" value="222/B" />
        		</b-colxx>

        		<b-colxx xxs="6" sm="4" md="3" lg="2">
          			<icon-card
            		:title="$t('dashboards.completed-orders')"
            		icon="iconsminds-home-1"
            		:value="32"
          			/>
        		</b-colxx>

        		<b-colxx xxs="6" sm="4" md="3" lg="2">
          			<icon-card
            		:title="$t('dashboards.refund-requests')"
            		icon="iconsminds-home-1"
            		:value="74"
          			/>
        		</b-colxx>

        		<b-colxx xxs="6" sm="4" md="3" lg="2">
          			<icon-card
            		:title="$t('dashboards.new-comments')"
            		icon="iconsminds-home-1"
            		:value="25"
         			/>
        		</b-colxx>
      			</b-row>
    		</b-colxx>
  		</b-row>
	</AppLayout>
</template>




<script>
import AppLayout from "../../../layouts/EAppLayout";
import IconCard from '../../../components/Cards/IconCard';

export default {
	components: {
		AppLayout: AppLayout,
		"icon-card": IconCard
	}
};
</script>
