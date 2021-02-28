<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->

    <section>
      <v-container>
        <v-card-title class="text-center justify-center py-6">
          <h1 class="font-weight-bold display-1 basil--text">
            P A P I E R G A R N <br />T A S C H E N
          </h1>
        </v-card-title>
        <v-row class="justify-space-around">
          <v-card
            v-for="edge in products"
            :key="edge.node.id"
            width="300"
            class="mt-12"
            @click="$router.push(`/products/${edge.node.id}`)"
          >
            <v-img
              :src="`http://localhost:1337${edge.node.image}`"
              height="400px"
            ></v-img>

            <v-card-title class="justify-center">
              {{ edge.node.title }}
            </v-card-title>
          </v-card>
        </v-row>
      </v-container>
    </section>
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
    products: [],
  }),

  mounted() {
    this.products = this.$page.product.edges.filter((edge) => {
      return edge.node.category === 12;
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
</style>
