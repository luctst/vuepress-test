<template>
    <section class="floatline" style="background-image:url('bck_header.svg')">
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
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    height: 100vh;
    overflow: hidden;

    div:first-child {
        h1 {
            color: #0e2244;
            line-height: 1.5;
            margin: 0;
        }

        h2 {
            color: #0e2244;
            font-weight: normal;
            line-height: 1.5;
        }

        button {
            background-image: linear-gradient(to bottom, #4040ff, #1717ff);
            border-radius: 100px;
            box-shadow: 0 4px 10px 0 rgba(40, 40, 40, 0.16);
            background-color: #d8d8d8;
            border: none;
            color: #fff;
            padding: 12px 24px;
        }
    }

    .floatline--img {
        img {
            height: auto;
            object-fit: contain;
        }
    }
}

@media screen and (min-width: 300px) {
    section {
        flex-direction: column;
        padding-top: 8em;

        div:first-child {
            h1 {
                font-size: 2em;
            }

            h2 {
                font-size: 1.1em;
                margin: 2% 0 8% 0;
            }
        }

        .floatline--img {
            display: flex;
            justify-content: flex-end;
            margin-top: 8%;

            img {
                width: 100%;
            }
        }
    }
}

@media screen and (min-width: 500px) {
    section {
        div:first-child {
            h1 {
                font-size: 2.1em;
            }
            
            h2 {
                font-size: 1em;
            }
        }
    }
}

@media screen and (min-width: 600px) {
    section {
        .floatline--img {
            img {
                width: 80%;
            }
        }
    }
}

@media screen and (min-width: 640px) {
    section {
        div:first-child {
            h1 {
                font-size: 2.3em;
            }
        }
    }
}

@media screen and (min-width: 768px) {
    section {
        align-items: center;
        flex-direction: row;
        padding-top: 0;

        div:first-child {
            h1 {
                font-size: 2.1em;
            }

            h2 {
                font-size: 1em;
            }
        }

        .floatline--img {
            width: 75%;
        }
    }
}

@media screen and (min-width: 900px) {
    section {
        div:first-child {
            margin-left: 6%;

            h1 {
                font-size: 2.3em;
            }

            h2 {
                font-size: 1em;
            }
        }

        .floatline--img {
            width: 80%;
        }
    }
}

@media screen and (min-width: 1100px) {
    section {
        justify-content: center;
        
        div:first-child {
            margin-left: 12%;

            h1 {
                font-size: 2.7em;
            }
        }

        .floatline--img {
            img {
                width: 100%;
            }
        }
    }
}
</style>