<template>
  <div id="moonshot-theme" class="container">
    <Header/>
    <!-- <component :is="layout"/> -->
  </div>
</template>

<script>
import Header from "../components/Header";

export default {
  components: {
    Header
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
  mounted() {
    document.querySelector("body").style = "padding:0;margin:0;";
  }
}
</script>