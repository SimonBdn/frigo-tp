<script setup>
let libelle="";
</script>

<template>
  <form @submit.prevent="$emit('addA', libelle)">
    <input class="add_bar" type="text" v-model="libelle" placeholder="Un p'tit Aliment ?" />
    <br> <br>
    <input class="add_btn" type="submit" value=" Ajouter "/>
  </form>
</template>

<style scoped>
.add_bar{
  border: 1px solid saddlebrown;
}

.add_btn{
  background-color: #caf5df;
  border: 1px solid saddlebrown;
}
</style>
