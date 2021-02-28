<template>
  <nav>
    <v-app-bar app color="transparent" flat dense fixed>
      <v-toolbar-items>
        <v-btn icon>
          <v-icon>mdi-instagram</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-facebook</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-pinterest</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold display-3 basil--text">Decus-Design</h1>
    </v-card-title>

    <v-app-bar color="white" flat hide-on-scroll>
      <v-toolbar flat app>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn
            flat
            color="white"
            elevation="0"
            v-for="item in menuItems"
            :key="item.title"
            :to="item.path"
          >
            {{ item.title }}
          </v-btn>

          <v-menu
            open-on-hover
            offset-y
            v-for="link in links"
            :key="link.text"
            :to="link.path"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="white"
                flat
                elevation="0"
                v-bind="attrs"
                v-on="on"
                :to="link.path"
              >
                {{ link.text }}
                <v-icon right>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, index) in items"
                :key="index"
                :to="item.path"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-btn flat color="white" elevation="0" to="/craft"> Craft </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
      </v-toolbar>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      appTitle: "Awesome App",
      sidebar: false,
      menuItems: [{ title: "Home", path: "/", icon: "home" }],
      links: [
        {
          text: "Taschen",
          menutabs: ["Click Me", "Click Me2"],
          path: "/taschen",
        },
      ],
      items: [
        { title: "Papiergarn", path: "/papiergarn" },
        { title: "Textilgarn", path: "/textilgarn" },
      ],
    };
  },
};
</script>