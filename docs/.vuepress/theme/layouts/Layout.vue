<template>
  <main>
    <AssuranceContextuelle />
    <Accordion :mapDataToProps="accordionData" />
    <Temoignages />
    <MshMedia />
  </main>
</template>

<script>
import AssuranceContextuelle from "../components/AssuranceContextuelle";
import Accordion from "../components/career/Accordion";
import Temoignages from "../components/Temoignages";
import MshMedia from "../components/MshMedia";

export default {
  components: {
    AssuranceContextuelle,
    Accordion,
    Temoignages,
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