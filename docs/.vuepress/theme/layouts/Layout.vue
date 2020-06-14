<template>
  <main>
    <section class="container trust">
      <h2>CES GRANDES ENTREPRISES NOUS FONT CONFIANCE</h2>
      <div class="trust--logo">
        <img src="/societegenerale@2x.png" alt="Logo societe generale" />
        <img src="/bitmap@2x.png" alt="logo Rakuten" />
        <img src="/tridea@2x.png" alt="logo tridea" />
        <img src="/fran-fianance@2x.png" alt="logo misterfly" />
        <img src="/leboncoin@2x.png" alt="logo leboncoin" />
        <img src="/mister-f-ly@2x.png" alt="logo finance" />
      </div>
    </section>
    <section class="container innovation">
      <h2>Des innovations fortes à chaque étapes de la chaine de valeur</h2>
      <section>
        <div>
          <img src="/couverture@2x.png" alt="Produit innovant" />
          <h3>Couverture produit innovante</h3>
          <ul>
            <li>Conditions simples et transparentes.</li>
            <li>Couverture innovante liée aux nouveaux usages.</li>
            <li>Règles de gestion personnalisables.</li>
          </ul>
        </div>
        <div>
          <img src="/souscription@2x.png" alt="souscription" />
          <h3>Souscription fluide et transparente</h3>
          <ul>
            <li>Souscription en 1 clic.</li>
            <li>Tarification dynamique selon profil.</li>
            <li>Capacité d’A/B testing.</li>
          </ul>
        </div>
      </section>
      <section>
        <div>
          <img src="/implementation@2x.png" alt="implementation" />
          <h3>Facilité d’implémentation</h3>
          <ul>
            <li>Intégration Plug&Play à chaque étape de la vie du contrat via une architecture APIrest.</li>
            <li>Time-to-market rapide grâce à nos parcours client en marque-blanches.</li>
          </ul>
        </div>
        <div>
          <img src="/gestioninnovante@2x.png" alt="gestion innovante" />
          <h3>Gestion innovantes des indemnisations</h3>
          <ul>
            <li>Indemnisation immédiate et sans justificatifs requis.</li>
            <li>Détection du sinistre automatisée, en temps réel.</li>
            <li>Détection du sinistre via computer vision, en temps réel.</li>
          </ul>
        </div>
      </section>
    </section>
    <section class="container accordion--title">
      <h2>Des solutions faites pour votre industrie</h2>
      <p>Moonshot-Internet offre un accompagnement sur-mesure avec une vraie compréhension des enjeux de votre secteur d'activité.</p>
      <Accordion :mapDataToProps="accordionData" />
    </section>
    <section class="container plateforme">
      <div class="plateforme--logo">
        <img src="/img-api@2x.png" alt="image api" />
      </div>
      <div class="plateforme--content">
        <h2>La platforme d'Insurance-As-A-Service de référence</h2>
        <p>Une plateforme digitale qui propose des solutions d’assurance intégrées et centrées sur le client.</p>
        <p>
          <span>L'Integration personnalisé par API</span> permet d'intégrer nativement nos APIrest au sein de vos services pour une expérience utilisateur plus fluide, transparente et personnalisée.
        </p>
        <p>
          <span>L'intégration en marque blanche</span> offre un parcours client avec le logo et les couleurs de votre marque, permettant de réduire le time-to-market et la complexité d'intégration.
        </p>
        <a>En savoir plus</a>
      </div>
    </section>
    <section class="container avis">
      <VueSlickCarousel :arrows="false" :dots="true" :infinite="false">
        <div v-for="(d, i) in sliderData" :key="i">
          <h2>{{d.title}}</h2>
          <p>{{d.avis}}</p>
          <!-- <img :src='{{d.l}}' alt="logo company"/> -->
        </div>
      </VueSlickCarousel>
    </section>
    <MshMedia />
  </main>
</template>

<script>
import Accordion from "../components/career/Accordion";
import MshMedia from "../components/MshMedia";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  components: {
    Accordion,
    MshMedia,
    VueSlickCarousel
  },
  data() {
    return {
      slideNumber: 2,
      sliderData: [
        {
          title: "Développez votre entreprise avec Moonshot-Internet !",
          avis:
            "«  La gestion des contrats d’assurances est un enjeu clé pour nous, ce partenariat avec Moonshot-Internet nous aider à répondre à une demande importante de la part de nos clients de simplification, de flexibilité, et surtout de prises en charge adaptées à leurs besoins. »",
          l: "/bitmap@2x.png"
        },
        {
          title: "test",
          avis: "Trop cool",
          l: ""
        }
      ],
      accordionData: {
        imgDesktop: "group-3065@2x.png",
        accordionItem: [
          {
            title: "Voyage",
            img: "group-3065@2x.png",
            content:
              "Retard de livraison de colis Livraison non conforme ou défectueuse Retour de produits"
          },
          {
            title: "E-commerce",
            img: "group-3065@2x.png",
            content:
              "Retard de livraison de colis Livraison non conforme ou défectueuse Retour de produits"
          },
          {
            title: "Paiement",
            img: "group-3065@2x.png",
            content:
              "Retard de livraison de colis Livraison non conforme ou défectueuse Retour de produits"
          },
          {
            title: "Mobile",
            img: "group-3065@2x.png",
            content:
              "Retard de livraison de colis Livraison non conforme ou défectueuse Retour de produits"
          },
          {
            title: "Entertainment",
            img: "group-3065@2x.png",
            content:
              "Retard de livraison de colis Livraison non conforme ou défectueuse Retour de produits"
          }
        ]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
main {
  .trust {
    h2 {
      color: #38393f;
      margin: 0;
      text-align: center;
      font-family: "gotham-rounded";
    }

    &--logo {
      img {
        height: auto;
        object-fit: contain;
      }
    }
  }

  .innovation {
    h2 {
      color: #0e2244;
      font-family: "gotham-bold";
      margin: 0;
    }

    section {
      div {
        h3 {
          color: #0e2244;
          font-family: "gotham-medium";
          margin: 0;
        }

        img {
          height: auto;
          object-fit: contain;
        }

        ul {
          list-style-type: none;

          li {
            color: #38393f;
            font-family: "gotham-rounded";
          }

          li::before {
            content: "\2022";
            color: #1717ff;
            font-weight: bold;
            display: inline-block;
            width: 1em;
            margin-left: -1em;
          }
        }
      }
    }
  }

  .accordion--title {
    h2,
    p {
      margin: 0;
    }

    h2 {
      color: #0e2244;
      font-family: "gotham-bold";
    }

    p {
      color: #38393f;
      font-family: "gotham-rounded";
    }
  }

  .plateforme {
    display: flex;

    &--logo {
      img {
        height: auto;
        object-fit: contain;
        width: 100%;
      }
    }

    &--content {
      h2,
      p {
        margin: 0;
      }

      h2 {
        color: #0e2244;
        font-family: "gotham-bold";
      }

      p {
        color: #38393f;
        font-family: "gotham-rounded";

        span {
          font-family: "gotham-medium";
        }
      }

      a {
        color: #1717ff;
        font-family: "gotham-medium";
      }
    }
  }

  .avis {
    .slick-slider {
      .slick-list {
        .slick-track {
          .slick-slide {
            div {
              div {
                h2 {
                  color: #0e2244;
                  font-family: "gotham-bold";
                  margin: 0;
                }

                p {
                  color: #282828;
                  font-family: "gotham-rounded";
                  margin: 0;
                }

                p::before,
                p::after {
                  color: #ebf1fc;
                  content: "''";
                  display: block;
                }

                img {
                  margin: 0 auto;
                }
              }
            }
          }
        }
      }
    }
  }
}

@media screen and (min-width: 300px) {
  main {
    .trust {
      margin-top: 16%;

      h2 {
        font-size: 15px;
        margin-bottom: 8%;
      }

      &--logo {
        width: 100vw;
        white-space: nowrap;
        position: relative;
        overflow-x: scroll;
        overflow-y: hidden;

        img {
          height: 32px;
          margin-right: 4%;
          width: 25%;
        }
      }
    }

    .innovation {
      margin-top: 16%;

      h2 {
        margin-bottom: 22%;
      }

      section {
        display: flex;
        flex-direction: column;

        div {
          margin-bottom: 16%;

          h3 {
            font-size: 23px;
            margin: 4% 0 8% 0;
          }

          img {
            width: 50%;
          }

          ul {
            padding-left: 4%;

            li {
              margin-bottom: 6%;
            }
          }
        }
      }
    }

    .accordion--title {
      h2 {
        font-size: 1.6em;
        margin-bottom: 6%;
      }

      p {
        font-size: 1em;
      }
    }

    .plateforme {
      flex-direction: column;
      margin-top: 16%;

      &--logo {
        display: flex;
        justify-content: center;

        img {
          width: 85%;
        }
      }

      &--content {
        h2 {
          font-size: 1.6em;
          margin: 8% 0;
        }

        p {
          font-size: 15px;
          line-height: 24px;
          margin-bottom: 8%;
        }

        a {
          font-size: 15px;
        }
      }
    }

    .avis {
      margin-top: 16%;

      .slick-slider {
        .slick-list {
          .slick-track {
            .slick-slide {
              div {
                div {
                  h2 {
                    font-size: 1.8em;
                    line-height: 40px;
                  }

                  p {
                    font-size: 15px;
                    line-height: 24px;
                    text-align: center;
                    margin-top: 12%;
                  }

                  p::before,
                  p::after {
                    font-size: 4em;
                  }

                  p::before {
                    text-align: left;
                    margin-bottom: 3%;
                  }

                  p::after {
                    text-align: right;
                    margin-top: 3%;
                  }

                  img {
                    width: 30%;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

@media screen and (min-width: 460px) {
  main {
    .trust {
      h2 {
        font-size: 18px;
      }

      &--logo {
        img {
          width: 20%;
        }
      }
    }

    .innovation {
      h2 {
        margin-bottom: 16%;
      }

      section {
        div {
          img {
            width: 40%;
          }

          h3 {
            margin-top: 6%;
          }

          ul {
            li {
              margin-bottom: 4%;
            }
          }
        }
      }
    }

    .accordion--title {
      h2 {
        font-size: 1.8em;
      }
    }

    .plateforme {
      &--logo {
        img {
          width: 75%;
        }
      }

      &--content {
        h2 {
          font-size: 1.7em;
          margin: 7% 0;
        }

        p {
          margin-bottom: 5%;
        }
      }
    }

    /* .avis {} */
  }
}

@media screen and (min-width: 550px) {
  main {
    .trust {
      margin-top: 12%;

      h2 {
        font-size: 20px;
      }

      &--logo {
        img {
          width: 20%;
        }
      }
    }

    .innovation {
      margin-top: 12%;

      h2 {
        font-size: 26px;
        margin-bottom: 12%;
      }

      section {
        div {
          margin-bottom: 8%;

          h3 {
            margin-top: 4%;
            margin-bottom: 6%;
          }

          ul {
            li {
              margin-bottom: 3%;
            }
          }
        }
      }
    }

    .accordion--title {
      h2 {
        margin-bottom: 5%;
      }
    }

    .plateforme {
      &--logo {
        img {
          width: 65%;
        }
      }

      &--content {
        h2 {
          font-size: 1.9em;
          margin: 6% 0;
        }

        p {
          font-size: 16px;
        }
      }
    }
  }
}

@media screen and (min-width: 768px) {
  main {
    .trust {
      margin-top: 8%;

      &--logo {
        img {
          width: 14%;
        }
      }
    }

    .innovation {
      margin-top: 8%;

      h2 {
        font-size: 1.3em;
        margin-bottom: 8%;
        text-align: center;
      }

      section {
        flex-direction: row;
        flex-wrap: wrap;

        div {
          flex: 0 0 50%;

          h3 {
            font-size: 1em;
            margin-bottom: 4%;
          }

          ul {
            li {
              font-size: 13px;
            }
          }
        }
      }
    }

    .accordion--title {
      h2 {
        font-size: 1.5em;
        margin-bottom: 2%;
      }

      p {
        font-size: 0.9em;
      }
    }

    .plateforme {
      flex-direction: row;
      margin-top: 8%;

      &--logo {
        flex: 0 0 50%;

        img {
          width: 100%;
        }
      }

      &--content {
        flex: 0 0 50%;
        margin-left: 4%;

        h2 {
          font-size: 1.5em;
          margin-top: 0;
        }

        p {
          margin-bottom: 6%;
        }
      }
    }
  }
}

@media screen and (min-width: 900px) {
  main {
    .trust {
      &--logo {
        display: flex;
        justify-content: space-between;
        overflow-x: auto;
        overflow-y: auto;
        position: sticky;
        white-space: initial;
        width: 100%;

        img {
          margin-right: 0;
        }
      }
    }

    .innovation {
      h2 {
        font-size: 1.5em;
        margin-bottom: 6%;
      }
    }
  }
}

@media screen and (min-width: 1200px) {
  main {
    .trust {
      h2 {
        font-size: 16px;
        margin-bottom: 4%;
      }

      &--logo {
        img {
          width: 12%;
        }
      }
    }

    .innovation {
      h2 {
        text-align: left;
        font-size: 2em;
      }

      section {
        div {
          img {
            width: 25%;
          }

          h3 {
            font-size: 1.3em;
          }

          ul {
            li {
              font-size: 1em;
              margin-bottom: 2%;
            }
          }
        }
      }
    }

    .accordion--title {
      h2 {
        font-size: 2em;
        margin-bottom: 1%;
      }

      p {
        font-size: 1em;
      }
    }

    .plateforme {
      margin-top: 4%;

      &--logo {
        img {
          width: 75%;
        }
      }

      &--content {
        h2 {
          font-size: 2em;
          margin-bottom: 4%;
        }

        p {
          margin-bottom: 4%;
        }
      }
    }

    .avis {
      margin-top: 6%;

      .slick-slider {
        .slick-list {
          .slick-track {
            .slick-slide {
              div {
                div {
                  h2 {
                    font-size: 2em;
                    text-align: center;
                  }

                  p {
                    align-items: center;
                    display: flex;
                    font-size: 16px;
                    margin-top: 3%;
                  }

                  p::before,
                  p::after {
                    font-size: 5em;
                    margin: 0;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>