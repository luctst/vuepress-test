<template>
    <section class="moonshot--media container">
        <div class="moonshot--media--title">
            <h3>Moonshot-Internet est plein de défis passionnants.</h3>
            <p>Vous trouverez ici tout ce que vous devez savoir sur nos dernières annonces et notre présence dans la presse.</p>
        </div>
        <div class="moonshot--media--articles">
            <article v-for="(item, index) in articles" :key="index">
                <header>
                    <img src="" alt="">
                </header>
                <main>
                    <h1>{{item.title}}</h1>
                    <p>{{item.description}}</p>
                    <a :style="item.category === 'blog' ? 'color:#09c0d3;' : 'color:#bc27e0;'">En savoir plus</a>
                </main>
                <span :style="item.category === 'blog' ? 'background-color:#09c0d3;' : 'background-color:#bc27e0;'">{{item.category}}</span>
            </article>
        </div>
    </section>
</template>

<script>
export default {
    data () {
        return {
            articles: [
                {
                    category: "blog",
                    title: "Okazoo, l’occasion a maintenant son assurance",
                    description: "Acheter son téléphone d’occasion, c’est bon pour la planète et le portefeuille"
                },
                {
                    category: "blog",
                    title: "L’application Djoba Cash assure désormais les…",
                    description: "Paris, le 7 novembre 2019 : Djoba Cash, fintech qui sécurise les transferts …"
                },
                {
                    category: "presse",
                    title: "Les 20 Assurtech qui comptent en France…",
                    description: "Lorem ipsum dolor sit amet, consectetur eliasse dipiscing elit nec tortor …"
                },
                {
                    category: "presse",
                    title: "TOP 100 des assurtechs EMEA…",
                    description: "Lorem sit nunc orci nisl. Nulla sagittis isculis platea dictumst amet litora …"
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.moonshot--media {
    &--title {
        text-align: center;

        h3 {
            color: #38393f;
            font-family: "gotham-bold";
            line-height: 1.25;
            margin: 0;
        }

        p {
            color: #38393f;
            font-family: "gotham-rounded";
            line-height: 1.5;
            margin: 0;
        }
    }

    &--articles {
        display: flex;
        flex-wrap: wrap;

        article {
            border: solid 1px #f2f4f8;
            border-radius: 16px;
            box-shadow: 0 4px 8px -5px rgba(40, 40, 40, 0.16);
            position: relative;

            header {
                background-color: #f7f8ff;
                border-radius: 16px 16px 0 0;
                height: 24vh;
                opacity: 0.52;

                img {
                    width: 100%;
                    height: auto;
                    object-fit: cover;
                }
            }

            main {
                display: flex;
                flex-direction: column;
                height: 32vh;
                justify-content: space-between;
                padding: 0 16px;

                h1 {
                    color: #38393f;
                    font-weight: 600;
                    line-height: 1.5;
                    margin: 8% 0 0 0;
                }

                p {
                    color: #38393f;
                    margin: 0;
                }

                p,
                a {
                    line-height: 1.5;
                }

                a {
                    align-self: flex-end;
                    margin-bottom: 8%;
                }
            }

            span {
                background-color:#fff;
                border-radius: 0 55px 55px 0;
                box-shadow: 0 4px 10px 0 rgba(40, 40, 40, 0.16);
                color: #fff;
                padding: 5px 16px;
                position: absolute;
                top: 16%;
            }
        }
    }
}

@media screen and (min-width: 300px) {
    .moonshot--media {
        &--title {
            h3 {
                font-size: 2em;
            }

            p {
                margin: 5% 0;
            }
        }

        &--articles {
            article {
                margin-bottom: 8%;
            }
        }
    }
}

@media screen and (min-width: 500px) {
    .moonshot--media {
        &--articles {
            article {
                flex: 0 0 45%;
                margin-right: 4%;
            }
        }
    }
}

@media screen and (min-width: 900px) {
    .moonshot--media {
        &--articles {
            justify-content: center;

            article {
                flex: 0 0 25%;
                margin-right: 2%;
            }
        }
    }
}

@media screen and (min-width: 1100px) {
    .moonshot--media {
        margin-top: 6%;

        &--title {
            h3 {
                font-size: 2em;
            }

            p {
                font-size: 14px;
                margin: 1% 0 3% 0;
            }
        }

        &--articles {
            article {
                flex: 0 0 20%;
                margin: 0 2% 0 0;
            }
        }
    }
}
</style>