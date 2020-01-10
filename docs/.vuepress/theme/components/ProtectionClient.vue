<template>
    <section class="container">
        <h2>Nous vous protégeons vous et vos clients</h2>
        <p>…avec une gamme complète de produits d’assurance transparents, personnalisés et contextualisés.</p>
        <div v-for="(item, index) in accordion" :key="index">
            <h3 @click="activeAccordionItem(index)">
                <img src="page-1@2x.png" alt="" :style="accordionItemActive === index && 'transform:rotate(180deg);'"> {{item.title}}
            </h3>
            <div class="accordion--item" v-if="accordionItemActive === index">
                <img :src="item.image" alt="">
                <p>{{item.content}}</p>
                <p><a>En savoir plus -></a></p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data () {
        return {
            accordionItemActive: null,
            accordion: [
                {
                    title: "Voyage",
                    image: require("../../public/group-3065@2x.png"),
                    content: "Retard de livraison de colis Livraison non conforme ou défectueuse Retour de produits",
                },
                {
                    title: "E-commerce",
                    image: require("../../public/group-3065@2x.png"),
                    content: "Retard de livraison de colis Livraison non conforme ou défectueuse Retour de produits",
                },
                {
                    title: "Paiement",
                    image: require("../../public/group-3065@2x.png"),
                    content: "Retard de livraison de colis Livraison non conforme ou défectueuse Retour de produits",
                },
                {
                    title: "Mobile",
                    image: require("../../public/group-3065@2x.png"),
                    content: "Retard de livraison de colis Livraison non conforme ou défectueuse Retour de produits",
                },
                {
                    title: "Entertainment",
                    image: require("../../public/group-3065@2x.png"),
                    content: "Retard de livraison de colis Livraison non conforme ou défectueuse Retour de produits",
                }
            ]
        };
    },
    methods: {
        activeAccordionItem (index) {
            if (this.accordionItemActive === index) this.accordionItemActive = null;
            else this.accordionItemActive = index;
        }
    }
}
</script>

<style lang="scss" scoped>
section {

    h2 {
        color: #38393f;
        font-size: 32px;
        line-height: 1.25;
        text-align: center;
        margin-top: 0;
    }

    p {
        text-align: center;
    }

    div {
        border-bottom: 1px solid #e9ebf5;

        h3 {
            font-size: 24px;
            font-weight: 500;

            img {
                height: auto;
                object-fit: contain;
                width: 6%;
            }
        }

        .accordion--item {
            border: none;

            img {
                width: 100%;
                height: auto;
                object-fit: contain;
            }

            p {
                color: #38393f;
                line-height: 1.5;
                text-align: left;
            }

            p {
                margin-top: 0;
                text-align: left;

                a {
                    color: #33c6da;

                    &:hover {
                        cursor: pointer;
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 768px) {
    section {
        div {
            .accordion--item {
                width: 80%;
                margin: 10% auto 0 auto;

                p {
                    margin-top: 10%;
                }
            }
        }
    }
}

@media screen and (min-width: 768px) {
    section {
        div {
            display: flex;
        }
    }
}
</style>