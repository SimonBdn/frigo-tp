<script setup>
import AlimentList from "@/components/AlimentList.vue";
import AddAlimentFrigo from "@/components/AddAlimentFrigo.vue";
import FormText from "@/components/FormText.vue";
</script>

<template>

  <v-container> ALIMENTS </v-container>
  <AddAlimentFrigo />
  <FormText />


</template>

<style scoped>

template{
  background-image: url("../assets/marche.jpg");
  background-size: cover;
  background-position: center; /* Center the background image */
  padding: 20px; /* Add padding for better readability */
}

</style>
