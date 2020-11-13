<template>
<b-row>
    <b-colxx xxs="12">
        <b-card>
            <div class="text-center">
                <h1>{{$t('elder.form')}}</h1>
            </div>
        </b-card>
        <b-card class="mb-4">
            <!-- //there was an emit click method ss -->

            <b-form class="av-tooltip tooltip-label-right">
                <b-form-group :label="$t('elder.name')">
                    <b-form-input type="text" v-model="$v.elder.name.$model" :state="!$v.elder.name.$error" />
                    <b-form-invalid-feedback v-if="!$v.elder.name.required">{{$t('form.e-name')}}</b-form-invalid-feedback>
                    <b-form-invalid-feedback v-else-if="!$v.elder.name.minLength || !$v.elder.maxLength">{{$t('form.v-name')}}</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group :label="$t('form.address')">
                    <b-form-textarea type="text" v-model="$v.elder.address.$model" :state="!$v.elder.address.$error" />
                    <b-form-invalid-feedback v-if="!$v.elder.address.required">{{$t('form.e-address')}}</b-form-invalid-feedback>
                    <b-form-invalid-feedback v-else-if="!$v.elder.address.minLength || !$v.elder.address.maxLength">{{$t('form.v-address')}}</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group :label="$t('form.nic')">
                    <b-form-input type="text" v-model="$v.elder.nic_no.$model" :state="!$v.elder.nic_no.$error" />
                    <b-form-invalid-feedback v-if="!$v.elder.nic_no.required">{{$t('form.e-nic')}}</b-form-invalid-feedback>
                    <b-form-invalid-feedback v-else-if="!$v.elder.nic_no.minLength || !$v.elder.nic_no.maxLength">{{$t('form.v-nic')}}</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group :label="$t('form.email')" class="error-l-100">
                    <b-form-input type="text" v-model="$v.elder.email.$model" :state="!$v.elder.email.$error" />
                    <b-form-invalid-feedback v-if="!$v.elder.email.required">{{$t('form.e-mail')}}</b-form-invalid-feedback>
                    <b-form-invalid-feedback v-else-if="!$v.elder.email.email">{{$t('form.v-mail')}}</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group :label="$t('form.sex')">
                    <b-form-radio v-model="$v.elder.sex.$model" :state="!$v.elder.sex.$error" value="male">{{$t('form.male')}}</b-form-radio>
                    <b-form-radio v-model="$v.elder.sex.$model" :state="!$v.elder.sex.$error" value="female">{{$t('form.female')}}</b-form-radio>
                </b-form-group>

                <b-form-group :label="$t('form.number')" class="error-l-100">
                    <b-form-input placeholder="033XXXXXXX" type="text" v-model="$v.elder.phone_no.$model" :state="!$v.elder.phone_no.$error" />
                    <b-form-invalid-feedback v-if="!$v.elder.phone_no.required">{{$t('form.e-number')}}</b-form-invalid-feedback>
                    <b-form-invalid-feedback v-else-if="!$v.elder.phone_no.numeric">{{$t('form.n-number')}}</b-form-invalid-feedback>
                    <b-form-invalid-feedback v-else-if="!$v.elder.phone_no.minLength || !$v.elder.phone_no.maxLength">{{$t('form.v-number')}}</b-form-invalid-feedback>

                </b-form-group>

                <b-form-group :label="$t('form.district')">
                    <b-form-select v-model="$v.elder.district.$model" :options="district_option" :state="!$v.elder.district.$error"></b-form-select>
                    <b-form-invalid-feedback v-if="!$v.elder.district.required">{{$t('form.e-district')}}</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group :label="$t('form.divisional')">
                    <b-form-select v-model="$v.elder.divisional_off.$model" :options="divisional_off_option" :state="!$v.elder.divisional_off.$error"></b-form-select>
                    <b-form-invalid-feedback v-if="!$v.elder.divisional_off.required">{{$t('form.e-divisional')}}</b-form-invalid-feedback>
                </b-form-group>
                <b-form-group :label="$t('form.gramaniladari-division')" class="error-l-125">
                    <b-form-select v-model="$v.elder.grama_niladari_div.$model" :options="grama_niladari_div_option" :state="!$v.elder.grama_niladari_div.$error"></b-form-select>
                    <b-form-invalid-feedback v-if="!$v.elder.grama_niladari_div.required">{{$t('form.e-grama')}}</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group :label="$t('form.birth')" class="error-l-125">
                    <b-colxx xxs="12" xl="4" class="mb-4">
                        <b-card>
                            <b-form>
                                <b-row class="mb-0">
                                    <b-colxx xxs="12">
                                        <b-form-group>
                                            <datepicker v-model="$v.elder.birth_day.$model" :state="!$v.elder.birth_day.$error" :inline="true" :bootstrap-styling="true" class="embeded"></datepicker>
                                            <b-form-invalid-feedback v-if="!$v.elder.birth_day.required">Please enter Date of Birth</b-form-invalid-feedback>
                                        </b-form-group>
                                    </b-colxx>
                                </b-row>
                            </b-form>
                        </b-card>
                    </b-colxx>
                </b-form-group>
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
import Datepicker from "vuejs-datepicker";
export default {
    components: {
        datepicker: Datepicker
    },
    data() {
        return {
            elder: {
                name: "",
                address: "",
                nic_no: "",
                email: "",
                sex: "male",
                phone_no: "",
                district: null,
                divisional_off: null,
                grama_niladari_div: null,
                birth_day: "1997-11-07T16:41:00.000Z"
            },
            district_option: [{
                    value: null,
                    text: "Please select an District/කරුණාකර දිස්ත්‍රික්කය ඇතුළත් කරන්න",
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
            grama_niladari_div_option: [{
                    value: null,
                    text: "Please select Grama Niladari",
                    disabled: true
                },
                {
                    value: "0",
                    text: "Gampaha South"
                },
                {
                    value: "1",
                    text: "Gampaha North"
                },
                {
                    value: "2",
                    text: "Gampaha west"
                },
                {
                    value: "3",
                    text: "gampaha East",
                    disabled: true
                }
            ]
        };
    },
    mixins: [validationMixin],
    validations: {
        elder: {
            name: {
                required,
                maxLength: maxLength(32),
                minLength: minLength(2)
            },
            address: {
                required,
                maxLength: maxLength(256),
                minLength: minLength(10)
            },
            nic_no: {
                required,
                maxLength: maxLength(10),
                minLength: minLength(10)
            },
            email: {
                required,
                email
            },
            sex: {
                required
            },
            phone_no: {
                required,
                numeric,
                maxLength: maxLength(10),
                minLength: minLength(10)
            },
            district: {
                required
            },
            divisional_off: {
                required
            },
            grama_niladari_div: {
                required
            },
            birth_day: {
                required
            }
        }
    },
    methods: {
        onValitadeFormSubmit() {
            this.$v.$touch();

            console.log(
                JSON.stringify({
                    elder: this.elder
                })
            );
            if (!this.$v.$invalid) {
                return {
                    valid: this.$v.$invalid,
                    elder: this.elder
                };
            } else {
                return {
                    valid: this.$v.$invalid
                };
            }
        },
        ss() {
            console.log("now");
            var el = {
                name: "ben"
            };
            this.$emit("changexx", el);
            console.log("end");
        }
    },
    watch: {
        name: function () {
            console.log("change");
        }
    }
};
</script>
