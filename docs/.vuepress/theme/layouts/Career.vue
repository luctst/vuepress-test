<template>
  <main>
    <Accordion 
        :mapDataToProps="accordionData"
    />
    <Jobs />
  </main>
</template>

<script>
import Accordion from "../components/career/Accordion";
import Jobs from "../components/presse/Jobs";

export default {
  components: {
    Accordion,
    Jobs
  },
  data () {
      return {
          accordionData: {
              accordionTitle: "Une équipe de 45 experts du digital et de l’assurance.",
              imgDesktop: "group-3065@2x.png",
              accordionItem: [
                  {
                        title: "Commercial",
                        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel orci iaculis justo blandit vulputate quis eu odi surum dela tcha.",
                        img: "group-3065@2x.png"
                    },
                    {
                        title: "Marketing",
                        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel orci iaculis justo blandit vulputate quis eu odi surum dela tcha.",
                        img: "group-3065@2x.png"               
                    },
                    {
                        title: "IT",
                        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel orci iaculis justo blandit vulputate quis eu odi surum dela tcha.",
                        img: "group-3065@2x.png"
                    },
                    {
                        title: "Juridique",
                        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel orci iaculis justo blandit vulputate quis eu odi surum dela tcha.",
                        img: "group-3065@2x.png"
                    },
                    {
                        title: "Actuariat",
                        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel orci iaculis justo blandit vulputate quis eu odi surum dela tcha.",
                        img: "group-3065@2x.png"
                    }
              ]
          }
      }
  }
};
</script>