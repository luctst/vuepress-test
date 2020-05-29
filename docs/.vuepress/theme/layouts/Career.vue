<template>
  <main>
    <section class="container offres">
        <h2>Toutes nos offres d'emplois</h2>
        <div id="welcomekit-embed"></div>
    </section>
    <Accordion :mapDataToProps="accordionData" />
  </main>
</template>

<script>
import Accordion from "../components/career/Accordion";

export default {
  components: {
      Accordion,
  },
  data() {
    return {
      accordionData: {
        accordionTitle:
          "Une équipe de 45 experts du digital et de l’assurance.",
        imgDesktop: "group-3065@2x.png",
        accordionItem: [
          {
            title: "Commercial",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel orci iaculis justo blandit vulputate quis eu odi surum dela tcha.",
            img: "group-3065@2x.png"
          },
          {
            title: "Marketing",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel orci iaculis justo blandit vulputate quis eu odi surum dela tcha.",
            img: "group-3065@2x.png"
          },
          {
            title: "IT",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel orci iaculis justo blandit vulputate quis eu odi surum dela tcha.",
            img: "group-3065@2x.png"
          },
          {
            title: "Juridique",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel orci iaculis justo blandit vulputate quis eu odi surum dela tcha.",
            img: "group-3065@2x.png"
          },
          {
            title: "Actuariat",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel orci iaculis justo blandit vulputate quis eu odi surum dela tcha.",
            img: "group-3065@2x.png"
          }
        ]
      }
    };
  }
};
</script>

<style lang="scss">
main {
    .offres {
        h2 {
            color: #0e2244;
            font-weight: bold;
            text-align: center;
        }

        #welcomekit-embed {
            ul {
                list-style-type: none;
                padding-left: 0;

                .welcomekit-jobs-list-item {
                    border: 1px solid #d3d5df;
                    border-left-color: #1717ff;
                    border-left-width: 7px;
                    border-radius: 8px;
                    padding: 0 24px;

                    a {
                        background-color: transparent;
                        border-bottom-color: transparent;

                        h3 {
                            color: #0e2244;
                        }

                        ul {
                            li {
                                color: #d3d5df;
                            }
                        }
                    }
                }
            }
        }
    }
}

@media screen and (min-width: 1200px) {
    main {
        .offres {
            margin-top: 8%;

            h2 {
                font-size: 2em;
                margin-bottom: 8%;
            } 
        }
    }
}
</style>