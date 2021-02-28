<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->

    <section id="third-section">
      <v-container class="mt-10">
        <v-row no-gutters>
          <v-col cols="12" sm="6" align="center">
            <v-card
              class="d-flex justify-start"
              height="570"
              max-width="400"
              elevation="0"
              @click="$router.push(`/Halsketten/`)"
            >
              <v-img
                src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                max-height="700"
                max-width="400"
              ></v-img>
              <v-card-text>
                <p class="display-1 text--primary"></p>

                <div class="text--primary">
                  <p></p>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" align="center">
            <v-card
              class="d-flex justify-start"
              height="570"
              max-width="400"
              elevation="0"
              @click="$router.push(`/Armbänder/`)"
            >
              <v-img
                src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                max-height="700"
                max-width="400"
              ></v-img>
              <v-card-text>
                <p class="display-1 text--primary"></p>

                <div class="text--primary">
                  <p></p>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </Layout>
</template>



<script>
export default {
  metaInfo: {},
};
</script>

