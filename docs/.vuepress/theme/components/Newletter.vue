<template>
  <section class="container newsletter">
    <div class="newsletter--background">
      <div class="newsletter--content">
        <h2>Souscrivez à la moonletter</h2>
        <p>Receive our newsletter every 2 months to make sure you don't miss anything</p>
      </div>
      <input type="text" placeholder="Votre adresse mail" />
      <button>S'abonner</button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  .newsletter--background {
    align-items: center;
    background-image: url("../../public/group-6@2x.png");
    background-position: center;
    background-repeat: no-repeat;
    display: flex;

    .newsletter--content {
      h2,
      p {
        color: #fff;
      }

      h2 {
        margin: 0;
        font-family: "gotham-medium";
        font-weight: 600;
      }

      p {
        font-family: "gotham-rounded";
        margin: 0;
        line-height: 1.5;
      }
    }

    input {
      background-color: #ffffff;
      border: none;
      border-radius: 24px;
      box-shadow: 0 4px 10px 0 rgba(40, 40, 40, 0.16);
      color: #d3d5df;
      padding: 8px 21px;
    }

    button {
      border: none;
      border-radius: 24px;
      box-shadow: 0 4px 10px 0 rgba(40, 40, 40, 0.16);
      background-image: linear-gradient(to bottom, #1cd9ec, #09c0d3);
      color: #fff;
      font-family: "gotham-medium";
      padding: 8px 16px;
    }
  }
}

@media screen and (min-width: 300px) {
  section {
    margin-top: 8%;
    margin-bottom: 14%;

    .newsletter--background {
      background-size: auto;
      background-position: center;
      border-radius: 24px;
      flex-direction: column;
      justify-content: center;
      height: 40vh;

      .newsletter--content {
        text-align: center;

        h2 {
          font-size: 22px;
        }

        p {
          font-size: 13px;
        }
      }

      input {
        margin: 15% 0 5% 0;
      }
    }
  }
}

@media screen and (min-width: 400px) {
  section {
    .newsletter--background {
      .newsletter--content {
        h2 {
          font-size: 25px;
        }

        p {
          font-size: 15px;
        }
      }
    }
  }
}

@media screen and (min-width: 771px) {
  section {
    .newsletter--background {
      height: 20vh;
      flex-direction: row;
      justify-content: left;
      padding: 0 5%;

      .newsletter--content {
        text-align: left;
      }

      input {
        margin: 0;
        margin-left: auto;
        margin-right: 2%;
      }
    }
  }
}

@media screen and (min-width: 1100px) {
  section {
    margin-bottom: 10%;
  }
}
</style>