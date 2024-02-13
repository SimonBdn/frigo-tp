<script setup>

import {onMounted, reactive} from "vue";
import Aliment from "@/Aliment";

const url="https://webmmi.iut-tlse3.fr/~pecatte/frigo/public/7/produits";
const listeAli = reactive([]);

//let props = defineProps(["pcritere"])

function searchAli() {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      listeAli.splice(0,listeAli.length)
      for(let aliment of dataJSON){
        listeAli.push(new Aliment(aliment.id, aliment.nom, aliment.qte, aliment.photo))
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
onMounted( () => {
  searchAli();
})

</script>

<template>
  <v-row dense>
    <v-col
      v-for="aliment in listeAli"
      :key="aliment.id"
      cols="12"
      sm="6"
      md="3"
      lg="2"
      xl="2">
      <v-card color="primary">
        <v-img
          :src="aliment.photo"

        ></v-img>
        <v-card-title>
          {{ aliment.nom }} - quantité : {{ aliment.qte }}
        </v-card-title>
      </v-card>
    </v-col>
  </v-row>

</template>

<style scoped>
.image{
  width: 400px;
  height: 300px;
}
</style>
