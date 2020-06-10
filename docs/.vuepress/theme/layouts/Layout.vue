<template>
  <main>
    <section class="container trust">
      <h2>CES GRANDES ENTREPRISES NOUS FONT CONFIANCE </h2>
      <div class="trust--logo">
        <img src="/societegenerale@2x.png" alt="Logo societe generale"/>
        <img src="/bitmap@2x.png" alt="logo Rakuten"/>
        <img src="/tridea@2x.png" alt="logo tridea"/>
        <img src="/fran-fianance@2x.png" alt="logo misterfly"/>
        <img src="/leboncoin@2x.png" alt="logo leboncoin"/>
        <img src="/mister-f-ly@2x.png" alt="logo finance"/>
      </div>
    </section>
    <section class="container innovation">
      <h2>Des innovations fortes à chaque étapes de la chaine de valeur</h2>
      <section>
        <div>
          <img src="/couverture@2x.png" alt="Produit innovant"/>
          <h3>Couverture produit innovante</h3>
          <ul>
            <li>Conditions simples et transparentes.</li>
            <li>Couverture  innovante liée aux nouveaux usages.</li>
            <li>Règles de gestion personnalisables.</li>
          </ul>
        </div>
        <div>
          <img src="/souscription@2x.png" alt="souscription"/>
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
          <img src="/implementation@2x.png" alt="implementation"/>
          <h3>Facilité d’implémentation</h3>
          <ul>
            <li>Intégration Plug&Play à chaque étape de la vie du contrat via une architecture APIrest.</li>
            <li>Time-to-market rapide grâce à nos parcours client en marque-blanches.</li>
          </ul>
        </div>
        <div>
          <img src="/gestioninnovante@2x.png" alt="gestion innovante"/>
          <h3>Gestion innovantes des indemnisations </h3>
          <ul>
            <li>Indemnisation immédiate et sans justificatifs requis.</li>
            <li>Détection du sinistre automatisée, en temps réel.</li>
            <li>Détection du sinistre via computer vision, en temps réel.</li>
          </ul>
        </div>
      </section>
    </section>
    <Accordion :mapDataToProps="accordionData" />
    <MshMedia />
  </main>
</template>

<script>
import Accordion from "../components/career/Accordion";
import MshMedia from "../components/MshMedia";

export default {
  components: {
    Accordion,
    MshMedia
  },
  data() {
    return {
      accordionData: {
        accordionTitle: "Nous vous protégeons vous et vos clients",
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
  }
}
</style>