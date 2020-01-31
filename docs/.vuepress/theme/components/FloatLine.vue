<template>
    <section class="floatline" ref="fl">
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
    },
    methods: {
        changeHeader () {
            if (window.scrollY > this.$refs.fl.clientHeight) {
                document.querySelectorAll(".nav-desktop > li").forEach(item => item.style = "color: #333;");
            } else {
                document.querySelectorAll(".nav-desktop > li").forEach(item => item.style = "color: #fff;");
            }
        }
    },
    created () {
        window.addEventListener("scroll", this.changeHeader);
    },
    destroyed () {
        window.removeEventListener("scroll", this.changeHeader);
    }
}
</script>

<style lang="scss" scoped>
section {
    background-image: linear-gradient(to right, #000dff 0%, rgba(6, 15, 178, 0.99) 100%);
    display: flex;
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

    .floatline--img {
        img {
            height: auto;
            object-fit: contain;
        }
    }
}

@media screen and (min-width: 300px) {
    section {
        justify-content: space-between;
        flex-direction: column;
        padding-top: 8em;

        div:first-child {
            h1 {
                font-size: 2em;
            }

            h2 {
                font-size: 1.1em;
                margin: 2% 0 10% 0;
            }
        }

        .floatline--img {
            display: flex;
            justify-content: flex-end;

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
            width: 75%;
        }
    }
}
</style>