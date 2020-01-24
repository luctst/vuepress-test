<template>
    <main>
        <AssuranceContextuelle/>
        <ProtectionClient />
        <Temoignages />
    </main>
</template>

<script>
import AssuranceContextuelle from "../components/AssuranceContextuelle";
import ProtectionClient from "../components/ProtectionClient";
import Temoignages from "../components/Temoignages";

export default {
    components: {
        AssuranceContextuelle,
        ProtectionClient,
        Temoignages
    }
}
</script>