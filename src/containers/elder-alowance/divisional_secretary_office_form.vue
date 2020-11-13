<template>
<b-row>
    <b-colxx xxs="12">
        <div class="text-center">
            <h1>{{$t('office.d-form')}}</h1>
        </div>
        <b-card class="mb-4 text-center" v-show="!submit_div">
            <h2 class="mb-2">{{$t('office.d-succsess')}}</h2>
            <p>{{$t('office.d-register')}}</p>
        </b-card>
        <b-card class="mb-4" v-show="submit_div">
            <b-form @submit.prevent="onValitadeFormSubmit" class="av-tooltip tooltip-label-right">
                <b-form-group :label="$t('form.district')">
                    <b-form-select v-model="$v.div_sec_off.district_id.$model" :options="district_option" :state="!$v.div_sec_off.district_id.$error"></b-form-select>
                    <b-form-invalid-feedback v-if="!$v.div_sec_off.district_id.required">{{$t('form.e-district')}}</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group :label="$t('form.divisional')">
                    <b-form-input type="text" v-model="$v.div_sec_off.divisional_id.$model" :state="!$v.div_sec_off.divisional_id.$error" />
                    <b-form-invalid-feedback v-if="!$v.div_sec_off.divisional_id.required">{{$t('form.e-divisional')}}</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group :label="$t('office.d-name')" class="error-l-100">
                    <b-form-input type="text" v-model="$v.div_sec_off.divisional_name.$model" :state="!$v.div_sec_off.divisional_name.$error" />
                    <b-form-invalid-feedback v-if="!$v.div_sec_off.divisional_name.required">{{$t('office.d-e-name')}}</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group :label="$t('office.address')">
                    <b-form-textarea type="text" v-model="$v.div_sec_off.office_address.$model" :state="!$v.div_sec_off.office_address.$error" />
                    <b-form-invalid-feedback v-if="!$v.div_sec_off.office_address.required">{{$t('office.e-address')}}</b-form-invalid-feedback>
                    <b-form-invalid-feedback v-else-if="!$v.div_sec_off.office_address.minLength || !$v.div_sec_off.office_address.maxLength">{{$t('office.v-address')}}</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group :label="$t('office.number')">
                    <b-form-input type="text" v-model="$v.div_sec_off.phone_no.$model" :state="!$v.div_sec_off.phone_no.$error" />
                    <b-form-invalid-feedback v-if="!$v.div_sec_off.phone_no.required">{{$t('office.e-number')}}</b-form-invalid-feedback>
                    <b-form-invalid-feedback v-else-if="!$v.div_sec_off.phone_no.minLength || !$v.div_sec_off.phone_no.maxLength">{{$t('office.v-number')}}</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group :label="$t('office.email')" class="error-l-100">
                    <b-form-input type="text" v-model="$v.div_sec_off.email.$model" :state="!$v.div_sec_off.email.$error" />
                    <b-form-invalid-feedback v-if="!$v.div_sec_off.email.required">{{$t('office.e-mail')}}</b-form-invalid-feedback>
                    <b-form-invalid-feedback v-else-if="!$v.div_sec_off.email.email">{{$t('office.v-mail')}}</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group :label="$t('office.bank')">
                    <b-form-input type="text" v-model="$v.div_sec_off.bank_account.$model" :state="!$v.div_sec_off.bank_account.$error" />
                    <b-form-invalid-feedback v-if="!$v.div_sec_off.bank_account.required">Please enter a Divisional Office BAnk Account No</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group :label="$t('office.officers')">
                    <b-form-input type="text" v-model="$v.div_sec_off.no_of_officers.$model" :state="!$v.div_sec_off.no_of_officers.$error" />
                    <b-form-invalid-feedback v-if="!$v.div_sec_off.no_of_officers.required">Please enter No Of Officers Assigned To Elders Allowance Servicet</b-form-invalid-feedback>
                    <b-form-invalid-feedback v-else-if="!$v.div_sec_off.no_of_officers.numeric">Please enter Numeric Value</b-form-invalid-feedback>
                </b-form-group>
                <b-form-group :label="$t('office.elders')">
                    <b-form-input type="text" v-model="$v.div_sec_off.count_of_priority_listed_elders.$model" :state="!$v.div_sec_off.count_of_priority_listed_elders.$error" />
                    <b-form-invalid-feedback v-if="!$v.div_sec_off.count_of_priority_listed_elders.required">Please enterNo of priority listed elders from Division</b-form-invalid-feedback>
                    <b-form-invalid-feedback v-else-if="!$v.div_sec_off.count_of_priority_listed_elders.numeric">Please enter Numeric Value</b-form-invalid-feedback>
                </b-form-group>
                <b-form-group :label="$t('office.benifishers')">
                    <b-form-input type="text" v-model="$v.div_sec_off.count_of_benifishers_elders.$model" :state="!$v.div_sec_off.count_of_benifishers_elders.$error" />
                    <b-form-invalid-feedback v-if="!$v.div_sec_off.count_of_benifishers_elders.required">Please enter NoNo Of Benifishers elders From Division</b-form-invalid-feedback>
                    <b-form-invalid-feedback v-else-if="!$v.div_sec_off.count_of_benifishers_elders.numeric">Please enter Numeric Value</b-form-invalid-feedback>
                </b-form-group>
                <b-button type="submit" variant="primary" class="mt-4">{{ $t('form.submit') }}</b-button>
            </b-form>
        </b-card>
    </b-colxx>
</b-row>
</template>

<script>
import {
    validationMixin
} from "vuelidate";
const {
    required,
    maxLength,
    minLength,
    alpha,
    email,
    sameAs,
    numeric,
    maxValue,
    minValue,
    helpers
} = require("vuelidate/lib/validators");

const upperCase = helpers.regex("upperCase", /^[A-Z]*$/);

export default {
    data() {
        return {
            submit_div: true,
            div_sec_off: {
                divisional_id: "",
                district_id: "",
                divisional_name: "",
                office_address: "",
                phone_no: "",
                email: "",
                bank_account: "",
                no_of_officers: "",
                count_of_priority_listed_elders: "",
                count_of_benifishers_elders: ""
            },
            district_option: [{
                    value: null,
                    text: "Please select an District",
                    disabled: true
                },
                {
                    value: "0",
                    text: "Colombo"
                },
                {
                    value: "1",
                    text: "Gampaha"
                },
                {
                    value: "2",
                    text: "Kaluthara"
                },
                {
                    value: "3",
                    text: "Rathnapura",
                    disabled: true
                }
            ]
            // name: "",
            // email: "",
            // emailAgain: "",
            // number: "",
            // max: "",
            // min: "",
            // withRegex: ""
        };
    },
    mixins: [validationMixin],
    validations: {
        div_sec_off: {
            divisional_id: {
                required
            },
            district_id: {
                required
            },
            divisional_name: {
                required
            },
            office_address: {
                required,
                minLength: minLength(6),
                maxLength: maxLength(256)
            },
            phone_no: {
                required,
                minLength: minLength(10),
                maxLength: maxLength(10)
            },
            email: {
                required,
                email
            },
            bank_account: {
                required
            },
            no_of_officers: {
                required,
                numeric
            },
            count_of_priority_listed_elders: {
                required,
                numeric
            },
            count_of_benifishers_elders: {
                required
            }
        }

        // name: {
        // 	required,
        // 	maxLength: maxLength(16),
        // 	minLength: minLength(2),
        // 	alpha
        // },
        // email: {
        // 	required,
        // 	email
        // },
        // emailAgain: {
        // 	required,
        // 	email,
        // 	sameAsEmail: sameAs("email")
        // },
        // number: {
        // 	required,
        // 	numeric
        // },
        // max: {
        // 	required,
        // 	numeric,
        // 	maxValue: maxValue(5)
        // },
        // min: {
        // 	required,
        // 	numeric,
        // 	minValue: minValue(5)
        // },
        // withRegex: {
        // 	required,
        // 	upperCase
        // }
    },
    methods: {
        onValitadeFormSubmit() {
            this.$v.$touch();
            console.log(this.$v.$invalid + " Checking ");
            if (!this.$v.$invalid) {
                this.submit_div = !this.submit_div;
                console.log(
                    JSON.stringify({
                        "div-office": this.div_sec_off
                    })
                );
            }
        }
    }
};
</script>
