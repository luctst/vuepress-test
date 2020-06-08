<template>
    <main>
        <section class="products--gamme container">
            <div v-for="(product, i) in productsGamme" :key="i" :style="productSelect === product ? 'background-color:#eefdff;border-color:#eefdff;' : ''" @click="changeProduct(product)">
                <p><a :style="productSelect === product ? 'color:#09c0d3;' : ''">{{product}}</a></p>
            </div>
        </section>
        <Accordion :mapDataToProps="accordionData[productSelect]"/>
    </main>
</template>

<script>
import Accordion from "../components/career/Accordion";

export default {
    components: {
        Accordion,
    },
    data() {
        return {
            productSelect: "Voyage",
            productsGamme: [
                "Voyage", 
                "Paiement", 
                "Livraison",
                "Appareils électroniques",
                "Divertissement",
                "Mobilité"
            ],
            accordionData: {
                Voyage: {
                    imgDesktop: "product/illus_Travel_AnnulVol.svg",
                    accordionItem: [
                        {
                            title: "Bagage (dommage/perte/vol)",
                            content: "Aliquam pulvinar mi neque, id condimentum ex viverra sed. Phasellus tempor lectus quam, quis blandit lorem",
                            img: "product/AnnulationVol.png"
                        },
                        {
                            title: "Annulation de vol",
                            content: "Aliquam pulvinar mi neque, id condimentum ex viverra sed. Phasellus tempor lectus quam, quis blandit lorem",
                            img: "product/AnnulationVol.png"
                        },
                        {
                            title: "Retard de vol à l'arrivée",
                            content: "Aliquam pulvinar mi neque, id condimentum ex viverra sed. Phasellus tempor lectus quam, quis blandit lorem",
                            img: "product/AnnulationVol.png"
                        },
                        {
                            title: "Retard de vol au départ",
                            content: "Aliquam pulvinar mi neque, id condimentum ex viverra sed. Phasellus tempor lectus quam, quis blandit lorem",
                            img: "product/AnnulationVol.png"
                        },
                        {
                            title: "Correspondance manquée",
                            content: "Aliquam pulvinar mi neque, id condimentum ex viverra sed. Phasellus tempor lectus quam, quis blandit lorem",
                            img: "product/AnnulationVol.png"
                        },
                        {
                            title: "Distributeur d'énergie",
                            content: "Aliquam pulvinar mi neque, id condimentum ex viverra sed. Phasellus tempor lectus quam, quis blandit lorem",
                            img: "product/AnnulationVol.png"
                        },
                        {
                            title: "Mauvaise méteo",
                            content: "Aliquam pulvinar mi neque, id condimentum ex viverra sed. Phasellus tempor lectus quam, quis blandit lorem",
                            img: "product/AnnulationVol.png"
                        },
                        {
                            title: "Assistance",
                            content: "Aliquam pulvinar mi neque, id condimentum ex viverra sed. Phasellus tempor lectus quam, quis blandit lorem",
                            img: "product/AnnulationVol.png"
                        }
                    ]
                },
                Paiement: {
                    item: []
                },
                Livraison: {
                    item: []
                },
                "Appareils électroniques": {
                    item: []
                },
                Divertissement: {
                    item: []
                },
                Mobilité: {
                    item: []
                }
            }
        }
    },
    methods: {
        changeProduct (product) {
            if (this.productSelect === product) return false;
            this.productSelect = product;
        }
    }
}
</script>

<style lang="scss" scoped>
main {
    .products--gamme {
        display: flex;

        div {
            border: 1px solid #c3cee2;
            border-radius: 20px;

            p {
                color: #c3cee2;
                font-family: "gotham-rounded";
                margin: 0;
                text-align: center;
            }

            :hover {
                cursor: pointer;
            }
        }
    }
}

@media screen and (min-width: 1200px) {
    main {
        margin-top: 6%;

        .products--gamme {
            div {
                padding: 8px 22px;
                margin-right: 2%;

                p {
                    a {
                        font-size: 14px;
                    }
                }
            }
        }

        .accordion {
            padding-bottom: 0;
        }
    }

    .newsletter {
        margin-top: 0!important;
    }
}
</style>