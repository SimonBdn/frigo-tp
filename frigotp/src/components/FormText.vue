<script setup>

let nom = "";
let qte = "";
let photo = "";

</script>

<template>
  <form @submit.prevent="$emit('addA',nom,qte,photo)">
    <input class="add_bar" type="text" v-model="nom" placeholder="Un p'tit Aliment ?" />
    <br> <br>
    <input class="add_btn" type="submit" value=" Ajouter "/>
  </form>

  <!--<label for="nom" class="form-label">Nom:</label>
  <input type="text" v-model="nom" class="form-control" id="nom" required>
  </div>
  <div class="mb-3">
    <label for="qte" class="form-label">Quantité:</label>
    <input type="number" v-model="qte" class="form-control" id="qte" required>
  </div>
  <div class="mb-3">
    <label for="photo" class="form-label">Image URL:</label>
    <input type="text" v-model="photo" class="form-control" id="photo">
  </div>
  <div class="d-flex justify-content-center mb-3">
    <button type="submit" class="btn btn-success">Valider</button>
  -->
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
