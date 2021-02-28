<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->

    <section id="first-section">
      <v-parallax height="750" :src="require('./assets/parallax_index.png')">
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <h1 class="display-1 font-weight-thin mb-4">Decus-Design</h1>
            <h4 class="subheading">Get your product today!</h4>
          </v-col>
        </v-row>
      </v-parallax>
    </section>

    <section id="second-section">
      <v-card-title class="text-center justify-center py-6">
        <h1 class="font-weight-bold display-1 basil--text">
          New in stock
          <br />
          -
        </h1>
      </v-card-title>

      <v-sheet class="mx-auto" elevation="0" max-width="90%">
        <v-slide-group v-model="model" class="pa-4" show-arrows>
          <v-slide-item v-for="edge in newProducts" :key="edge.node.id">
            <v-card
              class="ma-6"
              width="300"
              @click="$router.push(`/products/${edge.node.id}`)"
            >
              <v-img
                class="white--text align-end"
                height="300px"
                :src="`http://localhost:1337${edge.node.image}`"
              >
              </v-img>

              <v-card-title class="justify-center">
                {{ edge.node.title }}
              </v-card-title>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </section>

    <section id="third-section">
      <v-container fluid max-width="90%">
        <v-row no-gutters>
          <v-col
            class="text-center"
            align="center"
            justify="center"
            id="tss"
            cols="12"
            sm="6"
            height="100%"
          >
            <h1 class="display-1 mb-4 text-center">Craft</h1>

            <h4 class="font-weight-thin mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h4>
          </v-col>
          <v-col cols="12" sm="6">
            <v-parallax
              @click="$router.push(`/taschen`)"
              height="500"
              :src="require('./assets/papiergarn.png')"
            >
              <v-row align="center" justify="center">
                <v-col class="text-center" cols="12">
                  <h1 class="display-1 f mb-4">Taschen</h1>
                </v-col>
              </v-row>
            </v-parallax>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- <section id="fourth-section">
    <v-container fluid  max-width="90%">
    <v-row no-gutters>
      <v-col id="ts"
        cols="12"
        sm="6"
        height="100%"
      >
   
  

  
 
      </v-col>
         <v-col
        cols="12"
        sm="6"
      ><v-parallax

      height="500"
       src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
         <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
           <h1 class="display-1 font-weight-thin mb-4">
          Craft
           </h1>
             </v-col>
              </v-row>
        </v-parallax>
      </v-col>
    </v-row>
  </v-container>  


      </section> -->
  </Layout>
</template>


<page-query>
query{
  product: allProduct{
    edges{
      node{
        id
        title
        description
        image
        category
      }
    }
    
  }
}
</page-query>

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

section {
  margin-top: 35px;
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

#fourth-section {
  margin-top: 0;
}
</style>
