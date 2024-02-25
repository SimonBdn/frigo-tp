<script setup>
import FormText from "@/components/FormText.vue";
import AlimentAffich from "@/components/AlimentAffich.vue";

const url="https://webmmi.iut-tlse3.fr/~pecatte/frigo/public/6/produits"

function addAli(n,q,p) {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const fetchOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({nom: n, qte: q, photo: p}),
  };
  fetch(url, fetchOptions)
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



</template>

<style scoped>

</style>
