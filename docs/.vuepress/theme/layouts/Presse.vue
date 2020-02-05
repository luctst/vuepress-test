<template>
    <main class="container">
        <Bandeau />
        <KitMedia />
    </main>
</template>

<script>
import Bandeau from "../components/presse/Bandeau";
import KitMedia from "../components/presse/KitMedia";

export default {
    components: {
        Bandeau,
        KitMedia
    }
}
</script>