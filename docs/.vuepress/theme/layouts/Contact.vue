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
    &--content {
      display: none;
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
    .mentions {
      p {
        font-size: 10px;
      }
    }
  }
}

@media screen and (min-width: 1200px) {
  main {
    .form {
        &--content {
            display: block;
        }
    }
    .mentions {
      p {
        font-size: 13px;
      }
    }
  }
}
</style>