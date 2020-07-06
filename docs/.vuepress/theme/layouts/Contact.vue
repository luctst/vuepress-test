<template>
  <main>
    <section class="container form">
      <div class="form--content">
        <h2>
          Moonshot-Internet
          Tour Montparnasse
          Morning Coworking
        </h2>
        <p>33 Avenue Du Maine - 75015 Paris</p>
        <p>
          33 avenue du Maine - 75015 Paris
          Pour toute demande, y compris des demandes de partenariat ou d’autres opportunités, veuillez nous laisser un message et vos coordonnées via le formulaire
        </p>
      </div>
      <form>
          <h2>Contactez-nous !</h2>
          <div class="form--div">
              <input type="text" placeholder="Nom*" required/>
          </div>
          <div class="form--div">
              <input type="email" placeholder="Email*" required/>
          </div>
          <div class="form--div">
              <input type="tel" placeholder="phone" required/>
          </div>
          <div class="form--div">
              <input type="mail" placeholder="Email*" required/>
          </div>
          <div class="form--div">
            <select>
              <option selected>Je souhaite</option>
              <option>Demande média</option>
              <option>Demande support technique</option>
              <option>Demande commerciale</option>
              <option>Demande générale</option>
            </select>
          </div>
          <div class="form--div">
            <textarea></textarea>
          </div>
          <div class="form--div">
            <button>Envoyer</button>
          </div>
      </form>
    </section>
    <section class="mentions container">
      <p>« Les informations recueillies sur ce formulaire sont enregistrées dans un fichier informatisé par Moonshot-Internet dont le siège social est Tour D2 – 17 bis place des Reflets- 92919 Paris La Défense Cedex pour répondre à votre demande. Les données collectées ne seront pas communiquées à d’autres destinataires et sont conservées le temps de traitement de votre demande. Vous pouvez accéder aux données vous concernant, les rectifier, demander leur effacement ou exercer votre droit à la limitation du traitement de vos données. Consultez le site cnil.fr pour plus d’informations sur vos droits. Pour exercer ces droits ou pour toute question sur le traitement de vos données dans ce dispositif, vous pouvez contacter notre délégué à la protection des données : dpo.assurances@socgen.com Si vous estimez, après nous avoir contactés, que vos droits « Informatique et Libertés » ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL. »</p>
    </section>
  </main>
</template>

<style lang="scss" scoped>
main {
  .form {
    display: flex;

    &--content {
      h2 {
        color: #0e2244;
        font-family: "gotham-bold";
        font-weight: bold;
        margin: 0;
      }

      p {
        color: #282828;
        font-family: "gotham-rounded";
        margin: 0;
      }
    }

    form {
      h2 {
        color: #0e2244;
        font-family: "gotham-bold";
        margin: 0;
      }

      .form--div {
        input {
          border: solid 1px #d3d5df;
          border-radius: 6px;
          color: #d3d5df;
          padding: 12px 0 12px 12px;
        }

        select {
          -webkit-appearance: none;
          border: none;
          border-radius: 6px;
          border: solid 1px #d3d5df;
          color: #0e2244;
          font-size: .8em;
          font-weight: 500;
          padding: 10px 0px 10px 5px;

          option {
            font-family: "gotham-rounded";
          }
        }

        textarea {
          border: solid 1px #d3d5df;
          border-radius: 6px;
          box-sizing: border-box;
          color: #d3d5df;
          font-family: "gotham-medium";
          padding: 12px 0 12px 12px;
        }

        button {
          border: 0;
          border-radius: 50px;
          color: #fff;
          font-family: "gotham-medium";
          box-shadow: 0 4px 10px 0 rgba(135, 167, 171, 0.5);
          background-image: linear-gradient(to bottom, #4040ff, #1717ff);
          padding: 10px 47px;
        }
      }
    }
  }

  .mentions {
    p {
      color: #d3d5df;
      font-family: "gotham-rounded";
      line-height: 1.5;
    }
  }
}

@media screen and (min-width: 300px) {
  main {
    .form {
      flex-direction: column;
      margin-top: 16%;

      &--content {
        margin-top: 16%;
        order: 2;

        h2 {
          margin-bottom: 8%;
        }

        p:first-of-type {
          margin-bottom: 8%;
        }
      }

      form {
        order: 1;

        h2 {
          font-size: 1.7em;
          text-align: center;
          margin-bottom: 8%;
        }

        .form--div {
          margin-bottom: 8%;

          input,
          select,
          textarea {
            box-sizing: border-box;
            font-size: .9em;
            width: 100%;
          }
        }

        .form--div:last-child {
          display: flex;
          justify-content: center;
        }
      }
    }

    .mentions {
      margin-top: 16%;

      p {
        font-size: 10px;
      }
    }
  }
}

@media screen and (min-width: 460px) {
  main {
    .form {
      margin-top: 12%;

      &--content {
        margin-top: 12%;

        h2 {
          font-size: 1.8em;
        }

        p:first-of-type {
          margin-bottom: 4%;
        }
      }

      form {
        h2 {
          font-size: 1.8em;
        }

        .form--div {
          margin-bottom: 4%;
        }
      }
    }

    .mentions {
      margin-top: 12%;
    }
  }
}

@media screen and (min-width: 550px) {
  main {
    .form {
      form {
        &--content {
          font-size: 2em;
        }

        h2 {
          font-size: 2em;
        }
      }
    }
  }
}

@media screen and (min-width: 768px) {
  main {
    .form {
      align-items: flex-start;
      flex-direction: row;
      margin-top: 8%;

      &--content {
        flex: 0 0 50%;
        margin-top: 0;
        order: 1;

        h2 {
          font-size: 1.5em;
        }

        p {
          font-size: .9em;
          padding-right: 8%;
        }
      }

      form {
        flex: 0 0 50%;

        h2 {
          font-size: 1.5em;
          text-align: left;
        }
      }
    }

    .mentions {
      margin-top: 8%;
    }
  }
}

@media screen and (min-width: 990px) {
  main {
    .form {
      &--content {
        h2 {
          font-size: 2em;
        }

        p:first-of-type {
          margin-bottom: 4%;
        }

        p {
          padding-right: 24%;
        }
      }

      form {
        h2 {
          font-size: 2em;
        }

        .form--div {
          margin-bottom: 4%;
        }
      }
    }

    .mentions {
      margin-top: 4%;
    }
  }
}

@media screen and (min-width: 1200px) {
  main {
    .form {
    }
    .mentions {
      p {
        font-size: 13px;
      }
    }
  }
}
</style>