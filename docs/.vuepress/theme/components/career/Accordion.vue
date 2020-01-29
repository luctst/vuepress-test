<template>
    <section class="accordion container">
        <div class="accordion--img--desktop">
            <img :src="mapDataToProps.imgDesktop">
        </div>
        <div class="accordion--content">
            <h2>Une équipe de 45 experts du digital et de l’assurance.</h2>
            <div v-for="(item, index) in mapDataToProps.accordionItem" :key="index" @click="this.$emit("switchItem", index)" class="accordion--item">
                <h3>
                    <img src="page-1@2x.png" :style="mapDataToProps.accordionItemActive === index && 'transform:rotate(180deg);'"/>
                    {{item.title}}
                </h3>
                <div v-if="mapDataToProps.accordionItemActive === index">
                    <img :src="item.img"/>
                    <p>{{item.content}}</p>
                    <a>Voir les offres</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        mapDataToProps: Object
    }
}
</script>

<style lang="scss" scoped>
.accordion {
    &--content {
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
                font-weight: 500;

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
                    color: #38393f;
                    line-height: 1.25;
                }

                a {
                    color: #33c6da;
                    display: inline-block;
                }
            }
        }
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
                    img {
                        margin: 8% 0;
                    }

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
        align-items: center;
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
                margin-bottom: 9%;

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

        &--img--desktop {
            flex: 0 0 45%;
        }
    }
}
</style>