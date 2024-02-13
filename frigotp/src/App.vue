<template>
  <v-app>

    <v-app-bar
      color="brown"
      density="compact"
    >

      <template v-slot:prepend>

      </template>
      <!-- le titre de la barre de navigation -->
      <v-app-bar-title>RÉFRIGÉRATEUR</v-app-bar-title>
      <!-- un simple bouton qui retourne à la page d'accueil route="/"-->
      <v-btn to="/">O'Frais</v-btn>
      <!-- un bouton avec un menu -->
      <v-btn id="menu-recherche">Rechercher ...</v-btn>
      <!-- le menu s'affichera qd l'élément
      d'id 'menu-recherche' ici 'v-btn' sera activé-->
      <v-menu activator="#menu-recherche">
        <v-list>
          <v-list-item to="/PageAli"> <!-- navigation vers la page "films" -->
            <v-list-item-title >Aliment</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- un vers la page "about" -->

      <!-- mettre l'icone dans le 'slot append' de 'v-app-bar' soit au fond à droite -->
      <template v-slot:append>
      </template>
    </v-app-bar>

    <v-main>
      <v-container class="page">
        <!-- les "composant view" s'afficheront ici -->
        <RouterView />
      </v-container>
    </v-main>

  </v-app>
</template>

<script setup>
import { ref } from 'vue'
const drawer = ref(false) // booléen pour afficher/cacher la zone de gauche

</script>
<style scoped>
.page{
  min-height: 100vh;
  text-align: center;
}
</style>
