<template>
    <section class="floatline">
        <div class="container">
            <h1 v-html="title"></h1>
            <h2>{{description}}</h2>
            <button>En savoir plus</button>
        </div>
        <div class="floatline--img">
            <img :src="image" alt="icone"/>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        title: String,
        description: String,
        image: String
    }
}
</script>

<style lang="scss" scoped>
section {
    background-image: linear-gradient(to right, #000dff 0%, rgba(6, 15, 178, 0.99) 100%);
    height: 100vh;
    overflow: hidden;

    div:first-child {
        h1 {
            color: #fff;
            line-height: 1.5;
            margin: 0;
        }

        h2 {
            color: #fff;
            font-weight: normal;
            line-height: 1.5;
        }

        button {
            background-image: linear-gradient(to bottom, #1cd9ec, #09c0d3);
            border-radius: 100px;
            box-shadow: 0 4px 10px 0 rgba(40, 40, 40, 0.16);
            background-color: #d8d8d8;
            border: none;
            color: #fff;
            padding: 12px 24px;
        }
    }

    div {
        img {
            width: 100%;
            height: auto;
            object-fit: contain;
        }
    }
}

@media screen and (min-width: 300px) {
    section {
        padding-top: 7em;

        div:first-child {
            h1 {
                font-size: 1.9em;
            }

            h2 {
                font-size: 1.1em;
                margin: 8% 0;
            }
        }
    }
}

@media screen and (min-width: 400px) {
    section {
        .floatline--img {
            display: flex;
            justify-content: flex-end;

            img {
                width: 80%;
            }
        }
    }
}

@media screen and (min-width: 500px) {
    section {
        .floatline--img {
            img {
                width: 72%;
            }
        }
    }
}

@media screen and (min-width: 600px) {
    section {
        .floatline--img {
            img {
                width: 60%;
            }
        }
    }
}

@media screen and (min-width: 640px) {
    section {
        .floatline--img {
            img {
                width: 55%;
            }
        }
    }
}

@media screen and (min-width: 768px) {
    section {
        align-items: center;
        display: flex;
        padding-top: 0;

        .floatline--img {
            img {
                width: 100%;
            }
        }
    }
}

@media screen and (min-width: 1100px) {
    section {
        justify-content: center;

        .floatline--img {
            img {
                width: 75%;
            }
        }
    }
}
</style>