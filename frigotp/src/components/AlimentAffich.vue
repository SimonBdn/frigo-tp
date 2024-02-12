<script setup>

import {onMounted} from "vue";
import Aliment from "@/Aliment";

const url="https://webmmi.iut-tlse3.fr/~pecatte/frigo/public/7/produits";
const listeAli = reactive([]);

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

</script>

<template>

</template>

<style scoped>

</style>
