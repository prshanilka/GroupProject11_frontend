<template>
<b-row>
    <b-colxx xxs="12">
        <div class="text-center">
            <h1>Gramaniladari Officer Details Form</h1>
        </div>
        <b-card class="mb-4 text-center" v-show="!submit_ag">
            <h2 class="mb-2">You Succecfully Added The Officer</h2>
            <p>Officer is registerd Now</p>
        </b-card>
        <b-card class="mb-4" v-show="submit_ag">
            <b-form @submit.prevent="onValitadeFormSubmit" class="av-tooltip tooltip-label-right">

                <b-form-group label="Officer ID">
                    <b-form-input type="text" v-model="$v.gramaniladari_officer.officer_id.$model" :state="!$v.gramaniladari_officer.officer_id.$error" />
                    <b-form-invalid-feedback v-if="!$v.gramaniladari_officer.officer_id.required">Please Enter Officer ID</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group label="Name">
                    <b-form-input type="text" v-model="$v.gramaniladari_officer.name.$model" :state="!$v.gramaniladari_officer.name.$error" />
                    <b-form-invalid-feedback v-if="!$v.gramaniladari_officer.name.required">Please Enter Officer Name</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group label="NIC No">
                    <b-form-input type="text" v-model="$v.gramaniladari_officer.nic.$model" :state="!$v.gramaniladari_officer.nic.$error" />
                    <b-form-invalid-feedback v-if="!$v.gramaniladari_officer.nic.required">Please enter your Nic no</b-form-invalid-feedback>
                    <b-form-invalid-feedback v-else-if="!$v.gramaniladari_officer.nic.minLength || !$v.gramaniladari_officer.nic.maxLength">Your Nic must be only 10 characters</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group label="Phone Number">
                    <b-form-input type="text" v-model="$v.gramaniladari_officer.phone.$model" :state="!$v.gramaniladari_officer.phone.$error" />
                    <b-form-invalid-feedback v-if="!$v.gramaniladari_officer.phone.required">Please enter a number</b-form-invalid-feedback>
                    <b-form-invalid-feedback v-else-if="!$v.gramaniladari_officer.phone.minLength || !$v.gramaniladari_officer.phone.maxLength">Phone number must be only 10 numbers</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group label="E-mail " class="error-l-100">
                    <b-form-input type="text" v-model="$v.gramaniladari_officer.email.$model" :state="!$v.gramaniladari_officer.email.$error" />
                    <b-form-invalid-feedback v-if="!$v.gramaniladari_officer.email.required">Please enter officer email address</b-form-invalid-feedback>
                    <b-form-invalid-feedback v-else-if="!$v.gramaniladari_officer.email.email">Please enter valid email address</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group label="District">
                    <b-form-select v-model="$v.gramaniladari_officer.district_id.$model" :options="district_option" :state="!$v.gramaniladari_officer.district_id.$error"></b-form-select>
                    <b-form-invalid-feedback v-if="!$v.gramaniladari_officer.district_id.required">Please enter District</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group label="Divisional Secratary Office">
                    <b-form-select type="text" v-model="$v.gramaniladari_officer.divisional_id.$model" :options="divisional_off_option" :state="!$v.gramaniladari_officer.divisional_id.$error" />
                    <b-form-invalid-feedback v-if="!$v.gramaniladari_officer.divisional_id.required">Please enter Divisional Code</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group label="Gramaniladari Division">
                    <b-form-select type="text" v-model="$v.gramaniladari_officer.gramaniladari_division_id.$model" :options="gramaniladari_division_option" :state="!$v.gramaniladari_officer.gramaniladari_division_id.$error" />
                    <b-form-invalid-feedback v-if="!$v.gramaniladari_officer.gramaniladari_division_id.required">Please enter Divisional Code</b-form-invalid-feedback>
                </b-form-group>

                <b-button type="submit" variant="primary" class="mt-4">{{ $t('forms.submit') }}</b-button>
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
            gramaniladari_officer: {
                officer_id: "",
                name: "",
                nic: "",
                phone: "",
                email: "",
                district_id: null,
                divisional_id: null,
                gramaniladari_division_id: null
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
            ],
            gramaniladari_division_option: [{
                    value: null,
                    text: "Please select an Division",
                    disabled: true
                },
                {
                    value: "0",
                    text: "222B"
                },
                {
                    value: "1",
                    text: "127A"
                },
                {
                    value: "2",
                    text: "305B"
                },
                {
                    value: "3",
                    text: "856D",
                    disabled: true
                }
            ]
        };
    },
    mixins: [validationMixin],
    validations: {
        gramaniladari_officer: {
            officer_id: {
                required
            },
            name: {
                required
            },
            nic: {
                required,
                minLength: minLength(10),
                maxLength: maxLength(10)
            },
            phone: {
                required,
                minLength: minLength(10),
                maxLength: maxLength(10)
            },
            email: {
                required,
                email
            },
            district_id: {
                required
            },
            divisional_id: {
                required
            },
            gramaniladari_division_id: {
                required
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
                        gramaniladari_officer: this.gramaniladari_officer
                    })
                );
            }
        }
    }
};
</script>
