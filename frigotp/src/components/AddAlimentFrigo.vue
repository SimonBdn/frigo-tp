<script setup>
import AlimentAffich from "@/components/AlimentAffich.vue";
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
  <ToDoForm @addA="addAli"></ToDoForm>

</template>

<style scoped>

</style>
