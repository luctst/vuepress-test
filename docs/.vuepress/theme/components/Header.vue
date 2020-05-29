<template>
    <header ref="header" class="container">
        <div>
            <img src="logo-moonshot@2x.png" class="logo--sm"/>
            <!-- <img src="white@2x.png" class="logo--desktop"/> -->
        </div>
        <nav>
            <button @click="showNavigation = !showNavigation" class="btn--burger">
                <img src="burger-menu@2x.png"/>
            </button>
            <div v-if="showNavigation" class="container nav--sm">
                <ul>
                  <li>Nos solutions</li>
                  <li>Nos produits</li>
                  <li>Notre technologie</li>
                  <li>Qui sommes-nous ?</li>
                  <li>Contact</li>
                </ul>
            </div>
            <ul class="nav-desktop">
                <li>Nos solutions</li>
                <li @click="menuDropdown('produit')">
                    Nos produits
                    <div v-if="showDropdown" class="dropdown">
                        <ul>
                            <li v-for="(product, i) in productsGamme">{{product}}</li>
                        </ul>
                    </div>
                </li>
                <li>Notre technologie</li>
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
            showNavigation: false,
            showDropdown: false,
            productsGamme: [
                "Voyage", 
                "Paiement", 
                "Livraison",
                "Appareils électroniques",
                "Divertissement",
                "Mobilité"
            ],
        }
    },
    mounted() {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 0) {
                if (this.$refs.header.hasAttribute("style")) return false
                this.$refs.header.style = "background-color: #fff;box-shadow: rgba(0, 0, 0, 0.18) 0px 1px 2px !important;"
            } else {
                this.$refs.header.removeAttribute("style")
            }
        }.bind(this))
    },
    methods: {
        menuDropdown (e) {
            if (e === "produit") {
                if (!this.showDropdown) return this.showDropdown = true
                this.showDropdown = false;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
header {
    align-items: center;
    display: flex;
    height: 11vh;
    justify-content: space-between;
    position: fixed;
    margin: 0 auto;
    padding: 0 15px;
    transition: box-shadow 0.3s cubic-bezier(0.35, 0, 0.65, 1) 0s !important;
    transition: background-color 0.3s cubic-bezier(0.35, 0, 0.65, 1) 0s !important;
    width: inherit;
    z-index: 1;

    div:first-child {
        img {
            width: 100%;
            height: auto;
            object-fit: contain;
        } 
    }

    nav {
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
                font-weight: 500;
                padding: 0;
                position: relative;

                .dropdown {
                    background-color: #fff;
                    border-radius: 4px;
                    box-shadow: 0 2px 6px 0 rgba(192, 192, 192, 0.5);
                    margin-top: 8%;
                    padding: 12px 18px;
                    position: absolute;
                    width: max-content;

                    ul {
                        li {
                            :hover {
                                color: #1717ff;
                            }
                        }
                    }
                }
            }

            li:last-child {
                border-radius: 100px;
                box-shadow: 0 4px 10px 0 rgba(40, 40, 40, 0.16);
                background-image: linear-gradient(to bottom, #4040ff, #1717ff);
                color: #fff;
                padding: 12px 45px;
            }
        }
    }
}

/**
* Media queries
*/
@media screen and (min-width: 300px) {
    header {
        div:first-child {
            width: 40%;
        }
        nav {
            button {
                width: 35%;
            }
        }
    }
}

@media screen and (min-width:400px) {
    header {
        div:first-child {
            width: 35%;
        }

        nav {
            button {
                width: 40%;
            }
        }
    }
}

@media screen and (min-width: 500px) {
    header {
        div:first-child {
            width: 25%;
        }
    }
}

@media screen and (min-width: 600px) {
    header {
        div:first-child {
            width: 30%;
        }
    }
}

@media screen and (max-width: 768px) {
    header {
        background-color: #fff;
        width: 100%;
        
        div:first-child {
            .logo--sm {
                display: block;
            }
        }

        nav {
            .btn--burger {
                display: block;
            }

            .nav-desktop {
                display: none;
            }
        }
    }
}

@media screen and (min-width: 768px) {
    header {
        width: -moz-available;

        div:first-child {
            width: 20%;

            .logo--sm {
                display: block;
            }
        }

        nav {
            .btn--burger {
                display: none;
            }
        }

        .nav-desktop {
            display: flex;
            width: 50vw;
            justify-content: flex-end;

            li {
                color: #0e2244;
                padding: 0 8%;
            }
        }
    }
}

@media screen and (min-width:900px) {
    header {
        div:first-child {
            width: 19%;
        }

        nav {
            .nav-desktop {
                li {
                    font-size: 1.1em;
                }
            }
        }
    }
}

@media screen and (min-width: 990px) {
    header {
        div:first-child {
            width: 15%;
        }
    }
}

@media screen and (min-width: 1200px) {
    header {
        div:first-child {
            width: 12%;
        }

        nav {
            .nav-desktop {
                li {
                    font-size: 16px;
                    margin-right: 3.5%;
                }

                li:last-child {
                    margin-right: 0;
                }
            }
        }
    }
}
</style>