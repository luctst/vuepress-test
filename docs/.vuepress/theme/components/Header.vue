<template>
    <header ref="header" class="container">
        <div>
            <img src="logo-moonshot@2x.png"/>
        </div>
        <nav>
            <button v-if="width <= 768" @click="showNavigation = !showNavigation">
                <img src="burger-menu@2x.png"/>
            </button>
            <div v-if="width <= 768 && showNavigation" class="container">
                <ul>
                    <li>Nos produits</li>
                    <li>Nos solutions</li>
                    <li>Qui sommes-nous ?</li>
                    <li>Contact</li>
                </ul>
            </div>
            <ul v-if="width > 768" class="nav-desktop">
                <li>Nos produits</li>
                <li>Nos solutions</li>
                <li>Qui sommes-nous ?</li>
                <li>Contact</li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    data () {
        return {
            width: window.innerWidth,
            showNavigation: false
        }
    },
    mounted() {
        if (this.width <= 768) {
            this.$refs.header.style = "background-color:#fff;"
        }
    }
}
</script>

<style lang="scss" scoped>
header {
    align-items: center;
    display: flex;
    height: 10vh;
    justify-content: space-between;
    position: fixed;
    margin: 0 auto;
    padding: 0 15px;
    width: inherit;

    div:first-child {
        img {
            width: 100%;
            height: auto;
            object-fit: contain;
        } 
    }

    nav {
        display: flex;
        justify-content: flex-end;

        button {
            background: transparent;
            border: none;
            width: 50%;
            padding: 0;

            &:hover {
                cursor: pointer;
            }

            img {
                width: 100%;
                height: auto;
                object-fit: contain;
            }
        }

        div {
            position: absolute;
            left: 0;
            top: 100%;

            ul {
                margin: 0;
                padding-left: 0;
                list-style-type: none;

                li {
                    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
                    padding: 14px 0;
                }
            }
        }

        .nav-desktop {
            align-items: center;
            display: flex;
            list-style-type: none;
            padding: 0;
            margin: 0;

            li {
                padding: 0 .5em;
            }

            li:last-child {
                border-radius: 100px;
                box-shadow: 0 4px 10px 0 rgba(40, 40, 40, 0.16);
                background-image: linear-gradient(to bottom, #1cd9ec, #09c0d3);
                color: #fff;
                padding: 6px 25px;
            }
        }
    }
}

@media screen and (max-width: 350px) {
    header {
        nav {
            button {
                width: 35%;
            }
        }
    }
}

@media screen and (max-width:400px) {
    header {
        div:first-child {
            width: 50%;
        }
    }
}

@media screen and (min-width: 400px) {
    header {

        div:first-child {
            width: 50%;
        }

        nav {
            button {
                width: 40%;
            }
        }
    }
}

@media screen and (min-width: 600px) {
    header {
        div:first-child {
            width: 40%;
        }
    }
}

@media screen and (min-width: 768px) {
    header {
        div:first-child {
            width: 25%;
        }

        ul {
            li {
                color: #fff;
            }
        }
    }
}

@media screen and (min-width:900px) {
    header {
        div:first-child {
            width: 30%;
        }
    }
}

@media screen and (min-width: 990px) {
    header {
        div:first-child {
            width: 20%;
        }
    }
}
</style>