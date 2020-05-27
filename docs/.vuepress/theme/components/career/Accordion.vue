<template>
    <section class="accordion container">
        <div class="accordion--content">
            <h2 v-if="mapDataToProps.accordionTitle">{{mapDataToProps.accordionTitle}}</h2>
            <div v-for="(item, index) in mapDataToProps.accordionItem" :key="index" @click="switchItem(index)" class="accordion--item">
                <h3>
                    <img src="page-1@2x.png" :style="accordionItemActive === index && 'transform:rotate(180deg);'"/>
                    {{item.title}}
                </h3>
                <div v-if="accordionItemActive === index">
                    <img :src="item.img"/>
                    <p>{{item.content}}</p>
                    <a>Voir les offres</a>
                </div>
            </div>
        </div>
        <div class="accordion--img--desktop" v-if="mapDataToProps.imgDesktop">
            <img :src="mapDataToProps.imgDesktop">
        </div>
    </section>
</template>

<script>
export default {
    props: {
        mapDataToProps: Object
    },
    data () {
        return {
            accordionItemActive: null
        }
    },
    methods: {
        switchItem (index) {
            if (this.accordionItemActive === index) this.accordionItemActive = null;
            else this.accordionItemActive = index;
        }
    }
}
</script>

<style lang="scss" scoped>
.accordion {
    &--content {
        height: max-content;

        h2 {
            color: #38393f;
            line-height: 1.25;
            margin: 0;
            text-align: center;
        }

        .accordion--item {
            border-bottom: 1px solid #e9ebf5;

            h3 {
                align-items: center;
                display: flex;
                color: #0e2244;
                font-weight: 500;
                padding-bottom: 3%;

                img {
                    height: auto;
                    object-fit: contain;
                    margin-right: 3%;
                }

                :hover {
                    cursor: pointer;
                }
            }

            div {
                img {
                    height: auto;
                    object-fit: contain;
                    width: 100%;
                }

                p {
                    color: #0e2244;
                    line-height: 1.25;
                }

                a {
                    color: #1717ff;
                    display: inline-block;
                }
            }
        }
    }

    &--img--desktop {
        display: flex;
        align-items: center;
    }
}

@media screen and (min-width: 300px) {
    .accordion {
        padding: 8% 15px;

        &--img--desktop {
            display: none;
        }

        &--content {
            h2 {
                font-size: 1.7em;
                margin-bottom: 12%;
            }

            .accordion--item {
                h3 {
                    font-size: 1.3em;

                    img {
                        width: 8%;
                    }
                }

                div {
                    p {
                        margin: 8% 0;
                    }

                    a {
                        margin-bottom: 5%;
                    }
                }
            }
        }
    }
}

@media screen and (min-width: 460px) {
    .accordion {
        &--content {
            h2 {
                font-size: 1.8em;
            }

            .accordion--item {
                div {
                    display: flex;
                    flex-direction: column;

                    img {
                        align-self: center;
                        width: 86%;
                    }

                    p,
                    a {
                        font-size: 1.1em;
                    }
                }
            }
        }
    }
}

@media screen and (min-width: 550px) {
    .accordion {
        &--content {
            h2 {
                font-size: 1.9em;
            }

            .accordion--item {
                h3 {
                    font-size: 1.5em;

                    img {
                        width: 5%;
                    }
                }

                div {
                    img {
                        width: 72%;
                    }

                    p,
                    a {
                        font-size: 1.3em;
                    }
                }
            }
        }
    }
}

@media screen and (min-width: 768px) {
    .accordion {
        display: flex;
        justify-content: space-between;
        padding: 6% 15px;

        &--img--desktop {
            flex: 0 0 50%;
            display: block;
            margin-right: 5%;

            img {
                width: 100%;
                height: auto;
                object-fit: contain;
            }
        }

        &--content {
            h2 {
                font-size: 1.5em;
                margin-bottom: 8%;
                text-align: left;
            }

            .accordion--item {
                h3 {
                    font-size: 1.4em;
                    margin-bottom: 1%;
                }

                div {

                    img {
                        display: none;
                    }

                    p {
                        margin: 3% 0;
                    }

                    p,
                    a {
                        font-size: 1em;
                    }
                }
            }
        }
    }
}

@media screen and (min-width: 1000px) {
    .accordion {
        padding: 8% 15px;

        &--content {
            h2 {
                font-size: 1.7em;
            }

            .accordion--item {
                h3 {
                    font-size: 1.5em;
                }
                
                div {
                    p {
                        margin: 6% 0;
                    }

                    p,
                    a {
                        font-size: 1.1em;
                    }
                }
            }
        }
    }
}

@media screen and (min-width: 1100px) {
    .accordion {
        padding: 6% 0;

        &--content {
            flex: 0 0 40%;

            &--item {
                img {
                    width: 50%;
                }
            }
        }

        &--img--desktop {
            margin-right: 0;
            margin-left: 8%;

            img {
                width: 80%;
            }
        }
    }
}
</style>