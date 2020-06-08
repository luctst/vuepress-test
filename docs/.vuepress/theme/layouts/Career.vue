<template>
  <main>
    <section class="container offres">
      <h2>Toutes nos offres d'emplois</h2>
      <div id="welcomekit-embed"></div>
    </section>
    <section class="spontane container">
      <div class="spontane--title">
        <h3>Vous n’avez pas trouvé la proposition de vos rêves ?</h3>
        <p>Ce n’est pas grave, Moonshot-Internet est toujours à la recherche de nouveaux talents !</p>
        <p>N’hésitez pas à nous contacter ou à nous envoyer votre candidature spontanée.</p>
      </div>
      <a>Candidature spontanée</a>
    </section>
    <Accordion :mapDataToProps="accordionData" />
  </main>
</template>

<script>
import Accordion from "../components/career/Accordion";

export default {
  components: {
    Accordion
  },
  data() {
    return {
      accordionData: {
        accordionTitle: "Découvrez Moonshot-Internet.",
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
      font-family: "gotham-bold";
      font-weight: bold;
      margin: 0;
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

  .spontane {
    display: flex;

    &--title {
      h3 {
        font-family: "gotham-medium";
        font-weight: 500;
      }

      p {
        font-family: "gotham-rounded";
      }

      h3,
      p {
        color: #38393f;
        margin: 0;
      }
    }

    a {
      border-radius: 50px;
      box-shadow: 0 4px 10px 0 rgba(135, 167, 171, 0.5);
      background-image: linear-gradient(to bottom, #1cd9ec, #09c0d3);
      color: #fff;
      display: inline-block;
      font-family: "gotham-medium";
      width: max-content;
    }
  }
}

@media screen and (min-width: 300px) {
  main {
    .offres {
      margin-top: 20%;

      h2 {
        font-size: 1.7em;
        margin-bottom: 8%;
      }

      #welcomekit-embed {
        ul {
          .welcomekit-jobs-list-item {
            margin-bottom: 8%;
          }
        }
      }
    }

    .spontane {
      flex-direction: column;
      margin-top: 20%;
      margin-bottom: 20%;

      &--title {
        h3 {
          font-size: 1.7em;
        }

        p {
          line-height: 22px;
        }

        p:first-of-type {
          margin-top: 12%;
        }

        p:last-child {
          margin-bottom: 12%;
        }
      }

      a {
        padding: 12px 22px;
      }
    }
  }
}

@media screen and (min-width: 460px) {
  main {
    .spontane {
      margin-top: 16%;
      margin-bottom: 16%;

      &--title {
        p:first-of-type {
          margin-top: 8%;
        }

        p:last-child {
          margin-bottom: 8%;
        }
      }
    }
  }
}

@media screen and (min-width: 550px) {
  main {
    .spontane {
      margin-top: 8%;
      margin-bottom: 8%;

      &--title {
        p:first-of-type {
          margin-top: 6%;
        }

        p:last-child {
          margin-bottom: 6%;
        }
      }
    }
  }
}

@media screen and (min-width: 768px) {
  main {
    .spontane {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      &--title {
        h3 {
          margin-bottom: 8%;
        }

        p:first-of-type,
        p:last-of-type {
          margin: 0;
        }
      }

      a {
        height: max-content;
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
        }

        #welcomekit-embed {
        ul {
          .welcomekit-jobs-list-item {
            margin-bottom: 3%;
          }
        }
      }
    }

    .spontane {
      &--title {
        h3 {
          margin-bottom: 2%;
        }

        p {
          font-size: 13px;
        }
      }
    }
  }
}
</style>