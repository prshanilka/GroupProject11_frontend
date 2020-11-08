<template>
<AppLayout>
    <Officers />
</AppLayout>
</template>

<script>
import AppLayout from "../../../layouts/AppLayout";
import officers from "../../../containers/elder-alowance/postoffice_officers";

export default {
    name: "elform",
    components: {
        AppLayout: AppLayout,
        Officers: officers
    }
};
</script>

<style>
</style>
