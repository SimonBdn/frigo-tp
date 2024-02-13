<template>
  <v-app>
    <!-- une barre de navigation -->
    <v-app-bar
      color="primary"
      density="compact"
    >
      <!-- mettre l'icone dans le 'slot prepend' de 'v-app-bar' soit au début à gauche -->
      <template v-slot:prepend>
        <!-- un clic sur l'icone cache/affiche la zone de menu de gauche -->
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
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
          <v-list-item to="/PageFilms"> <!-- navigation vers la page "films" -->
            <v-list-item-title >Aliment</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- un vers la page "about" -->

      <!-- mettre l'icone dans le 'slot append' de 'v-app-bar' soit au fond à droite -->
      <template v-slot:append>
      </template>
    </v-app-bar>
    <!-- zone de menu de gauche caché / visible en fonction du booléen 'drawer'-->

    <!-- la zone où sera affichée les différentes "pages"-->
    <v-main>
      <v-container class="page">
        <!-- les "composant view" s'afficheront ici -->
        <RouterView />
      </v-container>
    </v-main>
    <!-- le footer -->
    <v-footer color="primary">
      <div>
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </div>
    </v-footer>
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
