<template>
    <main>
        <FloatNav :navData="{items: [...productsGamme], itemActive: productSelect}"/>
        <Accordion :mapDataToProps="accordionData[productSelect]"/>
    </main>
</template>

<script>
import Accordion from "../components/career/Accordion";
import FloatNav from "../components/FloatNav";

export default {
    components: {
        Accordion,
        FloatNav
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
                    accordionItem: [
                        {
                            title: "Bagage (dommage/perte/vol)",
                            content: "Aliquam pulvinar mi neque, id condimentum ex viverra sed. Phasellus tempor lectus quam, quis blandit lorem",
                            img: "product/travel-illustration@2x.png"
                        },
                        {
                            title: "Annulation de vol",
                            content: "Aliquam pulvinar mi neque, id condimentum ex viverra sed. Phasellus tempor lectus quam, quis blandit lorem",
                            img: "product/illus-flight-cancel@2x.png"
                        },
                        {
                            title: "Retard de vol à l'arrivée",
                            content: "Aliquam pulvinar mi neque, id condimentum ex viverra sed. Phasellus tempor lectus quam, quis blandit lorem",
                            img: "product/retard-arrivee.png"
                        },
                        {
                            title: "Retard de vol au départ",
                            content: "Aliquam pulvinar mi neque, id condimentum ex viverra sed. Phasellus tempor lectus quam, quis blandit lorem",
                            img: "product/retard-depart.png"
                        },
                        {
                            title: "Correspondance manquée",
                            content: "Aliquam pulvinar mi neque, id condimentum ex viverra sed. Phasellus tempor lectus quam, quis blandit lorem",
                            img: ""
                        },
                        {
                            title: "Distributeur d'énergie",
                            content: "Aliquam pulvinar mi neque, id condimentum ex viverra sed. Phasellus tempor lectus quam, quis blandit lorem",
                            img: ""
                        },
                        {
                            title: "Mauvaise méteo",
                            content: "Aliquam pulvinar mi neque, id condimentum ex viverra sed. Phasellus tempor lectus quam, quis blandit lorem",
                            img: "product/bad-weather.png"
                        },
                        {
                            title: "Assistance",
                            content: "Aliquam pulvinar mi neque, id condimentum ex viverra sed. Phasellus tempor lectus quam, quis blandit lorem",
                            img: "product/assis.png"
                        }
                    ]
                },
                Paiement: {
                    accordionItem: [
                        {
                            title: "Moyens de paiement (perte/vol)",
                            content: "",
                            img: ""
                        },
                        {
                            title: "Garantie meilleur prix",
                            content: "Assurez à vos clients que vous offrez les meilleurs produits au meilleur prix.",
                            img: ""
                        },
                        {
                            title: "Assurance emprunteur",
                            content: "",
                            img: ""
                        },
                        {
                            title: "Protection des paiements en boucle fermée",
                            content: "",
                            img: ""
                        }
                    ]
                },
                Livraison: {
                    accordionItem: [
                        {
                            title: "Protection du colis (Dommage / perte / vol)",
                            content: "",
                            img: ""
                        },
                        {
                            title: "Retard de livraison",
                            content: "Faites bénéficier vos clients d'une compensation en cas de retard lors de la livraison du colis.",
                            img: ""
                        },
                        {
                            title: "Retour gratuit",
                            content: "",
                            img: ""
                        }
                    ]
                },
                "Appareils électroniques": {
                    accordionItem: [
                        {
                            title: "Mobile (Dommage / perte / vol)",
                            content: "",
                            img: ""
                        },
                        {
                            title: "Okazoo",
                            content: "Proposez des assurances conçues pour protéger les objets d'occasions vendus sur les plateformes de vente entre particuliers.",
                            img: ""
                        },
                        {
                            title: "Buyback",
                            content: "",
                            img: ""
                        },
                        {
                            title: "Extension de garantie",
                            content: "",
                            img: ""
                        }
                    ]
                },
                Divertissement: {
                    accordionItem: [
                        {
                            title: "Annulation billet d’évènements",
                            content: "",
                            img: ""
                        },
                        {
                            title: "Match ennuyeux",
                            content: "",
                            img: ""
                        },
                        {
                            title: "Festival pluvieux",
                            content: "",
                            img: ""
                        }
                    ]
                },
                Mobilité: {
                    accordionItem: [
                        {
                            title: "Pay-As-You-Drive",
                            content: "",
                            img: ""
                        },
                        {
                            title: "Co-voiturage",
                            content: "Offrez la tranquillité d'esprit à vos clients grâce à une assurance spécialement conçue pour le covoiturage.",
                            img: ""
                        },
                        {
                            title: "Auto-partage",
                            content: "",
                            img: ""
                        }
                    ]
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
@media screen and (min-width: 1200px) {
    main {
        margin-top: 6%;

        .accordion {
            padding-bottom: 0;
        }
    }

    .newsletter {
        margin-top: 0!important;
    }
}
</style>