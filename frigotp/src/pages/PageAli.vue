<script setup>

import AddAlimentFrigo from "@/components/AddAlimentFrigo.vue";

</script>

<template>
  <v-container class="aDD">
  <v-container class="title"> P'tite courses ? </v-container>
  <br><br><br><br><br><br>

  <AddAlimentFrigo />

  </v-container>

</template>

<style scoped>
.title{
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  color: #f50505;
  font-weight: bold;
}

.aDD{
  background-image: url("../assets/marche.jpg");
  background-size: cover;
  background-position: center;
  padding: 40px;
  min-height: 600px;
}

</style>
