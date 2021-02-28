<template>

    <Layout>
        
        <h1></h1>

          <section id="third-section">
    <v-container class="mt-10">
    <v-row no-gutters>
      <v-col
        cols="12"
        sm="7"
        height="100%"
        align ="center"
      >
      <v-img 
      
        :src="`http://localhost:1337${$page.product.image}`"
        max-height="500"
        max-width="400"
        ></v-img>
  
 
      </v-col>
         <v-col
        cols="12"
        sm="5"
      >
    <v-card
    class="d-flex justify-start"
    max-width="500"
    elevation ="0"
  >
    <v-card-text >
      <p class="display-1 text--primary">
        {{$page.product.title}}
      </p>
      
      <div class="text--primary">
          <p>
       {{$page.product.description}}
       </p>
      </div>
        <v-btn
                   
                    class="ml-2 mt-5"
                    outlined
                    rounded
                    small
                  >
                    ORDER
                  </v-btn>
    </v-card-text>
   
          
  
  </v-card>
      </v-col>
    </v-row>
  </v-container>  


      </section>
    </Layout>
</template>

<page-query>
query($id: ID!){
  product(id: $id){
    id
    description
    image
    title
    path
  }
}
</page-query>

<script>
export default {
    metaInfo() {
      return {
          title: this.$page.product.title
        }
    }
}
</script>