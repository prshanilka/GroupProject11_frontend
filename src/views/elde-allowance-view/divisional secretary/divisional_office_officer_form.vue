<template>
<AppLayout>
    <Div_sec_off_officer />
</AppLayout>
</template>

<script>
import AppLayout from "../../../layouts/AppLayout";
import div_sec_off_officer from "../../../containers/elder-alowance/divisional_office_officer";

export default {
    name: "elform",
    components: {
        AppLayout: AppLayout,
        Div_sec_off_officer: div_sec_off_officer
    }
};
</script>

<style>
</style>
