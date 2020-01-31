<template>
  <div id="moonshot-theme">
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
        this.floatLineTitle = "Moonshot-internet notre nouvelle<br/> punchline de fou";
        this.floatLineDescription = "La 1ère assurtech qui propose des produits d’assurance customisés et contextualisés de manière simple et accessible !";
        this.floatLineImage = "group-5@2x.png";
        break;
      case "/career.html":
        this.floatLineTitle = "Trouvez votre emploi <br/>chez Moonshot";
        this.floatLineDescription = "Rejoignez une équipe jeune, dynamique et débordante d’imagination pour révolutionner le secteur de l’assurance.";
        this.floatLineImage = "career/group-5@2x.png";
        break;
      default:
        break;
    }
    document.querySelector("body").style = "padding:0;margin:0;overflow-x:hidden;";
  }
}
</script>