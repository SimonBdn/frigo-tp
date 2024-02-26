<script setup>

const emit=defineEmits(['addA']);



let nom = "";
let qte = "";
let photo = "";

</script>

<template>
  <form @submit.prevent="$emit('addA',nom,qte,photo)" class="form-container">
    <div class="input-container">
      <input class="add_bar" type="text" v-model="nom" placeholder="Le nom du p'tit Aliment ?" required/>
    </div>
    <div class="input-container">
      <input class="add_barq" type="number" v-model="qte" placeholder="T'en veux combien ?" required/>
    </div>


  </form>
  <div class="input-container">
    <br>
    <input class="add_barp" type="text" v-model="photo" placeholder="Une image ?" />
  </div>
  <br> <br>
  <input class="add_btn" type="submit" value=" Ajouter "/>
</template>

<style scoped>
.form-container {
  display: flex;
  flex-wrap: wrap;
}

.input-container {
  flex: 1;
  margin-right: 10px;
}

.add_bar, .add_barq, .add_barp {
  border: 1px solid saddlebrown;
  flex: 1;
}

.add_barp {
  width: 68%;
}

.add_btn {
  background-color: #caf5df;
  border: 1px solid saddlebrown;
}
</style>
