<template>
  <section class="float--nav container">
    <section class="desktop">
      <div v-for="(l, i) in navData.items" :key="i" :style="navData.itemActive === l ? 'background-color:#eefdff;border-color:#eefdff;' : ''" @click="$emit('updateProduct', l)">
        <p>
          <a :style="navData.itemActive === l ? 'color:#09c0d3;' : ''">{{l}}</a>
        </p>
      </div>
    </section>
    <section class="mobile">
      <select @change="$emit('updateProduct', $event.target.value)">
        <option v-for="(e, i) in navData.items" :key="i">{{e}}</option>
      </select>
    </section>
  </section>
</template>

<script>
export default {
  props: {
    navData: Object
  }
};
</script>

<style lang="scss" scoped>
.float--nav {
  .desktop {
    div {
      border: 1px solid #c3cee2;
      border-radius: 20px;

      p {
        color: #c3cee2;
        font-family: "gotham-rounded";
        margin: 0;
        text-align: center;
      }

      :hover {
        cursor: pointer;
      }
    }
  }

  .mobile {
      select {
        -webkit-appearance: none;
        border: none;
        border-top: solid 1px #d3d5df;
        border-bottom: solid 1px #d3d5df;
        color: #09c0d3;
        font-size: .8em;
        font-weight: 500;
        padding: 16px 0px 16px 5px;
        width: 100%;
      }
  }
}

@media screen and (min-width: 300px) {
    .float--nav {
        margin-top: 16%;

        .desktop {
            display: none;
        }

        .mobile {
            display: block;
        }
    }
}

@media screen and (min-width: 460px) {
  .float--nav {
    margin-top: 12%;
  }
}

@media screen and (min-width: 550px) {
  .float--nav {
  }
}

@media screen and (min-width: 768px) {
  .float--nav {
    .desktop {
      display: flex;

      div {
        margin-right: 1%;
        padding: 5px 7px;

        p {
          font-size: .9em;
        }
      }
    }

    .mobile {
      display: none;
    }
  }
}

@media screen and (min-width: 990px) {
  .float--nav {
    margin-top: 8%;

    .desktop {
      div {
        padding: 8px 12px;
      }
    }
  }
}

@media screen and (min-width: 1200px) {
  .float--nav {
    .desktop {
      div {
        margin-right: 3%;
      }
    }
  }
}
</style>