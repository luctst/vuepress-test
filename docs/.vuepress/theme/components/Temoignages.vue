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
    }
}
</style>