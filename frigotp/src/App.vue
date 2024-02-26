<template>
  <v-app>

    <v-app-bar
      color="brown"
      density="compact"
    >

      <template v-slot:prepend>

      </template>

      <v-app-bar-title>RÉFRIGÉRATEUR</v-app-bar-title>

      <v-btn to="/">O'Frais</v-btn>

      <v-btn id="menu-recherche" to="/PageAli">Ajouter ...</v-btn>

      <template v-slot:append>
      </template>
    </v-app-bar>

    <v-main>
      <v-container class="page">

        <RouterView />
      </v-container>
    </v-main>

  </v-app>
</template>

<script setup>
import { ref } from 'vue'
const drawer = ref(false)

</script>
<style scoped>
.page{
  min-height: 100vh;
  text-align: center;
}


</style>
