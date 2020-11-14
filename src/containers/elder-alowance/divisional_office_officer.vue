<template>
<b-row>
    <b-colxx xxs="12">
        <div class="text-center">
            <h1>{{$t('officer.d-form')}}</h1>
        </div>
        <b-card class="mb-4 text-center" v-show="!submit_ag">
            <h2 class="mb-2">{{$t('officer.form-success')}}</h2>
            <p>{{$t('officer.form-register')}}</p>
        </b-card>
        <b-card class="mb-4" v-show="submit_ag">
            <b-form @submit.prevent="onValitadeFormSubmit" class="av-tooltip tooltip-label-right">

                <b-form-group :label="$t('officer.id')">
                    <b-form-input type="text" v-model="$v.div_sec_off_officer.officer_id.$model" :state="!$v.div_sec_off_officer.officer_id.$error" />
                    <b-form-invalid-feedback v-if="!$v.div_sec_off_officer.officer_id.required">{{$t('officer.e-id')}}</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group :label="$t('officer.name')">
                    <b-form-input type="text" v-model="$v.div_sec_off_officer.name.$model" :state="!$v.div_sec_off_officer.name.$error" />
                    <b-form-invalid-feedback v-if="!$v.div_sec_off_officer.name.required">{{$t('form.e-name')}}</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group :label="$t('form.nic')">
                    <b-form-input type="text" v-model="$v.div_sec_off_officer.nic.$model" :state="!$v.div_sec_off_officer.nic.$error" />
                    <b-form-invalid-feedback v-if="!$v.div_sec_off_officer.nic.required">{{$t('form.e-nic')}}</b-form-invalid-feedback>
                    <b-form-invalid-feedback v-else-if="!$v.div_sec_off_officer.nic.minLength || !$v.div_sec_off_officer.nic.maxLength">{{$t('form.v-nic')}}</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group :label="$t('form.number')">
                    <b-form-input type="text" v-model="$v.div_sec_off_officer.phone.$model" :state="!$v.div_sec_off_officer.phone.$error" />
                    <b-form-invalid-feedback v-if="!$v.div_sec_off_officer.phone.required">{{$t('form.e-number')}}</b-form-invalid-feedback>
                    <b-form-invalid-feedback v-else-if="!$v.div_sec_off_officer.phone.minLength || !$v.div_sec_off_officer.phone.maxLength">{{$t('form.v-number')}}</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group :label="$t('form.email')" class="error-l-100">
                    <b-form-input type="text" v-model="$v.div_sec_off_officer.email.$model" :state="!$v.div_sec_off_officer.email.$error" />
                    <b-form-invalid-feedback v-if="!$v.div_sec_off_officer.email.required">{{$t('form.e-mail')}}</b-form-invalid-feedback>
                    <b-form-invalid-feedback v-else-if="!$v.div_sec_off_officer.email.email">{{$t('form.v-mail')}}</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group :label="$t('form.district')">
                    <b-form-select v-model="$v.div_sec_off_officer.district_id.$model" :options="district_option" :state="!$v.div_sec_off_officer.district_id.$error"></b-form-select>
                    <b-form-invalid-feedback v-if="!$v.div_sec_off_officer.district_id.required">{{$t('form.e-district')}}</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group :label="$t('form.divisional')">
                    <b-form-select type="text" v-model="$v.div_sec_off_officer.divisional_id.$model" :options="divisional_off_option" :state="!$v.div_sec_off_officer.divisional_id.$error" />
                    <b-form-invalid-feedback v-if="!$v.div_sec_off_officer.divisional_id.required">{{$t('form.e-divisional')}}</b-form-invalid-feedback>
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
            div_sec_off_officer: {
                officer_id: "",
                name: "",
                nic: "",
                phone: "",
                email: "",
                district_id: null,
                divisional_id: null
            },
            district_option: [{
                    value: null,
                    text: "Select an District/කරුණාකර දිස්ත්‍රික්කය තෝරන්න",
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
                    text: "Select an Division Secretary Office/කරුණාකර ප්‍රාදේශීය ලේකම් කාර්යාලය තෝරන්න",
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
        div_sec_off_officer: {
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
                        div_sec_off_officer: this.div_sec_off_officer
                    })
                );
            }
        }
    }
};
</script>
