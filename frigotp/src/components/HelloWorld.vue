<template>
  <v-container class="title">
    LE FRIGO
  </v-container> <br>

  <AlimentAffich></AlimentAffich>
</template>

<script setup>


import AlimentAffich from "@/components/AlimentAffich.vue";
</script>

<style scoped>
  .title{
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    color: #f50505;
    font-weight: bold;
  }
</style>
