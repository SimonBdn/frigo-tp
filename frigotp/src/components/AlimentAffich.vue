<script setup>

import {onMounted, reactive, watch} from "vue";
import Aliment from "@/Aliment";


const url="https://webmmi.iut-tlse3.fr/~pecatte/frigo/public/7/produits";
const listeAli = reactive([]);

let props = defineProps(["pcrit"])

function affichAli() {
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
  affichAli();
})


function searchAli() {
  const fetchOptions = { method: "GET" };
  fetch(url + "?search="+"props", fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      listeAli.splice(0,listeAli.length)
      for(let aliment of dataJSON){
        listeAli.push(new Aliment(aliment))
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
onMounted(() => {
  searchAli();
});

watch(props, (newcritere) => {
  console.log(newcritere)
  searchAli()
});


function addAli(l) {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const fetchOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({libelle: l}),
  };
  fetch(url, fetchOptions)
    .then((response)=>{
      return response.json();
    })
    .then((dataJSON)=>{
      console.log(dataJSON);
      affichAli()
    })
    .catch((error)=> console.log(error));
}

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
          {{ aliment.nom }} - qte: {{ aliment.qte }}
        </v-card-title>
            <v-btn class="qte_btna">
              - 1
            </v-btn>
            <v-btn class="qte_btnb">
              + 1
            </v-btn>
      </v-card>
    </v-col>
  </v-row>


</template>

<style scoped>
.image{
  width: 400px;
  height: 300px;
}

.qte_btna{
  color: saddlebrown;
  border-radius: 50%;
  float: left;
}
.qte_btnb{
  color: saddlebrown;
  border-radius: 50%;
  float: right;
}
</style>
