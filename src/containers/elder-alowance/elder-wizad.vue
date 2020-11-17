<template>
	<b-colxx xl="8" lg="12" style="margin:auto ">
		<b-card no-body>
			<b-card-body class="wizard wizard-default">
				<form-wizard :last-step-end="true" :elder="this.elder">
					<tab :name="$t('wizard.step-name-1')" :desc="$t('wizard.step-desc-1')" :selected="true">
						<div class="wizard-basic-step">
							<b-form>
								<b-form-group>
									<elderformcon1 @changexx="changexx" />
								</b-form-group>
							</b-form>
						</div>
					</tab>
					<tab :name="$t('wizard.step-name-2')" :desc="$t('wizard.step-desc-2') ">
						<div class="wizard-basic-step">
							<b-form>
								<b-form-group>
									<elderformcon2 :elder="this.elder" @changexx="changexx" />
								</b-form-group>
							</b-form>
						</div>
					</tab>
					<tab :name="$t('wizard.step-name-3')" :desc="$t('wizard.step-desc-3')">
						<div class="wizard-basic-step">
							<b-form>
								<b-form-group>
									<elderformcon3 />
								</b-form-group>
							</b-form>
						</div>
					</tab>
					<tab type="done">
						<div class="wizard-basic-step text-center">
							<h2 class="mb-2">{{$t('wizard.content-thanks')}}</h2>
							<p>{{$t('wizard.registered')}}</p>
						</div>
					</tab>
				</form-wizard>
			</b-card-body>
		</b-card>
	</b-colxx>
</template>

<script>
import FormWizard from "../../components/elders component/elder form/elder wizad/elFormWizad";
import Tab from "../../components/elders component/elder form/elder wizad/elTab";
import elderformcon1 from "./elder forrms/elderform-con-1.vue";
import elderformcon2 from "./elder forrms/elderform-con-2.vue";
import elderformcon3 from "./elder forrms/elderform-con-3.vue";

export default {
	components: {
		"form-wizard": FormWizard,
		tab: Tab,
		elderformcon1: elderformcon1,
		elderformcon2: elderformcon2,
		elderformcon3: elderformcon3
	},

	data() {
		return {
			elder: {
				name: "sahan"
			}
		};
	},
	methods: {
		fff() {
			console.log("helll");
		},
		changexx(el) {
			this.elder = el;
			console.log(this.elder.name);
		}
	}
};
</script>
