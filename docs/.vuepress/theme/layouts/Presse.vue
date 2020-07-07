<template>
    <main class="container">
        <section class="title">
            <h2>Informations médias</h2>
            <p>Pour toutes demandes de presse, de prise de paroles ou d’interviews, merci de contacter <span>press@moonshot-internet.com</span></p>
        </section>
        <section class="articles">
            <h2>Nos articles publiés dans la presse</h2>
            <div class="articles--category">
                <span>All</span>
                <span>Presses</span>
                <span>Blog</span>
            </div>
            <div class="content"></div>
        </section>
    </main>
</template>

<script>
export default {
    data () {
        return {
            articles: {
                presse: [],
                blog: []
            }
        }
    }
}
</script>

<style lang="scss" scoped>
main {
    .title {
        align-items: center;
        display: flex;
        flex-direction: column;
        
        h2,
        p {
            text-align: center;
        }

        h2 {
            color: #0e2244;
            font-family: "gotham-bold";
            margin: 0;
        }

        p {
            font-family: "gotham-rounded";
            margin: 0;
        }

        span {
            color: #1717ff;
            font-family: "gotham-bold";
        }
    }

    .articles {
        div {
            display: flex;

            span {
                border: 1px solid #c3cee2;
                border-radius: 20px;
                color: #c3cee2;
                font-family: "gotham-rounded";
                margin: 0;
                padding: 8px 22px;
                text-align: center;
            }
        }
    }
}

@media screen and (min-width: 300px) {
    main {
        .title {
            h2 {
                font-size: 1.5em;
                margin-bottom: 4%;
            }

            p {
                font-size: .9em;
            }
        }
    }
}

@media screen and (min-width: 460px) {
    main {
        .title {
            h2 {
                font-size: 1.8em;
            }
        }
    }
}

@media screen and (min-width: 550px) {
    main {
        .title {
            h2 {
                margin-bottom: 3%;
            }

            p {
                font-size: 1em;
            }
        }
    }
}

@media screen and (min-width: 768px) {
    main {
        .title {
            h2 {
                font-size: 2em;
                margin-bottom: 2%;
            }

            p {
                padding: 0 11%;
            }
        }
    }
}

@media screen and (min-width: 990px) {
    main {
        .title {
            p {
                padding: 0 16%;
            }
        }
    }
}
</style>