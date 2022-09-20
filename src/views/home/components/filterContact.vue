<template>
  <div>
    <!--  <modal button-name="aaa"></modal>-->
    <!--    &lt;!&ndash;    asfasfasfasf&ndash;&gt;-->
    <modal title="Фильтрация"
           button-name="Фильтрация"
           data-model="filtration">
      <input-radio v-model='filterValue' name="filter" label="Имя" id="firstName"
                   :value="filters.FIRST_NAME"></input-radio>
      <input-radio v-model='filterValue' name="filter" label="Фамилия" id="lastName"
                   :value="filters.LAST_NAME"></input-radio>
      <input-radio v-model='filterValue' name="filter" label="Отчество" id="fatherName"
                   :value="filters.FATHER_NAME"></input-radio>
      <input-radio v-model='filterValue' name="filter" label="Почтовый адрес" id="email"
                   :value="filters.EMAIL"></input-radio>
      <input-radio v-model='filterValue' name="filter" label="Номер телефона" id="phone"
                   :value="filters.PHONE"></input-radio>
      <input-radio v-model='filterValue' name="filter" label="Тег"
                   id="tags" :value="filters.TAGS"></input-radio>
      <input-radio v-model='filterValue' name="filter" label="Очистить"
                   id="none" :value="filters.NONE"></input-radio>
    </modal>
  </div>

</template>

<script setup>
import Modal from "../../../components/modal/modal.vue";
import InputRadio from "../../../components/input/inputRadio.vue";
import filters from "../constants/filters.js";
import {ref, watch} from "vue";

const filterValue = ref(filters.NONE);
const emit = defineEmits(['filterChanged']);


watch(filterValue, function () {

  emit('filterChanged', filterValue.value);
});
</script>

<style scoped>

</style>

