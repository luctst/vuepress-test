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
    <section class="container innovation"></section>
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
  }
}
</style>