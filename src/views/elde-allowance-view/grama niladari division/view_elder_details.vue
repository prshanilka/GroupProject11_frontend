 
 

<template>
	<AppLayout>
		<h1>View Elder details in the particular division</h1>
		<b-colxx xxs="12" md="10" class="col-left">
			<b-card no-body class="mb-4">
				<b-row>
					<b-colxx lg="6" md="12" class="mb-4">
						<div class="position-absolute card-top-buttons"></div>
						<single-lightbox
							thumb="../assets/img/profiles/1.jpg"
							large="../assets/img/profiles/1.jpg"
							class-name="card-img-top "
							class="m-4"
						/>
					</b-colxx>
					<b-colxx lg="6" md="12" class="mb-4">
						<div class="m-4">
							<p class="text-muted text-small mb-2">Elder Full Name</p>
							<p class="mb-3">Sahan Lakshitha</p>

							<p class="text-muted text-small mb-2">Elder Address</p>
							<p class="mb-3">49A /149 hansagiri road, 5th lane Gampaha</p>

							<p class="mb-3">
								<span class="text-muted text-small mb-2">Sex:</span> Male
							</p>
							<p class="mb-3">
								<span class="text-muted text-small mb-2">Phone No:</span> 0713327794
							</p>

							<p class="mb-3">
								<span class="text-muted text-small mb-2">Nic No:</span> 970983325V
							</p>
							<p class="mb-3">
								<span class="text-muted text-small mb-2">Email:</span> sahanbcsrh@gmail.com
							</p>

							<p class="mb-3">
								<span class="text-muted text-small mb-2">Date of Birth:</span> 1997-04-07
							</p>
							<p class="mb-3">
								<span class="text-muted text-small mb-2">Age:</span> 97
							</p>
						</div>
					</b-colxx>
				</b-row>
				<b-card-body>
					<b-row>
						<b-colxx lg="6" md="12" class="mb-4">
							<p class="mb-3">
								<span class="text-muted text-small mb-2">Local Elders Commity Name:</span> Swarna Hanse Elders Commity
								<br />
								<span class="text-muted text-small mb-2">Local Elders Commity Membership No:</span> 21
							</p>
							<p class="text-muted text-small mb-2">Nearest Post Office</p>
							<p class="mb-3">Aluthgama Nagenhira</p>

							<p class="text-muted text-small mb-2">Lives With Whome</p>
							<p class="mb-3">With wife and Childerns</p>

							<p class="text-muted text-small mb-2">Other Elder Nic</p>
							<p class="mb-3">9702321121V</p>

							<p class="text-muted text-small mb-2">Samurdhi Number</p>
							<p class="mb-3">970</p>

							<p class="text-muted text-small mb-2">Public Aid Number</p>
							<p class="mb-3">121</p>
							<p class="text-muted text-small mb-2">Other Details</p>
							<p class="mb-3">I am so Old if you kind give me the oppertunity</p>

							<p class="text-muted text-small mb-2">Source Of Income</p>
							<p class="mb-3">I am so Old if you kind give me</p>

							<p class="text-muted text-small mb-2">Monthly Income</p>
							<p class="mb-3">3000</p>
						</b-colxx>
						<b-colxx lg="6" md="12" class="mb-4">
							<h3>Agent Information</h3>

							<p class="text-muted text-small mb-2">Agent Name</p>
							<p class="mb-3">Sada probooooo</p>
						</b-colxx>
					</b-row>
				</b-card-body>
			</b-card>
		</b-colxx>
	</AppLayout>
</template>

<script>
import AppLayout from "../../../layouts/EAppLayout";
import SingleLightbox from "../../../containers/pages/SingleLightbox";

export default {
	name: "view-application-and-verify",
	components: {
		AppLayout: AppLayout,
		"single-lightbox": SingleLightbox
	},
	data() {}
};
</script>
<style>
</style>
