<template>
  <main>
    <Accordion 
        :mapDataToProps="accordionData"
        v-on:switchItem="switchItem"
    />
  </main>
</template>

<script>
import Accordion from "../components/career/Accordion";

export default {
  components: {
    Accordion
  },
  data () {
      return {
          accordionData: {
              imgDesktop: "group-3065@2x.png",
              accordionItemActive: null,
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
  },
  methods: {
        switchItem (index) {
            console.clear();
            console.log(index);
            if (this.accordionData.accordionItemActive === index) this.accordionData.accordionItemActive = null;
            else this.accordionData.accordionItemActive = index;
        }
    }
};
</script>