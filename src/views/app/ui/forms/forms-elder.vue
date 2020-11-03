<template>
<div>
    <b-row>
        <b-colxx xxs="12">
            <piaf-breadcrumb :heading="$t('menu.form-wizard')" />
            <div class="separator mb-5"></div>
        </b-colxx>
    </b-row>
    <b-row>
        <b-colxx xxs="12" class="mb-5">
            <basic></basic>
        </b-colxx>
    </b-row>
</div>
</template>

<script>
import Basic from "../../../../containers/forms-elder/newelder";

export default {
    components: {
        basic: Basic,
    }
};
</script>
