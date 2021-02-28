<template>
  <v-app class="grey lighten-4">
    <header class="header">
      <Navbar />
    </header>
    <slot />
  </v-app>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

