<template>
    <section class="kitmedia">
        <img src="presse/illustrationmedia@2x.png"/>
        <div class="kitmedia--content">
            <h3>Telecharger notre kit media</h3>
            <p>Voici les éléments dont vous pouvez vous servir. Si vous avez besoin de ressources complémentaires, n’hésitez pas à nous contacter !</p>
            <a href="">Telecharger</a>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.kitmedia {
    display: flex;

    img {
        height: auto;
        object-fit: contain;
        width: 100%;
    }

    &--content {
        h3 {
            font-weight: 600;
            color: #38393f;
            line-height: 1.25;
        }
    }
}

@media screen and (min-width: 300px) {
    .kitmedia {
        flex-direction: column;
    }
}
</style>