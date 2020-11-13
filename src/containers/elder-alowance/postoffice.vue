<template>
<b-row>
    <b-colxx xxs="12">
        <div class="text-center">
            <h1>{{$t('office.p-form')}}</h1>
        </div>
        <b-card class="mb-4 text-center" v-show="!submit_ag">
            <h2 class="mb-2">{{$t('office.p-succsess')}}</h2>
            <p>{{$t('office.p-register')}}</p>
        </b-card>
        <b-card class="mb-4" v-show="submit_ag">
            <b-form @submit.prevent="onValitadeFormSubmit" class="av-tooltip tooltip-label-right">
                <b-form-invalid-feedback v-if="!$v.postoffice.num_of_officers.required">Please enter number of Officers within numeric value</b-form-invalid-feedback>

                <b-form-group label="Postal Code">
                    <b-form-input type="text" v-model="$v.postoffice.post_office_id.$model" :state="!$v.postoffice.post_office_id.$error" />
                    <b-form-invalid-feedback v-if="!$v.postoffice.post_office_id.required">Please enter Postal Code</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group label="Post Office Name">
                    <b-form-input type="text" v-model="$v.postoffice.name.$model" :state="!$v.postoffice.name.$error" />
                    <b-form-invalid-feedback v-if="!$v.postoffice.name.required">Please enter Post Office Name</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group label="Address">
                    <b-form-textarea type="text" v-model="$v.postoffice.address.$model" :state="!$v.postoffice.address.$error" />
                    <b-form-invalid-feedback v-if="!$v.postoffice.address.required">Please enter your address</b-form-invalid-feedback>
                    <b-form-invalid-feedback v-else-if="!$v.postoffice.address.minLength || !$v.postoffice.address.maxLength">Your Address must be between 10 and 256 characters</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group label="Phone Number">
                    <b-form-input type="text" v-model="$v.postoffice.phone.$model" :state="!$v.postoffice.phone.$error" />
                    <b-form-invalid-feedback v-if="!$v.postoffice.phone.required">Please enter a number</b-form-invalid-feedback>
                    <b-form-invalid-feedback v-else-if="!$v.postoffice.phone.minLength || !$v.postoffice.phone.maxLength">Phone number must be only 10 numbers</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group label="Bank Account Number">
                    <b-form-input type="text" v-model="$v.postoffice.bank_account_no.$model" :state="!$v.postoffice.bank_account_no.$error" />
                    <b-form-invalid-feedback v-if="!$v.postoffice.bank_account_no.required">Please bank account number</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group label="E-mail " class="error-l-100">
                    <b-form-input type="text" v-model="$v.postoffice.email.$model" :state="!$v.postoffice.email.$error" />
                    <b-form-invalid-feedback v-if="!$v.postoffice.email.required">Please enter your email address</b-form-invalid-feedback>
                    <b-form-invalid-feedback v-else-if="!$v.postoffice.email.email">Please enter valid email address</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group label="Number of Officers">
                    <b-form-input type="text" v-model="$v.postoffice.num_of_officers.$model" :state="!$v.postoffice.num_of_officers.$error" />
                    <b-form-invalid-feedback v-if="!$v.postoffice.num_of_officers.required">Please enter number of Officers</b-form-invalid-feedback>
                    <b-form-invalid-feedback v-if="!$v.postoffice.num_of_officers.numeric">Please enter number of Officers should be numeric value</b-form-invalid-feedback>
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
            submit_ag: true,
            postoffice: {
                district: null,
                divisional_off: null,
                post_office_id: "",
                name: "",
                address: "",
                phone: "",
                bank_account_no: "",
                email: "",
                num_of_officers: ""
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
            ],
            divisional_off_option: [{
                    value: null,
                    text: "Please select an Division",
                    disabled: true
                },
                {
                    value: "0",
                    text: "Gampaha Town"
                },
                {
                    value: "1",
                    text: "Henagama"
                },
                {
                    value: "2",
                    text: "Kiridiwala"
                },
                {
                    value: "3",
                    text: "kadawatha",
                    disabled: true
                }
            ]
        };
    },
    mixins: [validationMixin],
    validations: {
        postoffice: {
            district: {
                required
            },
            divisional_off: {
                required
            },
            post_office_id: {
                required
            },
            name: {
                required
            },
            address: {
                required,
                maxLength: maxLength(256),
                minLength: minLength(10)
            },
            phone: {
                required,
                minLength: minLength(10),
                maxLength: maxLength(10)
            },
            bank_account_no: {
                required
            },
            email: {
                required,
                email
            },
            num_of_officers: {
                required,
                numeric
            }
        }
    },
    methods: {
        onValitadeFormSubmit() {
            this.$v.$touch();
            console.log(this.$v.$invalid + " Checking ");
            if (!this.$v.$invalid) {
                this.submit_ag = !this.submit_ag;
                console.log(
                    JSON.stringify({
                        postoffice: this.postoffice
                    })
                );
            }
        }
    }
};
</script>
