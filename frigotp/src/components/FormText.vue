<script setup>


const emit=defineEmits(['addAli']);

let nom = "";
let qte = "";
let photo = "";

const handleSubmit = () => {
  emit('addAli',nom, qte, photo);
};


</script>

<template>

  <div class="container">
  <form @submit.prevent="$emit('addAli',nom,qte,photo)" class="form-container">
    <div class="input-container">
      <input class="add_bar" type="text" v-model="nom" placeholder=" Le nom du p'tit Aliment ?" required/>
    </div>
    <div class="input-container">
      <input class="add_barq" type="number" v-model="qte" placeholder=" T'en veux combien ?" required min="1"/>
    </div>



  <div class="input-container">
    <br>
    <input class="add_barp" type="text" v-model="photo" placeholder=" Une image ?"/>
  </div>
  <br> <br>
  <input class="add_btn" type="submit" value=" Ajouter "/>
  </form>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.form-container {
  display: flex;
  flex-wrap: wrap;
}

.input-container {
  flex: 1;
  margin-right: 40px;
  margin-left: 40px;
}

.add_bar, .add_barq, .add_barp {
  background-color: mintcream;
  border: 1px solid saddlebrown;
  flex: 1;
}


.add_btn {
  background-color: #caf5df;
  border: 1px solid saddlebrown;
}
</style>
