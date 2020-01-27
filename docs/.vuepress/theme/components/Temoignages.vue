<template>
    <section>
        <div class="moonshot--solution">
            <div class="moonshot--solution--title container">
                <h3>Moonshot a la solution</h3>
                <p>Une plateforme digitale qui propose des solutions d’assurance intégrées et centrées sur le client.</p>
            </div>
            <div class="moonshot--solution--content container">
                <img src="illustration@2x.png">
                <div>
                    <p>Implémentation <span>« Plug & Play »</span> avec la mise à disposition de nos APIs</p>
                    <p>Implémentation <span>« Plug & Play »</span> avec la mise à disposition de nos APIs</p>
                    <a>En savoir plus</a>
                </div>
            </div>
        </div>
        <div class="moonshot--temoignage">
            <img src="quote@2x.png">
            <blockquote class="container">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ante leo, feugiat sit amet tellus non, lobortis vulputate elit. Integer ac leo sed odio consectetur convallis. Fusce lorem justo, volutpat in suscipit maximus, fermentum vel est.</p>
                <footer>Martial Dumond <cite>Directeur Marketin, Rakuten</cite></footer>
            </blockquote>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    .moonshot--solution {
        background-image: url("../../public/group-7@2x.png");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        display: flex;
        height: fit-content;

        &--title {
            h3,
            p {
                color: #fff;
                text-align: center;
            }

            h3 {
                font-weight: bold;
                margin: 0;
            }

            p {
                font-weight: lighter;
                line-height: 1.5;
            }
        }

        &--content {
            display: flex;

            img {
                width: 100%;
                height: auto;
                object-fit: cover;
            }

            div {
                p,
                a {
                    font-weight: lighter;
                    color: #fff;
                }

                p {
                    line-height: 1.5;

                    span {
                        font-weight: bold;
                    }
                }

                a {
                    color: #33c6da;
                }
            }
        }
    }

    .moonshot--temoignage {
        align-items: center;
        background-color: #f7f8ff;
        display: flex;
        flex-direction: column;
        z-index: -1;
        
        img {
            height: auto;
            object-fit: cover;
        }

        blockquote {
            margin: 0;
            text-align: center;

            p {
                color: #38393f;
                line-height: 1.5;
            }

            footer {
                display: flex;
                flex-direction: column;
                color: #38393f;
                font-weight: bold;

                cite {
                    color: #09c0d3;
                    font-weight: normal;
                }
            }
        }
    }
}

@media screen and (min-width: 300px) {
    section {
        .moonshot--solution {
            flex-direction: column;
            padding: 35% 0;

            &--title {
                h3 {
                    font-size: 2.23em;
                }
            }

            &--content {
                flex-direction: column;

                img {
                    margin: 15% 0;
                }
            }
        }

        .moonshot--temoignage {
            padding: 15% 0;
            transform: translate(0, -15%);
            img {
                width: 25%;
            }

            blockquote {
                margin-top: 10%;
            }
        }
    }
}

@media screen and (min-width: 450px) {
    section {
        .moonshot--solution {
            padding: 18% 0;

            &--title {
                h3 {
                    font-size: 2.27em;
                }

                p {
                    font-size: 1.1em;
                }
            }

            &--content {
                img {
                    margin: 15% auto;
                    width: 80%;
                }

                div {
                    p,
                    a {
                        font-size: 1.1em;
                    }
                }
            }
        }
    }
}

@media screen and (min-width: 600px) {
    section {
        .moonshot--solution {
            padding: 16% 0;

            &--title {
                h3 {
                    font-size: 2.7em;
                }

                p {
                    font-size: 1.2em;
                }
            }

            &--content {
                div {
                    p,
                    a {
                        font-size: 1.2em;
                    }
                }
            }
        }

        .moonshot--temoignage {
            img {
                width: 15%;
            }

            blockquote {
                margin-top: 5%;
                font-size: 1.2em;
            }
        }
    }
}

@media screen and (min-width: 700px) {
    section {
        .moonshot--solution {
            &--title {
                h3 {
                    font-size: 2em;
                }

                p {
                    font-size: 1em;
                }
            }

            &--content {
                align-items: center;
                flex-direction: row;
                margin-top: 5%;
                justify-content: space-between;

                img {
                    margin: 0;
                    width: 100%;
                }

                div {
                    margin-left: 5%;

                    p,
                    a {
                        font-size: 1em;
                    }
                }
            }
        }
    }
}

@media screen and (min-width: 778px) {
    section {
        .moonshot--temoignage {
            padding: 10% 0;
            transform: translate(0, -23%);

            img {
                width: 10%;
            }

            blockquote {
                font-size: 1.1em;
            }
        }
    }
}

@media screen and (min-width: 800px) {
    section {
        .moonshot--solution {
            &--title {
                p {
                    font-size: 1.2em;
                }
            }

            &--content {
                img {
                    width: 55%;
                }

                div {
                    margin-left: 8%;

                    p,
                    a {
                        font-size: 1.1em;
                    }
                }
            }
        }
    }
}

@media screen and (min-width: 990px) {
    section {
        .moonshot--solution {
            &--content {
                img {
                    width: 100%;
                }
            }
        }
    }
}

@media screen and (min-width: 1200px) {
    section {
        .moonshot--solution {
            &--title {
                h3 {
                    font-size: 3em;
                }

                p {
                    font-size: 1.3em;
                }
            }

            &--content {
                img {
                    width: 50%;
                }

                div {
                    p,
                    a {
                        font-size: 1.3em;
                    }
                }
            }
        }
        .moonshot--temoignage {
            padding-top: 16%;
            transform: translate(0, -35%);

            img {
                width: 7%;
            }

            blockquote {
                font-size: 1.2em;
            }
        }
    }
}
</style>