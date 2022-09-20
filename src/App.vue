<template>
  <section class="p-16">
    <Main @change-page="goToChange"
          @delete-contact="deleteFromAllItems"
          :allItems="allItems"
          v-if="page === Pages.MAIN"></Main>
    <change :edit-contact="selectedItems" :length="allItems.length ? allItems.at(-1).id : 0 " @change-item="changeItems"
            @back="toMain"
            v-else></change>
  </section>
</template>
<script setup>
import {ref} from "vue";
import Change from "./views/change/change.vue";
import Main from "./views/home/main.vue";
import Pages from "./pages/pages.js";
import usePage from "./pages/setup/usePage.js";
import LocalService from "./service/localService.js";

const {page, toChange, toMain} = usePage();

const selectedItems = ref(null);

function deleteFromAllItems(id) {
  if (id) {
    let selectedIndex = -1;
    allItems.value.forEach((e, i) => {
      if (e.id === id)
        selectedIndex = i;
    });
    allItems.value.splice(selectedIndex, 1);
    LocalService.store(allItems);
  }
}

function goToChange(selected) {
  selectedItems.value = selected;
  toChange();
}

function changeItems(id, item, created) {
  if (created)
    allItems.value.push(item);
  LocalService.store(allItems);
  toMain();
}

const allItems = ref(
    LocalService.getStore()
//     {
//   // id : {
//   //    email,
//   //    name,
//   //    id,
//   //    address,
//   //    tags
//   // }
// }
);
</script>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
