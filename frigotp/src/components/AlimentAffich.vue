<script setup>

import {onMounted, watch} from "vue";
import Aliment from "@/Aliment";

const url="https://webmmi.iut-tlse3.fr/~pecatte/frigo/public/7/produits";
const listeAli = reactive([]);

let props = defineProps(["pcritere"])

function searchAli() {
  const fetchOptions = { method: "GET" };
  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      let aliments = dataJSON.results
      listeAli.splice(0,listeAli.length)// vider la liste
      for(let aliment of aliments){
        listeAli.push(new Aliment(aliment.id, aliment.nom, aliment.qte, aliment.photo))
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

onMounted(() => {
  searchAli();
})
watch(props, (newcritere) => {
  console.log(newcritere)
  searchAli()
});

</script>

<template>
  <v-row dense>
    <v-col
      v-for="aliment in listeAli"
      :key="aliment.nom"
      cols="12"
      sm="6"
      md="3"
      lg="2"
      xl="2">
      <v-card color="primary">
        <v-img
          :src="aliment.photo"
          height="200px"
          cover
        ></v-img>
        <v-card-title>
          {{ aliment.nom }}
        </v-card-title>
      </v-card>
    </v-col>
  </v-row>


</template>

<style scoped>

</style>
