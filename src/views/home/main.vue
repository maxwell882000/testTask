<template>
  <div>
    <search @search-contact="searchByName" @filter-changed="setFilterValue"
            @create-contact="$emit('change-page')"></search>

    <c-table class="mt-4">
      <c-table-head>
        <tr>
          <th scope="col" class="py-3 px-6" :key="'headers_for_table_' +index" v-for="(head, index) in headers">
            {{ head }}
          </th>
        </tr>
      </c-table-head>
      <tbody>
      <c-tr-body :key="'contact_all_' + item.id " v-for="item in items">
        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {{ item.lastName }} {{ item.firstName }} {{ item.fatherName }}
        </th>
        <td class="py-4 px-6">
          {{ item.phone }}
        </td>
        <td class="py-4 px-6">
          {{ item.email }}
        </td>
        <td class="py-4 px-6">
          {{ item.tags.filter(e => e.selected).map(e => e.name).join(", ") }}
        </td>
        <td class="py-4 px-6 flex space-x-4 items-center">
          <def-button @click="$emit('change-page', item)">
            Изменить
          </def-button>
          <red-button @click="$emit('delete-contact', item.id)">
            Удалить
          </red-button>
        </td>
      </c-tr-body>
      </tbody>
    </c-table>

  </div>
</template>

<script setup>


import {computed, ref} from "vue";
import CTable from "../../components/table/cTable.vue";
import CTableHead from "../../components/table/cTableHead.vue";
import headers from "./constants/headers.js";
import CTrBody from "../../components/table/cTrBody.vue";
import Search from "./components/search.vue";
import DefButton from "../../components/button/defButton.vue";
import RedButton from "../../components/button/redButton.vue";
import useFilter from "./setup/useFilter.js";

const props = defineProps({
  allItems: Array
})
const {filterAll, setFilterValue} = useFilter();
const items = computed(() => props.allItems.filter((e) => filterAll(e, searchName)));

const showItems = computed(() => items.value);
const searchName = ref("");

function searchByName(search) {
  searchName.value = search;
}

defineEmits(['change-page', 'delete-contact'])
</script>

<style scoped>

</style>