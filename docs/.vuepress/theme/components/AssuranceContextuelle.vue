<template>
    <section class="container">
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
    font-size: 32px;
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
            width: 20%;
            height: auto;
            object-fit: contain;
        }

        div {
            h3 {
                color: #38393f;
                font-size: 24px;
                font-weight: 500;
            }

            p {
                color: #38393f;
                line-height: 1.5;
            }
        }
    }
}

@media screen and (max-width:768px) {
    .assurance--list {
        .assurance--list--item {
            text-align: center;
        }
    }
}

@media screen and (min-width:800px) {
    .assurance--list {
        flex-direction: row;
        flex-wrap: wrap;
        margin-top: 7%;

        .assurance--list--item {
            align-items: center;
            display: flex;
            flex: 0 0 50%;
            margin-bottom: 7%;

            img {
                width: 50%;
            }

            div {
                margin-left: 3%;

                h3, 
                p {
                    text-align: left;
                }

                h3 {
                    margin: 0;
                }
            }
        }
    }
}
</style>