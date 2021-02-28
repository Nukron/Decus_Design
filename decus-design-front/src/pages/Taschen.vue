<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->

    <section id="third-section">
      <v-container class="">
        <v-card-title class="text-center justify-center py-6">
          <h1 class="font-weight-bold display-1 basil--text">T A S C H E N</h1>
        </v-card-title>
        <v-row no-gutters>
          <v-col cols="12" sm="6" align="center">
            <v-hover v-slot="{ hover }">
              <v-card
                :elevation="hover ? 12 : 0"
                :class="{ 'on-hover': hover }"
                class="d-flex justify-start"
                height="570"
                max-width="400"
                @click="$router.push(`/papiergarn/`)"
              >
                <v-img
                  :src="require('./assets/papiergarn.png')"
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
            </v-hover>
          </v-col>
          <v-col cols="12" sm="6" align="center">
            <v-hover v-slot="{ hover }">
              <v-card
                class="d-flex justify-start"
                height="570"
                max-width="400"
                :elevation="hover ? 12 : 0"
                :class="{ 'on-hover': hover }"
                @click="$router.push(`/textilgarn/`)"
              >
                <v-img
                  :src="require('./assets/textilgarn.png')"
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
            </v-hover>
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

