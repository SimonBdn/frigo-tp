<script setup>

import {onMounted, reactive, watch} from "vue";
import Aliment from "@/Aliment";
import * as Vue from 'vue';


const url="https://webmmi.iut-tlse3.fr/~pecatte/frigo/public/6/produits";
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




async function addOne(aliment){
  if(aliment.actual_qte < aliment.qte) {
    aliment.actual_qte++;
    await updateQuantity(aliment);
  }else {
    console.log(aliment)
    console.log("La quantité max est atteinte!");
  }
}

async function removeOne(aliment){
  if (aliment.actual_qte > 0) {
    aliment.actual_qte--;
    await updateQuantity(aliment);
  }else {
    console.log("Tu as tout mangé deja!");
    //mettre le if a 1 et else a 0 avec appel a la function removeAli
  }
}

async function updateQuantity(aliment) {
  const fetchOptions = {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({id: aliment.id, qte: aliment.actual_qte})
  };
  try {
    const response = await fetch(url, fetchOptions);
    const dataJSON = await response.json();
    console.log(dataJSON);
    affichAli();
  } catch (error) {
    console.error(error);
  }
}


function deleteAli(idAliment) {
  const fetchOptions = {
    method: "DELETE",
  };
  fetch(url+"/"+idAliment, fetchOptions)
    .then((response)=>{
      return response.json();
    })
    .then((dataJSON)=>{
      console.log(dataJSON);
      affichAli();
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
          {{ aliment.nom }} - qte: {{ aliment.actual_qte }}
        </v-card-title>
            <v-btn class="qte_btna" @click="removeOne(aliment)">
              - 1
            </v-btn>
            <v-btn class="qte_btnb" @click="addOne(aliment)">
              + 1
            </v-btn>
            <v-btn class="sup_btn" @click="deleteAli(idAliment)">
               X
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
.sup_btn{
  color: red;
  border-radius: 20%;

}
</style>
