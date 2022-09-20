<template>
  <div class="flex align-bottom items-end">
    <input-custom v-model="search" class="w-full" placeholder="Поиск" label="Поиск по имени"></input-custom>
    <div class="ml-4 space-x-2 flex">
      <def-button @click="$emit('searchContact', search)"> Найти</def-button>
      <filter-contact @filter-changed="(e) => $emit('filterChanged', e)"></filter-contact>
      <def-button @click="$emit('createContact')" class=" w-min p-0"> Создать</def-button>
    </div>
  </div>
</template>

<script setup>
import InputCustom from "../../../components/input/inputCustom.vue";
import DefButton from "../../../components/button/defButton.vue";
import {ref} from "vue";
import FilterContact from "./filterContact.vue";

defineEmits(['createContact', 'searchContact', 'filterChanged']);
const search = ref("");
</script>

<style scoped>

</style>