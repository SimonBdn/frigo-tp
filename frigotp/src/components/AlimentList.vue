<script setup>

import {ref, watch} from "vue";

const nomA=ref('');
const emit=defineEmits(['updateR']);

function searchA(nomA){
  emit('updateR',nomA)
}


watch(nomA, (newValue) => {
  console.log(newValue)
  searchA(newValue)
});

</script>

<template>

  <div id="rech">
    <form @submit.prevent="$emit('updateR', nomA)">
      <label>Rechercher un aliment :</label>
      <br><br>
      <input class="sea_bar" type="text" v-model="nomA" placeholder="Tu veux manger quoi ?" required/>
      <br><br>
      <input class="sea_btn" type="submit" value=" Rechercher " />
      <br><br>
    </form>
  </div>


</template>

<style scoped>
.sea_bar{
  border: 1px solid saddlebrown;
}

.sea_btn{
  background-color: #caf5df;
  border: 1px solid saddlebrown;
}
</style>
