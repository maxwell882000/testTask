<template>
  <div class=" flex w-full justify-center p-32">
    <div class="w-full">
      <div>
        <h1 class="text-2xl inline"> {{ isCreated ? 'Изменить' : 'Создать' }} Контакты</h1>
      </div>
      <div class="w-full">
        <form @submit.prevent @submit="save">
          <input-custom v-model="selectedItem.lastName" placeholder="Фамилия"></input-custom>
          <input-custom v-model="selectedItem.firstName" placeholder="Имя"></input-custom>
          <input-custom v-model="selectedItem.fatherName" placeholder="Отчество"></input-custom>
          <input-custom v-model="selectedItem.phone" placeholder="Номер телефона"></input-custom>
          <input-custom v-model="selectedItem.email" placeholder="Почтовый адрес"></input-custom>
          <div class="mt-4 flex flex-wrap space-x-2">
            <input-checkbox v-for="tag in selectedItem.tags" :label="tag.name"
                            v-model:checked="tag.selected"></input-checkbox>
          </div>
          <div class="flex space-x-2">
            <def-button type="button" @click="()=>$emit('back')">Назад</def-button>
            <def-button type="submit"> {{ isCreated ? 'Изменить' : 'Сохранить' }}</def-button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import InputCustom from "../../components/input/inputCustom.vue";
import InputCheckbox from "../../components/input/inputCheckbox.vue";
import DefButton from "../../components/button/defButton.vue";
import tags from "./constants/tags.js";
import {computed, reactive} from "vue";

const emit = defineEmits(['back', 'changeItem']);
const props = defineProps({
  editContact: Object,
  length: Number,
});


const selectedItem = reactive(props.editContact ?? {
  id: props.length + 1,
  tags: structuredClone(tags),
})
const isCreated = computed(() => !props.editContact);

function save() {
  emit('changeItem', selectedItem.id, selectedItem, isCreated.value);
}
</script>

<style scoped>

</style>