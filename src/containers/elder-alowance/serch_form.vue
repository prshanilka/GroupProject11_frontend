<template>
    <div>
	<b-row v-if="!now_serch" >
		<b-colxx xl="8" lg="12" style="margin:auto ">
            <b-card>
			<div class="text-center">
				<h1>  Advace  Search of  Elders</h1>
			</div>

			<b-card class="mb-4">
				<!-- //there was an emit click method ss -->

				<b-form class="av-tooltip tooltip-label-right">
					<b-form-group label="Elder  Name ">
						<b-form-input type="text" v-model="elder.name"   />
 					</b-form-group>

                    <b-form-group label="Elder  ID ">
						<b-form-input type="text" v-model="elder.elder_id"   />
 					</b-form-group>

					<b-form-group :label="$t('form.address')">
						<b-form-textarea
							type="text"
							v-model="elder.address"
						/>
					</b-form-group>
					<b-form-group :label="$t('form.nic')">
						<b-form-input type="text" v-model="elder.nic_no"   />
					</b-form-group>
 
					<b-form-group :label="$t('form.district')">
						<b-form-select
							v-model="elder.district"
							:options="district_option"
						></b-form-select>
					</b-form-group>

					<b-form-group :label="$t('form.divisional')">
						<b-form-select
							v-model="elder.divisional_off"
							:options="divisional_off_option"
						></b-form-select> 
					</b-form-group>
					<b-form-group :label="$t('form.gramaniladari-division')"  >
						<b-form-select
							v-model="elder.grama_niladari_div"
							:options="grama_niladari_div_option"
						></b-form-select>
					</b-form-group>

					<b-form-group :label="$t('form.post')" class="error-l-100">
						<b-form-select
							v-model="elder.nearest_post_office"
							:options="post_off_option"
						></b-form-select>
					</b-form-group>

                    <b-button variant="primary" class="mt-4"  @click="onFormSubmit">Search</b-button>
                     

				</b-form>
			</b-card>
            </b-card>
		</b-colxx>
	</b-row>
    <b-colxx v-if="now_serch" xl="8" lg="10" md="12" style="margin:auto ">
			<b-card>
				<b-colxx lg="12" md="12" class="m-lg-4 text-center" style="mrgin-top:50px;">
					<h1>Search Reasults of Elders</h1>
				</b-colxx>
                <b-button variant="primary" class="mt-4"  @click="onFormSubmit">Search Again </b-button>
                <br>
                <br>
				<list-with-user-item
					v-for="(item, index) in applications"
					:data="item"
					:detail-path="'/division/view-elder-details/'+item.elder_id "
					:key="index"
				/>
				<LogList />
			</b-card>
		</b-colxx>
        </div>
</template>

<script>
  
 
 
import axios from "axios";
import ListWithUserItem from "../../components/elders_component/elderDetailList.vue";
import LogList from "../../components/Listing/LogList";

export default {
	components: {
        "list-with-user-item": ListWithUserItem,
		LogList: LogList
        
	},
	data() {
		return {
            
            now_serch:false,
            applications: [],
			elder: {
                name: "",
                elder_id:"",
				address: "",
				nic_no: "",
				district: "",
				divisional_off: "",
				grama_niladari_div: "",
				nearest_post_office: "",
	 
			},
			district_option: [
				// {
				// 	value: null,
				// 	text: "Select an District/කරුණාකර දිස්ත්‍රික්කය තෝරන්න",
				// 	disabled: true
				// }
			],
			divisional_off_option: [
				// {
				// 	value: null,
				// 	text:
				// 		"Select an Division Secretary Office/කරුණාකර ප්‍රාදේශීය ලේකම් කාර්යාලය තෝරන්න",
				// 	disabled: true
				// }
			],
			grama_niladari_div_option: [
				// {
				// 	value: null,
				// 	text:
				// 		"Select Grama Niladari Division/කරුණාකර ග්‍රාම නිළධාරී කොඨ්ඨාෂ‍ය තෝරන්න",
				// 	disabled: true
				// }
			],
			post_off_option: [
				// {
				// 	value: null,
				// 	text:
				// 		"Select Nearest Post Office/කරුණාකර ළඟම ඇති තැපැල් කාර්යාලය තෝරන්න",
				// 	disabled: true
				// }
			]
		};
	},
 
 	created() {
		axios
			.get("/district/selectbox")
			.then(res => {
				console.log(res);
				this.district_option = [...this.district_option, ...res.data.data];
			})
			.catch(err => {
				console.log(err);
			});

		axios
			.get("/divisionaloffice/selectbox")
			.then(res => {
				console.log(res);
				this.divisional_off_option = [
					...this.divisional_off_option,
					...res.data.data
				];
			})
			.catch(err => {
				console.log(err);
			});
		axios
			.get("/gramadivision/selectbox")
			.then(res => {
				console.log(res);
				this.grama_niladari_div_option = [
					...this.grama_niladari_div_option,
					...res.data.data
				];
			})
			.catch(err => {
				console.log(err);
			});
		axios
			.get("/postoffice/selectbox")
			.then(res => {
				console.log(res);
				this.post_off_option = [...this.post_off_option, ...res.data.data];
			})
			.catch(err => {
				console.log(err);
            });
            
            const body = { gramaniladari_id: "2" };
		

	},
	methods: {
		onFormSubmit() {
             this.now_serch  =!this.now_serch
			console.log(
				JSON.stringify({
					elder: this.elder
				})
            );
       const body =    {
        name:this.elder.name,
        elder_id:this.elder.address,  
        address:this.elder.address,
        gramaniladari_division_id:this.elder.grama_niladari_div,
        near_post_office_id:this.elder.nearest_post_office,
        district_id:this.elder.district,
        divisional_secratory_id:this.elder.divisional_off,
            }
             this.applications=[];
            axios({
			method: "post",
            url: "/elders/search",
            data:body
		}).then(result => {
			this.applications = result.data.data;
			console.log(result);
			// this.aplications = result.data.data;
		});
		}, 
 	},
	 
};
</script>
