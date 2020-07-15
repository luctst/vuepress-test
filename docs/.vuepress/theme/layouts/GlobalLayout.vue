<template>
  <div id="moonshot-theme" v-if="$page.path !== ''">
    <Header/>
    <FloatLine
      :title="floatLineTitle"
      :description="floatLineDescription"
      :image="floatLineImage"
    />
    <component :is="layout"/>
    <Newsletter />
    <Footer/>
  </div>
</template>

<script>
import Header from "../components/Header";
import FloatLine from "../components/FloatLine";
import Newsletter from "../components/Newletter";
import Footer from "../components/Footer";

export default {
  components: {
    Header,
    FloatLine,
    Newsletter,
    Footer
  },
  computed: {
    layout () {
      if (this.$page.path) {
        if (this.$frontmatter.layout) {
          // You can also check whether layout exists first as the default global layout does.
          return this.$frontmatter.layout
        }
      }
      
      return 'NotFound'
    }
  },
  data () {
    return {
      floatLineTitle: "",
      floatLineDescription: "",
      floatLineImage: ""
    }
  },
  mounted () {
    switch (this.$page.path) {
      case "/":
        this.floatLineTitle = "Moonshot-internet notre nouvelle punchline de fou";
        this.floatLineDescription = "La 1ère assurtech qui propose des produits d’assurance customisés et contextualisés de manière simple et accessible !";
        this.floatLineImage = "group@2x.png";
        break;
      case "/career.html":
        this.floatLineTitle = "Trouvez votre emploi <br/>chez Moonshot";
        this.floatLineDescription = "Rejoignez une équipe jeune, dynamique et débordante d’imagination pour révolutionner le secteur de l’assurance.";
        this.floatLineImage = "career/pg-produit-travel-mob@2x.png";
        break;
      case "/presse.html":
        this.floatLineTitle = "Espace Presse";
        this.floatLineDescription = "Moonshot-Internet est plein de défis passionnants Vous trouverez ici tout ce que vous devez savoir sur nos dernières annonces et notre presence dans la presse, ainsi que notre dossier de presse.";
        this.floatLineImage = "presse/group-39@2x.png";
        break;
      case "/products.html":
        this.floatLineTitle = "Une gamme complète d’assurance totalement digitale couvrant les nouveaux usages.";
        this.floatLineDescription = "Aliquam pulvinar mi neque, id condimentum ex viverra sed. Phasellus tempor lectus quam, quis blandit lorem";
        this.floatLineImage = "product/illus_header@2x.png";
        break;
      case "/contact.html":
        this.floatLineTitle = "Laissez-nous un message !";
        this.floatLineDescription = "Nos équipes commerciales et support sont à votre disposition pour répondre à vos questions. N’hésitez pas à nous contacter et nous reviendrons vers vous dès que possible.";
        this.floatLineImage = "contact/illus-contact@2x.png";
      case "/about.html":
        this.floatLineTitle = "Qui sommes-nous ?";
        this.floatLineDescription = "";
        this.floatLineImage = "about/group@2x.png";
        break;
      default:
        break;
    }
    document.querySelector("body").style = "padding:0;margin:0;";
    document.querySelector("#moonshot-theme").style = "overflow-x:hidden;"
  }
}
</script>