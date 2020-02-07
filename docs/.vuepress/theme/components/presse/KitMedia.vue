<template>
    <section class="kitmedia">
        <img src="presse/illustrationmedia@2x.png"/>
        <div class="kitmedia--content">
            <h3>Telecharger notre kit media</h3>
            <p>Voici les éléments dont vous pouvez vous servir. Si vous avez besoin de ressources complémentaires, n’hésitez pas à nous contacter !</p>
            <a href="">Telecharger</a>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.kitmedia {
    display: flex;

    img {
        height: auto;
        object-fit: contain;
        width: 100%;
    }

    &--content {
        h3 {
            color: #38393f;
            font-weight: 600;
            line-height: 1.25;
            margin: 0;
        }

        p {
            color: #38393f;
            font-weight: lighter;
        }

        a {
            background-image: linear-gradient(to bottom, #1cd9ec, #09c0d3);
            border-radius: 100px;
            box-shadow: 0 4px 10px 0 rgba(40, 40, 40, 0.16);
            color: #fff;
            display: inline-block;
            text-decoration: none;
            padding: 12px 24px;
        }
    }
}

@media screen and (min-width: 300px) {
    .kitmedia {
        flex-direction: column;
        margin: 16% 0;

        &--content {
            text-align: center;
            margin-top: 16%;

            h3 {
                font-size: 2em;
            }

            p {
                margin: 8% 0;
            }
        }
    }
}

@media screen and (min-width: 500px) {
    .kitmedia {
        margin: 10% 0;

        img {
            margin: 0 auto;
            width: 80%;
        }

        &--content {
            margin-top: 8%;

            h3 {
                font-size: 2.2em;
            }

            p {
                font-size: 1.1em;
                margin: 6% 0;
            }
        }
    }
}

@media screen and (min-width: 768px) {
    .kitmedia {
        align-items: center;
        flex-direction: row;
        margin: 8% 0;

        img {
            width: 100%;
        }

        &--content {
            text-align: left;
            margin-left: 6%;
        }
    }
}

@media screen and (min-width: 1100px) {
    .kitmedia {
        justify-content: space-between;

        img {
            width: 50%;
        }

        &--content {
            margin: 0 0 0 6%; 

            h3 {
                font-size: 2.8em;
            }

            p {
                font-size: 1.3em;
            }
        }
    }
}
</style>