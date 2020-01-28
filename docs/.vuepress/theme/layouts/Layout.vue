<template>
    <main>
        <AssuranceContextuelle/>
        <ProtectionClient />
        <Temoignages />
        <MshMedia />
    </main>
</template>

<script>
import AssuranceContextuelle from "../components/AssuranceContextuelle";
import ProtectionClient from "../components/ProtectionClient";
import Temoignages from "../components/Temoignages";
import MshMedia from "../components/MshMedia"

export default {
    components: {
        AssuranceContextuelle,
        ProtectionClient,
        Temoignages,
        MshMedia
    }
}
</script>