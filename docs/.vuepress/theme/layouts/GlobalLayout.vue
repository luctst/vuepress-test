<template>
  <div id="moonshot-theme">
    <Header/>
    <FloatLine
      :title="floatLineTitle"
      :description="floatLineDescription"
      :image="floatLineImage"
    />
    <component :is="layout"/>
    <Footer/>
  </div>
</template>

<script>
import Header from "../components/Header";
import FloatLine from "../components/FloatLine";
import Footer from "../components/Footer";

export default {
  components: {
    Header,
    FloatLine,
    Footer
  },
  computed: {
    layout () {
      if (this.$page.path) {
        if (this.$frontmatter.layout) {
          // You can also check whether layout exists first as the default global layout does.
          return this.$frontmatter.layout
        }
        return 'Layout'
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
        this.floatLineTitle = "Moonshot-internet<br/> notre nouvelle<br/> punchline de fou";
        this.floatLineDescription = "La 1ère assurtech qui propose des produits d’assurance customisés et contextualisés de manière simple et accessible !";
        this.floatLineImage = "group-5@2x.png";
        break;
      default:
        break;
    }
    document.querySelector("body").style = "padding:0;margin:0;";
  }
}
</script>