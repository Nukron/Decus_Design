<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->

    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold display-1 basil--text">CRAFT</h1>
    </v-card-title>

    <section class="parasection">
      <v-container class="paracontainer" fluid max-width="90%">
        <v-row no-gutters>
          <v-col
            class="text-center"
            align="center"
            justify="center"
            id="tss"
            cols="12"
            sm="6"
          >
            <h1 class="display-1 mb-4 text-center">Lorem Ipsum</h1>

            <h4 class="font-weight-thin mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h4>
          </v-col>
          <v-col cols="12" sm="6">
            <v-parallax :src="require('./assets/material.png')" height="550">
              <v-row align="center" justify="center">
                <v-col class="text-center" cols="12"> </v-col>
              </v-row>
            </v-parallax>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="parasection">
      <v-container class="paracontainer" fluid max-width="90%">
        <v-row no-gutters>
          <v-col cols="12" sm="6">
            <v-parallax :src="require('./assets/zeichnung.png')" height="550">
              <v-row align="center" justify="center">
                <v-col class="text-center" cols="12"> </v-col>
              </v-row>
            </v-parallax>
          </v-col>
          <v-col
            class="text-center"
            align="center"
            justify="center"
            id="tss"
            cols="12"
            sm="6"
          >
            <h1 class="display-1 mb-4 text-center">Lorem Ipsum</h1>

            <h4 class="font-weight-thin mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h4>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="parasection">
      <v-container class="paracontainer" fluid max-width="90%">
        <v-row no-gutters>
          <v-col
            class="text-center"
            align="center"
            justify="center"
            id="tss"
            cols="12"
            sm="6"
          >
            <h1 class="display-1 mb-4 text-center">Lorem Ipsum</h1>

            <h4 class="font-weight-thin mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h4>
          </v-col>
          <v-col cols="12" sm="6">
            <v-parallax :src="require('./assets/boxen.png')" height="550">
              <v-row align="center" justify="center">
                <v-col class="text-center" cols="12"> </v-col>
              </v-row>
            </v-parallax>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </Layout>
</template>




<script>
export default {
  data: () => ({
    cards: [
      {
        title: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 2,
      },
      {
        title: "Best airlines",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 2,
      },
    ],
    newProducts: [],
  }),

  mounted() {
    this.newProducts = this.$page.product.edges.filter((edge) => {
      return edge.node.category === 14;
    });
  },

  metaInfo: {
    title: "Hello, world!",
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

#tss {
  background-color: #f7f2f1;
  text-align: center;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
}

#ts {
  background-color: #f7f2f1;
  background-image: url(./assets/belt_image.png);
  background-size: cover;
  text-align: center;
}

.parasection {
  margin: 0px;
}
.paracontainer {
  padding: 0px;
}
</style>
