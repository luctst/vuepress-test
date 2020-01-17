<template>
    <footer class="container">
        <div class="footer--logo">
            <img src="logo-moonshot-footer@2x.png" alt="">
        </div>
        <section class="footer--content">
            <div>
                <h4>Tour montparnasse</h4>
                <p>Mornin coworking</p>
                <p>33 avenue du Maine</p>
                <p>75010 Paris</p>
                <span>+33 1 86 91 96 62 </span>
            </div>
            <div>
                <h4>Produits</h4>
                <p>Voyage</p>
                <p>E-commerce</p>
                <p>Paiement</p>
                <p>Mobile</p>
                <p>Entertainment</p>
            </div>
            <div>
                <h4>Solutions</h4>
                <p>API documentation</p>
                <p>White label</p>
            </div>
            <div>
                <h4>Moonshot-Internet</h4>
                <p>Qui sommes-nous ?</p>
                <p>Espace média</p>
                <p>Recrutement</p>
                <p>Blog Moonshot</p>
                <p>Contact</p>
            </div>
        </section>
        <section class="footer--legales">
            <select>
                <option v-for="langue in languages">{{langue}}</option>
            </select>
            <p>Conditions Generales</p>
            <p>Politiques de confidentialité</p>
            <p>Mentions légales</p>
            <div class="footer--legales--social-media">
                <img src="youtube@2x.png" alt="">
                <img src="twitter@2x.png" alt="">
                <img src="linkedin@2x.png" alt="">
            </div>
        </section>
    </footer>
</template>

<script>
export default {
    data () {
        return {
            languages: [
                "Français"
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
footer {
    .footer--logo {
        width: 60%;

        img {
            width: 100%;
            height: auto;
            object-fit: contain;
        }
    }

    .footer--content {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        div {
            flex: auto;

            h4,
            p {
                margin: 0;
                line-height: 1.5;
            }

            h4 {

            }
            
            p {
                color: #38393f;
                font-weight: 500;
            }

            span {
                background-color: #1717ff;
                border-radius: 16px;
                color: #fff;
                display: block;
                margin-top: 5%;
                padding: 6px 15px;
                width: max-content;
            }
        }
    }

    .footer--legales {
        border-top: 1px solid #d3d5df;

        select {
            -webkit-appearance: none;
            border: none;
            border-radius: 8px;
            border: solid 1px #d3d5df;
            color: #38393f;
            font-size: .8em;
            font-weight: 500;
            padding: 10px 0px 10px 5px;
        }

        p {
            color: #38393f;
            line-height: 1.5;
            margin: 0;
        }

        div {
            display: flex;

            img {
                height: auto;
                object-fit: contain;
                padding-right: 16%;
                width: 100%;
            }
        }
    }
}

/**
* Media queries
*/
@media screen and (min-width: 300px) {
    footer {
        .footer--logo {
            margin-top: 10%;
        }

        .footer--content {
            div {
                margin: 8% 0;
            }
        }

        .footer--legales {
            select {
                margin: 4% 0;
                width: 100%;
            }
            
            div {
                margin-top: 5%; 
                width: 30%;
            }
        }
    }
}

@media screen and (min-width: 400px) {
    footer {
        .footer--logo {
            width: 50%;
        }
        
        .footer--content {
            div {
                margin: 6% 0;
            }
        }
    }
}

@media screen and (min-width: 500px) {
    footer {
        .footer--logo {
            width: 40%;
        }
    }
}

@media screen and (min-width: 540px) {
    footer {
        .footer--content {
            div {
                margin: 8% 0;
            }
        }
    }
}

@media screen and (min-width: 600px) {
    footer {
        .footer--logo {
            width: 35%;
        }
    }
}

@media screen and (min-width: 700px) {
    footer {
        .footer--logo {
            margin-top: 8%;
            width: 25%;
        }

        .footer--legales {
            align-items: center;
            display: flex;
            height: 15vh;
            justify-content: space-between;

            select {
                margin: 0;
                width: 20%;
            }

            p {
                font-size: 12px;
            }

            div {
                margin: 0;
                width: 16%;
            }
        }
    }
}

@media screen and (min-width: 700px) {
    footer {
        .footer--legales {
            div {
                width: 13%;
            }
        }
    }
}

@media screen and (min-width: 900px) {
    footer {
        .footer--logo {
            margin-top: 4%;
            width: 15%;
        }

        .footer--content {
            div {
                margin: 4% 0;
            }
        }

        .footer--legales {
            p {
                font-size: 16px;
            }

            div {
                width: 10%;
            }
        }
    }
}
</style>