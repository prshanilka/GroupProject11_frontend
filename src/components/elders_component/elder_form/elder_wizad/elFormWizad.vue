<template>
	<div>
		<ul :class="`nav nav-tabs ${navClass}`">
			<li
				:class="{'nav-item':true,'step-doing': tab.isActive, 'step-done':tab.isDone }"
				v-for="(tab,tabIndex) in tabs"
				v-bind:key="tab.name"
			>
				<div v-if="tab.type!='done'">
					<a
						:class="{
                'nav-link':true,
                'disabled':topNavDisabled
            }"
						href="#"
						@click.prevent="clickedTab(tabIndex)"
					>
						<span>{{tab.name}}</span>
						<small>{{tab.desc}}</small>
					</a>
				</div>
			</li>
		</ul>
		<slot></slot>
		<div :class="`wizard-buttons ${navClass}`" v-if="!(lastStepEnd && isCompleted)">
			<button
				type="button"
				class="mr-1 btn btn-primary"
				:disabled="!currentActive > 0"
				@click="previousTab()"
			>{{$t('wizard.prev')}}</button>
			<button
				type="button"
				class="btn btn-primary"
				:disabled="currentActive > totalTabs - 1"
				@click="nextTab()"
			>{{$t('wizard.next')}}</button>
		</div>
	</div>
</template>

<script>
export default {
	name: "form-wizard",
	props: {
		navClass: {
			default: "justify-content-center"
		},
		lastStepEnd: {
			default: false
		},
		topNavDisabled: {
			default: true
		},
		withValidate: {
			default: false
		},
		done: {
			type: Function,
			default: () => {
				console.log("called done!");
			}
		},
		elder: {
			default: ""
		}
	},
	data() {
		return {
			tabs: [],
			currentActive: 0,
			totalTabs: 0,
			isCompleted: false,
			elderdetails: Array(3)
		};
	},

	created() {
		this.tabs = this.$children;
	},
	mounted() {
		this.totalTabs = this.tabs.filter(x => x.type != "done").length;
	},
	methods: {
		tabStatusFix() {
			this.tabs.forEach((tab, tabIndex) => {
				let isDone = tab.isDone;
				if (!isDone) {
					isDone = this.currentActive > tabIndex;
				}
				tab.isDone = isDone;
				tab.isActive = false;
			});
		},
		clickedTab(tabIndex) {
			if (!this.topNavDisabled) {
				if (!(this.lastStepEnd && this.isCompleted)) {
					this.currentActive = tabIndex;
					this.tabStatusFix();
					this.tabs[this.currentActive].isActive = true;
				}
			}
		},
		previousTab() {
			this.currentActive--;
			this.tabStatusFix();
			this.tabs[this.currentActive].isActive = true;
		},

		nextTab() {
			let valid = true;
			if (this.withValidate) {
				valid = this.tabs[this.currentActive].validate();
				if (valid) this.tabs[this.currentActive].submit();
			}

			console.log(
				this.tabs[this.currentActive].$children[0].$children[0].elder.name
			);
			var reply = this.tabs[
				this.currentActive
			].$children[0].$children[0].onValitadeFormSubmit();
			valid = reply.valid;
			var el = reply.elder;
			// console.log(el);

			this.elderdetails[this.currentActive] = el;
			console.log(valid + "  pear");

			if (!valid) {
				this.currentActive++;
				this.tabStatusFix();
				if (this.currentActive >= this.totalTabs) {
					this.isCompleted = true;
					const doneTab = this.tabs.find(x => x.type == "done");
					if (doneTab) {
						doneTab.isActive = true;
					} else this.tabs[this.currentActive - 1].isActive = true;
					this.finishedBusiness();
				} else this.tabs[this.currentActive].isActive = true;
			}
		},
		finishedBusiness() {
			this.done();
			console.log(this.elderdetails);

			// console.log(this.nameNow);
		}
	}
};
</script>
