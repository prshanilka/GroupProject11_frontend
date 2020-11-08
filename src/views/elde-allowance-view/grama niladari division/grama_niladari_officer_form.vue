<template>
<AppLayout>
    <Grmaniladari_officers />
</AppLayout>
</template>

<script>
import AppLayout from "../../../layouts/AppLayout";
import grmaniladari_officers from "../../../containers/elder-alowance/grama_niladari_officer";

export default {
    name: "elform",
    components: {
        AppLayout: AppLayout,
        Grmaniladari_officers: grmaniladari_officers
    }
};
</script>

<style>
</style>
