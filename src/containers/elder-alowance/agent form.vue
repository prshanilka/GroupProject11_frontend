<template>
<b-row>
    <b-colxx xxs="12">
        <div class="text-center">
            <h1>Agent detail Form</h1>
        </div>
        <b-card class="mb-4 text-center" v-show="!submit_ag">
            <h2 class="mb-2">You SuccecFully Added The Agent</h2>
            <p>Agent is registerd Now</p>
        </b-card>
        <b-card class="mb-4" v-show="submit_ag">
            <b-form @submit.prevent="onValitadeFormSubmit" class="av-tooltip tooltip-label-right">
                <b-form-group label="Agent Name">
                    <b-form-input type="text" v-model="$v.agent.name.$model" :state="!$v.agent.name.$error" />
                    <b-form-invalid-feedback v-if="!$v.agent.name.required">Please enter your Agent name</b-form-invalid-feedback>
                    <b-form-invalid-feedback v-else-if="!$v.agent.name.minLength || !$v.agent.name.maxLength">Your name must be between 3 and 16 characters</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group label="Agent NIC No">
                    <b-form-input type="text" v-model="$v.agent.nic.$model" :state="!$v.agent.nic.$error" />
                    <b-form-invalid-feedback v-if="!$v.agent.nic.required">Please enter your Agent Nic no</b-form-invalid-feedback>
                    <b-form-invalid-feedback v-else-if="!$v.agent.nic.minLength || !$v.agent.nic.maxLength">Your Agent Nic must be only 10 characters</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group label="Agent Addres" class="error-l-100">
                    <b-form-textarea type="text" v-model="$v.agent.address.$model" :state="!$v.agent.address.$error" />
                    <b-form-invalid-feedback v-if="!$v.agent.address.required">Please enter your Agent address</b-form-invalid-feedback>
                    <b-form-invalid-feedback v-else-if="!$v.agent.address.minLength || !$v.agent.address.maxLength">Your Agent Address must be between 6 and 256 characters</b-form-invalid-feedback>
                </b-form-group>

                <b-form-group label="Agent Phone No">
                    <b-form-input type="text" v-model="$v.agent.phone.$model" :state="!$v.agent.phone.$error" />
                    <b-form-invalid-feedback v-if="!$v.agent.phone.required">Please enter a number</b-form-invalid-feedback>
                    <b-form-invalid-feedback v-else-if="!$v.agent.phone.minLength || !$v.agent.phone.maxLength">Your Agent Address must be only 10 numbers</b-form-invalid-feedback>
                </b-form-group>
                <b-form-group label="Agent Email" class="error-l-100">
                    <b-form-input type="text" v-model="$v.agent.email.$model" :state="!$v.agent.email.$error" />
                    <b-form-invalid-feedback v-if="!$v.agent.email.required">Please enter your email address</b-form-invalid-feedback>
                    <b-form-invalid-feedback v-else-if="!$v.agent.email.email">Please enter valid email address</b-form-invalid-feedback>
                </b-form-group>
                <b-form-group label="Relationship with Agent">
                    <b-form-input type="text" v-model="$v.agent.relationship_with_elder.$model" :state="!$v.agent.relationship_with_elder.$error" />
                    <b-form-invalid-feedback v-if="!$v.agent.relationship_with_elder.required">Please enter Relationship with Agent</b-form-invalid-feedback>
                    <!-- <b-form-invalid-feedback

v-else-if="!$v.agent.relationship_with_elder.minLength || !$v.agent.relationship_with_elder.maxLength"

>Your Agent Address must be only 10 numbers</b-form-invalid-feedback>-->
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
            agent: {
                name: "",
                nic: "",
                address: "",
                phone: "",
                email: "",
                relationship_with_elder: ""
            }
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
        agent: {
            name: {
                required,
                maxLength: maxLength(16),
                minLength: minLength(2)
            },
            nic: {
                required,
                maxLength: maxLength(10),
                minLength: minLength(10)
            },
            address: {
                required,
                minLength: minLength(6),
                maxLength: maxLength(256)
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
            relationship_with_elder: {
                required,
                minLength: minLength(3),
                maxLength: maxLength(16)
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
                this.submit_ag = !this.submit_ag;
                console.log(
                    JSON.stringify({
                        agent: this.agent
                    })
                );
            }
        }
    }
};
</script>
