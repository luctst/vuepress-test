<template>
    <section class="container wrapper">
        <h2>Une assurance contextuelle hyperciblée</h2>
        <p>Convaincu que l’assurance doit être claire, apporter une valeur manifeste au client et s’intégrer facilement dans son quotidien, Moonshot-Internet propose une approche innovante en se concentrant sur l’expérience client et l’immédiateté.</p>
        <div class="assurance--list">
            <div class="assurance--list--item">
                <img src="distribution@2x.png" alt="">
                <div>
                    <h3>Design produits</h3>
                    <p>Assurance simple, transparente & à la carte Produits ultraspécialisés et formule “Tranquillité d’Esprit”</p>
                </div>
            </div>
            <div class="assurance--list--item">
                <img src="souscription@2x.png" alt="">
                <div>
                    <h3>Souscription</h3>
                    <p>Profil de risque personnalisé par IA Segmentation des données temps réel</p>
                </div>
            </div>
            <div class="assurance--list--item">
                <img src="other@2x.png" alt="">
                <div>
                    <h3>Distribution</h3>
                    <p>Assurance par API Achat intégré de produits d’assurance Solution B2B2C en marque blanche</p>
                </div>
            </div>
            <div class="assurance--list--item">
                <img src="gestion-sinistre@2x.png" alt="">
                <div>
                    <h3>Gestion des sinistres</h3>
                    <p>Indemnisation temps réel et automatique Reconnaissance d’images et de vidéos au service de l’analyse</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
h2 {
    color: #38393f;
    font-weight: bold;
    line-height: 1.25;
    text-align: center;
    margin-top: 0;
}

p {
    text-align: center;
    line-height: 1.5;
}

.assurance--list {
    display: flex;
    flex-direction: column;

    .assurance--list--item {
        img {
            height: auto;
            object-fit: contain;
        }

        div {
            h3 {
                color: #38393f;
                font-weight: 600;
            }

            p {
                color: #38393f;
                line-height: 1.5;
            }
        }
    }
}

@media screen and (min-width: 300px) {
    section {
        h2 {
            font-size: 2.1em;
        }

        p {
            font-size: 1.1em;
        }

        .assurance--list {
            .assurance--list--item {
                margin-top: 10%;
                text-align: center;

                img {
                    width: 30%;
                }

                div {
                    h3 {
                        font-size: 1.6em;
                    }
                }
            }
        }
    }
}

@media screen and (min-width: 470px) {
    section {
        .assurance--list {
            .assurance--list--item {
                img {
                    width: 25%;
                }

                div {
                    h3 {
                        font-size: 1.8em;
                    }
                }
            }
        }
    }
}

@media screen and (min-width:790px) {
    section {
        h2 {
            font-size: 2.3em;
        }
    }
}


@media screen and (min-width:800px) {
    section {
        .assurance--list {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-top: 7%;

            .assurance--list--item {
                align-items: center;
                display: flex;
                flex: 0 0 45%;
                margin-bottom: 7%;

                img {
                    margin-right: 4%;
                    width: 55%;
                }

                div {
                    h3, 
                    p {
                        text-align: left;
                    }

                    h3 {
                        font-size: 1.5em;
                        margin: 0;
                    }

                    p {
                        font-size: 1em;
                    }
                }
            }
        }
    }
}

@media screen and (min-width: 990px) {
    section {
        .assurance--list {
            .assurance--list--item {
                margin: 3% 0;

                img {
                    width: 50%;
                }

                div {
                    h3 {
                        font-size: 1.8em;
                    }
                }
            }
        }
    }
}

@media screen and (min-width: 1200px) {
    section {
        .assurance--list {
            .assurance--list--item {
                img {
                    width: 30%;
                }
            }
        }
    }
}
</style>