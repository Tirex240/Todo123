<template><div>
  <v-app id="inspire">
    <v-navigation-drawer 
      v-model="drawer"
      app
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Funkcje
          </v-list-item-title>
          <v-list-item-subtitle>
            Wybierz:
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>super aplikacja</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view>
      </router-view>
    </v-main>
    
  </v-app></div>
  
</template>

<script>
  export default {
    data: () => ({ drawer: null,
    items: [
          { title: 'Todo', icon: 'mdi-checkbox-marked-circle-plus-outline', to: '/'},
          { title: 'Praca', icon: 'mdi-account-box', to: '/Praca'},
          { title: 'Nauka', icon: 'mdi-account-school', to: '/Nauka'},
          { title: 'Odpoczywanie', icon: 'mdi-bed-outline', to: '/Odpoczywanie'},
          { title: 'o nas', icon: 'mdi-information-variant', to: '/about'}
        ]})
  }
</script>