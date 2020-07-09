<template>
  <main class="container">
    <section class="title">
      <h2>Informations médias</h2>
      <p>
        Pour toutes demandes de presse, de prise de paroles ou d’interviews, merci de contacter
        <span>press@moonshot-internet.com</span>
      </p>
    </section>
    <section class="articles">
      <h2>Nos articles publiés dans la presse</h2>
      <FloatNav
        :navData="{items: [...category], itemActive: categoryActive}"
        @updateProduct="changeProduct"
      />
      <div class="articles--container">
          <div v-for="(p, i) in articles[categoryActive]" :key="i" class="articles--container--item">
              <div class="articles--container--item--cover">
                  <img :src="p.cover" alt="cover article"/>
              </div>
              <h3>{{p.title}}</h3>
              <p>{{p.description}}</p>
              <a :href="p.link">En savoir plus</a>
          </div>
      </div>
    </section>
    <section class="kit--media">
        <div>
            <img src="presse/ico-usb@2x.png" alt="Usb key"/>
            <h2>Kit média</h2>
            <p>Téléchargez les éléments Moonshot-Internet pour vos besoins média. En cas de besoin de ressources complémentaires, n’hésitez pas à nous contacter !</p>
        </div>
        <button>Télécharger</button>
    </section>
  </main>
</template>

<script>
import FloatNav from "../components/FloatNav";
import PresseData from "../presse.json";

export default {
  components: {
    FloatNav
  },
  data() {
    return {
      articles: {
        Presse: [...PresseData],
        Blog: [],
        All: []
      },
      categoryActive: "All",
      category: ["All", "Presse", "Blog"],
    };
  },
  methods: {
    changeProduct(p) {
      if (this.categoryActive === p) return false;
      this.categoryActive = p;
    }
  },
  mounted () {
      this.articles.All = [
        ...this.articles.Presse,
        ...this.articles.Blog
      ]
  }
};
</script>

<style lang="scss" scoped>
main {
  .title {
    align-items: center;
    display: flex;
    flex-direction: column;

    h2,
    p {
      text-align: center;
    }

    h2 {
      color: #0e2244;
      font-family: "gotham-bold";
      margin: 0;
    }

    p {
      font-family: "gotham-rounded";
      margin: 0;
    }

    span {
      color: #1717ff;
      font-family: "gotham-bold";
    }
  }

  .articles {
    h2 {
      color: #0e2244;
      font-family: "gotham-bold";
      margin: 0;
      text-align: center;
    }

    &--container {
        display: flex;

        &--item {
            &--cover {
                img {
                    border-radius: 8px;
                    height: auto;
                    width: 100%;
                }
            }

            h3 {
                color: #0e2244;
                font-family: "gotham-medium";
                margin: 0;
            }

            p {
                color: #0e2244;
                font-family: "gotham-rounded";
                margin: 0;
            }

            a {
                color: #1717ff;
                display: inherit;
                font-family: "gotham-medium";
                text-align: right;
                text-decoration: none;
            }
        }
    }
  }
}

@media screen and (min-width: 300px) {
  main {
    .title {
      h2 {
        font-size: 1.5em;
        margin-bottom: 4%;
      }

      p {
        font-size: 0.9em;
      }
    }

    .articles {
        margin-top: 16%;

        h2 {
            font-size: 1.5em;
        }

        &--container {
            flex-direction: column;
            margin-top: 16%;

            &--item {
                margin-bottom: 16%;

                h3,
                p {
                    margin: 4% 0;
                }

                h3 {
                    font-size: 1em;
                }

                p,
                a {
                    font-size: 14px;
                }
            }
        }
    }
  }
}

@media screen and (min-width: 460px) {
  main {
    .title {
      h2 {
        font-size: 1.8em;
      }
    }

    .articles {
        h2 {
            font-size: 1.8em;
        }
    }
  }
}

@media screen and (min-width: 550px) {
  main {
    .title {
      h2 {
        margin-bottom: 3%;
      }

      p {
        font-size: 1em;
      }
    }
  }
}

@media screen and (min-width: 768px) {
  main {
    .title {
      h2 {
        font-size: 2em;
        margin-bottom: 2%;
      }

      p {
        padding: 0 11%;
      }
    }

    .articles {
        h2 {
            font-size: 2em;
        }

        .float--nav {
            display: flex;
            justify-content: center;
        }

        &--container {
            flex-direction: row;
            flex-wrap: wrap;
            margin-top: 8%;
            justify-content: space-between;

            &--item {
                flex: 0 0 45%;
                margin-bottom: 8%;

                h3 {
                    font-size: .9em;
                }
            }
        }
    }
  }
}

@media screen and (min-width: 990px) {
  main {
    .title {
      p {
        padding: 0 16%;
      }
    }
  }
}

@media screen and (min-width: 1200px) {
    main {
        .articles {
            margin-top: 12%;

            &--container {
                &--item {
                    flex: 0 0 29%;
                }
            }
        }
    }
}
</style>